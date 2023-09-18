import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
import IndustryLayout from "../components/layouts/industrylayout";
import Seo from "../components/seo";

const IndustryPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <IndustryLayout />
      </Layout>
    </>
  );
};

export default IndustryPage;

export const Head = () => (
  <Seo
    title="Nurdsoft - Industry"
  />
)