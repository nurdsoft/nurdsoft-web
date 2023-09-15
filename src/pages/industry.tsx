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

export async function getServerData() {
  return {
    headers: {
      'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
    }
  }
}

export const Head = () => (
  <Seo
    title="Nurdsoft - Industry"
  />
)