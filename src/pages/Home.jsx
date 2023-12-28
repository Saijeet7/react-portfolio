import React from "react";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";
import Navigation from "../components/navigation/index";
import TopContent from "../components/topContent/TopContent";
import ContentTitle from "../components/contentTitle/ContentTitle";
import ContentDescription from "../components/contentDescription/ContentDescription";
import ContentButton from "../components/contentButton/ContentButton";
import Footer from "../components/footer/footer";
import { FadeAnimation } from "./Page.styles";
const Home = () => {
  const introText =
    "I design and code simple things and gym rat chasing aesthetics. Just simple like that!";
  const title = "I’M SAIJEET UPADHYAY ";
  const subtitle = "Frontend Developer";

  const description =
    "I specialize in crafting seamless, visually appealing interfaces that captivate users and elevate digital experiences. My goal is to master the art of frontend development, constantly honing my skills in HTML, CSS, JavaScript, and various frameworks to bring ideas to life.";

  return (
    <>
      <HomeContainer>
        <Card />
        <div>
          <Navigation />
          <FadeAnimation>
            <TopContent text={introText} />
            <ContentTitle title={title} subtitle={subtitle} />
            <ContentDescription description={description} />
            <ContentButton />
          </FadeAnimation>
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
