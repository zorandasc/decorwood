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
    //background: var(--clr-white);
    background-color: #383838;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fdd4bf' fill-opacity='0.26' fill-rule='nonzero'%3E%3Cpath d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 85vw;
    height: 75vh;
    border-radius: var(--radius);
    position: relative;
    //padding: 3rem 2rem 2rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-primary-5);
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
        color: var(--clr-primary-5);
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.2rem;
        border-bottom: 1px solid black;
        .icon {
          color: var(--clr-primary-5);
          font-size: 3rem;
          margin-bottom: 0.5rem;
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
