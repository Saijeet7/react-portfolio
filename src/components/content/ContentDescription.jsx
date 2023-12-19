import React from "react";
import { Description } from "./Content.styles";

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
