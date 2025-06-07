import { getOcr } from "@/action/ocr";
import "./style.css";
interface pageProps {
  params: Promise<{
    id: string;
  }>;
}
function formatDateToCustom(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
const page = async ({ params }: pageProps) => {
  const { id } = await params;
  const data = await getOcr(Number(id));

  return (
    <>
      <div className="ritz grid-container" dir="ltr">
        <table className="waffle" cellSpacing={0} cellPadding={0}>
          <thead>
            <tr>
              <th className="row-header freezebar-origin-ltr"></th>
              <th
                id="0C0"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C1"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C2"
                style={{ width: "71px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C3"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C4"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C5"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C6"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C7"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C8"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C9"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C10"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C11"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C12"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
              <th
                id="0C13"
                style={{ width: "100px" }}
                className="column-headers-background"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "20px" }}>
              <th
                id="0R0"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R1"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R2"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td></td>
              <td className="s0" dir="ltr" colSpan={12} rowSpan={3}>
                Bio Trend Energy (OPC) Pvt. Ltd.
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R3"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R4"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R5"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td></td>
              <td className="s1" colSpan={12} rowSpan={3}></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R6"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R7"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R8"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s3" colSpan={12} rowSpan={2}></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R9"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R10"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s3" dir="ltr" colSpan={12}>
                For Non-Torrefied Biomass Pellets
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R11"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s3" dir="ltr" colSpan={12}>
                Tag for Consignment
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R12"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s3" dir="ltr" colSpan={12}>
                General Details
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R13"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s4" dir="ltr">
                1
              </td>
              <td className="s5" dir="ltr" colSpan={5}>
                Name of Company
              </td>
              <td className="s4"></td>
              <td className="s3" dir="ltr" colSpan={5}>
                Bio Trend Energy (OPC) Pvt Ltd
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R14"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s4" dir="ltr">
                2
              </td>
              <td className="s5" dir="ltr" colSpan={5}>
                Date of Dispatch
              </td>
              <td className="s4"></td>
              <td className="s3" colSpan={5}>
                {formatDateToCustom(data?.date ?? new Date())}
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R15"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s4" dir="ltr">
                3
              </td>
              <td className="s5" dir="ltr" colSpan={5}>
                Batch Number
              </td>
              <td className="s4"></td>
              <td className="s3" colSpan={5}>
                {data?.challan}
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R16"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s4" dir="ltr">
                4
              </td>
              <td className="s5" dir="ltr" colSpan={5}>
                Carriage Vehicle Type / Number
              </td>
              <td className="s4"></td>
              <td className="s3" colSpan={5}>
                {data?.vehicle_number}
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R17"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s4" dir="ltr" rowSpan={3}>
                5
              </td>
              <td className="s4" dir="ltr" colSpan={5} rowSpan={3}>
                Weight
              </td>
              <td className="s4" dir="ltr" rowSpan={3}>
                KG
              </td>
              <td className="s4" dir="ltr" colSpan={3}>
                Gross Weight
              </td>
              <td className="s3" colSpan={2}>
                {data?.gross_weight}
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R18"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s4" dir="ltr" colSpan={3}>
                Tare Weight
              </td>
              <td className="s3" colSpan={2}>
                {data?.tare_weight}
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R19"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s4" dir="ltr" colSpan={3}>
                Material Weight
              </td>
              <td className="s3" colSpan={2}>
                {data?.net_weight}
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R20"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s4" dir="ltr">
                6
              </td>
              <td className="s5" dir="ltr" colSpan={5}>
                Any Other Details as applicable
              </td>
              <td className="s4"></td>
              <td className="s3" colSpan={5}></td>
            </tr>
            <tr style={{ height: "20px" }}>
              <th
                id="0R21"
                style={{ height: "20px" }}
                className="row-headers-background"
              >
                <div
                  className="row-header-wrapper"
                  style={{ lineHeight: "20px" }}
                ></div>
              </th>
              <td></td>
              <td className="s2"></td>
              <td className="s6" dir="ltr">
                7
              </td>
              <td className="s7" dir="ltr" colSpan={5}>
                Any Other Details as applicable
              </td>
              <td className="s6"></td>
              <td className="s8" colSpan={5}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default page;
