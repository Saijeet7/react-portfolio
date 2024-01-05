import React from "react";
import Navigation from "../components/navigation/index";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";
import TopContent from "../components/topContent/TopContent";
import ContentTitle from "../components/contentTitle/ContentTitle";
import ContentDescription from "../components/contentDescription/ContentDescription";
import Footer from "../components/footer/footer";
import { FadeAnimation } from "./Page.styles";
import { BrowserStyle } from "../layout/Theme";
const About = () => {
  const introText =
    "I design and code simple things and gym rat chasing aesthetics. Just simple like that!";
  const title = "About Me. ";
  const description =
    "Welcome to my corner of the web! I'm a front-end developer with a passion for crafting visually captivating and user-friendly experiences. Coffee fuels my creative coding sessions, while my love for design and aesthetics guides every line of code I write. Beyond pixels and programming, you'll often find me at the gym, where I channel the same dedication that I pour into perfecting websites. Join me on this journey where technology meets artistry, and let's create digital masterpieces together!";

  return (
    <>
      <BrowserStyle>
        <HomeContainer>
          <Card />
          <div>
            <Navigation />
            <FadeAnimation>
              <TopContent text={introText} />
              <ContentTitle title={title} />
              <ContentDescription description={description} />
            </FadeAnimation>
          </div>
        </HomeContainer>
        <Footer />
      </BrowserStyle>
    </>
  );
};

export default About;
