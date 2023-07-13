import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
import AboutPage4 from "../about/aboutPage4";
import AboutPage2 from "../about/aboutPage2";
import AboutPage1 from "../about/aboutPage1";

const AboutLayout = () => {
  return (
    <Parallax pages={2}>
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
        <AboutPage1 />
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
        <AboutPage2 />
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
        <p>Team Map section</p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={1}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
          height: "100vh",
          paddingBottom: "40px",
        }}
      >
        <AboutPage4 />
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
        <p>Hire now section</p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={5}
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

export default AboutLayout;
