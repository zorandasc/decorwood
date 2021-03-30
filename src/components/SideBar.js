import React, { useContext } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "gatsby";

import { GatsbyContext } from "../context/context";
import links from "../constants/links";

const SideBar = () => {
  const { hideSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper>
      <div className="container">
        <button onClick={hideSidebar}>
          <MdClose className="icon" />
        </button>
        <div className="links">
          {links.map((link, index) => {
            const { url, label, icon } = link;
            return (
              <Link to={url} key={index} onClick={hideSidebar}>
                {icon}
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media (min-width: 800px) {
    display: none;
  }
  .container {
    background: var(--clr-white);
    width: 85vw;
    height: 75vh;
    border-radius: var(--radius);
    position: relative;
    padding: 3rem 2rem 2rem 2rem;
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-grey-5);
    }
    .links {
      display: grid;
      gap: 3rem 3rem;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      a {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 2rem;
        grid-gap: 2rem;
        align-items: center;
        color: #0a2540;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.2rem;
        .icon {
          color: var(--clr-primary-5);
          font-size: 3rem;
        }
        &:hover {
          color: #88add2;
          .icon {
            color: #0a2540;
          }
        }
      }
    }
  }
`;

export default SideBar;
