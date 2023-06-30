import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo() {

  const metas = [
    {
      name: `description`,
      content: "Software Engineering Studio",
    },
    {
      property: `og:title`,
      content: "Nurdsoft",
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
      content: "https://nurdsoft-web-new-prakhar-ira-main.buildndeploy.co",
    },
  ];

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nurdsoft</title>
      {metas.map((meta) => (
        <meta key={meta.name} name={meta.name} content={meta.content} />
      ))}
    </Helmet>
  );
}
