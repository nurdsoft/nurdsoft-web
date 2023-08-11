import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
import WorkLayout from "../components/layouts/worklayout";
import Seo from "../components/seo";

const WorkPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <WorkLayout />
      </Layout>
    </>
  );
};

export default WorkPage;

export const Head = () => (
  <Seo
    title="Nurdsoft - Work"
  />
)