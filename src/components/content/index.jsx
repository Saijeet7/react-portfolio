import React from "react";
import TopContent from "./TopContent";
import Navigation from "../navigation/index";

const Content = () => {
  const introText =
    "I design and code beautifully simple things and i love what i do. Just simple like that!";
  return (
    <div>
      <TopContent text={introText} />
      <Navigation/>
    </div>
  );
};

export default Content;
