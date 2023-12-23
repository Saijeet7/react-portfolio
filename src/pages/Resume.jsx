import React from "react";
import Navigation from "../components/navigation/index";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";
import TopContent from "../components/topContent/TopContent";
import ContentTitle from "../components/contentTitle/ContentTitle";
import Footer from "../components/footer/footer";

const Resume = () => {
  const introText =
    "I design and code simple things and gym rat chasing aesthetics. Just simple like that!";
  const title = "Resume. ";
  return (
    <>
      <HomeContainer>
        <Card />
        <div>
          <Navigation />
          <TopContent text={introText} />
          <ContentTitle title={title} />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Resume;
