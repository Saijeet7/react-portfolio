import React from "react";
import Navigation from "../components/navigation/index";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";

const About = () => {
  return (
    <>
      <div className="container">
        <Navigation />
      </div>
      <HomeContainer>
        <Card />
        <div>About</div>
      </HomeContainer>
    </>
  );
};

export default About;
