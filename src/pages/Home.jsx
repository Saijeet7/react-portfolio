import React from "react";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";
import Content from "../components/content/Content";

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
