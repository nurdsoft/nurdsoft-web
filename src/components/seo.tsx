import React from "react";
import { Helmet } from "react-helmet";

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
    <Helmet title="Nurdsoft" meta={metas}>
      <meta charSet="utf-8" />
      <title>Nurdsoft</title>
      <meta
        key="og:image"
        name="og:image"
        content={`https://nurdsoft-web-new-prakhar-ira-main.buildndeploy.co/og-img.png`}
      />
      <meta key="og:title" property="og:title" content="Nurdsoft" />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="title" property="title" content="Nurdsoft" />
      <meta name="description" content="Software Engineering Studio" />
      <meta
        key="og:description"
        property="og:description"
        content="Software Engineering Studio"
      />
      <meta
        key="og:url"
        property="og:url"
        content="https://nurdsoft-web-new-prakhar-ira-main.buildndeploy.co"
      />
    </Helmet>
  );
}
