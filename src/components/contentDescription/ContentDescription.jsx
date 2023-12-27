import React from "react";
import styled from "styled-components";

const ContentDescription = (props) => {
  return (
    <>
      <Description>
        <p>{props.description}</p>
      </Description>
    </>
  );
};

export default ContentDescription;
const Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: Roboto;
  font-size: clamp(1.125rem, 2vw, 1.625rem);
  font-weight: 400;
  max-width: 600px;
  margin-bottom: 60px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    max-width: 100%;
    text-align: center;
  }
`;
