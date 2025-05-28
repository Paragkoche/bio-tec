import Link from "next/link";
import { PropsWithChildren } from "react";

const Sidebar = (props: PropsWithChildren) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}

        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
          <li>
            <Link href={"/dashboard"}>Home</Link>
          </li>
          <li>
            <Link href={"/dashboard/image"}>Image</Link>
          </li>
          <li>
            <Link href={"/dashboard/text"}>Text</Link>
          </li>
          <li>
            <Link href={"/dashboard/mis"}>MIS</Link>
          </li>
          <li>
            <Link href={"/dashboard/compare"}>PDF Compare</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
