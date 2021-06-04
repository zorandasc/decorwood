import React from "react";
import { graphql } from "gatsby";

import { Layout, Projects, Seo } from "../components";

const Galerija1 = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Seo title="Galerija"></Seo>

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

export default Galerija1;
