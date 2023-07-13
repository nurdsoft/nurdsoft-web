import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
// import Industrypage1 from "../industry/industrypage1";
// import Industrypage2 from "../industry/industrypage2";

const IndustryLayout = () => {
  return (
    <Parallax pages={1}>
      {/* <ParallaxLayer
        speed={2}
        offset={0}
        factor={10}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <Industrypage1 />
      </ParallaxLayer>
      <ParallaxLayer
        speed={1}
        offset={1}
        factor={1}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <Industrypage2 />
      </ParallaxLayer> */}
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
          height: "100vh",
          paddingBottom: "40px",
        }}
      >
        <Contact />
      </ParallaxLayer>
    </Parallax>
  );
};

export default IndustryLayout;
