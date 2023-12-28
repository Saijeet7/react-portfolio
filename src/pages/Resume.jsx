import React from "react";
import Navigation from "../components/navigation/index";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";
import TopContent from "../components/topContent/TopContent";
import ContentTitle from "../components/contentTitle/ContentTitle";
import Footer from "../components/footer/footer";
import Brief from "../components/brief/Brief";
import KeyInfo from "../components/keyInfo/KeyInfo";
import SkillGrid from "../components/skillGrid/SkillGrid";
import { FadeAnimation } from "./Page.styles";
const Resume = () => {
  const introText =
    "I design and code simple things and gym rat chasing aesthetics. Just simple like that!";
  const title = "Resume. ";
  const mainTitle = "Saijeet Upadhyay";
  const subtitle = "Frontend Developer,";
  const description =
    "I'm a passionate frontend developer fueled by two things: a strong cup of coffee and an eye for design. Obsessed with the perfect blend of aesthetics and functionality, I craft digital experiences that not only look stunning but also work seamlessly.";

  return (
    <>
      <HomeContainer>
        <Card />
        <div>
          <Navigation />
          <FadeAnimation>
            <TopContent text={introText} />
            <ContentTitle title={title} />
            <Brief
              title={mainTitle}
              subtitle={subtitle}
              description={description}
            />
            <KeyInfo />
            <SkillGrid />
          </FadeAnimation>
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Resume;
