import React from "react";
import styled from "styled-components";

import { Layout } from "../components";

const kontakt = () => {
  return (
    <Layout>
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

export default kontakt;
