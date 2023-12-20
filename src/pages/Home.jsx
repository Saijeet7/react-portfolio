import React from "react";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";
import Content from "../components/content/index";
import Navigation from "../components/navigation/index";
const Home = () => {
  return (
    <>
      <HomeContainer>
        <Card />
        <Content />
      </HomeContainer>
    </>
  );
};

export default Home;
