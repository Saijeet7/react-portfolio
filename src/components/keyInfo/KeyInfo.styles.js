import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-family: " Roboto", sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 500;
  margin-bottom: 60px;
  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-family: "Nunito Sans", sans-serif;
    color: ${({ theme }) => theme.fontColor};
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 20px;
  }
  h3 {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-family: " Roboto", sans-serif;
    color: ${({ theme }) => theme.fontColorLight};
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    width: min(100%, 600px);
    color: ${({ theme }) => theme.fontColorLight};
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      width: 100%;
    }
    &:last-child {
      margin-bottom: 0;
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
