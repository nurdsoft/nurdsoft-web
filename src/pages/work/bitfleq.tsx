import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../../components/layout";
import BitFleqsLayout from "../../components/layouts/bitfleqslayout";
import Seo from "../../components/seo";

const BitFleqs: React.FC<PageProps> = () => {
  return (
    <Layout>
      <BitFleqsLayout />
    </Layout>
  );
};

export default BitFleqs;

export const Head = () => (
  <Seo
    title="Nurdsoft - Bitfleq"
    description="BitFleqs.co has emerged as a leading blockchain-powered supply chain management platform since its establishment in 2018. The platform revolutionizes the industry by delivering end-to-end visibility, traceability, and automation throughout the entire supply chain ecosystem."
  />
)