import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
import AboutLayout from "../components/layouts/aboutlayout";
import Seo from "../components/seo";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <AboutLayout />
      </Layout>
    </>
  );
};

export default AboutPage;


export const Head = () => (
  <Seo
    title="Nurdsoft - About"
  />
)
