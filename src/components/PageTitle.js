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
  --text-shadow: 1px 1px #222, 2px 2px #222, 3px 3px #222, 4px 4px #222,
    5px 5px #222, 6px 6px #222, 7px 7px #222; // 8px 8px #222; // 9px 9px #222;
  //10px 10px #222, 11px 11px #222, 12px 12px #222, 13px 13px #222;
  //14px 14px #222, 15px 15px #222, 16px 16px #222, 17px 17px #222;
  //18px 18px #222, 19px 19px #222, 20px 20px #222, 21px 21px #222;
  //22px 22px #222, 23px 23px #222, 24px 24px #222, 25px 25px #222;
  //26px 26px 6px #222;

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
      text-shadow: var(--text-shadow);
    }
    p {
      color: var(--clr-white);
      font-weight: 600;
      font-family: "Caveat", cursive;
      letter-spacing: 4px;
      text-transform: capitalize;
      line-height: 1.25;
      font-size: 1.5rem;
      margin-bottom: 0.4rem;
      text-shadow: var(--text-shadow);
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
