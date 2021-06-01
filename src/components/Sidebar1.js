import React, { useContext, useState } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import {
  useSpring,
  useChain,
  useTransition,
  animated,
  config,
  useSpringRef,
} from "react-spring";

import { GatsbyContext } from "../context/context";
import links from "../constants/links";

const Sidebar1 = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(GatsbyContext);
  const [url, setUrl] = useState("");

  const springRef = useSpringRef();
  const transRef = useSpringRef();

  const { size, borWid } = useSpring({
    ref: springRef,
    config: isSidebarOpen ? config.wobbly : config.gentle,
    from: { size: "0%", borWid: "0" },
    to: {
      size: isSidebarOpen ? "70%" : "0%",
      borWid: isSidebarOpen ? "1" : "0",
    },
    onRest: () => {
      //kad zavrsi animacija naviguj
      url && navigate(url);
    },
  });
  const transition = useTransition(isSidebarOpen ? links : [], {
    ref: transRef,
    trail: 400 / links.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(isSidebarOpen ? [springRef, transRef] : [transRef, springRef], [
    0,
    isSidebarOpen ? 0.1 : 0.6,
  ]);

  const handleClick = (url) => {
    //setuj url na koji cemo da odemo nakon animacije, onRest
    setUrl(url);
    //zapoceni promjneu animacije
    toggleSidebar();
  };

  return (
    <Wrapper
      style={{
        height: size,
        borderBottom: borWid.to((b) => `${b}px solid var(--clr-primary-6)`),
      }}
    >
      {transition((style, item) => (
        <animated.li style={{ ...style }}>
          <button onClick={() => handleClick(item.url)}>
            {item.icon}
            {item.label}
          </button>
        </animated.li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(animated.ul)`
  position: fixed;
  right: 0;
  top: 5rem;
  width: 100%;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(
    rgb(0, 0, 0, 0.3),
    rgb(0, 0, 0, 0.7),
    rgb(0, 0, 0)
  );
  border-bottom: 1px solid var(--clr-primary-6);
  z-index: -2;
  box-shadow: var(--dark-shadow);

  button {
    font-family: "Kaushan Script", serif;
    letter-spacing: 5px;
    align-items: center;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    padding: 0.6rem;
    text-transform: capitalize;
    outline: none;
    border: none;
    font-size: 1rem;
    border-radius: 50px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    box-shadow: var(--dark-shadow);
    .icon {
      color: var(--clr-white);
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export default Sidebar1;
