import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
import PrivacyPolicyLayout from "../components/layouts/privacypolicylayout";
import Seo from "../components/seo";

const PrivacyPolicy: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <PrivacyPolicyLayout />
      </Layout>
    </>
  );
};

export default PrivacyPolicy;

export const Head = () => (
  <Seo
    title="Nurdsoft - Privacy Policy"
  />
)
