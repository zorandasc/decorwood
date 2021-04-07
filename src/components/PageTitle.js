import React from "react";
import styled from "styled-components";

const PageTitle = ({ title, subtitle }) => {
  return (
    <Wrapper>
      {/* Any content here will be centered in the component */}
      <article>
        <p>{subtitle}</p>
        <h1>{title}</h1>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  place-items: center;
  display: grid;
  article {
    z-index: 100;
    color: var(--clr-white);
    width: 85vw;
    max-width: 800px;
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 1rem 0 6rem 0;
      letter-spacing: 3px;
      text-shadow: var(--text-shadow2);
    }
    p {
      color: var(--clr-white);
      font-weight: 400;
      font-family: "Caveat", cursive;
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      line-height: 1.25;
      font-size: 1.6rem;
      margin-bottom: 0.4rem;
      text-shadow: var(--text-shadow2);
    }
    @media (min-width: 800px) {
      h1 {
        letter-spacing: 5px;
      }
      p {
        font-size: 1.75rem;
      }
    }
  }
`;

export default PageTitle;
