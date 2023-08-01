import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../../components/layout";
import BitFleqsLayout from "../../components/layouts/bitfleqslayout";

const BitFleqs: React.FC<PageProps> = () => {
  return (
    <Layout>
      <BitFleqsLayout />
    </Layout>
  );
};

export default BitFleqs;
