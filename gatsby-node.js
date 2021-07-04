const { graphql } = require("gatsby");
const path = require("path");

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      products: allContentfulProduct {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  //amaount of products
  const products = data.products.edges;

  const prodPerPage = 20;

  const numPages = Math.ceil(products.length / prodPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/galerija` : `galerija/${i + 1}`,
      component: path.resolve("./src/templates/galeryTemplate.js"),
      context: {
        limit: prodPerPage,
        skip: i * prodPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
