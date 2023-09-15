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

// export async function getServerData() {
//   return {
//     headers: {
//       'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
//     }
//   }
// }

export const Head = () => (
  <Seo
    title="Nurdsoft - Work"
  />
)