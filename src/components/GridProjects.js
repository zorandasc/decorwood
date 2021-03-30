import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

//import Title from "./Title";
import Title from "./Title2";
import BtnGalery from "./BtnGalery";

const GridProjects = ({ projects, title }) => {
  return (
    <Wrapper>
      {/*<Title title={title || "projects"} />*/}
      <Title
        subtitle="Mi volimo to što radimo"
        title="Naša najnovija izdanja"
      ></Title>

      <div className="tile-layout">
        {projects.map((project, index) => {
          const { id, category, image, itemNum } = project;
          console.log(itemNum);
          const gatsImage = getImage(image);
          return (
            <article key={id} className={`div-${index}`}>
              <GatsbyImage className="img" image={gatsImage} alt={category} />
              <div className="info">
                <h3>{category}</h3>
              </div>
            </article>
          );
        })}
      </div>
      <BtnGalery></BtnGalery>
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
  }
  @media (min-width: 768px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr;
      //grid-template-rows: 250px 250px;
      //grid-auto-rows: 250px;
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
    margin-top: 6rem;
    text-align: center;
  }
`;

export default GridProjects;
