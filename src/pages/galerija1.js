import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import {
  Layout,
  Projects1,
  Seo,
  PageTitle,
  SearchButtons,
} from "../components";

const Galerija = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;

  const [curProjects, setCurProjects] = useState(projects);

  const setBackToAll = () => {
    setCurProjects(projects);
  };

  return (
    <Layout>
      <Wrapper>
        <Seo title="Galerija"></Seo>
        <PageTitle
          subtitle="Sve sto Vam treba za savrsen poklon"
          title="naša galerija"
        ></PageTitle>
        <SearchButtons
          projects={projects}
          setProjects={setCurProjects}
          setBackToAll={setBackToAll}
        ></SearchButtons>
        <Projects1 projects={curProjects}></Projects1>
      </Wrapper>
    </Layout>
  );
};
const Wrapper = styled.section`
  padding: 8rem 0;
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
