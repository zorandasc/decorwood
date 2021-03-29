import React from "react";
import styled from "styled-components";

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  //ovaj state je za lokali css underline line
  const [index, setIndex] = React.useState(0);

  //da bi dobili array od jedinstvenih tipova, koristimo Set
  //strukturu koju konvertujemo sa ... tacke u array jedinst
  //venig arraje tipova
  const types = [
    "all",
    ...new Set(
      projects.map((project) => {
        return project.category;
      })
    ),
  ];

  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex);
    if (type === "all") {
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
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1.2rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`;

export default SearchButtons;
