import React from "react";
import { createGlobalStyle } from "styled-components";
import { GatsbyProvider } from "./src/context/context";

const GlobalStyle = createGlobalStyle`
    /*
=============== 
Variables
===============
*/
:root {
  --colors-light:#f7fafc;
  --colors-text:#e2e8f0;
  /* dark shades of primary color*/
  --clr-primary-1: hsl(21, 91%, 17%);
  //stara
  //--clr-primary-2: hsl(21, 84%, 25%);
  //DARK WOOD
  --clr-primary-2: #41342A;
  --clr-primary-3: hsl(21, 81%, 29%);
  --clr-primary-4: hsl(21, 77%, 34%);

  /* primary/main color */
  //PRIMARY WOOD COLOR--
  --clr-primary-5: #7E6553;

  //NEKADASNJA
  //--clr-primary-5: hsl(21, 62%, 45%);
  //BA5D2C
  //rgb(186,93,44)

  /* lighter shades of primary color */
  //--clr-primary-6: hsl(21, 57%, 50%);
  //LIGHTER WOOD
  --clr-primary-6: #9d7e68;
  //--clr-primary-7: hsl(21, 65%, 59%);
  --clr-primary-7: #B19886;
  //rgb(218,130,10)
  //--clr-primary-8: hsl(21, 80%, 74%);
  --clr-primary-8:  #C1AD9E;
  --clr-primary-9: hsl(21, 94%, 87%);
  --clr-primary-10: hsl(21, 100%, 94%);
  --deep-scy:#0d1419;

  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;
  --clr-glass:RGB(201, 219, 220)
  //#c9dbdc
  //HSL(183, 21.3%, 82.5%)
  --mainGrey: #ececec;
  --darkGrey: #afafaf;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Montserrat", sans-serif;
  --ff-secondary: "Kaushan Script", serif;
  --ff-ternary: "Bilbo Swash Caps", cursive;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  --up-shadow: 8px 10px 5px 5px rgba(0, 0, 0, 0.2);
  --text-shadow:2px 2px rgba(0, 0, 0, 0.4);
  --text-shadow2: 3px 3px 3px rgba(0, 0, 0, 0.9);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body {
  font-family: var(--ff-primary);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
  
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  
}
img {
  width: 100%;
  display: block;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-secondary);
  font-weight: 400;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

/*  global classes */
.btn {
  font-family: var(--ff-secondary);
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  background: var(--clr-primary-7);
  color: var(--clr-primary-1);
}

/* section */
.section {
  padding: 5rem 0;
  position: relative;
}
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}

// ribbon in project.js
.ribbon-wrapper-8 {
  width: 108px;
  height: 108px;
  overflow: hidden;
  position: absolute;
  top: -6px;
  right: -6px; }

.ribbon-8 {
  font: bold 15px Sans-Serif;
  line-height: 18px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  transform:rotate(-45deg) ;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  position: relative;
  padding: 7px 0;
  left: -4px;
  top: 26px;
  width: 150px;
  background-color:var(--clr-primary-5);
  color:var(--clr-white);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  box-shadow: -3px 5px 6px -5px rgba(0, 0, 0, 0.5);
  outline: 1px dashed var(--clr-white);
  outline-offset: -4px; }

.ribbon-8:before, .ribbon-8:after {
  content: "";
  border-top: 4px solid var(--clr-primary-8);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  position: absolute;
  bottom: -4px; }

.ribbon-8:before {
  content: "";
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: -1;
  border-left: 4px solid var(--clr-primary-2);
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-top: 4px solid var(--clr-primary-2); }

.ribbon-8:after {
  content: "";
  position: absolute;
  right: 7px;
  top: 100%;
  z-index: -1;
  border-left: 4px solid transparent;
  border-right: 4px solid var(--clr-primary-2);
  border-bottom: 4px solid transparent;
  border-top: 4px solid var(--clr-primary-2); }
`;

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  );
};
