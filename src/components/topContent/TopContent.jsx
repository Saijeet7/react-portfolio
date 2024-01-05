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
  color: ${({ theme }) => theme.fontColor};
  opacity: 0.5;
  font-family: "Roboto", sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  margin-bottom: 50px;
  p {
    max-width: 390px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    p{
      text-align: center;
    }
  }
`;
