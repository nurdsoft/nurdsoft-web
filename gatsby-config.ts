import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Nurdsoft`,
    description: `SOFTWARE ENGINEERING STUDIO`,
    author: `Nurdsoft`,
    siteUrl: `https://nurdsoft.co`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/./",
        resolveSiteUrl: () => "https://nurdsoft.co",
        serialize: ({ path, modifiedGmt }: any) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://nurdsoft.co",
        sitemap: "https://nurdsoft.co/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-breakpoints",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.svg",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.nurdsoft.co`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-R3C230VRGP",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
  ],
};

export default config;
