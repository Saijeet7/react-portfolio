import React from "react";
import styled from "styled-components";

const TopContent = (props) => {
  return (
    <TopContenWrap>
      <p>{props.text}</p>
    </TopContenWrap>
  );
};

export default TopContent;

const TopContenWrap = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-family: "Roboto", sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  margin-bottom: 50px;
  p {
    max-width: 390px;
  }
`;
