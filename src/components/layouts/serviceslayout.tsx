import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
import ServicesPage1 from "../services/servicespage1";
import Servicespage4 from "../services/servicespage4";

const ServicesLayout = () => {
  return (
    <Parallax pages={3}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
          height: "100vh",
          paddingBottom: "40px",
        }}
      >
        <ServicesPage1 />
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
        <Servicespage4 />
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

export default ServicesLayout;
