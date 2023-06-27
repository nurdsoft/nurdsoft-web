import * as React from "react";

import "./layout.scss";
import Header from "./header";
import Dashboard from "./dashboard";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const Layout = () => {
  const breakpoints = useBreakpoint();

  return (
    <>
      <main
        className={`layoutContainer ${breakpoints.xs  ? null : "fullHeight"}`}
      >
        <Header />
        <Dashboard />
      </main>
    </>
  );
};

export default Layout;
