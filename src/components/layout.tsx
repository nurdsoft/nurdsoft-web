import * as React from "react";

import "./layout.scss";
import Header from "./header";
import Dashboard from "./dashboard";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Wrapper from "./wrapper";
import Homepage1 from "./homepage/homepage1";

const Layout = () => {
  const breakpoints = useBreakpoint();

  return (
    <>
      <main className="layoutContainer">
        <Header />
        <div style={{ height: "100vh" }}>
          <Parallax pages={2}>
            <ParallaxLayer
              speed={2}
              offset={0}
              factor={2}
              style={{
                backgroundImage: `url(/home-bg.gif)`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                height: "100vh",
                backgroundAttachment: "fixed",
              }}
            >
              <Dashboard />
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={1}
              style={{
                backgroundImage: `url(/homepage_bg-hero.png)`,
                backgroundSize: "100%",
                backgroundPosition: "center top",
                height: "100vh",
                backgroundAttachment: "fixed",
                opacity: "0.97",
              }}
            >
              <Homepage1 />
            </ParallaxLayer>
          </Parallax>
        </div>
      </main>
    </>
  );
};

export default Layout;
