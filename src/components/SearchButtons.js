import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Bounce from "react-reveal/Bounce";

const SearchButtons = ({ category }) => {
  //ovaj state je za lokali css selection of actoive class
  //const [index, setIndex] = React.useState(0);

  //da bi dobili array od jedinstvenih tipova, koristimo Set
  //strukturu koju konvertujemo sa ... tacke u array jedinst
  //venig arraje tipova
  const types = [
    { label: "Sve", link: "sve" },
    { label: "Uskršnje Dekoracije", link: "uskrsnje-dekoracije" },
    { label: "Osmi Mart", link: "osmi-mart" },
    { label: "Svadbene Dekoracije", link: "svadbene-dekoracije" },
  ];

  return (
    <Wrapper>
      {types.map((type, index) => {
        return (
          <Bounce delay={700} key={index}>
            <Link
              //className={index === typeIndex ? "active button" : "button"}
              className="button"
              activeClassName="active"
              partiallyActive={true}
              to={`/galerija/${type.link}`}
            >
              {type.label}
            </Link>
          </Bounce>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  margin: 2rem 0;
  justify-content: center;
  flex-wrap: wrap;
  .button {
    display: block;
    font-family: var(--ff-secondary);
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    padding: 0.6rem;
    border-radius: 3rem;
    border: 2px solid var(--clr-white);
    color: var(--clr-white);
    background-color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    box-shadow: var(--white-shadow);
    transition: var(--transition);
  }
  .button:hover {
    box-shadow: var(--dark-shadow);
    color: var(--clr-white);
    border-color: var(--clr-white);
  }

  .button.active {
    box-shadow: var(--dark-shadow);
    color: var(--clr-white);
    border-color: var(--clr-white);
    background-color: transparent;
  }
`;

export default SearchButtons;
