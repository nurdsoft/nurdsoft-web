import * as React from "react";
import Bndpage from "../work/bnd/bndpage";
import BreadCrumb from "../breadcrumb";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const BndLayout = () => {
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
            paddingBottom: "70px",
          }}
        >
          <BreadCrumb title="BnD" />
          <Bndpage />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default BndLayout;
