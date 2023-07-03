import * as React from "react";

import "./layout.scss";
import Header from "./header";
import Dashboard from "./dashboard";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Homepage1 from "./homepage/homepage1";
import Homepage3 from "./homepage/homepage3";

const Layout = () => {
  return (
    <>
      <main className="layoutContainer">
        <Header />
        <div style={{ height: "100vh" }}>
          <Parallax pages={3}>
            <ParallaxLayer
              speed={2}
              offset={0}
              factor={2}
              style={{
                backgroundColor: "var(--black-100)",
              }}
            >
              <Dashboard />
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={1}
              factor={2}
              style={{
                backgroundColor: "var(--black-100)",
              }}
            >
              <Homepage1 />
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={1}
              style={{
                backgroundColor: "var(--black-100)",
                paddingBottom: "40px",
                height: '100vh'
              }}
            >
              <Homepage3 />
            </ParallaxLayer>
          </Parallax>
        </div>
      </main>
    </>
  );
};

export default Layout;
