import React, { useContext } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import {
  useSpring,
  useChain,
  useTransition,
  animated,
  config,
  useSpringRef,
} from "@react-spring/web";

import { GatsbyContext } from "../context/context";
import links from "../constants/links";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(GatsbyContext);

  const url = React.useRef("");

  const springRef = useSpringRef();
  const transRef = useSpringRef();

  const { y } = useSpring({
    ref: springRef,
    config: config.gentle,
    from: { y: "-150%" },
    to: {
      y: isSidebarOpen ? "0%" : "-150%",
    },
    onRest: () => {
      //kad zavrsi animacija naviguj
      url.current && navigate(url.current);
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
    isSidebarOpen ? 0.1 : 0.2,
  ]);

  const handleClick = (address) => {
    //setuj url na koji cemo da odemo nakon animacije, onRest
    //setUrl(url);
    url.current = address;
    //zapoceni promjneu animacije
    toggleSidebar();
  };

  return (
    <Wrapper
      style={{
        y,
        borderBottom: `1px solid var(--clr-primary-5)`,
        borderTop: `1px solid var(--clr-primary-5)`,
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
  height: 70%;
  z-index: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(
    rgb(0, 0, 0, 0.3),
    rgb(0, 0, 0, 0.7),
    rgb(0, 0, 0)
  );
  border-bottom: 1px solid var(--clr-primary-5);
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

export default Sidebar;
