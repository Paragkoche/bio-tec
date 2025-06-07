"use client";

import { addOCRData } from "@/action/ocr";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [input, setInput] = useState(`Date-06/03/25
Vehicle no-RJ11GC8936
Invoice  - 102
Gross weight -58530
Tare weight- 19000
Net weight- 39530
A weight -36610
B weight- 2860

Date-06/03/25
Vehicle no-RJ11GC8937
Invoice  - 103
Gross weight -60000
Tare weight- 20000
Net weight- 40000
A weight -37000
B weight- 3000`);
  const [id, setId] = useState<number | null>(null);

  // Parse a single block of text into key-value object
  const parseBlock = (block: string) => {
    const lines = block.trim().split("\n");
    const data: Record<string, string> = {};

    lines.forEach((line) => {
      const [keyPart, ...valueParts] = line.split("-");
      if (!keyPart || valueParts.length === 0) return;
      const key = keyPart.trim().toLowerCase();
      const value = valueParts.join("-").trim();
      data[key] = value;
    });

    return data;
  };

  // Parse all blocks
  const entries = input
    .trim()
    .split(/\n\s*\n/) // split by blank lines
    .map(parseBlock);
  const handlePrintData = () => {
    if (id) {
      window.open(`/data/${id}`, "popupWindow");
    } else {
      toast.error("No data to print!");
    }
  };
  const handlePrintChallan = () => {
    if (id) {
      window.open(`/challan/${id}`, "popupWindow");
    } else {
      toast.error("No data to print!");
    }
  };
  return (
    <main className="min-h-screen  p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Textarea */}
        <div>
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Enter Multiple Records
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-full min-h-[400px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* Tables for Each Entry */}
        <div className="space-y-6">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="overflow-x-auto  rounded-xl shadow-md p-4"
            >
              <div className="text-lg font-semibold mb-2">
                Vehicle Record #{index + 1}
              </div>
              <table className="table table-zebra w-full">
                <tbody>
                  <tr>
                    <th>Date</th>
                    <td>{entry["date"] || "-"}</td>
                  </tr>
                  <tr>
                    <th>Vehicle Number</th>
                    <td>{entry["vehicle no"] || "-"}</td>
                  </tr>
                  <tr>
                    <th>Invoice Number</th>
                    <td>{entry["invoice"] || "-"}</td>
                  </tr>
                  <tr>
                    <th>Gross Weight (kg)</th>
                    <td>{entry["gross weight"] || "-"}</td>
                  </tr>
                  <tr>
                    <th>Tare Weight (kg)</th>
                    <td>{entry["tare weight"] || "-"}</td>
                  </tr>
                  <tr>
                    <th>Net Weight (kg)</th>
                    <td>{entry["net weight"] || "-"}</td>
                  </tr>
                  <tr>
                    <th>Section A Weight (kg)</th>
                    <td>{entry["a weight"] || "-"}</td>
                  </tr>
                  <tr>
                    <th>Section B Weight (kg)</th>
                    <td>{entry["b weight"] || "-"}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex gap-1.5 my-2">
                <button
                  className="btn btn-accent"
                  onClick={async () => {
                    const parseDate = (d: string) => {
                      const [day, month, year] = d.split("/");
                      return new Date(`20${year}-${month}-${day}`);
                    };

                    const safeNumber = (value: string) =>
                      Number(value.replace(/[^\d.-]/g, "") || 0);
                    try {
                      const data = await addOCRData({
                        id: 0,
                        A_weight: safeNumber(entry["a weight"]),
                        B_weight: safeNumber(entry["b weight"]),
                        challan: entry["invoice"] || "", // assuming challan is same as invoice
                        address: "Default address or dynamic input",
                        map_url: "https://maps.google.com/?q=26.9124,75.7873", // optional
                        latitude: 26.9124, // dummy or dynamic
                        longitude: 75.7873, // dummy or dynamic
                        delivery_date: new Date(), // or some parsed date
                        delivery_status: "Pending",
                        net_weight: safeNumber(entry["net weight"]),
                        tare_weight: safeNumber(entry["tare weight"]),
                        gross_weight: safeNumber(entry["gross weight"]),
                        vehicle_number: entry["vehicle no"] || "",
                        date: parseDate(entry["date"] || "01/01/00"),
                        created_at: new Date(),
                        e_way_bill: "EWB-PLACEHOLDER", // optional if you don’t have it
                      });
                      if (!data || data instanceof Error) {
                        return;
                      }
                      setId(data.id);
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  Add data
                </button>
                {id && (
                  <button className="btn btn-accent" onClick={handlePrintData}>
                    Print annexure
                  </button>
                )}
                {id && (
                  <button
                    className="btn btn-accent"
                    onClick={handlePrintChallan}
                  >
                    Print challan
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
