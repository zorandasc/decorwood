import React from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";

const BtnGalery = () => {
  return (
    <Wrapper to="/galerija" className="banner-btn">
      Galerija
    </Wrapper>
  );
};
/*
const showBtn = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`;
*/
//gliter
const gliter = keyframes`
 0% {
    //left:-100%;
    transform:translateX(-100%) skewX(-30deg);
  }

  /* Finish changes by here */
  20% {
     //left:100%;
    transform:translateX(100%) skewX(-30deg);
  }

  /* Between 20% and 100%, nothing changes */
  100% {
     //left:100%;
    transform:translateX(100%) skewX(-30deg);
  }

`;

const Wrapper = styled(Link)`
  font-family: "Kaushan Script", serif;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--clr-primary-5);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 1rem;
  border-radius: 3rem;
  border: 2px solid var(--clr-primary-5);
  color: var(--clr-white);
  box-shadow: var(--dark-shadow);
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
    left: 0;
    transform: skewX(-30deg);
    transition: left 0.5s;
    //delay 4s tek kad se pojavi btn (4s) onda glituj
    animation: ${gliter} 1.8s linear infinite alternate;
  }

  &:hover::before {
    left: 100%;
  }
`;

export default BtnGalery;
