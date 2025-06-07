import { PropsWithChildren } from "react";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

const Layout = (props: PropsWithChildren) => {
  return (
    <Sidebar>
      <Header />
      <main className="p-4">{props.children}</main>
    </Sidebar>
  );
};

export default Layout;
