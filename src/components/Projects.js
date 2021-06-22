import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Roll from "react-reveal/Roll";

import SearchButtons from "./SearchButtons";
import isTouchScreendevice from "../tools/isTouchScreendevice";

const Projects = ({ projects: data }) => {
  const [projects, setProjects] = useState(data);
  const [{ showLightbox, currentImage, imageNumber }, setLightbox] = useState({
    showLightbox: false,
    currentImage: null,
    imageNumber: 0,
  });

  const setBackToAll = () => {
    setProjects(data);
  };

  return (
    <Wrapper className="section">
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
            <div
              className="article"
              key={id}
              onClick={() =>
                setLightbox({
                  showLightbox: true,
                  currentImage: gatsImage,
                  imageNumber: itemNum,
                })
              }
              onKeyDown={() =>
                setLightbox({
                  showLightbox: true,
                  currentImage: gatsImage,
                  imageNumber: itemNum,
                })
              }
              role="button"
              tabIndex="0"
            >
              <GatsbyImage className="img" image={gatsImage} alt={category} />
              <div className="ribbon-wrapper-8">
                <div className="ribbon-8">{itemNum}</div>
              </div>
            </div>
          );
        })}
      </div>
      {!isTouchScreendevice() && showLightbox && (
        <div className="dialog">
          <Roll top>
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
              <div className="ribbon-wrapper-8">
                <div className="ribbon-8">{imageNumber}</div>
              </div>
            </div>
          </Roll>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-top: 0;
  background: var(--clr-grey-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tile-layout {
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 2rem auto 6rem auto;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
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
    border-radius: var(--radius);
    cursor: pointer;
    will-change: width, height;
    &:hover {
      box-shadow: var(--up-shadow);
      transform: ${isTouchScreendevice() ? `scale(1)` : `scale(1.1)`};
    }
  }
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
      position: relative;
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
  @media (min-width: 768px) {
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
