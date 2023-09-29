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
      <title>{title || "Nurdsoft"}</title>
      <meta
        key="og:image"
        name="og:image"
        content={image || `https://nurdsoft-static-assets.s3.us-west-2.amazonaws.com/images/nurdsoft.png`}
      />
      <meta key="og:title" property="og:title" content={title || "Nurdsoft"} />
      <meta key="og:type" property="og:type" content={type || "website"} />
      <meta key="title" property="title" content={title || "Nurdsoft"} />
      <meta name="description" content={description || "Software Development Studio"} />
      <meta
        key="og:description"
        property="og:description"
        content={description || "Software Development Studio"}
      />
      <meta
        key="og:url"
        property="og:url"
        content={url || "https://nurdsoft.co"}
      />
    </>
  );
}
