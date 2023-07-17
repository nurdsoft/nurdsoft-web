import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CareerPage1 from "../career/careerPage1";
import CareerPage2 from "../career/careerPage2";

const CareerLayout = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <CareerPage1 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <CareerPage2 />
      </ParallaxLayer>
    </Parallax>
  );
};

export default CareerLayout;
