import React from "react";
import Navigation from "../components/navigation/index";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";

const Project = () => {
  return (
    <>
      <div className="container">
        <Navigation />
      </div>
      <HomeContainer>
        <Card />
        <div>Project</div>
      </HomeContainer>
    </>
  );
};

export default Project;
