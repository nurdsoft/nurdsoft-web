import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
import IndustryPage1 from "../industry/IndustryPage1";
import IndustryPage2 from "../industry/IndustryPage2";

const IndustryLayout = () => {
  return (
    <Parallax pages={3}>
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
        speed={2}
        offset={1}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <IndustryPage2 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
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
