import React from "react";

import AuditTrustPage from "../work/audit_trust/audittrustpage";
import BreadCrumb from "../breadcrumb";
import './audittrustlayout.scss';

const AuditTrustLayout = () => {
  return (
    <div className="auditTrust_scroller">
      <BreadCrumb title="AUDIT TRUST" />
      <AuditTrustPage />
    </div>
  );
};

export default AuditTrustLayout;
