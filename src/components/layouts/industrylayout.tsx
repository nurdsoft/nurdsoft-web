import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "../contact/contact";
import Industriespage1 from "../industries/industriespage1";
import Industriespage2 from "../industries/industriespage2";

const IndustryLayout = () => {
  return (
    <Parallax pages={3}>
      <ParallaxLayer
        speed={2}
        offset={0}
        factor={10}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <Industriespage1 />
      </ParallaxLayer>
      <ParallaxLayer
        speed={1}
        offset={1}
        factor={1}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <Industriespage2 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
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
