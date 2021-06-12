import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";

//import image from "../images/hero.jpg";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 10;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 10;

const SingleSlide = ({ style, slide }) => {
  const { pointerEvents, opacity } = style;
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);
    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);

  const [{ x, y, rotateX, rotateY, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) => {
        !dragging &&
          api.start({
            rotateX: calcX(py, y.get()),
            rotateY: calcY(px, x.get()),
            scale: 1.1,
          });
      },
      onHover: ({ hovering }) =>
        !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <>
      <Card
        ref={domTarget}
        style={{
          transform: "perspective(1000px)",
          x,
          y,
          scale,
          rotateX,
          rotateY,
          pointerEvents,
        }}
      >
        <div
          className="cardImage"
          style={{ backgroundImage: `url(${slide?.image})` }}
        ></div>
        <animated.div className="slideContentInner" style={{ opacity }}>
          <h2 className="slideTitle">title</h2>
          <h3 className="slideSubtitle">subtitle</h3>
          <p className="slideDescription">description</p>
        </animated.div>
      </Card>
    </>
  );
};

const Card = styled(animated.div)`
  display: grid;
  align-items: center;
  width: 300px;
  height: 400px;
  background: transparent;
  border-radius: 10px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  will-change: transform;
  cursor: grab;
  transform-style: preserve-3d;
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
  .cardImage {
    border-radius: 10px;
    grid-area: 1/-1;
    background-size: cover;
    background-position: center center;
    will-change: transform;
    height: 100%;
    margin: 0;
  }
  .slideContentInner {
    grid-area: 1/-1;
    transform-style: preserve-3d;
    transform: translateZ(4rem);
    text-shadow: 0 0.1rem 1rem #000;
    opacity: 1;
    .slideSubtitle,
    .slideTitle {
      color: whitesmoke;
      font-size: 2rem;
      font-weight: normal;
      letter-spacing: 0.2ch;
      text-transform: uppercase;
      margin: 0;
    }
    .slideSubtitle::before {
      content: "— ";
    }
    .slideDescription {
      color: whitesmoke;
      margin: 0;
      font-size: 0.8rem;
      letter-spacing: 0.2ch;
    }
  }
`;

export default SingleSlide;
