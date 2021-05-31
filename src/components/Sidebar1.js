import React, { useContext } from "react";
import { Link } from "gatsby";
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

  const springRef = useSpringRef();
  const transRef = useSpringRef();

  const { size } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "0vh" },
    to: { size: isSidebarOpen ? "70vh" : "0vh" },
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

  return (
    <SideBar style={{ height: size }}>
      {transition((style, item) => (
        <animated.li style={{ ...style }}>
          <Link to={item.url} onClick={toggleSidebar}>
            {item.icon}
            {item.label}
          </Link>
        </animated.li>
      ))}
    </SideBar>
  );
};

const SideBar = styled(animated.ul)`
  position: fixed;
  right: 0;
  top: 5rem;
  width: 100%;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: -2;
  a {
    align-items: center;
    color: var(--clr-primary-5);
    background-color: var(--clr-black);
    padding: 0.6rem;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 1rem;
    border: 1px solid var(--clr-black);
    border-radius: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .icon {
      color: var(--clr-primary-5);
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export default Sidebar1;
