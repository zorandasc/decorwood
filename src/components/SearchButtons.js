import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  //ovaj state je za lokali css underline line
  const [index, setIndex] = React.useState(0);

  //da bi dobili array od jedinstvenih tipova, koristimo Set
  //strukturu koju konvertujemo sa ... tacke u array jedinst
  //venig arraje tipova
  const types = [
    "Sve",
    ...new Set(
      projects.map((project) => {
        return project.category;
      })
    ),
    "8 Mart",
    "Svadbene Dekoracije",
    "Rođendani",
  ];
  /*
  //za seteocanje buuton collor
  const setColor = (string) => {
    switch (string) {
      case "Uskršnje Dekoracije":
        return "var(--clr-primary-8)";
      case "8 Mart":
        return "lightgreen";
      case "Svadbene Dekoracije":
        return "var(--clr-red-light)";
      case "Rođendani":
        return "var(--clr-grey-7)";
      default:
        return "white";
    }
  };
  style={{
                color: `${setColor(type)}`,
                border: `2px solid ${setColor(type)}`,
              }}
*/
  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex);
    if (type === "Sve") {
      setBackToAll();
    } else {
      const tempProjects = projects.filter(
        (project) => project.category === type
      );
      setProjects(tempProjects);
    }
  };

  return (
    <Wrapper>
      {types.map((type, typeIndex) => {
        return (
          <Bounce delay={700} key={typeIndex}>
            <button
              className={index === typeIndex ? "active" : undefined}
              onClick={() => {
                showProjects(type, typeIndex);
              }}
            >
              {type}
            </button>
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
  button {
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
  button:hover,
  button.active {
    box-shadow: var(--light-shadow);
    color: var(--clr-white);
    border-color: var(--clr-white);
  }
`;

export default SearchButtons;
