import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";

import Title from "./Title";

const GridProjects = ({ data, title }) => {
  console.log(data);
  return (
    <Wrapper>
      <Title title={title || "projects"} />
      {/*
      <div className="tile-layout">
        {projects.map((project, index) => {
          return (
            <article key={id} className={`div-${index}`}>
              <GatsbyImage className="img" image={image} />
              <div className="info">
                <h3>{name}</h3>
              </div>
            </article>
          );
        })}
      </div>
       */}
      <Link to="/projects" className="btn">
        all projects
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 5rem 0;
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
    grid-template-rows: 300px 300px;
    //za svaki dodatni row
    grid-auto-rows: 300px;
  }

  /*GOTCHA AKO HOCEM DA GATBY IMAGE PLAY NICELY WIDTH DEFINET 300PX  HEIGHT OF ROW
  MORA SE ZA IMG DEFINISATI HEIGHT OD 100%*/
  .img {
    height: 100%;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  article {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    background: var(--clr-primary-7);
    &:hover .img {
      opacity: 0.2;
    }
    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      transition: var(--transition);
      color: var(--clr-white);
      text-align: center;
      opacity: 0;
      p {
        margin-bottom: 0.5rem;
        color: var(--clr-white);
        text-transform: uppercase;
      }
    }
    &:hover .info {
      opacity: 1;
    }
  }
  @media (min-width: 768px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px 250px;
      grid-auto-rows: 250px;
    }
  }
  @media (min-width: 1200px) {
    .tile-layout {
      display: grid;
      grid-template-areas:
        "a b b"
        "a c d";
      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    margin: 0 auto;
    margin-top: 3rem;
    text-align: center;
  }
`;

export default GridProjects;
