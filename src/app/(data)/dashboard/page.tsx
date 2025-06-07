import React from "react";
import { prisma } from "@/lib/db";
import Link from "next/link";

const Page = async () => {
  const ocrData = await prisma.ocr.findMany();
  return (
    <>
      <h1 className="text-3xl font-semibold my-3"> Records</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Challan</th>
              <th>Address</th>
              <th>Delivery Date</th>
              <th>Vehicle Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ocrData.map((ocr, index) => (
              <tr key={ocr.id}>
                <td>{index + 1}</td>
                <td>{ocr.challan}</td>
                <td>{ocr.address}</td>
                <td>{new Date(ocr.delivery_date).toLocaleDateString()}</td>
                <td>{ocr.vehicle_number}</td>
                <td>{ocr.delivery_status}</td>
                <td className="flex flex-wrap gap-2">
                  <Link href={`/data/${ocr.id}`}>
                    <button className="btn btn-sm btn-primary">
                      Print Axxuers
                    </button>
                  </Link>
                  <Link href={`/challan/${ocr.id}`}>
                    <button className="btn btn-sm btn-secondary">
                      Print Challan
                    </button>
                  </Link>
                  <button className="btn btn-sm btn-warning">Edit</button>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
