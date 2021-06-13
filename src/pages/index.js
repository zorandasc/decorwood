import * as React from "react";
import { graphql } from "gatsby";

import {
  Layout,
  Seo,
  Hero,
  About,
  GridProjects,
  SliderWrapper,
} from "../components";
import isTouchScreendevice from "../tools/isTouchScreendevice";

// markup
const IndexPage = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Seo title="Home"></Seo>
      <Hero></Hero>
      <About></About>
      {isTouchScreendevice ? (
        <GridProjects projects={projects}></GridProjects>
      ) : (
        <SliderWrapper projects={projects}></SliderWrapper>
      )}
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct(
      sort: { fields: itemNum, order: ASC }
      filter: { featured: { eq: true } }
      limit: 5
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
