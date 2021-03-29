import * as React from "react";
import { graphql } from "gatsby";

import {
  Layout,
  Hero,
  About,
  //LatestGalery,
  //Contact,
  GridProjects,
} from "../components";

// markup
const IndexPage = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <GridProjects projects={projects}></GridProjects>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct(
      sort: { fields: itemNum, order: ASC }
      filter: { featured: { eq: true } }
    ) {
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

export default IndexPage;
