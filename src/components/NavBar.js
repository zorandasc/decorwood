import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { HideOn } from "react-hide-on-scroll";

import { GatsbyContext } from "../context/context";
import logo from "../images/logo_white.svg";
import links from "../constants/links";
import isTouchScreendevice from "../tools/isTouchScreendevice";

const NavBar = () => {
  const { toggleSidebar } = useContext(GatsbyContext);

  return (
    <Wrapper>
      {/*Shown navbar bcg on offset while scrolling for different device px*/}
      <HideOn inverse height={isTouchScreendevice() ? 100 : 300}>
        <div className="wrapperBcg"></div>
      </HideOn>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="design" width="200" height="36"></img>
          </Link>

          <button
            className="toggle-btn"
            aria-label="Menu Button"
            onClick={toggleSidebar}
          >
            <GoThreeBars></GoThreeBars>
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link, index) => {
            const { url, label } = link;
            return (
              <Link to={url} key={index} className="links">
                {label}
              </Link>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: transparent;
  z-index: 101;
  height: 5rem;
  display: flex;
  align-items: center;
  .wrapperBcg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-image: linear-gradient(
      rgb(0, 0, 0),
      rgb(0, 0, 0, 0.7),
      rgb(0, 0, 0, 0.3)
    );
    z-index: -1;
    height: 5rem;
    border-bottom: 1px solid var(--clr-primary-6);
    box-shadow: var(--dark-shadow);
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
    img {
      width: auto;
      transform: scale(1.4);
      padding-bottom: 0.5rem;
    }
    .toggle-btn {
      z-index: 101;
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-header {
      img {
        transform: scale(1.4);
      }
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 700px;
      margin-left: 2rem;
      .links {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--clr-white);
        background: transparent;
        border: transparent;
        font-size: 1rem;
        letter-spacing: 2px;
        font-weight: 500;
        padding: 10px 20px;
        width: 100%;
        text-transform: capitalize;
        position: relative;
        transition: var(--transition);
      }
      .links:hover {
        transform: rotate(-4deg);
        box-shadow: 4px 6px 5px 0px var(--clr-grey-9);
      }
    }
  }
  @media (min-width: 1200px) {
    .nav-header {
      img {
        transform: scale(1.6);
      }
    }
  }
`;
