import React from "react";
import styled from "styled-components";

import services from "../constants/services";
import Title from "./Title2";

const About = () => {
  return (
    <Wrapper className="section">
      <Title
        subtitle="Šta mi radimo"
        title="Sve što Vam je potrebno za savršen poklon"
      ></Title>
      <div className="section-center">
        {services.map(({ id, icon, label, text }) => {
          return (
            <article key={id}>
              <div className="service-header">
                <span>{icon}</span>
                <h4>{label}</h4>
              </div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    max-width: 900px;
    margin: 4rem auto;
    display: grid;
    gap: 4rem;
    /* safari workaround */
    grid-gap: 4rem;
    article {
    }
    .service-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;

      .icon {
        font-size: 4rem;
        color: var(--clr-primary-5);
        margin-bottom: 1rem;
        margin-right: 1rem;
      }
      h4 {
        text-transform: uppercase;
        font-weight: 500;
      }
    }
    p {
      margin: 0 auto;
      max-width: 35em;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default About;
