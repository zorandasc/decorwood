import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import links from "../constants/links";

const Footer = () => {
  return (
    <Wrapper>
      <ul className="footer-list">
        {links.map((link, index) => {
          const { url, label } = link;
          return (
            <Link to={url} key={index} className="footer-link">
              {label}
            </Link>
          );
        })}
      </ul>
      <p>
        &copy; {new Date().getFullYear()} zorandsc. All rights reserved.
        DecorWood
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
      transition: var(--transition);
    }
    .footer-link:hover {
      transform: rotate(-10deg);
      box-shadow: 0 2rem 3rem #000;
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
