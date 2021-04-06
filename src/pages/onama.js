import React from "react";
import styled from "styled-components";

import { Layout, SEO } from "../components";
//import img from "../images/contact-us-bg.png";
import img from "../images/gift.jpg";

const Onama = () => {
  return (
    <Layout>
      <SEO title="O nama"></SEO>
      <Wrapper>
        <h1 className="heading">O nama</h1>
        <div className="center">
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </article>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0 12rem 0;
  text-align: center;
  background: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .heading {
    margin-bottom: 5rem;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: var(--clr-white);
    text-shadow: 0 1rem 2rem #000;
  }

  .center {
    color: var(--clr-white);
    width: 90%;
    max-width: 1000px;
    height: 40rem;
    font-size: 1.5rem;
    padding: 2rem 1rem;

    margin: auto;
    flex-direction: column;
    box-shadow: var(--dark-shadow);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
    transition: var(--transition);
    &:before {
      content: "";
      position: absolute;
      background: inherit;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
      filter: blur(10px);
      margin: -20px;
    }
    &:hover {
      box-shadow: var(--up-shadow);
    }
  }

  @media (min-width: 768px) {
    padding: 12rem 0 20rem 0;
    .heading {
      font-size: 6rem;
      margin-bottom: 6rem;
    }
    .center {
      font-size: 1.8rem;
      padding: 4rem;
    }
  }
  @media (min-width: 992px) {
    .center {
      width: 80%;
      height: 37rem;
    }
  }
  @media (min-width: 1600px) {
  }
`;

export default Onama;
