import "./layout.scss";
import "../styles/style.scss";

import * as React from "react";

import Header from "./header";

const Layout = ({ children }: { children: JSX.Element }) => {
  const [headerHeight, setHeaderHeight] = React.useState(0);

  const updateState = (value: number) => {
    setHeaderHeight(value);
  };

  const handleViewportHeight = () => {
    const header = document.getElementById("header");
    if (!header) return;
    updateState(header?.clientHeight);
  };

  React.useEffect(() => {
    handleViewportHeight();
    window.addEventListener("resize", handleViewportHeight);
    return () => window.removeEventListener("resize", handleViewportHeight);
  }, []);

  return (
    <>
      <main className="layoutContainer">
        <Header />
        <div style={{ height: `calc(100vh - ${headerHeight}px)` }}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
