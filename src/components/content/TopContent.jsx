import React from "react";
import { TopContenWrap } from "./Content.styles";

const TopContent = (props) => {
  return (
    <TopContenWrap>
      <p>{props.text}</p>
    </TopContenWrap>
  );
};

export default TopContent;
