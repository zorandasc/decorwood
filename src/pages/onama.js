import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import styled from "styled-components";

import { Layout, SEO } from "../components";

const Onama = ({ data }) => {
  //const bcgImage = getImage(data.desktopImage);
  //art direction sa cropovanom image for mobile
  const sources = [
    getImage(data.mobileImage),
    {
      ...getImage(data.desktopImage),
      media: `(min-width: 491px)`,
    },
  ];

  return (
    <Layout>
      <SEO title="O nama"></SEO>
      <Wrapper image={sources}>
        <h1 className="heading">O nama</h1>
        <BgImage image={sources} className="center">
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </article>
        </BgImage>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    desktopImage: file(name: { eq: "gift" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mobileImage: file(name: { eq: "gift_mob" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

const Wrapper = styled(BgImage)`
  padding: 8rem 0 12rem 0;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .heading {
    margin-bottom: 5rem;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: var(--clr-white);
    text-shadow: 0 1rem 2rem #000;
  }

  .center {
    color: var(--clr-white);
    font-size: 1.5rem;
    width: 90%;
    max-width: 1000px;
    height: 44rem;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    z-index: 1;
    box-shadow: var(--dark-shadow);
    border-radius: 5px;
    background: inherit;
    overflow: hidden;
    transition: var(--transition);

    //da bi se zadrzao glass
    //before je potreban kod promjene page
    &:before {
      content: "";
      position: absolute;
      background: inherit;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
      filter: blur(10px);
    }
    //da bi se zadrzao glass efecat
    //a after je potreban kod realoada
    &:after {
      content: "";
      position: absolute;
      background: inherit;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
      filter: blur(10px);
    }
    &:hover {
      box-shadow: var(--up-shadow);
    }
  }

  @media (min-width: 768px) {
    padding: 12rem 0 20rem 0;
    .heading {
      font-size: 6rem;
      margin-bottom: 6rem;
    }
    .center {
      font-size: 1.8rem;
      padding: 4rem;
    }
  }
  @media (min-width: 992px) {
    .center {
      width: 80%;
      height: 37rem;
    }
  }
  @media (min-width: 1600px) {
  }
`;

export default Onama;
