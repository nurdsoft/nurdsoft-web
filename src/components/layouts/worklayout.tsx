import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Workpage1 from "../work/workpage1";

const WorkLayout = () => {
  return (
    // <Parallax pages={1}>
    //   <ParallaxLayer
    //     offset={0}
    //     speed={1}
    //     factor={0}
    //     style={{
    //       backgroundColor: "var(--black-100)",
    //     }}
    //   >
    <div
      style={{
        backgroundColor: "var(--black-100)",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Workpage1 />
    </div>
    //   </ParallaxLayer>
    // </Parallax>
  );
};

export default WorkLayout;
