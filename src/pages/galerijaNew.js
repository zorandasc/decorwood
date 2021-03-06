import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Layout, PageTitle, Projects, Cestice } from "../components";

const Galerija = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Cestice></Cestice>
      <Header>
        <PageTitle
          subtitle="Sve što vam treba za savršen poklon"
          title="naša galerija"
        ></PageTitle>
      </Header>
      <Projects projects={projects}></Projects>
    </Layout>
  );
};

const Header = styled.div`
  margin-top: 8rem;
  @media (min-width: 768px) {
    margin-top: 12rem;
  }
`;

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
