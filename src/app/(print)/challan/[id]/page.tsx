import { getOcr } from "@/action/ocr";
import "./style.css";
interface pageProps {
  params: Promise<{
    id: string;
  }>;
}
const page = async ({ params }: pageProps) => {
  const { id } = await params;
  const data = await getOcr(Number(id));
  return (
    <div className="ritz grid-container" dir="ltr">
      <table className="waffle" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th className="row-header freezebar-origin-ltr"></th>
            <th
              id="733272402C0"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C1"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C2"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C3"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C4"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C5"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C6"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C7"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C8"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C9"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C10"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C11"
              style={{ width: "140px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C12"
              style={{ width: "96px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C13"
              style={{ width: "140px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C14"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
            <th
              id="733272402C15"
              style={{ width: "68px" }}
              className="column-headers-background"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R0"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R1"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s5" colSpan={9} rowSpan={3}>
              BIOTREND ENERGY OPC PVT LTD
            </td>
            <td className="s6">Original</td>
            <td className="s0"></td>
            <td className="s7">for Buyer</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R2"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s6">Duplicate</td>
            <td className="s0"></td>
            <td className="s7">for Transporter</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R3"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s6">Triplicate</td>
            <td className="s0"></td>
            <td className="s7">from Office</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R4"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s8" colSpan={9}>
              MOBILE NO. 9810066747, EMAIL-rks@biotrendenergy.com
            </td>
            <td className="s9">Quadruplicate</td>
            <td className="s1"></td>
            <td className="s10">filing for extra</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R5"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s11" colSpan={9} rowSpan={2}>
              DELIVERY CHALLAN
            </td>
            <td className="s12" colSpan={3} rowSpan={2}>
              23AAACN0255D4Z3
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R6"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R7"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s13" colSpan={4}>
              Goods Shipped to
            </td>
            <td className="s13" colSpan={2}>
              Challan No.
            </td>
            <td className="s13" colSpan={3}>
              {data?.challan}
            </td>
            <td className="s14" colSpan={2}>
              Date :
            </td>
            <td className="s14">{`${
              (data?.date?.getMonth() ?? 0) + 1
            }/${data?.date?.getDate()}/${data?.date?.getFullYear()}`}</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R8"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s15" colSpan={2}>
              M/S
            </td>
            <td className="s15" colSpan={2}>
              NTPC Limited
            </td>
            <td className="s16" colSpan={2} rowSpan={2}>
              State
            </td>
            <td className="s16" colSpan={3} rowSpan={2}>
              Madhya Pradesh
            </td>
            <td className="s17" colSpan={2} rowSpan={2}>
              Code
            </td>
            <td className="s15" rowSpan={2}>
              35
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R9"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s18" colSpan={4} rowSpan={3}>
              1054 KHARGONESTPP DISTT-KHARGONE VILLAGE-SELDA POST-KHEDI(BUJURG)
              MADHYA PRADESH- 451113
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R10"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s16" colSpan={2} rowSpan={2}>
              Mode of Despatch :
            </td>
            <td className="s16" colSpan={6} rowSpan={2}>
              By Road
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R11"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R12"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s13" colSpan={2}>
              GSTIN No. :
            </td>
            <td className="s13" colSpan={2}>
              23AAACN0255D4Z3
            </td>
            <td className="s16" colSpan={2} rowSpan={2}>
              Lorry No. :
            </td>
            <td className="s19" colSpan={6} rowSpan={2}>
              {data?.vehicle_number}
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R13"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s13" colSpan={2}>
              STATE :
            </td>
            <td className="s13" colSpan={2}>
              MP Code : 23
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R14"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s13" colSpan={4}>
              Billing Address:
            </td>
            <td className="s4" colSpan={2}>
              MSME No. :
            </td>
            <td className="s16" colSpan={6}>
              DL-09-0005766
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R15"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s15" colSpan={2}>
              M/S
            </td>
            <td className="s15" colSpan={2}>
              NTPC Limited
            </td>
            <td className="s4" colSpan={2}>
              P.O. No. :
            </td>
            <td className="s13" colSpan={6}>
              CS-0011-112H-9-LOA-7398
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R16"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4" colSpan={4}>
              FINANCE DEPARTMENT ADMISTRATIVE
            </td>
            <td className="s4" colSpan={2}>
              Reverse Charge
            </td>
            <td className="s13" colSpan={6}>
              No
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R17"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4" colSpan={4}>
              BUILDING, VINDHYANAGAR
            </td>
            <td className="s4" colSpan={2}>
              Vendor code:
            </td>
            <td className="s13" colSpan={6}>
              V1218395
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R18"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s13" colSpan={4}>
              MADHYA PRADESH- 486885
            </td>
            <td className="s13" colSpan={2}>
              Eway bill No.
            </td>
            <td className="s13" colSpan={6}>
              {data?.e_way_bill}
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R19"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s13" colSpan={2}>
              GSTIN No. :
            </td>
            <td className="s13" colSpan={2}>
              23AAACN0255D4Z3
            </td>
            <td className="s15" colSpan={8} rowSpan={2}></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R20"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s13" colSpan={2}>
              STATE :
            </td>
            <td className="s13" colSpan={2}>
              MP Code : 23
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R21"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s20">Sr. No.</td>
            <td className="s20" colSpan={3}>
              Description of Goods
            </td>
            <td className="s20" colSpan={2}>
              HSN / SAC
            </td>
            <td className="s20" colSpan={3}>
              Quantity
            </td>
            <td className="s20">Unit</td>
            <td className="s20">Rate</td>
            <td className="s20">Amount</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R22"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s21">1</td>
            <td className="s22" colSpan={3}>
              AGRO RESIDUE BIOMASS PELLETS
            </td>
            <td className="s23" colSpan={2}>
              440110
            </td>
            <td className="s23" colSpan={3}>
              {data?.net_weight.toLocaleString()}
            </td>
            <td className="s4">Kg</td>
            <td className="s4"></td>
            <td className="s21">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R23"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R24"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R25"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R26"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R27"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R28"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R29"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R30"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R31"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s13"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s13"></td>
            <td className="s13"></td>
            <td className="s13"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R32"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={4}>
              Bank Details :
            </td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s13"></td>
            <td className="s13"></td>
            <td className="s14">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R33"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={4}>
              Beneficiary : BIOTREND ENERGY OPC PVT LTD
            </td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={5}>
              Forwarding Charges upto Transport
            </td>
            <td className="s21">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R34"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={4}>
              Bank : FEDERAL BANK.
            </td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={5}>
              Packing &amp; Forwarding Charges
            </td>
            <td className="s21">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R35"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={4}>
              CURRENT A/C No. : 1911-0200-0024-71
            </td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={5}>
              Freight &amp; Forwarding Charges
            </td>
            <td className="s21">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R36"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={4}>
              IFSC Code : FDRL0001911
            </td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s24" colSpan={5}>
              Insurance Charges
            </td>
            <td className="s21">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R37"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s25" colSpan={5}>
              Courier Charges
            </td>
            <td className="s14">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R38"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s26"></td>
            <td className="s26"></td>
            <td className="s26"></td>
            <td className="s27"></td>
            <td className="s26"></td>
            <td className="s27"></td>
            <td className="s26"></td>
            <td className="s26"></td>
            <td className="s27"></td>
            <td className="s28" colSpan={2}>
              Total Amount before Tax
            </td>
            <td className="s29">0</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R39"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s23" colSpan={3}>
              Add CGST
            </td>
            <td className="s30">0.00%</td>
            <td className="s21">0.00</td>
            <td className="s21">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R40"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s23" colSpan={3}>
              Add SGST
            </td>
            <td className="s30">0.00%</td>
            <td className="s21">0.00</td>
            <td className="s21">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R41"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s23" colSpan={3}>
              Add IGST
            </td>
            <td className="s31">5.00%</td>
            <td className="s14">0.00</td>
            <td className="s14">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R42"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s32" colSpan={2}>
              Total Amount before Tax
            </td>
            <td className="s29">0.00</td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R43"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s33" colSpan={6}>
              Certified that the particulars given above are true and correct
              and
            </td>
            <td className="s15" colSpan={6}></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R44"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4" colSpan={6}>
              Terms &amp; Conditions:
            </td>
            <td className="s21" colSpan={6}>
              FOR BIO TREND ENERGY OPC PVT LTD
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R45"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4" colSpan={6}>
              1) 24 % interest will be charged on invoice not paid within
            </td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R46"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4" colSpan={6}>
              2) Goods once sold will not be taken back or exchanged.
            </td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R47"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s4" colSpan={6}>
              3) Our responsibility ceases soon after the goods leave
            </td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R48"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s15" colSpan={6}></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s15" colSpan={3}>
              Authorised Signatory
            </td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R49"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R50"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0" colSpan={6}>
              Subject To Delhi Jurisdiction
            </td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R51"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R52"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s0"></td>
            <td className="s4"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s1"></td>
            <td className="s13"></td>
            <td className="s0"></td>
            <td className="s3"></td>
          </tr>
          <tr style={{ height: "18px" }}>
            <th
              id="733272402R53"
              style={{ height: "18px" }}
              className="row-headers-background"
            >
              <div
                className="row-header-wrapper"
                style={{ lineHeight: "18px" }}
              ></div>
            </th>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s2"></td>
            <td className="s34"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
