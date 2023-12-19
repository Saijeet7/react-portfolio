import React from "react";
import { Title } from "./Content.styles";

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
