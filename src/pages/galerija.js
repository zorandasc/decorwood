import React from "react";
import { graphql } from "gatsby";

import { Layout, Projects, SEO } from "../components";

const Galerija = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Layout>
      <SEO title="Galerija"></SEO>

      <Projects title="galerija" projects={projects} page></Projects>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct(sort: { fields: itemNum, order: ASC }) {
      nodes {
        id
        category
        date
        itemNum
        image {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`;

export default Galerija;
