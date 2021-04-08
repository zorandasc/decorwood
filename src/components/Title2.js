import React from "react";
import styled from "styled-components";

const Title2 = ({ title, subtitle, invertColor }) => {
  return (
    <Wrapper>
      <p>{subtitle}</p>
      <h2
        style={
          invertColor
            ? { color: "var( --clr-white)" }
            : { color: "var(--clr-black)" }
        }
      >
        <span>/</span> {title}
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 6rem;
  width: 85vw;
  max-width: 800px;
  text-align: center;

  p {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--clr-primary-5);
    font-family: "Kaushan Script", serif;
    letter-spacing: var(--spacing);
    text-transform: none;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h2 {
    text-align: center;
    text-transform: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    margin-right: 1rem;
    margin-left: 1rem;
    //text-shadow: var(--text-shadow);
    span {
      display: none;
    }
  }
  @media (min-width: 800px) {
    h2 {
      span {
        display: initial;
        font-size: 0.85em;
        color: var(--clr-primary-5);
        margin-right: 1rem;
        font-weight: 700;
      }
    }
    p {
      font-size: 1.75rem;
    }
  }
`;
export default Title2;
