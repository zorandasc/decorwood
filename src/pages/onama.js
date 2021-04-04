import React from "react";
import styled from "styled-components";

import { Layout, SEO } from "../components";

const Onama = () => {
  return (
    <Layout>
      <SEO title="O nama"></SEO>
      <Wrapper>
        <h1>nešto o nama</h1>
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

export default Onama;
