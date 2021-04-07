import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import { Layout, SEO, PageTitle } from "../components";

const Kontakt = ({ data }) => {
  const bcgImage = getImage(data.file);
  return (
    <Layout>
      <SEO title="Kontakt"></SEO>
      <Wrapper image={bcgImage}>
        <PageTitle
          subtitle="Ne budite stidljivi"
          title="pišite nam"
        ></PageTitle>
        <BgImage image={bcgImage} className="center">
          <form
            name="Decorwood_contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact-form"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="Decorwood_contact" />
            <div className="input-group">
              <label htmlFor="name">Ime Prezime *</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                className="contact-input"
                placeholder="Unesite Vaše ime"
              />
            </div>
            <div className="input-groups">
              <div className="input-group">
                <label htmlFor="email">Email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="contact-input"
                  placeholder="Unesite Vaš email"
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="contact-input"
                  placeholder="Unesite broj telefona"
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">Poruka</label>
              <textarea
                required
                name="message"
                id="message"
                className="form-textarea"
                placeholder="Vaša poruka ovdje..."
              ></textarea>
            </div>
            <input type="submit" value="Pošalji" className="form-btn" />
          </form>
        </BgImage>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    file(name: { eq: "delivery" }) {
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
  background-size: contain;
  background-repeat: repeat;
  background-attachment: fixed;

  .center {
    width: 90%;
    max-width: 1000px;
    height: 40rem;
    padding: 2rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--dark-shadow);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
    transition: var(--transition);
    &:before,
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
    .contact-form {
      flex-direction: column;
    }
  }

  .input-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    position: relative;
  }

  .input-groups {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .input-group input,
  .input-group textarea {
    padding: 3rem 1rem 1rem 1rem;
    background-color: var(--clr-white);
    border: 0.1rem solid var(--darkGrey);
    font-size: 1.1rem;
    color: var(--clr-grey-4);
    letter-spacing: 0.1rem;
    border-radius: 0.5rem;
    transition: border 0.3s;
  }

  .input-group input:focus,
  .input-group textarea:focus {
    border: 0.1rem solid var(--clr-primary-4);
  }

  .input-group label {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--clr-grey-2);
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .form-btn {
    width: 50%;
    padding: 1rem;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    background-color: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transform: scale(1);
    transition: var(--transition);
  }

  .form-btn:hover {
    transform: scale(1.2);
  }

  .input-group textarea {
    max-height: 15rem;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    padding: 12rem 0 20rem 0;
  }
  @media (min-width: 992px) {
    .contact-form {
      width: 80%;
    }
    .input-groups .input-group {
      width: 48.5%;
    }
  }
`;

export default Kontakt;
