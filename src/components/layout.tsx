import * as React from "react";
import "./layout.scss";
import "../styles/style.scss";
import Header from "./header";
import Seo from "./seo";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <main className="layoutContainer">
        <Seo />
        <Header />
        <div style={{ height: "100vh" }}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
