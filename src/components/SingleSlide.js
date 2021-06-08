import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "react-spring";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";

import image from "../images/hero.jpg";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 10;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 10;

const SingleSlide = () => {
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

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      zoom: 0,
      scale: 1,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) => {
        //console.log("px", px, "py", py);
        //console.log("x", x.get(), "y", y.get());
        //console.log(window.innerWidth);
        //console.log("x - lx ", px - x.get());
        //console.log("window.innerWidth / 2", window.innerWidth / 2);
        console.log(
          "x - lx - window.innerWidth / 2",
          px - x.get() - window.innerWidth / 2
        );
        !dragging &&
          api({
            rotateX: calcX(py, y.get()),
            rotateY: calcY(px, x.get()),
            scale: 1.1,
          });
      },
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <Container>
      <animated.div
        ref={domTarget}
        className="card"
        style={{
          transform: "perspective(600px)",
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateZ,
          rotateY,
        }}
      >
        <div style={{ backgroundImage: `url(${image})` }}></div>
      </animated.div>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid lime;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    position: relative;
    width: 400px;
    height: 400px;
    background: transparent;
    border-radius: 5px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s, opacity 0.5s;
    will-change: transform;
    cursor: grab;
    overflow: hidden;
    touch-action: none;
    &:hover {
      box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }
    & > div {
      background-size: cover;
      background-position: center center;
      will-change: transform;
      height: 100%;
      margin: 0;
    }
  }
`;

export default SingleSlide;
