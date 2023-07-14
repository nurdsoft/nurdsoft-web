import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
import ServicesPage1 from "../services/servicespage1";
import Servicespage4 from "../services/servicespage4";
import ServicesPage3 from "../services/servicespage3";
import ServicesPage2 from "../services/servicespage2";

const ServicesLayout = () => {
  return (
    <Parallax pages={5}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <ServicesPage1 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <ServicesPage2 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <ServicesPage3 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={0}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <Servicespage4 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
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
