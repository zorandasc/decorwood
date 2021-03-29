import React from "react";
//import BackGround from './BackGround'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled, { keyframes } from "styled-components";
import Cloud from "./Cloud";

const Hero = () => {
  return (
    <Wrapper>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        className="bcg"
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio=""
        // This is a presentational image, so the alt should be an empty string
        alt=""
        placeholder="blurred"
        src={"../images/law.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div className="content">
        {/* Any content here will be centered in the component */}
        <article>
          <h3>If you can dream it we can created</h3>
          <h1>Jedinstveni i unikatni predmeti od drveta</h1>
          <Link to="/galerija" className="banner-btn">
            Galerija
          </Link>
        </article>
      </div>
      <Cloud></Cloud>
    </Wrapper>
  );
};

//wraper animation to black
const fadeIn = keyframes`
  from{
    background-color:rgb(0,0,0,0.8);
  }
  to{
    background-color:rgba(0,0,0,0.4);
  }

`;

//image animation to scale down
const scale = keyframes`
  0%{
    transform:scale(1.3);
  }
  100%{
    transform:scale(1);
  }

`;

const Wrapper = styled.section`
  display: grid;
  overflow: hidden;
  position: relative;
  .bcg {
    animation: ${scale} 10s ease-in-out 1.5;
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
        text-shadow: var(--text-shadow);
      }
      h3 {
        font-weight: 400;
        font-family: "Caveat", cursive;
        text-shadow: var(--text-shadow);
      }
      .banner-btn {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: var(--clr-primary-5);
        text-transform: capitalize;
        letter-spacing: 5px;
        font-size: 1rem;
        border-radius: 3rem;
        border: 2px solid var(--clr-primary-5);
        color: var(--clr-white);
        box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.5);
        //text-shadow: 0.6rem 0.3rem 0.2rem rgba(0, 0, 0, 0.4);
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .banner-btn::before {
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent, #fff, transparent);
        position: absolute;
        top: 0;
        left: -100%;
        transform: skewX(-30deg);
        transition: left 0.5s;
      }

      .banner-btn:hover::before {
        left: 100%;
      }
      /*
      a:hover {
        background: var(--clr-white);
        color: var(--clr-black);
      }
      */
      @media (min-width: 800px) {
        a {
          font-size: 1.25rem;
          padding: 0.5rem 1.25rem;
        }
        h1 {
          letter-spacing: 5px;
        }
      }
    }
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
`;

export default Hero;
