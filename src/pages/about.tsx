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

// export async function getServerData() {
//   return {
//     headers: {
//       'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
//     }
//   }
// }

export const Head = () => (
  <Seo
    title="Nurdsoft - About"
  />
)
