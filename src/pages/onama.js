import React from "react";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import styled from "styled-components";

import { Layout, SEO, PageTitle } from "../components";

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
        <PageTitle
          subtitle="Samo malo da vam kažemo"
          title="nesto o nama"
        ></PageTitle>
        <BgImage image={sources} className="center">
          <article>
            <p>
              Mi smo tim koji je u želji da iskaže svoju kreativnost otpočeo sa
              izradom drvenih dekoracija.
            </p>
            <span>*</span>
            <p>
              Sada iza nas stoji višegodišnji rad sa velikim brojem uspešno
              pripremljenih unikatnih i ručno izrađenih dekoracija za venčanja,
              rođendane, uskrse, 8 martovske i druge svečane priredbe.
            </p>
            <span>*</span>
            <p>
              Sa nama možete ostvariti sve svoje želje. Vaši darovi mogu biti
              personalizovani, elegantni, upečatljivi, raskošni, otmeni.
            </p>
            <span>*</span>
            <p>
              U našoj <Link to="/galerija">galeriji</Link> ćete svakako moći da
              vidite prezentaciju naših radova i sigurno ćete pronaći neke koji
              Vam se dopadaju.
            </p>
            <span>*</span>
            <p>
              Prepustite se mašti i <Link to="/kontakt">kontaktirajte</Link> nas
              da zajedno kreiramo dekoracije za Vaše najmilije.
            </p>
            <span>*</span>
            <p>
              U slučaju da ste zainteresovani isključivo za svadbene dekoracije,
              posetite naš sestrinski sajt:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.svadbenicvet.com"
              >
                www.svadbenicvet.com
              </a>
            </p>
            <span>*</span>
            <p>
              Naručenu robu šaljemo brzom poštom na teritoriji cele Srbije.
              Takođe, robu šaljemo i na teritoriji Balkana. Ostavljamo Vam i
              mogućnost ličnog preuzimanja.
            </p>
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

  .center {
    width: 90%;
    max-width: 1000px;
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
    p,
    span {
      color: var(--clr-white);
      font-size: 1.5rem;
    }
    a {
      color: var(--clr-primary-8);
    }

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
    .center {
      padding: 4rem;
    }
  }
  @media (min-width: 992px) {
    .center {
      width: 80%;
    }
  }
  @media (min-width: 1600px) {
  }
`;

export default Onama;
