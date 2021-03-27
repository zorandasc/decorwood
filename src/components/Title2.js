import React from "react";
import styled from "styled-components";

const Title2 = ({ title, subtitle, invertColor }) => {
  return (
    <Wrapper>
      <h3>{subtitle}</h3>
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
  text-align: center;
  margin-bottom: 2rem;
  h3 {
    font-weight: 400;
    color: var(--clr-primary-5);
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    margin-right: 1rem;
    margin-left: 1rem;
    span {
      display: none;
    }

    @media (min-width: 800px) {
      span {
        display: initial;
        font-size: 0.85em;
        color: var(--clr-primary-5);
        margin-right: 1rem;
        font-weight: 700;
      }
    }
  }
`;
export default Title2;
