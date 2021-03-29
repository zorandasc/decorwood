import * as React from "react";
import { graphql } from "gatsby";

import {
  Layout,
  Hero,
  About,
  //LatestGalery,
  Contact,
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
      <Contact></Contact>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct(limit: 4, sort: { fields: date, order: DESC }) {
      nodes {
        id
        category
        date
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
