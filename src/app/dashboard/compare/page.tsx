"use client";

import {
  ExtractDataFORCompar,
  extractEWayBill,
  getFilePart,
} from "@/action/ocr";
import { useState, useRef, DragEvent, ChangeEvent } from "react";
const normalizeWeight = (value: string | null) => {
  if (!value) return null;
  const match = value.match(/^([\d.]+)\s*([a-zA-Z]+)$/);
  if (!match) return value.trim(); // fallback: return as-is

  const [, number, unit] = match;
  let normalizedUnit = unit.toLowerCase();

  // Convert known variants to standard form
  if (normalizedUnit === "kgs") normalizedUnit = "kg";
  if (normalizedUnit === "mts") normalizedUnit = "mt";

  // Remove .00 if present
  const cleanNumber = number.endsWith(".00")
    ? parseFloat(number).toString()
    : number;

  return `${cleanNumber} ${normalizedUnit}`;
};

const Page = () => {
  const [leftFile, setLeftFile] = useState<File[] | null>(null);
  const [rightFile, setRightFile] = useState<File[] | null>(null);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const leftInputRef = useRef<HTMLInputElement>(null);
  const rightInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    let leftData = {};
    let rightData = {};
    if (leftFile && rightFile) {
      leftData = await Promise.all(
        leftFile.map(async (e) => {
          const filePart = await getFilePart(e);
          return ExtractDataFORCompar(filePart);
        })
      );
      rightData = await Promise.all(
        rightFile.map(async (e) => {
          const filePart = await getFilePart(e);
          return ExtractDataFORCompar(filePart);
        })
      );
    }
    // Compare leftData and rightData and show result
    // Assuming leftData and rightData are arrays of objects (one per file)
    let resultMessage = "";
    if (Array.isArray(leftData) && Array.isArray(rightData)) {
      const mismatches: string[] = [];
      leftData.forEach((leftObj, i) => {
        const rightObj = rightData[i];

        if (rightObj) {
          Object.keys(leftObj).forEach((key) => {
            let leftVal = leftObj[key];
            let rightVal = rightObj[key];

            if (key === "net_weight") {
              leftVal = normalizeWeight(leftVal);
              rightVal = normalizeWeight(rightVal);
            }
            if (leftVal !== rightVal) {
              mismatches.push(`File ${i + 1}: Field "${key}" does not match`);
            }
          });
        }
      });
      if (mismatches.length === 0) {
        resultMessage = "All fields match!";
      } else {
        resultMessage = "Mismatches found:\n" + mismatches.join("\n");
      }
    } else {
      resultMessage = "Comparison failed: Data format error.";
    }
    setResultMessage(resultMessage);

    console.log(leftData, rightData);
  };

  const handleDrop = (
    e: DragEvent<HTMLDivElement>,
    setFile: React.Dispatch<React.SetStateAction<File[] | null>>
  ) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setFile((pri) => (pri ? [...pri, file] : [file]));
    }
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File[] | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFile((pri) => (pri ? [...pri, file] : [file]));
    }
  };

  const renderPreview = (file: File[] | null) =>
    file &&
    file.map((d) => (
      <div className="mt-2 text-sm text-center truncate">📄 {d.name}</div>
    ));

  return (
    <div className="min-h-screen bg-base-100 p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center">Upload PDFs to Compare</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Upload Box */}
        <div
          className="bg-base-200 p-6 rounded-xl shadow border-2 border-dashed border-base-300 hover:border-primary cursor-pointer transition text-center"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, setLeftFile)}
          onClick={() => leftInputRef.current?.click()}
        >
          <p className="text-base-content/70">
            Drop or click to upload PDF (Left)
          </p>
          {renderPreview(leftFile)}
          <input
            ref={leftInputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => handleFileChange(e, setLeftFile)}
          />
        </div>

        {/* Right Upload Box */}
        <div
          className="bg-base-200 p-6 rounded-xl shadow border-2 border-dashed border-base-300 hover:border-primary cursor-pointer transition text-center"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, setRightFile)}
          onClick={() => rightInputRef.current?.click()}
        >
          <p className="text-base-content/70">
            Drop or click to upload PDF (Right)
          </p>
          {renderPreview(rightFile)}
          <input
            ref={rightInputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => handleFileChange(e, setRightFile)}
          />
        </div>
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary mt-6"
          disabled={!leftFile || !rightFile}
          onClick={handleSubmit}
        >
          Compare
        </button>
        {resultMessage && (
          <div className="mt-4 p-4 rounded bg-base-200 text-base-content whitespace-pre-wrap border border-base-300">
            {resultMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
