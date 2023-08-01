import * as React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import AuditTrustPage from "../work/audit_trust/audittrustpage";
import BreadCrumb from "../breadcrumb";

const AuditTrustLayout = () => {
  return (
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
        <BreadCrumb title="AUDIT TRUST" />
        <AuditTrustPage />
      </ParallaxLayer>
    </Parallax>
  );
};

export default AuditTrustLayout;
