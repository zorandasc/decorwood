import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Layout, Projects } from "../components";

const galerija = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Wrapper>
      <Layout>
        <Projects title="our projects" projects={projects} page></Projects>
      </Layout>
    </Wrapper>
  );
};

export const query = graphql`
  {
    allContentfulProduct(sort: { fields: date, order: DESC }) {
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

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`;

export default galerija;
