import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
import Workpage1 from "../work/workpage1";

const WorkLayout = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <Workpage1 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={2}
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

export default WorkLayout;
