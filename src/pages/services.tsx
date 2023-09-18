import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
import ServicesLayout from "../components/layouts/serviceslayout";
import Seo from "../components/seo";

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ServicesLayout />
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <Seo
    title="Nurdsoft - Services"
  />
)