import React from "react";
import styled from "styled-components";
const ContentTitle = (props) => {
  return (
    <>
      <Title>
        <strong>{props.title}</strong>
        <br />
        {props.subtitle}
      </Title>
    </>
  );
};

export default ContentTitle;
 const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  color: #ff6f00;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  text-transform: uppercase;
  max-width: 610px;
  font-weight: 700;
  width: 100%;
  strong {
    font-size: clamp(2rem, 2.5vw, 3rem);
    font-weight: 700;
  }
  margin-bottom: 60px;
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
`;

