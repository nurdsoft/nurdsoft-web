import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

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

  const location = useLocation();

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getSlugName = () => {
    const path = location.pathname;
    let slug = path;
    if (path === "/") {
      slug = "/home/";
    }
    if (path.endsWith("/")) {
      slug = slug.slice(0, -1);
    }
    return capitalizeFirstLetter(slug.substring(1));
  };

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
