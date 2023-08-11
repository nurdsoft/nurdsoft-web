import React from "react";
interface ISeo {
  description?: string;
  title?: string;
  type?: string;
  image?: string;
  url?: string;
}

export default function Seo({description, title, type, image, url}: ISeo) {
  

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title ? title : "Nurdsoft"}</title>
      <meta
        key="og:image"
        name="og:image"
        content={image ? image : `https://nurdsoft-web-new-prakhar-ira-main.buildndeploy.co/og-img.png`}
      />
      <meta key="og:title" property="og:title" content={title ? title : "Nurdsoft"} />
      <meta key="og:type" property="og:type" content={type ? type : "website"} />
      <meta key="title" property="title" content={title ? title : "Nurdsoft"} />
      <meta name="description" content={description ? description : "Software Engineering Studio"} />
      <meta
        key="og:description"
        property="og:description"
        content={description ? description : "Software Engineering Studio"}
      />
      <meta
        key="og:url"
        property="og:url"
        content={url ? url : "https://nurdsoft-web-new-prakhar-ira-main.buildndeploy.co"}
      />
    </>
  );
}
