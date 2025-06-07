"use client";

import { UpdateOCRData } from "@/action/ocr";
import { useImperativeHandle, forwardRef, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ocrSchema = z.object({
  id: z.number(),
  A_weight: z.number().min(0),
  B_weight: z.number().min(0),
  challan: z.string().min(1),
  address: z.string().min(1),
  map_url: z.string().url(),
  latitude: z.number(),
  longitude: z.number(),
  delivery_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid delivery date",
  }),
  delivery_status: z.string().min(1),
  net_weight: z.number().min(0),
  tare_weight: z.number().min(0),
  gross_weight: z.number().min(0),
  vehicle_number: z.string().min(1),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
});

type OCRData = z.infer<typeof ocrSchema>;

type ModalRef = {
  open: (ocrEntry: OCRData) => void;
};

const UpdateOcrModal = forwardRef<
  ModalRef,
  { onUpdate: (data: OCRData) => void }
>(({ onUpdate }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OCRData>({
    resolver: zodResolver(ocrSchema),
  });

  useImperativeHandle(ref, () => ({
    open: (ocrEntry: OCRData) => {
      reset({
        ...ocrEntry,
        delivery_date: new Date(ocrEntry.delivery_date)
          .toISOString()
          .split("T")[0],
        date: new Date(ocrEntry.date).toISOString().split("T")[0],
      });
      dialogRef.current?.showModal();
    },
  }));

  const onSubmit = async (data: OCRData) => {
    const res = await UpdateOCRData(data.id, {
      ...data,
      delivery_date: new Date(data.delivery_date),
      date: new Date(data.date),
    });
    if (!res || res instanceof Error) {
      return;
    }
    onUpdate({
      ...res,
      delivery_date:
        res.delivery_date instanceof Date
          ? res.delivery_date.toISOString().split("T")[0]
          : res.delivery_date,
      date:
        res.date instanceof Date
          ? res.date.toISOString().split("T")[0]
          : res.date,
    });
    dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-lg">Update OCR Entry</h3>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {[
            { key: "A_weight", label: "A Weight" },
            { key: "B_weight", label: "B Weight" },
            { key: "net_weight", label: "Net Weight" },
            { key: "gross_weight", label: "Gross Weight" },
            { key: "tare_weight", label: "Tare Weight" },
          ].map(({ key, label }) => (
            <div key={key}>
              <label htmlFor={key} className="label font-semibold">
                {label}
              </label>
              <input
                id={key}
                type="number"
                {...register(key as keyof OCRData, { valueAsNumber: true })}
                className="input input-bordered w-full"
                placeholder={label}
              />
              {errors[key as keyof OCRData] && (
                <p className="text-red-500 text-sm">
                  {errors[key as keyof OCRData]?.message as string}
                </p>
              )}
            </div>
          ))}

          {[
            { key: "challan", label: "Challan" },
            { key: "vehicle_number", label: "Vehicle Number" },

            { key: "delivery_status", label: "Delivery Status" },
          ].map(({ key, label }) => (
            <div key={key}>
              <label htmlFor={key} className="label font-semibold">
                {label}
              </label>
              <input
                id={key}
                type="text"
                {...register(key as keyof OCRData)}
                className="input input-bordered w-full"
                placeholder={label}
              />
              {errors[key as keyof OCRData] && (
                <p className="text-red-500 text-sm">
                  {errors[key as keyof OCRData]?.message as string}
                </p>
              )}
            </div>
          ))}

          <div>
            <label htmlFor="delivery_date" className="label font-semibold">
              Delivery Date
            </label>
            <input
              id="delivery_date"
              type="date"
              {...register("delivery_date")}
              className="input input-bordered w-full"
            />
            {errors.delivery_date && (
              <p className="text-red-500 text-sm">
                {errors.delivery_date.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="date" className="label font-semibold">
              Entry Date
            </label>
            <input
              id="date"
              type="date"
              {...register("date")}
              className="input input-bordered w-full"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => dialogRef.current?.close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
});

UpdateOcrModal.displayName = "UpdateOcrModal";
export default UpdateOcrModal;
