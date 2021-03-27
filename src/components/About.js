import React from "react";
import styled from "styled-components";

import services from "../constants/services";
import Title from "./Title";
import kutija from "../images/kutija.png";

const About = () => {
  return (
    <Wrapper className="section">
      <Title title="O nama"></Title>
      <div className="services">
        {services.map(({ id, icon, label, text }) => {
          return (
            <div key={id} className="service">
              <div className="service-header">
                <span>{icon}</span>
                <h4>{label}</h4>
              </div>
              <p>{text}</p>
            </div>
          );
        })}
        <div className="about-us-img-wrapper">
          <img src={kutija} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-white);
  .services {
    margin-top: 6rem;
    width: 100%;
    height: 100%;
    display: grid;
    grid-row-gap: 2rem;
    .about-us-img-wrapper {
      display: none;
    }
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
      margin: 0 auto;

      .service-header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        .icon {
          font-size: 4rem;
          color: var(--clr-primary-5);
          margin-right: 1rem;
        }
        h4 {
          text-transform: uppercase;
          font-weight: 500;
        }
      }
      p {
        text-align: center;
        color: var(--clr-black);
        max-width: 35em;
      }
    }
    @media (min-width: 868px) {
      grid-template-columns: repeat(16, 1fr);
      grid-template-rows: repeat(4, 6rem);
      grid-row-gap: 4rem;
      .service {
        width: 100%;
      }
      .service:nth-child(1) {
        grid-column: 3 / 6;
        grid-row: 1 / 3;
      }

      .service:nth-child(2) {
        grid-column: 3 / 6;
        grid-row: 3 / 5;
      }

      .service:nth-child(3) {
        grid-column: 12/ 15;
        grid-row: 3 / 5;
      }

      .service:nth-child(4) {
        grid-column: 12 / 15;
        grid-row: 1 / 3;
      }

      .service:nth-child(5) {
        grid-column: 12 / 15;
        grid-row: 3 / 5;
      }

      .service:nth-child(6) {
        grid-column: 11 / 14;
        grid-row: 5 / -1;
      }
      .about-us-img-wrapper {
        display: block;
        grid-column: 7 / 11;
        grid-row: 2 / 6;
        width: 100%;
      }

      .about-us-img-wrapper img {
        width: 100%;
        transform: scale(2);
        object-fit: cover;
        opacity: 1;
      }
    }
  }
`;

export default About;
