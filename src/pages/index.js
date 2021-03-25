import * as React from "react";
import { Layout, Hero, About, LatestGalery } from "../components";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <LatestGalery></LatestGalery>
    </Layout>
  );
};

export default IndexPage;
