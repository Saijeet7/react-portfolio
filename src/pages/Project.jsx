import React from "react";
import Navigation from "../components/navigation/index";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";
import TopContent from "../components/topContent/TopContent";
import ContentTitle from "../components/contentTitle/ContentTitle";
import Footer from "../components/footer/footer";
import { FadeAnimation } from "./Page.styles";
import ProjectList from "../components/projectList/ProjectList";
import LightMode from "../components/lightMode/lightMode";
const Project = () => {
  const introText =
    "I design and code simple things and gym rat chasing aesthetics. Just simple like that!";
  const title = "Projects. ";
  return (
    <>
      <LightMode />
      <HomeContainer>
        <Card />
        <div>
          <Navigation />
          <FadeAnimation>
            <TopContent text={introText} />
            <ContentTitle title={title} />
            <ProjectList />
          </FadeAnimation>
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Project;
