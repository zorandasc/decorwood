import React from "react";
import styled from "styled-components";

import Slider from "./Slider";
import Title from "./Title2";
import BtnGalery from "./BtnGalery";
import whiteCloud from "../images/cloudWhite.svg";

const SliderWrapper = ({ projects }) => {
  return (
    <Wrapper>
      <Title
        subtitle="Mi volimo to što radimo"
        title="Pogledajte naša najnovija izdanja"
        invertColor={true}
        shadow={true}
      ></Title>

      <Slider projects={projects}></Slider>

      <BtnGalery></BtnGalery>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  text-align: center;
  display: none;
  @media (min-width: 1000px) {
    display: block;
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
