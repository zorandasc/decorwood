import React from "react";
import styled from "styled-components";

import Title from "./Title2";
import formImg from "../images/form-img.png";

const Contact = () => {
  return (
    <Wrapper className="section" id="contact">
      <Title
        subtitle="Pišite name"
        title="Da zajedno kreiramo nove projekte"
      ></Title>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .contact-form {
    margin-top: 3rem;
    margin-bottom: 5rem;
    width: 45rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    border-radius: 0.5rem;
    box-shadow: 3rem 3rem 4rem #aaa;
    transition: all 0.5s;
  }

  .contact-form:hover {
    transform: translateY(-2rem);
    box-shadow: 5rem 5rem 7rem #aaa;
  }

  .contact-form input,
  .contact-form textarea {
    margin: 1rem;
    padding: 1rem;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    border: none;
    box-shadow: inset 0.1rem 0.1rem 0.2rem #ddd,
      inset -0.1rem -0.1rem 0.2rem #ddd;
  }

  .contact-form textarea {
    max-height: 15rem;
    min-height: 10rem;
    max-width: 100%;
    min-width: 70%;
  }

  .submit {
    width: 8rem;
    margin-top: 1rem;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: 5px;
    font-size: 1rem;
    border-radius: 3rem;
    border: 2px solid var(--clr-primary-5);
    color: var(--clr-white);
    cursor: pointer;
  }

  .submit:hover {
    background-color: var(--clr-white);
    color: var(--clr-primary-5);
  }
`;

export default Contact;
