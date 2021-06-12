import React from "react";
import styled from "styled-components";
import { useSprings, animated, config, to } from "react-spring";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
//import Slida from "./Slida";
import SingleSlide from "./SingleSlide";
import slides from "../constants/lists";

//za transliranje i rotiranje slajdova
const trans = (xTrans, r) =>
  `perspective(1000px) translateX(calc(100% * ${xTrans})) rotateY(calc(-45deg * ${r}))`;

const Slider = () => {
  //ne dovodi do rerenderovanja  komponente za razliku od usestate
  const slideIndex = React.useRef(0);
  let current = slideIndex.current;

  const toto = (i) => {
    let offset = slides.length + (current - i);
    return {
      xTrans: offset,
      rot: offset === 0 ? 0 : offset > 0 ? 1 : -1,
      zIndex: offset === 0 ? 100 : 100 - Math.abs(offset),
      pointerEvents: offset === 0 ? "auto" : "none",
      width: offset === 0 ? "100%" : "0%",
    };
  };

  const [springs, api] = useSprings(
    [...slides, ...slides, ...slides].length,
    (i) => ({
      from: { xTrans: 0, rot: 0 },
      ...toto(i),
      config: config.molasses,
    }),
    [current]
  );

  const handleNext = () => {
    current = (current + 1) % slides.length;
    api.start((i) => ({ ...toto(i) }));
  };
  const handlePrev = () => {
    current = current === 0 ? slides.length - 1 : current - 1;
    api.start((i) => ({ ...toto(i) }));
  };

  return (
    <Wrapper>
      <button onClick={handlePrev}>
        <i>
          <GoTriangleLeft></GoTriangleLeft>
        </i>
      </button>
      {springs.map(({ xTrans, rot, zIndex, pointerEvents, width }, i) => {
        let j = i % slides.length;
        return (
          <React.Fragment key={i}>
            <animated.div
              className="bcgImage"
              style={{ backgroundImage: `url(${slides[j].image})`, width }}
            ></animated.div>
            <animated.div
              className="slideWrapper"
              style={{
                zIndex,
                transform: to([xTrans, rot], trans),
              }}
            >
              <SingleSlide
                style={{ pointerEvents }}
                slide={slides[j]}
              ></SingleSlide>
            </animated.div>
          </React.Fragment>
        );
      })}

      <button onClick={handleNext}>
        <i>
          <GoTriangleRight></GoTriangleRight>
        </i>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  .slideWrapper {
    grid-area: 1/-1;
  }
  .bcgImage {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-size: cover;
    background-position: center center;
    z-index: -1;
  }
  button {
    background: var(--colors-light);
    color: var(--colors-text);
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    z-index: 200;

    width: 5rem;
    height: 5rem;
    opacity: 0.7;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.6),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
      -0.5px -0.5px 0px rgba(255, 255, 255, 1),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.01);

    transition: transform 0.5s;
    &:hover {
      box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
        -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(0, 0, 0, 0);

      i {
        transform: scale(0.9);
      }
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      left: 20%;
    }
    &:last-child {
      right: 20%;
    }
    i {
      font-size: 35px;
      color: #777;
      transition: transform 0.5s;
      line-height: 0;
    }
  }
`;

export default Slider;
