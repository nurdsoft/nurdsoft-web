import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PrivacyPolicyPage from "../privacypolicy/privacypolicypage";

const PrivacyPolicyLayout = () => {
  return (
    <>
      <Parallax pages={8.62}>
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
          <PrivacyPolicyPage />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default PrivacyPolicyLayout;
