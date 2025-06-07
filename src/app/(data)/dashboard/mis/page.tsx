"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ocr } from "@/generated/prisma";
import { getAllOcr } from "@/action/ocr";
import axios from "axios";

type FormValues = {
  vendorName: string;
  vendorChallanDate: string;
  vendorChallanNo: string;
  vendorEwayBillDate: string;
  vendorEwayBillNo: string;
  biomeChallanNo: string;
  vehicleNo: string;
  bteChallanNo: string;
  challanDate: string;
  hsnCode: string;
  registrationState: string;
  gstCode: string;
  gstNumber: string;
  ewayBillDate: string;
  ewayBillNo: string;
  grossWeight: string;
  tareWeight: string;
  netWeightNTPC: string;
  netWeightVendor: string;
};

const FileUploadModal = ({
  open,
  onClose,
  ocrData,
  selectOcrData,
}: {
  open: boolean;
  onClose: () => void;
  ocrData: ocr[] | undefined;
  selectOcrData: React.Dispatch<React.SetStateAction<ocr | undefined>>;
}) => {
  if (!open) return null;
  if (!ocrData) return null;
  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Upload Files</h3>
        <div className="flex flex-col gap-4">
          <label>challan</label>
          <select
            className="select select-bordered"
            defaultValue=""
            onChange={(v) =>
              selectOcrData(
                ocrData.filter((xx) => xx.id == Number(v.target.value))[0]
              )
            }
          >
            <option value="" disabled>
              Select Challan
            </option>
            {ocrData?.map((ocr) => (
              <option key={ocr.id} value={ocr.id}>
                {ocr.challan || `OCR #${ocr.id}`}
              </option>
            ))}
          </select>
          <label>Vendor challan</label>
          <input type="file" className="file-input file-input-bordered" />
          <label>Vendor E-way bill</label>
          <input type="file" className="file-input file-input-bordered" />
          {/*  <label>NTPC challan</label>

          <input type="file" className="file-input file-input-bordered" />
          <label>NTPC E-way bill</label>

          <input type="file" className="file-input file-input-bordered" /> */}
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

const ChallanForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const [modalOpen, setModalOpen] = useState(true);
  const [ocr, setOcr] = useState<ocr[]>();
  const [ocrData, setOcrData] = useState<ocr>();
  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);
    try {
      const url =
        "https://script.google.com/macros/s/AKfycbytf3rPFnhfBqDH-HvL6Xhduo0UmdA5zW7ySUCR1ZyU4MlJ1VQXKbn48z7pDBAwK7w3Lg/exec";
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(data),
      });

      console.log("Response data:", response.json());
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    (async () => {
      setOcr(await getAllOcr());
    })();
  }, []);
  useEffect(() => {
    setValue("grossWeight", ocrData?.gross_weight.toString() ?? "");
    setValue("tareWeight", ocrData?.tare_weight.toString() ?? "");
    setValue("vehicleNo", ocrData?.vehicle_number.toString() ?? "");
    // setValue('',ocrData?.gross_weight.toString() ?? "");
    setValue("grossWeight", ocrData?.gross_weight.toString() ?? "");
    setValue("grossWeight", ocrData?.gross_weight.toString() ?? "");
  }, [ocrData]);

  const inputClass = "input";

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6  rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6">Challan Entry Form</h2>
        <button className="btn btn-accent" onClick={() => setModalOpen(true)}>
          Change bill
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Field
            label="Vendor Name"
            name="vendorName"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="Vendor Challan Date"
            name="vendorChallanDate"
            register={register}
            type="date"
            inputClass={inputClass}
          />
          <Field
            label="Vendor Challan No./Bill No."
            name="vendorChallanNo"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="Vendor E-Way Bill Date"
            name="vendorEwayBillDate"
            register={register}
            type="date"
            inputClass={inputClass}
          />
          <Field
            label="Vendor E-Way Bill No."
            name="vendorEwayBillNo"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="Vendor material weight"
            name="netWeightVendor"
            register={register}
            inputClass={inputClass}
          />

          <Field
            label="Vehicle No."
            name="vehicleNo"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="BTE Challan No."
            name="bteChallanNo"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="Challan Date"
            name="challanDate"
            register={register}
            type="date"
            inputClass={inputClass}
          />
          <Field
            label="HSN Code"
            name="hsnCode"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="Registration State"
            name="registrationState"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="GST Code"
            name="gstCode"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="GST Number"
            name="gstNumber"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="E-Way Bill Date"
            name="ewayBillDate"
            register={register}
            type="date"
            inputClass={inputClass}
          />
          <Field
            label="E-Way Bill No."
            name="ewayBillNo"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="Gross Weight"
            name="grossWeight"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="Tare Weight"
            name="tareWeight"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="Net Weight (For NTPC)"
            name="netWeightNTPC"
            register={register}
            inputClass={inputClass}
          />
          <Field
            label="BIOME - NTPC Challan No."
            name="biomeChallanNo"
            register={register}
            inputClass={inputClass}
          />
        </div>

        <button
          type="submit"
          className="mt-6 btn btn-accent  font-semibold px-6 py-2 rounded  transition"
        >
          Submit
        </button>
      </form>
      <FileUploadModal
        selectOcrData={setOcrData}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        ocrData={ocr}
      />
    </div>
  );
};

type FieldProps = {
  label: string;
  name: keyof FormValues;
  register: any;
  inputClass: string;
  type?: string;
};

const Field = ({
  label,
  name,
  register,
  inputClass,
  type = "text",
}: FieldProps) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 font-medium">
      {label}
    </label>
    <input id={name} type={type} {...register(name)} className={inputClass} />
  </div>
);

export default ChallanForm;
