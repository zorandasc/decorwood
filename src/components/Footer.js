import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import links from "../constants/links";
import blackCloud from "../images/cloudBlack.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-list">
        {links.map((link, index) => {
          const { url, label } = link;
          return (
            <Link to={url} key={index} className="footer-link">
              {label}
            </Link>
          );
        })}
      </div>
      <p>
        &copy; Copyright {new Date().getFullYear()} zorandsc. All rights
        reserved. DecorWood
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-black);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 4rem;
  position: relative;
  &::before {
    content: "";
    color: white;
    position: absolute;
    background-image: url(${blackCloud});
    background-repeat: repeat-x;
    top: -4.9rem;
    left: 0;
    width: 100%;
    height: 5rem;
  }
  .footer-list {
    padding-bottom: 2rem;
    .footer-link {
      display: inline-block;
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      color: var(--clr-white);
      margin: 1rem 2rem;
      background: var(--clr-black);
      box-shadow: 0 2rem 3rem #000;
      transition: var(--transition);
    }
    .footer-link:hover {
      transform: rotate(-10deg);
    }
  }
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`;

export default Footer;
