import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Layout, ProjectsOld, Seo, PageTitle, Wave } from "../components";

const GalerijaOld = ({ data }) => {
  const {
    allContentfulProduct: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Wrapper>
        <Seo title="Galerija"></Seo>
        <div className="header">
          <PageTitle
            subtitle="Sve što vam treba za savršen poklon"
            title="naša galerija"
          ></PageTitle>
          <Wave></Wave>
        </div>
        <ProjectsOld projects={projects}></ProjectsOld>
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

const Wrapper = styled.section`
  .header {
    position: relative;
    height: 60vh;
    width: 100%;
    //background-color: var(--clr-black);
    //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fdd4bf' fill-opacity='0.26' fill-rule='nonzero'%3E%3Cpath d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-color: var(--deep-scy);
    background-image: radial-gradient(
        white,
        rgba(255, 255, 255, 0.2) 2px,
        transparent 40px
      ),
      radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
      radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
      radial-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.1) 2px,
        transparent 30px
      );

    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;

    background-attachment: fixed;
    display: flex;
    justify-content: center;
    padding-top: 7rem;
    @media (min-width: 768px) {
      padding-top: 1rem;
    }
    @media (min-width: 992px) {
      height: 65vh;
    }
  }
`;

export default GalerijaOld;
