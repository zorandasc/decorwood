import React from "react";
import { graphql } from "gatsby";

import Cestice from "../components/Cestice";
import Projects1 from "../components/Projects1";
import { Layout, PageTitle } from "../components";

const Test = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Cestice></Cestice>
      <div style={{ marginTop: "12rem" }}>
        <PageTitle
          subtitle="Sve što vam treba za savršen poklon"
          title="naša galerija"
        ></PageTitle>
      </div>
      <Projects1 projects={projects}></Projects1>
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

export default Test;
