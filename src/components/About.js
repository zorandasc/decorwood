import React from "react";
import styled from "styled-components";

import services from "../constants/services";
import Title from "./Title2";
import fence from "../images/fence.svg";
import fenceO from "../images/fence_orange.svg";

const About = () => {
  return (
    <Wrapper className="section">
      <Title
        subtitle="Pozdrav, mi smo Decorwood"
        title="Za Vaš savršen poklon naš-a ..."
      ></Title>
      <div className="section-center">
        {services.map(({ id, icon, label, text }) => {
          return (
            <article key={id}>
              <div className="service-header">
                <span>{icon}</span>
                <h3>{label}</h3>
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
  --fenceWidth: 11rem;
  background-color: #ffffff;
  //zavrnuti papir
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%2377371e'/%3E%3Cstop offset='1' stop-color='%23be572f'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  padding-top: 11rem;
  position: relative;
  z-index: 3;
  &::before {
    content: "";
    position: absolute;
    top: -78px;
    right: 0;
    width: calc(100% - var(--fenceWidth));
    height: 5rem;
    background-repeat: repeat-x;
    background-image: url(${fence});
    z-index: 2;
  }
  &::after {
    content: "";
    position: absolute;
    top: -78px;
    right: left;
    width: var(--fenceWidth);
    height: 5rem;
    background-repeat: repeat-x;
    background-image: url(${fenceO});
    z-index: 3;
  }

  .section-center {
    max-width: 900px;
    margin: 4rem auto;
    display: grid;
    gap: 4rem;
    /* safari workaround */
    grid-row-gap: 4rem;
    grid-column-gap: 6rem;
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
      font-size: 1.2rem;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1000px) {
    padding-top: 5rem;
  }
  @media (min-width: 1200px) {
    --fenceWidth: 20rem;
    //zavrnuti papir
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='350' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%2377371e'/%3E%3Cstop offset='1' stop-color='%23be572f'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
  }
`;

export default About;
