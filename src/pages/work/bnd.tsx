import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../../components/layout";
import BndLayout from "../../components/layouts/bndlayout";
import Seo from "../../components/seo";

const BnD: React.FC<PageProps> = () => {
  return (
    <Layout>
      <BndLayout />
    </Layout>
  );
};

export default BnD;

export const Head = () => (
  <Seo 
    title="Nurdsoft - Buildndeploy"
    description="BuildnDeploy.co uses continuous integration (CI) and continuous delivery (CD) to automate the process of software engineering and deployment."
  />
)