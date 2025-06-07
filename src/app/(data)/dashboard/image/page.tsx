"use client";
import {
  addOCRData,
  extractData,
  ExtractDataJsonType,
  extractEWayBill,
  extractFromImages,
  getFilePart,
  ocrCount,
} from "@/action/ocr";
import { ocr } from "@/generated/prisma";
import { prisma } from "@/lib/db";
import React, { useState } from "react";
import { toast } from "sonner"; // For notifications
import EditButton from "../_components/editButton";
// Import styles for the toast notifications

const Page = () => {
  const [netWeight, setNetWeight] = useState<ExtractDataJsonType | null>(null);
  const [grossWeight, setGrossWeight] = useState<ExtractDataJsonType | null>(
    null
  );
  const [tarWeight, setTarWeight] = useState<ExtractDataJsonType | null>(null);
  const [data, setData] = useState<ocr | null>(null); // Store extracted data
  const [loading, setLoading] = useState(false); // Loading state for the process
  const [ewayBill, setEwayBill] = useState<Number | null>(null);
  const [invoiceString, setInvoiceString] = useState<string | null>(null);
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (!e.target.files || !e.target.files[0]) {
      toast("file not found!!");
      return;
    }

    if (type === "net") {
      let dataPart = await getFilePart(e.target.files[0]);
      let getData = await extractData(dataPart);
      setNetWeight(getData);
      return;
    } else if (type === "gross") {
      let dataPart = await getFilePart(e.target.files[0]);
      let getData = await extractData(dataPart);
      setGrossWeight(getData);
      return;
    } else if (type === "tare") {
      let dataPart = await getFilePart(e.target.files[0]);
      let getData = await extractData(dataPart);
      setTarWeight(getData);
      return;
    } else if (type === "e-way_bill") {
      let dataPart = await getFilePart(e.target.files[0]);
      const data = await extractEWayBill(dataPart);
      setEwayBill(data);
      return;
    }
  };

  const handleExtractData = async () => {
    console.log(netWeight, grossWeight, tarWeight);

    if (!netWeight || !grossWeight || !tarWeight) {
      toast.error("Please upload all three images!");
      return;
    }

    setLoading(true);
    try {
      /**
       *
       * tare weight is empty track
       * a weight = net_weight - tare weight
       * b weight =
       */
      const tare = tarWeight.weight;
      const a_weight = Math.abs(netWeight.weight - tarWeight.weight);
      const b_weight = Math.abs(netWeight.weight - grossWeight.weight);
      const gross = grossWeight.weight;
      const net_weight = a_weight + b_weight;

      // Prepare all required fields for ocr type
      const ocrCountValue = (await ocrCount()) + 1;
      const challanNumber = String(ocrCountValue).padStart(3, "0");
      const ocrPayload = {
        A_weight: a_weight,
        B_weight: b_weight,
        gross_weight: gross,
        tare_weight: tare,
        net_weight: net_weight,
        challan: `${invoiceString}${challanNumber}`, // Prefix with 000
        address: grossWeight.address,
        map_url: grossWeight.map_url,
        latitude: grossWeight.latitude,
        longitude: grossWeight.longitude,
        delivery_date: new Date(),
        delivery_status: "",
        vehicle_number: grossWeight.vehicle_number,
        created_at: new Date(),
        date: new Date(),
        e_way_bill: ewayBill?.toString() ?? "",
      };

      const result = await addOCRData(ocrPayload as any);
      if (result instanceof Error || !result) {
        console.log(result);

        toast.error("Failed to save data!");
      } else {
        setData(result);
        toast.success("Data extracted successfully!");
      }
    } catch (error) {
      console.log(error);

      toast.error("Error extracting data: " + error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrintData = () => {
    if (data) {
      window.open(`/data/${data.id}`, "popupWindow");
    } else {
      toast.error("No data to print!");
    }
  };
  const handlePrintChallan = () => {
    if (data) {
      window.open(`/challan/${data.id}`, "popupWindow");
    } else {
      toast.error("No data to print!");
    }
  };
  const year = new Date().getFullYear();
  return (
    <div className="flex">
      {/* Left Column - File Upload */}
      <div className="flex p-6">
        <div className="flex-1 mr-6">
          <h2 className="text-2xl mb-4">Upload Images</h2>

          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend">Invoice starting</legend>
            <select
              className="select"
              onChange={(e) => {
                console.log("sss->", e.target.value.split("$").at(-1));

                setInvoiceString(e.target.value.split("$").at(-1) || "");
              }}
            >
              <option value="">Select Invoice</option>
              <option
                value={`SKILL FLARE TECHNOLOGIES$CT/${year
                  .toString()
                  .slice(-2)}-${(year + 1).toString().slice(-2)}/`}
              >
                SKILL FLARE TECHNOLOGIES
              </option>
              <option
                value={`SHUBHSHREE$BTE/SUB-${year.toString().slice(-2)}${(
                  year + 1
                )
                  .toString()
                  .slice(-2)}-`}
              >
                SHUBHSHREE
              </option>
              <option value={`BTE$NTPC/KHAR/`}>BTE</option>
              <option
                value={`RELIABLE BIO PRODUCT$DF/${year.toString().slice(-2)}-${(
                  year + 1
                )
                  .toString()
                  .slice(-2)}/`}
              >
                RELIABLE BIO PRODUCT
              </option>
              <option
                value={`RBIOME$BI/${year.toString().slice(-2)}-${(year + 1)
                  .toString()
                  .slice(-2)}/`}
              >
                RBIOME
              </option>
              <option value={`BIOME SOLAPUR PLANT$BI/NTPC/SOL/`}>
                BIOME SOLAPUR PLANT
              </option>
            </select>
          </fieldset>
          {/* Buffer Image File Input */}
          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend">Eway bill</legend>
            <input
              type="file"
              className="file-input"
              onChange={(e) => handleFileChange(e, "e-way_bill")}
              accept=".pdf"
            />
            <label className="label">Max size 2MB</label>
          </fieldset>
          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend">Tare Image</legend>
            <input
              type="file"
              className="file-input"
              onChange={(e) => handleFileChange(e, "tare")}
              accept="image/*"
            />
            <label className="label">Max size 2MB</label>
          </fieldset>
          <div className="flex w-full items-center gap-2">
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend">
                Net Weight for A Image
              </legend>
              <input
                type="file"
                className="file-input"
                onChange={(e) => handleFileChange(e, "net")}
                accept="image/*"
              />
              <label className="label">Max size 2MB</label>
            </fieldset>
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend">
                Net Weight for B Image
              </legend>
              <input
                type="file"
                className="file-input"
                onChange={(e) => handleFileChange(e, "gross")}
                accept="image/*"
              />
              <label className="label">Max size 2MB</label>
            </fieldset>
          </div>
          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend"> Gross wight</legend>
            <input
              type="text"
              disabled
              className="input"
              value={grossWeight?.weight || ""}
            />
            <label className="label">
              auto fill after click extract data button
            </label>
          </fieldset>

          <br />
          <div className="flex flex-col gap-4">
            <button
              onClick={handleExtractData}
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Processing..." : "Extract Data"}
            </button>
            {data && <EditButton {...data} />}
          </div>
        </div>
      </div>
      <div className="flex p-6">
        {/* Right Column - Display Extracted Data */}
        <div className="flex-1">
          <h2 className="text-2xl mb-4">Extracted Data</h2>
          {data ? (
            <div className=" p-4 rounded-lg">
              <p>
                <strong>Date:</strong> {new Date(data.date).toLocaleString()}
              </p>
              <p>
                <strong>Vehicle Number:</strong> {data.vehicle_number}
              </p>
              <p>
                <strong>Gross weight:</strong> {data.gross_weight}
              </p>
              <p>
                <strong>Tare weight:</strong> {data.tare_weight}
              </p>
              <p>
                <strong>Net weight:</strong> {data.net_weight}
              </p>
              <p>
                <strong>A weight:</strong> {data.A_weight}
              </p>
              <p>
                <strong>B weight:</strong> {data.B_weight}
              </p>
              {/* <p><strong>Map URL:</strong> <a href={data.map_url} target="_blank" rel="noopener noreferrer">Open Map</a></p> */}
              {/* <p><strong>Latitude:</strong> {data.latitude}</p> */}
              {/* <p><strong>Longitude:</strong> {data.longitude}</p> */}
              {/* <p><strong>Date:</strong> {new Date(data.date).toLocaleString()}</p> */}
              <button
                onClick={handlePrintData}
                className="btn btn-secondary mt-4"
              >
                Print annexure
              </button>
              <button
                onClick={handlePrintChallan}
                className="btn btn-secondary mt-4"
              >
                Print Challan
              </button>
            </div>
          ) : (
            <p>No data to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
