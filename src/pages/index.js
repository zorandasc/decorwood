import * as React from "react";
import { Layout, Hero, About, LatestGalery, Contact } from "../components";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <LatestGalery></LatestGalery>
      <Contact></Contact>
    </Layout>
  );
};

export default IndexPage;
