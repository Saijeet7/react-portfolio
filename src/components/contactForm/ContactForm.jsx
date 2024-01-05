import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <>
      <Form action="https://formspree.io/f/xgegewba" method="POST">
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          required
        />
        <textarea
          name="message"
          col="30"
          row="6"
          autoComplete="off"
          required
          placeholder="Message"
        ></textarea>
        <Button type="submit" value="send">
          {" "}
          <FontAwesomeIcon icon={faPaperPlane} className="icon" />
          <p>Contact Me</p>
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
const Form = styled.form`
  max-width: 500px;
  input,
  textarea {
    width: 100%;
    height: 50px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    border: ${({ theme }) => theme.borderColor};
    background: transparent;
    color: ${({ theme }) => theme.fontColor};
    font-family: "Roboto", sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-weight: 400;
    &::placeholder {
      color: ${({ theme }) => theme.fontColorLight};
    }
  }
  textarea {
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const Button = styled.button`
  color: #ffffff;
  width: auto;
  font-family: "Roboto", sans-serif;
  font-size: 1.375rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ff6f00;
  padding: 15px 40px;
  border-radius: 40px;
  .icon {
    width: 25px;
    height: auto;
    color: white;
  }
  transition: all 0.2s ease-in;
  &:hover {
    background: #1983d4;
  }
  @media screen and (max-width: 768px) {
    padding: 15px 20px;
    .icon {
      width: 20px;
    }
  }
`;
