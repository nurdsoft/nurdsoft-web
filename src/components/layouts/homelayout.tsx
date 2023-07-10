import * as React from "react";
import Dashboard from "../dashboard";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Homepage1 from "../homepage/homepage1";
import Homepage3 from "../homepage/homepage3";
import Homepage4 from "../homepage/homepage4";
import Homepage2 from "../homepage/homepage2";
import Homepage5 from "../homepage/homepage5";
import Contact from "../contact/contact";
import Homepage6 from "../homepage/homepage6";

const HomeLayout = () => {
  return (
    <Parallax pages={8}>
      <ParallaxLayer
        speed={2}
        offset={0}
        factor={2}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <Dashboard />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        factor={2}
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <Homepage1 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1}
        factor={2}
        style={{
          backgroundColor: "var(--black-100)",
          paddingBottom: "40px",
          height: "100vh",
        }}
      >
        <Homepage2 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={1}
        factor={2}
        style={{
          backgroundColor: "var(--black-100)",
          paddingBottom: "40px",
          height: "100vh",
        }}
      >
        <Homepage3 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={2}
        factor={1}
        style={{
          backgroundColor: "var(--black-100)",
          paddingBottom: "40px",
          height: "100vh",
        }}
      >
        <Homepage4 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={5}
        speed={2}
        factor={1}
        style={{
          backgroundColor: "var(--black-100)",
          paddingBottom: "40px",
          height: "100vh",
        }}
      >
        <Homepage6 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={6}
        speed={1}
        factor={2}
        style={{
          backgroundColor: "var(--black-100)",
          paddingBottom: "40px",
          height: "100vh",
        }}
      >
        <Homepage5 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={7}
        speed={1}
        factor={0}
        style={{
          backgroundColor: "var(--black-100)",
          height: "100vh",
        }}
      >
        <Contact />
      </ParallaxLayer>
    </Parallax>
  );
};

export default HomeLayout;
