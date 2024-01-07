import React from "react";
import styled from "styled-components";
const ContentTitle = (props) => {
  return (
    <>
      <Wrapper>
        <Title>
          <strong>{props.title}</strong>
          <br />
          {props.subtitle}
        </Title>
      </Wrapper>
    </>
  );
};

export default ContentTitle;
const Title = styled.h1`
  font-family: "Futura", sans-serif;
  color: #ff6f00;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  text-transform: uppercase;
  max-width: 610px;
  font-weight: 700;
  strong {
    font-size: clamp(2rem, 2.5vw, 3rem);
    font-weight: 700;
  }
  margin-bottom: 30px;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 40px;
    height: 5px;
    background: #ff6f00;
    top: 25px;
    right: calc(100% + 10px);
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
    &:before {
      width: 20px;
      top: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto 30px auto;
    display: inline-block;
    max-width: 100%;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
