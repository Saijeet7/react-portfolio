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
    font-family: "Nunito Sans", sans-serif;
    color: #ffffff;
    font-weight: 700;
    line-height: .8;
  }
  h3 {
    font-size: clamp(1.125rem, 2.5vw, 2rem);
    font-family: "Nunito Sans", sans-serif;
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    opacity: 0.7;
    width: min(100%, 600px);
  }
`;
