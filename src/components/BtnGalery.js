import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const BtnGalery = () => {
  return (
    <Wrapper to="/galerija" className="banner-btn">
      Galerija
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--clr-primary-5);
  text-transform: capitalize;
  letter-spacing: 5px;
  font-size: 1rem;
  border-radius: 3rem;
  border: 2px solid var(--clr-primary-5);
  color: var(--clr-white);
  box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.5);
  //text-shadow: 0.6rem 0.3rem 0.2rem rgba(0, 0, 0, 0.4);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, #fff, transparent);
    position: absolute;
    top: 0;
    left: -100%;
    transform: skewX(-30deg);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

export default BtnGalery;