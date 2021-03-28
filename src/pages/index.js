import * as React from "react";
import { graphql } from "gatsby";

import {
  Layout,
  Hero,
  About,
  LatestGalery,
  Contact,
  GridProjects,
} from "../components";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <GridProjects data={data}></GridProjects>
      <Contact></Contact>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulWork(limit: 4, sort: { fields: date, order: DESC }) {
      nodes {
        images {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            formats: [AUTO, WEBP]
          )
          id
        }
        name
      }
    }
  }
`;

export default IndexPage;
