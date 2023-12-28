import React from "react";
import styled from "styled-components";

const HomeContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HomeContainer;

const Container = styled.div`
  width: min(1210px, 100%);
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 370px calc(100% - 370px - 100px);
  gap: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 320px calc(100% - 320px - 50px);
    gap: 50px;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 768px) {
    display:flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 50px;

  }
`;
