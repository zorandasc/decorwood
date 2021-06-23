require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `DecorWood`,
    description: `Jedinstveni i unikatni predmeti od drveta.`,
    author: `@zorandasic`,
    titleTemplate: `%s | DecorWood`,
    siteUrl: `https://decorwood.netlify.app`,
    image: `/hero.jpg`,
    twitterUsername: ``,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: [`400`, `500`, `700`],
            },
            {
              family: `Kaushan Script`,
            },

            {
              family: `Bilbo Swash Caps`,
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Decorwood`,
        short_name: `Decorwood`,
        start_url: `/`,
        background_color: `#9d7e68`,
        theme_color: `#9d7e68`,
        display: `minimal-ui`,
        icon: `src/images/icon_brown.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
