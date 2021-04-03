import React from "react";
import styled from "styled-components";

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
          <button
            key={typeIndex}
            className={index === typeIndex ? "active" : undefined}
            onClick={() => {
              showProjects(type, typeIndex);
            }}
          >
            {type}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  margin: 4rem 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    padding: 0.6rem;
    border-radius: 3rem;
    border: 2px solid var(--clr-primary-8);
    color: var(--clr-primary-8);
    background-color: var(--clr-black);
    letter-spacing: var(--spacing);
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    box-shadow: var(--dark-shadow);
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
