import React from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

import { Slider, Deck, Title, BtnGalery } from "./index";
import whiteCloud from "../images/cloudWhite.svg";
import wood from "../images/wood.jpg";

const SliderWrapper = ({ projects }) => {
  const [titleVisible, settitleVisible] = React.useState(false);

  function onChange(isVisible) {
    //kada title postane visible pokazi deck of card
    //ali samo jednom, odnsono samo tokom svakog renderovanja
    // kompononte odnosno prvog visiblblirnanja titla
    // ponovno nestajanje title nece ponovo
    //da dovede do prikazivanja decka i ruke, odnosno sve ostaje isto
    isVisible ? settitleVisible(true) : settitleVisible(titleVisible);
  }

  return (
    <Wrapper>
      <VisibilitySensor onChange={onChange}>
        <Title
          subtitle="Mi volimo to što radimo"
          title="Pogledajte naša najnovija izdanja"
          invertColor={true}
          shadow={true}
        ></Title>
      </VisibilitySensor>
      {titleVisible && <Deck projects={projects}></Deck>}
      {titleVisible && <Slider projects={projects}></Slider>}
      <BtnGalery></BtnGalery>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;
  background-image: url(${wood});
  overflow: hidden;
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
