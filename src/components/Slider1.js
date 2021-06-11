import React from "react";
import styled from "styled-components";
import { useSprings, animated, config, to } from "react-spring";

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
      <button onClick={handlePrev}>PREV</button>
      {springs.map(({ xTrans, rot, zIndex, pointerEvents }, i) => {
        return (
          <animated.div
            key={i}
            className="slideWrapper"
            style={{
              zIndex,
              transform: to([xTrans, rot], trans),
            }}
          >
            <SingleSlide style={{ pointerEvents }}></SingleSlide>
          </animated.div>
        );
      })}

      <button onClick={handleNext}>NEXT</button>
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
  button {
    background: tomato;
    border: none;
    color: whitesmoke;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 200;
    width: 5rem;
    height: 5rem;
    opacity: 0.7;
    transition: opacity 0.3s;
    font-size: 1.5rem;
    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }
`;

export default Slider;
