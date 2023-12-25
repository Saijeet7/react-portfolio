import React from "react";
import { Wrapper } from "./Brief.styles";
const Brief = (props) => {
  return (
    <>
      <Wrapper>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.description}</p>
      </Wrapper>
    </>
  );
};

export default Brief;
