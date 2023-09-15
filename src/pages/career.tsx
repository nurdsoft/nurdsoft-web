import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
import CareerLayout from "../components/layouts/careerlayout";
import Seo from "../components/seo";

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

// export async function getServerData() {
//   return {
//     headers: {
//       'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
//     }
//   }
// }

export const Head = () => (
  <Seo
    title="Nurdsoft - Careers"
  />
)