import type { GatsbyConfig } from "gatsby";

const scrollOffset = 75;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `David Avikasis - Ultra FullStack Developer`,
    siteUrl: `https://www.appandbeyond.com`,
    description:
      "Software developer with a 10+ years of experience working in the web development industry. Ultra Full Stack Capabilities, handling everything from Infrastructure architecture & DevOps in practice, Backend scripts and APIs, to Frontend - UX, Design and Development - whether using vanilla languages or well established frameworks. Building apps and systems from scratch to the user.",
    scrollOffset,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -scrollOffset,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: "./src/pages/",
    //   },
    //   __key: "pages",
    // },
  ],
};

export default config;
