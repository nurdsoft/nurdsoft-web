import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../../components/layout";
import AuditTrustLayout from "../../components/layouts/audittrustlayout";

const BitFleq: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AuditTrustLayout />
    </Layout>
  );
};

export default BitFleq;
