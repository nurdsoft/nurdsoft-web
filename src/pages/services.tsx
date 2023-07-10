import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
import ServicesLayout from "../components/layouts/serviceslayout";

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <ServicesLayout />
      </Layout>
    </>
  );
};

export default ServicesPage;
