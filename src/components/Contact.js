import React from "react";
import styled from "styled-components";

import Title from "./Title2";
import formImg from "../images/form-img.png";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <h1 className="section-heading">Contact</h1>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <input type="submit" value="Send" />
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
    width: 45rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.5s;
  }

  .contact-form input,
  .contact-form textarea {
    outline: none;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    border: none;
    border-radius: 2rem;
  }

  .contact-form textarea {
    max-height: 15rem;
    min-height: 10rem;
    max-width: 100%;
    min-width: 70%;
  }

  .contact-form input[type="submit"] {
    color: #fff;
    font-weight: bolder;
    letter-spacing: 0.5rem;
    cursor: pointer;
    transition: background-color 0.5s;
  }

  .contact-form input[type="submit"]:hover {
    background-color: #32e7ff;
  }
`;

export default Contact;
