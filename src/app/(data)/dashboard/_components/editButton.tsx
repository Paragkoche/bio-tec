"use client";

import { useRef } from "react";
import UpdateOcrModal from "./editPop";
import { ocr } from "@/generated/prisma";

export default function ParentComponent(data: ocr) {
  const modalRef = useRef<any>(null);

  return (
    <>
      <button
        className="btn btn-outline"
        onClick={() => modalRef.current?.open(data)}
      >
        Edit
      </button>
      <UpdateOcrModal
        ref={modalRef}
        onUpdate={(updated) => console.log("Updated data:", updated)}
      />
    </>
  );
}
