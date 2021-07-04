import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import { Layout, PageTitle, Projects, Cestice } from "../components";

const GaleryTemplate = (props) => {
  const { currentPage, numPages } = props.pageContext;
  //const { data } = props;

  const {
    allContentfulProduct: { nodes: projects },
  } = props.data;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const nextPage = `/galerija/${currentPage + 1}`;
  const prevPage =
    currentPage - 1 === 1 ? `/galerija/` : `/galerija/${currentPage - 1}`;

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
      <PageLinks>
        {!isFirst && (
          <Link to={prevPage} rel="prev" className="link">
            ← Prev
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => {
          return (
            <Link
              key={i}
              to={`/galerija/${i === 0 ? "" : i + 1}`}
              className={i + 1 === currentPage ? `link active` : "link"}
            >
              {i + 1}
            </Link>
          );
        })}
        {!isLast && (
          <Link to={nextPage} rel="next" className="link">
            Next →
          </Link>
        )}
      </PageLinks>
    </Layout>
  );
};

const Header = styled.div`
  margin-top: 8rem;
  @media (min-width: 768px) {
    margin-top: 12rem;
  }
`;

const PageLinks = styled.div`
  width: 80vw;
  max-width: 1050px;
  margin: 0 auto 8rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-5);
    color: var(--clr-white);
    box-shadow: var(--dark-shadow);
    border: 2px solid var(--clr-primary-5);
    padding: 0.45rem 0.7rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    display: inline-block;
    transition: var(--transition);
    cursor: pointer;
  }

  .link:hover {
    background: transparent;
    color: var(--clr-white);
    border: 2px solid var(--clr-white);
    box-shadow: var(--light-shadow);
  }
  .active {
    background: var(--clr-white);
    color: var(--clr-primary-5);
  }
`;

export const query = graphql`
  query getProduct($skip: Int!, $limit: Int!) {
    allContentfulProduct(
      skip: $skip
      limit: $limit
      sort: { fields: itemNum, order: ASC }
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

export default GaleryTemplate;
