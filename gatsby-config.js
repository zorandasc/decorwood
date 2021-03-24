module.exports = {
  siteMetadata: {
    title: `DecorWood`,
    description: ` `,
    author: `@zorandasic`,
    titleTemplate: `%s | DecorWood`,
    url: ``,
    image: ``,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: [`400`, `500`, `700`],
            },
            {
              family: "Open Sans",
              variants: ["300", "700"],
            },
            {
              family: `Caveat`,
            },
          ],
        },
      },
    },
  ],
};
