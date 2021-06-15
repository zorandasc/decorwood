import React from "react";
import styled from "styled-components";

import Slider from "./Slider";
import Deck from "./Deck";
import Title from "./Title2";
import BtnGalery from "./BtnGalery";
import whiteCloud from "../images/cloudWhite.svg";
import wood from "../images/wood.jpg";

const SliderWrapper = ({ projects }) => {
  return (
    <Wrapper>
      <Title
        subtitle="Mi volimo to što radimo"
        title="Pogledajte naša najnovija izdanja"
        invertColor={true}
        shadow={true}
      ></Title>
      <Deck projects={projects}></Deck>
      <Slider projects={projects}></Slider>

      <BtnGalery></BtnGalery>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;
  background-image: url(${wood});
  overflow-x: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
  @media (min-width: 1000px) {
    background-image: none;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${whiteCloud});
    background-repeat: repeat-x;
    top: -2px;
    left: 0;
    width: 100%;
    height: 8rem;
  }
`;

export default SliderWrapper;
