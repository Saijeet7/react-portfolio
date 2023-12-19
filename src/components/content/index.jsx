import React from "react";
import TopContent from "./TopContent";
import Navigation from "../navigation/index";
import ContentTitle from "./ContentTitle";
import ContentDescription from "./ContentDescription";
import ContentButton from "./ContentButton";

const Content = () => {
  const introText =
    "I design and code beautifully simple things and i love what i do. Just simple like that!";
  const title = "I’M SAIJEET UPADHYAY ";
  const subtitle = "Frontend Developer";
  const description =
    "I specialize in crafting seamless, visually appealing interfaces that captivate users and elevate digital experiences. My goal is to master the art of frontend development, constantly honing my skills in HTML, CSS, JavaScript, and various frameworks to bring ideas to life.";
  return (
    <div>
      <TopContent text={introText} />
      <Navigation />
      <ContentTitle title={title} subtitle={subtitle} />
      <ContentDescription description={description} />
      <ContentButton />
    </div>
  );
};

export default Content;
