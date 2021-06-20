import React from "react";
import styled from "styled-components";
import cloud1 from "../images/clouds/cloud1.png";
import cloud2 from "../images/clouds/cloud2.png";
import cloud3 from "../images/clouds/cloud3.png";
import cloud4 from "../images/clouds/cloud4.png";
import cloud5 from "../images/clouds/cloud5.png";

//TRENUTNO SE NIGDJE NE KORISTI
const Cloud = ({ className }) => {
  return (
    <div className={className}>
      <img src={cloud1} style={{ "--i": "1" }} alt="cloud" />
      <img src={cloud2} style={{ "--i": "2" }} alt="cloud" />
      <img src={cloud3} style={{ "--i": "3" }} alt="cloud" />
      <img src={cloud4} style={{ "--i": "4" }} alt="cloud" />
      <img src={cloud5} style={{ "--i": "5" }} alt="cloud" />
    </div>
  );
};

export default styled(Cloud)`
  --speed: 8s;
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    position: absolute;
    bottom: 0px;
    height: 35%;
    max-width: 100%;
    animation: animate calc(var(--speed) * var(--i)) linear infinite;
  }
  @keyframes animate {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  @media screen and (min-width: 876px) {
    --speed: 20s;
    bottom: -100px;
    img {
      height: initial;
    }
  }
`;
