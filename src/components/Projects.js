import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SearchButtons from "./SearchButtons";
import img from "../images/patternpad.svg";

const Projects = ({ projects: data, title }) => {
  const [projects, setProjects] = React.useState(data);

  const setBackToAll = () => {
    setProjects(data);
  };

  return (
    <Wrapper className="section">
      <div className="header">
        <h1>Galerija</h1>
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
            <article key={id}>
              <GatsbyImage className="img" image={gatsImage} alt={category} />
              <div className="info">
                <h3>{category}</h3>
              </div>
              <span className="broj">{itemNum}</span>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 0;
  background: var(--clr-grey-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    height: 40vh;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    background-image: url(${img});
    color: var(--clr-white);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
      text-shadow: var(--text-shadow);
    }
  }
  .tile-layout {
    margin-top: 2rem;
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
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
    height: 100%;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  article {
    margin-right: 0.5rem;
    transition: var(--transition);
    box-shadow: var(--dark-shadow);
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    cursor: pointer;
    &:hover {
      // transform: translateY(-0.5rem);
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
      transform: translateY(50%);
      width: 100%;
      height: 100%;
      transition: var(--transition);
      color: var(--clr-white);
      background-image: linear-gradient(
        transparent,
        transparent,
        rgb(186, 93, 44)
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
      transform: translateY(0%);
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
      height: 50vh;
    }
    article {
      margin-right: 0;
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
