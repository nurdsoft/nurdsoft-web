import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../../components/layout";
import BndLayout from "../../components/layouts/bndlayout";

const BnD: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <BndLayout />
      </Layout>
    </>
  );
};

export default BnD;
