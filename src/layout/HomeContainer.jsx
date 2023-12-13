import React from "react";
import styled from "styled-components";

const HomeContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HomeContainer;

const Container = styled.div`
  width: min(1210px, 100%);
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 370px calc(100% - 370px - 100px);
  gap: 100px;
`;
