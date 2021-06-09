import React from "react";
import styled from "styled-components";

//import Slida from "./Slida";
import SingleSlide from "./SingleSlide";
import slides from "../constants/lists";

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

const Slider = () => {
  const [state, dispath] = React.useReducer(slidesReducer, initialState);
  return (
    <Wrapper>
      <button onClick={() => dispath({ type: "PREV" })}>PREV</button>
      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return (
          <SingleSlide slide={slide} offset={offset} key={i}></SingleSlide>
        );
      })}

      <button onClick={() => dispath({ type: "NEXT" })}>NEXT</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
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
