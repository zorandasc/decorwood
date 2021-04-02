import React from "react";
import styled from "styled-components";

//import Title from "./Title";
import Title from "./Title2";

//FLIP CARD GALERY
const LatestGalery = () => {
  return (
    <Wrapper className="section">
      <Title
        subtitle="Mi volimo to što radimo"
        title="Pogledajte naša najnovija izdanja"
        invertColor={true}
      ></Title>
      <div className="flip-cards">
        <div className="flip-card-container" style={{ "--hue": "220" }}>
          <div className="flip-card">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                {/* <img alt="Uskrsne dekoracije"></img>*/}
                <figcaption>Uskrsne dekoracije</figcaption>
              </figure>

              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 4</li>
                <li>Detail 5</li>
              </ul>
            </div>

            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                {/*   <img  alt="Brohm Lake"></img>*/}
              </figure>

              <button>Više</button>

              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card-container" style={{ "--hue": "170" }}>
          <div className="flip-card">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                {/*
                <img  alt="Uskrsne dekoracije"></img>*/}
                <figcaption>Uskrsne dekoracije</figcaption>
              </figure>

              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 4</li>
                <li>Detail 5</li>
              </ul>
            </div>

            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                {/* <img alt="Uskrsne dekoracije"></img>*/}
              </figure>

              <button>Više</button>

              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card-container" style={{ "--hue": "350" }}>
          <div className="flip-card">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                {/* <img  alt="Uskrsne dekoracije"></img>*/}
                <figcaption>Uskrsne dekoracije</figcaption>
              </figure>

              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 4</li>
                <li>Detail 5</li>
              </ul>
            </div>

            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                {/* <img  alt="Uskrsne dekoracije"></img>*/}
              </figure>
              <button>Više</button>
              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: hsl(220, 10%, 12%);
  .flip-cards {
    min-height: 100vh;
    padding: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  /* .flip-card-container */
  .flip-card-container {
    --hue: 150;
    --primary: hsl(var(--hue), 50%, 50%);
    --white-1: hsl(0, 0%, 90%);
    --white-2: hsl(0, 0%, 80%);
    --dark: hsl(var(--hue), 25%, 10%);
    --grey: hsl(0, 0%, 50%);
    width: 310px;
    height: 500px;
    margin: 40px;
    perspective: 1000px;
  }
  /* .flip-card */
  .flip-card {
    width: inherit;
    height: inherit;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.6s 0.1s;
  }
  /* hover and focus-within states */
  .flip-card-container:hover .flip-card,
  .flip-card-container:focus-within .flip-card {
    transform: rotateY(180deg);
  }
  /* .card-... */
  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background: var(--dark);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* .card-front */
  .card-front {
    transform: rotateY(0deg);
    z-index: 2;
  }

  /* .card-back */
  .card-back {
    transform: rotateY(180deg);
    z-index: 1;
  }

  /* figure */
  figure {
    z-index: -1;
  }
  /* figure, .img-bg */
  figure,
  .img-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /* img */
  img {
    height: 100%;
    border-radius: 24px;
  }

  /* figcaption */
  figcaption {
    font-family: "Caveat", cursive;
    text-transform: uppercase;
    display: block;
    width: auto;
    margin-top: 12%;
    padding: 8px 22px;
    font-weight: bold;
    line-height: 1.6;
    letter-spacing: 2px;
    word-spacing: 6px;
    text-align: right;
    position: absolute;
    top: 0;
    right: 12px;
    color: var(--white-1);
    background: hsla(var(--hue), 25%, 10%, 0.5);
  }
  /* .img-bg */
  .img-bg {
    background: hsla(var(--hue), 25%, 10%, 0.5);
  }
  .card-front .img-bg {
    clip-path: polygon(0 20%, 100% 40%, 100% 100%, 0 100%);
  }
  .card-front .img-bg::before {
    content: "";

    position: absolute;
    top: 34%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(18deg);

    width: 100%;
    height: 10px;
    border: 3px solid var(--primary);
    border-left-color: transparent;
    border-right-color: transparent;

    transition: 0.1s;
  }
  .card-back .img-bg {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
  }
  /* hover state */
  .flip-card-container:hover .card-front .img-bg::before {
    width: 6px;
    border-left-color: var(--primary);
    border-right-color: var(--primary);
  }
  /* ul */
  ul {
    padding-top: 50%;
    margin: 0 auto;
    width: 70%;
    height: 100%;
    list-style: none;
    color: var(--white-1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  /* li */
  li {
    width: 100%;
    margin-top: 12px;
    padding-bottom: 12px;
    font-size: 14px;
    text-align: center;
    position: relative;
  }
  li:nth-child(2n) {
    color: var(--white-2);
  }
  li:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
    opacity: 0.2;
  }
  /* button */
  button {
    font-family: inherit;
    font-weight: bold;
    color: var(--white-1);
    letter-spacing: 2px;
    padding: 14px 25px;
    border: 1px solid var(--grey);
    border-radius: 1000px;
    background: transparent;
    transition: 0.3s;
    cursor: pointer;
  }
  button:hover,
  button:focus {
    color: var(--primary);
    background: hsla(var(--hue), 25%, 10%, 0.2);
    border-color: currentColor;
  }
  button:active {
    transform: translate(2px);
  }
  /* .design-container */
  .design-container {
    --tr: 90;
    --op: 0.5;
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  /* .design */
  .design {
    display: block;
    background-color: var(--primary);
    position: absolute;
    opacity: var(--op);
    transition: 0.3s;
  }
  /*gore dole */
  .design--1,
  .design--2,
  .design--3,
  .design--4 {
    width: 2px;
    height: 100%;
  }
  /*gore, transform ugornju
  stranu gore iznad top 0 */
  .design--1,
  .design--2 {
    top: 0;
    transform: translateY(calc((var(--tr) - (var(--tr) * 2)) * 1%));
  }
  .design--1 {
    left: 20%;
  }

  .design--2 {
    left: 80%;
  }
  /*dole transformisi ispod bootttom 0 za y translate*/
  .design--3,
  .design--4 {
    bottom: 0;
    transform: translateY(calc((var(--tr) + (var(--tr) - var(--tr))) * 1%));
  }
  .design--3 {
    left: 24%;
  }

  .design--4 {
    left: 76%;
  }
  /*lijevo desno */
  .design--5,
  .design--6,
  .design--7,
  .design--8 {
    width: 100%;
    height: 2px;
  }
  .design--5,
  .design--6 {
    left: 0;
    transform: translateX(calc((var(--tr) - (var(--tr) * 2)) * 1%));
  }

  .design--5 {
    top: 41%;
  }

  .design--6 {
    top: 59%;
  }
  .design--7,
  .design--8 {
    right: 0;
    transform: translateX(calc((var(--tr) + (var(--tr) - var(--tr))) * 1%));
  }

  .design--7 {
    top: 44%;
  }

  .design--8 {
    top: 56%;
  }
  /* states */
  button:hover + .design-container,
  button:active + .design-container,
  button:focus + .design-container {
    --tr: 20;
    --op: 0.7;
  }
`;

export default LatestGalery;
