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

export async function getServerData() {
  return {
    headers: {
      'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
    }
  }
}

export const Head = () => (
  <Seo
    title="Nurdsoft - Services"
  />
)