import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled, { keyframes } from "styled-components";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";

import { BtnGalery, CesticeHome } from "./index";

const Hero = () => {
  return (
    <Wrapper>
      <CesticeHome></CesticeHome>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        className="bcg"
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio=""
        // This is a presentational image, so the alt should be an empty string
        alt=""
        placeholder="blurred"
        src={"../images/hero.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div className="content">
        {/* Any content here will be centered in the component */}
        <article>
          <Rotate top right>
            <p lang="en">If you can dream it we can created</p>
          </Rotate>
          <Rotate>
            <div className="divider div-transparent div-dot"></div>
          </Rotate>
          <Rotate bottom left>
            <h1>Dekorativni predmeti od drveta</h1>
          </Rotate>
          <Bounce bottom delay={800}>
            <BtnGalery></BtnGalery>
          </Bounce>
        </article>
      </div>
    </Wrapper>
  );
};
/*
const lowerHead = keyframes`
  from{
    transform: translateY(-500px);
  }
  to{
    transform: translateY(0px);
  }
`;

const lowerSub = keyframes`
  from{
    transform: translateY(-500px);
  }
  to{
    transform: translateY(0px);
  }
`;

const showDivider = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`;

//wraper animation to black
/*
const fadeIn = keyframes`
  from{
    background-color:rgb(0,0,0,0.8);
  }
  to{
    background-color:rgba(0,0,0,0.4);
  }
`;

//image animation to scale down
*/
const scale = keyframes`
 from{
    transform:scale(1.3);
  }
  to{
    transform:scale(1);
  }
`;

const Wrapper = styled.section`
  display: grid;
  overflow: hidden;
  position: relative;
  .bcg {
    //inicijalna pozicija
    transform: scale(1.3);
    //nakon sto se sppuste heading i subheading 2s
    //i btn 2s
    //zapocni animaciju skaliranja u trajanju pod 10s
    //i zadrsi zadnju anumiranu vrijedmnost sa forwards
    animation: ${scale} 10s ease-in-out 1s forwards;
    animation-iteration-count: 1;
    grid-area: 1/1;
    // You can set a maximum height for the image, if you wish.
    // maxHeight: 600,
    min-height: 100vh;
    max-height: 100vh;
  }

  .content {
    // By using the same grid area for both, they are stacked on top of each other
    grid-area: 1/1;
    position: relative;
    // This centers the other elements inside the hero component
    place-items: center;
    display: grid;
    background-color: rgba(0, 0, 0, 0.4);
    //FADE IN BACKGROUND TO BLACK

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
        margin: 2rem 0 3rem 0;
        letter-spacing: 3px;
        text-shadow: var(--text-shadow2);
      }
      p {
        color: var(--clr-white);
        font-weight: 600;
        font-family: var(--ff-ternary);
        letter-spacing: 4px;
        text-transform: capitalize;
        line-height: 1.25;
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
        text-shadow: var(--text-shadow2);
      }
      .divider {
        position: relative;
        margin-top: 30px;
        height: 1px;
      }
      .div-transparent:before {
        content: "";
        position: absolute;
        top: 0;
        left: 5%;
        right: 5%;
        width: 90%;
        height: 1px;
        background-image: linear-gradient(
          to right,
          transparent,
          white,
          transparent
        );
      }
      .div-dot:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: -9px;
        left: calc(50% - 9px);
        width: 18px;
        height: 18px;
        background-color: var(--clr-primary-5);
        border: 1px solid white;
        border-radius: 50%;
        box-shadow: inset 0 0 0 2px white, 0 0 0 6px white;
      }

      @media (min-width: 800px) {
        a {
          font-size: 1.25rem;
          padding: 0.5rem 1.25rem;
        }
        h1 {
          letter-spacing: 5px;
        }
        p {
          font-size: 1.75rem;
        }
      }
    }
  }
`;

export default Hero;
