import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../../components/layout";
import AuditTrustLayout from "../../components/layouts/audittrustlayout";
import Seo from "../../components/seo";

const BitFleq: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AuditTrustLayout />
    </Layout>
  );
};

export default BitFleq;


export const Head = () => (
  <Seo
    title="Nurdsoft - AuditTrust"
    description="AuditTrust is a innovative platform that offers real-time monitoring and management capabilities to effectively handle cybersecurity programs and automate compliance requirements."
  />
)