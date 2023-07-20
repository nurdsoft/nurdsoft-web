import * as React from "react";
import BreadCrumb from "../breadcrumb";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import BitFleqpage from "../work/bitfleq/bitfleqpage";

const BitFleqsLayout = () => {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundColor: "var(--black-100)",
            height: "100%",
            overflow: "scroll",
            paddingBottom: "50px",
          }}
        >
          <BreadCrumb title="BITFLEQS" />
          <BitFleqpage />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default BitFleqsLayout;
