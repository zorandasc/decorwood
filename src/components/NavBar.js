import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";

import { GatsbyContext } from "../context/context";
import logo from "../images/logo_white.svg";
import links from "../constants/links";

const NavBar = () => {
  const { isSidebarOpen, showSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="design"></img>
          </Link>
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={showSidebar}>
              <GoThreeBars></GoThreeBars>
            </button>
          )}
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
  //background: transparent;
  background-image: linear-gradient(
    rgb(0, 0, 0),
    rgb(0, 0, 0, 0.5),
    rgb(0, 0, 0, 0.1)
  );
  z-index: 101;
  height: 5rem;
  display: flex;
  align-items: center;
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
    img {
      width: auto;
      transform: scale(1.2);
      padding-bottom: 0.5rem;
    }
    .toggle-btn {
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
