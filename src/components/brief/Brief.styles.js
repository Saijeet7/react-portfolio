import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  color: #ffffff;
  font-family: " Roboto", sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 500;
  margin-bottom: 60px;
  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    font-family: "Futura", sans-serif;
    color: ${({ theme }) => theme.fontColor};
    font-weight: 700;
    line-height: .8;
  }
  h3 {
    font-size: clamp(1.125rem, 2.5vw, 2rem);
    font-family: "Futura", sans-serif;
    color: ${({ theme }) => theme.fontColor};
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    color: ${({ theme }) => theme.fontColorLight};
    width: min(100%, 600px);
    @media screen and (max-width: 768px) {
      max-width: 100%;
      width: 100%;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    text-align: center;
  }
`;
