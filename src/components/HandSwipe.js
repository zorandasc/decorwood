import React from "react";
import { useSpring, useChain, animated, useSpringRef } from "@react-spring/web";
import {
  FaHandPointer,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const HandSwipe = () => {
  const n = React.useRef(0);

  //inicijalno prikazi ruku
  //sa zakasnjenjem od 3s, da se saceka pojava svih karata
  //spring za prikazivanje ruke
  const appearRef = useSpringRef();
  const [{ o }, api] = useSpring(() => ({
    from: { o: 0 },
    to: { o: 1 },
    delay: 3000,
    ref: appearRef,
  }));

  //spring za lupiranje 6 puta
  const loopRef = useSpringRef();
  const { x, opacity } = useSpring({
    loop: () => {
      if (6 < n.current++) {
        //nakon zavrestka petlje
        //ukloni ruku
        api.start({ o: 0 });
        return false;
      }
      return { reverse: true };
    },
    from: { x: -100, opacity: 0 },
    to: { x: 100, opacity: 1 },
    delay: 400,
    ref: loopRef,
  });

  useChain([appearRef, loopRef]);

  return (
    <animated.div
      style={{
        position: "absolute",
        bottom: "-2rem",
        width: "100%",
        height: "2rem",
        zIndex: "10",
        fontSize: "2.5rem",
        color: "var( --clr-white)",
        x,
        opacity: o.to((o) => `${o}`),
      }}
    >
      <animated.i style={{ opacity: opacity.to([0, 1], [1, 0]) }}>
        <FaAngleDoubleLeft></FaAngleDoubleLeft>
      </animated.i>
      <i>
        <FaHandPointer></FaHandPointer>
      </i>
      <animated.i style={{ opacity }}>
        <FaAngleDoubleRight></FaAngleDoubleRight>
      </animated.i>
    </animated.div>
  );
};

export default HandSwipe;
