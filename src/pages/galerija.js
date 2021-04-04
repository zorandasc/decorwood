import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Layout, Projects, SEO } from "../components";

const Galerija = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Layout>
      <SEO title="Galerija"></SEO>
      <Wrapper>
        <Projects title="galerija" projects={projects} page></Projects>
      </Wrapper>
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

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`;

export default Galerija;
