import React from "react";
import styled from "styled-components";

import { Layout, SEO } from "../components";

const Kontakt = () => {
  return (
    <Layout>
      <SEO title="Kontakt"></SEO>
      <Wrapper>
        <h1>Naš kontakt</h1>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Kontakt;
