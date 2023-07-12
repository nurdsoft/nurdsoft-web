import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
import IndustryPage1 from "../industry/IndustryPage1";

const IndustryLayout = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        speed={2}
        offset={0}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <IndustryPage1 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
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
