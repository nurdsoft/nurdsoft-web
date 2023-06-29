import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = site.siteMetadata.description;

  return (
    <Helmet
      titleTemplate={`Home`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: `Software Engineering Studio`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://nurdsoft-web-new-prakhar-ira-main.buildndeploy.co/og-img.png`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
      ]}
    >
      <meta charSet="utf-8" />
      <meta
        key="og:image"
        name="og:image"
        content={`https://nurdsoft-web-new-prakhar-ira-main.buildndeploy.co/og-img.png`}
      />
      <title>Nurdsoft</title>
      <meta name="description" content="Software Engineering Studio" />
      <meta
        key="og:description"
        property="og:description"
        content="Software Engineering Studio"
      />
    </Helmet>
  );
}
