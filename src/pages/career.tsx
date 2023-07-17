import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
import CareerLayout from "../components/layouts/careerlayout";

const CareerPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <CareerLayout />
      </Layout>
    </>
  );
};

export default CareerPage;