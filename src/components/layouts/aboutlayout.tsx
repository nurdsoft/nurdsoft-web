import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
import AboutPage4 from "../about/aboutPage4";
import AboutPage2 from "../about/aboutPage2";
import AboutPage1 from "../about/aboutPage1";
import AboutPage5 from "../about/aboutPage5";
import AboutPage3 from "../about/aboutPage3";

const AboutLayout = () => {
  return (
    <Parallax pages={6.15}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
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
        }}
      >
        <AboutPage2 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <AboutPage3 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={1}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <AboutPage4 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={0.5}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <AboutPage5 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={5}
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

export default AboutLayout;
