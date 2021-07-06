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
      categories: allContentfulProduct {
        group(field: slug) {
          nodes {
            id
          }
          fieldValue
          totalCount
        }
      }
    }
  `);

  //amaount of all products
  const products = data.products.edges;

  const prodPerPage = 20;

  const numPages = Math.ceil(products.length / prodPerPage);

  //ovdije kreiramo galeriju za sve artikle
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      //kada gatsby Linkom docemo na ovaj path
      //primjeni galeryTemplate.js i u njega ubaci dole contex parametree
      path: i === 0 ? `/galerija/sve` : `galerija/sve/${i + 1}`,
      component: path.resolve("./src/templates/galeryTemplate.js"),
      context: {
        category: "sve",
        limit: prodPerPage,
        skip: i * prodPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  //ovdije kreiramo odredjeni broj stranica za svaku kategoriju
  data.categories.group.forEach(({ totalCount, fieldValue: category }, i) => {
    //(i ide od 0 do broj grupa), za svaku grupu i, izracunaj broj stranica
    const numPages = Math.ceil(totalCount / prodPerPage);
    //kreiraj stranice na osnovu broja strancia za svaku grupu
    for (j = 0; j < numPages; j++) {
      createPage({
        //kada gatsby Linkom docemo na ovaj path
        //primjeni galeryTemplate.js i u njega ubaci dole contex parametree
        path:
          j === 0 ? `/galerija/${category}` : `galerija/${category}/${j + 1}`,
        component: path.resolve("./src/templates/galeryTemplate.js"),
        context: {
          category: category,
          limit: prodPerPage,
          skip: j * prodPerPage,
          numPages: numPages,
          currentPage: j + 1,
        },
      });
    }
  });
};
