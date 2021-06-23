import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

import { Slider, Deck, Title, BtnGalery } from "./index";
import whiteCloud from "../images/cloudWhite.svg";

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
      <StaticImage
        //THIS IS ONLY FOR MOBILE BACKGROUND WOOD IMAGE
        className="bcg"
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio=""
        // This is a presentational image, so the alt should be an empty string
        alt=""
        placeholder="blurred"
        src={"../images/wood.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <VisibilitySensor onChange={onChange}>
        <Title
          subtitle="Mi volimo to što radimo"
          title="Pogledajte naša najnovija izdanja"
          invertColor={true}
          shadow={true}
          color="var(--clr-primary-7)"
        ></Title>
      </VisibilitySensor>
      {titleVisible && <Deck projects={projects}></Deck>}
      <Slider projects={projects}></Slider>
      <BtnGalery></BtnGalery>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  .bcg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    @media (min-width: 1000px) {
      display: none;
    }
  }
  @media (min-width: 1000px) {
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
