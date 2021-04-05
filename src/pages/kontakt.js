import React from "react";
import styled from "styled-components";

import { Layout, SEO } from "../components";
//import img from "../images/contact-us-bg.png";
import img from "../images/delivery.jpg";

const Kontakt = () => {
  return (
    <Layout>
      <SEO title="Kontakt"></SEO>
      <Wrapper>
        <h1 className="contact-heading">Pišite nam</h1>
        <form
          name="kontakt"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contact-form center"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
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
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0 20rem 0;
  text-align: center;
  background: url(${img});
  background-size: contain;
  background-repeat: repeat;
  background-attachment: fixed;

  .contact-heading {
    font-size: 5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: var(--clr-white);
    text-shadow: 0 1rem 2rem #000;
    margin-bottom: 8rem;
  }

  .contact-form {
    width: 90%;
    max-width: 1000px;
    height: 42rem;
    background-color: rgba(255, 255, 255, 0.8);
    margin: auto;
    flex-direction: column;
    border-radius: 0.5rem;
    box-shadow: 0 1rem 3rem #000;
    padding: 2rem;
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
    background-color: var(--mainGrey);
    border: 0.1rem solid var(--darkGrey);
    font-size: 1.4rem;
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
    font-size: 1.2rem;
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
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    background-color: var(--clr-black);
    color: var(--clr-primary-8);
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
    padding: 15rem 0 20rem 0;
    .contact-heading {
      font-size: 6rem;
    }
  }
  @media (min-width: 992px) {
    .contact-form {
      width: 80%;
      height: 37rem;
    }
    .input-groups .input-group {
      width: 48.5%;
    }
  }
  @media (min-width: 1600px) {
  }
`;

export default Kontakt;
