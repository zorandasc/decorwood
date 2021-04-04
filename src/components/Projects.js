import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useSpring, animated, config } from "react-spring";

import SearchButtons from "./SearchButtons";
import Wave from "../components/Wave";

const Projects = ({ projects: data, title }) => {
  const [projects, setProjects] = useState(data);
  const [{ showLightbox, currentImage }, setLightbox] = useState({
    showLightbox: false,
    currentImage: null,
  });

  const setBackToAll = () => {
    setProjects(data);
  };

  return (
    <Wrapper className="section">
      <div className="header">
        <div className="title">
          <h1>Galerija</h1>
        </div>
        <Wave></Wave>
      </div>

      <SearchButtons
        projects={data}
        setProjects={setProjects}
        setBackToAll={setBackToAll}
      ></SearchButtons>

      <div className="tile-layout">
        {projects.map((project, index) => {
          const { id, category, itemNum, image } = project;
          const gatsImage = getImage(image);
          return (
            <animated.div
              className="article"
              key={id}
              onClick={() =>
                setLightbox({
                  showLightbox: true,
                  currentImage: gatsImage,
                })
              }
              onKeyDown={() =>
                setLightbox({
                  showLightbox: true,
                  currentImage: gatsImage,
                })
              }
              role="button"
              tabIndex="0"
            >
              <GatsbyImage className="img" image={gatsImage} alt={category} />
              <div className="info">
                <h3>{category}</h3>
              </div>
              <span className="broj">{itemNum}</span>
            </animated.div>
          );
        })}
      </div>
      {showLightbox && (
        <div className="dialog">
          <div className="dialogContent">
            <GatsbyImage
              className="img"
              image={currentImage}
              alt="image"
              onClick={() =>
                setLightbox({
                  showLightbox: false,
                  currentImage: null,
                })
              }
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  padding-top: 0;

  background: var(--clr-grey-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dialog {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 105;

    .dialogContent {
      cursor: pointer;
      width: 70vw;
      max-width: 900px;
      height: 88vh;
      margin: 10vh auto;
      background: #fff;
      padding: 1rem;
      outline: none;
      border-radius: var(--radius);
      .img {
        transform: scale(1);
      }
    }
  }
  .header {
    position: relative;
    height: 40vh;
    width: 100%;
    background-color: var(--clr-black);
    //POZADINSKA MREZA
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%23f2ad88' fill-opacity='0.28'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      z-index: 10;
      margin-top: 2rem;
      color: var(--clr-primary-8);
      background-color: var(--clr-black);
      padding: 0.7rem;
      border-radius: 3rem;
      border: 2px solid var(--clr-primary-8);
    }
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1;
      letter-spacing: 3px;
      margin: 0;
    }
  }
  .tile-layout {
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 2rem auto 6rem auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    //definise dva rowa visine 300px
    //u ovom slucaju to su articly
    grid-template-rows: 350px 350px;
    //za svaki dodatni row
    grid-auto-rows: 350px;
  }

  /*GOTCHA AKO HOCEM DA GATBY IMAGE PLAY NICELY WIDTH DEFINET 300PX  HEIGHT OF ROW
  MORA SE ZA IMG DEFINISATI HEIGHT OD 100%*/
  .img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .article {
    margin-right: 0.5rem;
    transition: var(--transition);
    box-shadow: var(--dark-shadow);
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    cursor: pointer;
    will-change: width, height;
    &:hover {
      box-shadow: var(--up-shadow);
    }
    &:hover .img {
      //opacity: 0.2;
      transform: scale(1.1);
    }
    .info {
      position: absolute;
      top: 0%;
      left: 0%;
      transform: translateY(0%);
      width: 100%;
      height: 100%;
      transition: var(--transition);
      color: var(--clr-white);
      background-image: linear-gradient(
        transparent,
        transparent,
        var(--clr-black)
      );
      text-align: center;
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      transition: var(--transition);
      p {
        margin-bottom: 0.5rem;
        color: var(--clr-white);
        text-transform: uppercase;
      }
    }
    &:hover .info {
      transform: translateY(50%);
    }
    .broj {
      position: absolute;
      left: 0;
      top: 10%;
      background: var(--clr-primary-5);
      color: var(--clr-white);
      padding: 0.4rem 0.5rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
  @media (min-width: 768px) {
    .header {
      height: 60vh;
      .title {
        margin-top: 0;
        margin-bottom: 4rem;
      }
    }
    .article {
      margin-right: 0;
      .info {
        padding: 0.5rem;
      }
    }
    .tile-layout {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .header {
      height: 65vh;
    }
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr;
      //grid-template-rows: 350px 350px;
      //grid-auto-rows: 350px;
    }
  }
  @media (min-width: 1600px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export default Projects;
