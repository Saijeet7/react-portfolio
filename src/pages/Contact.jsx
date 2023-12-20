import React from "react";
import Navigation from "../components/navigation/index";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";

const Contact = () => {
  return (
    <>
      <div className="container">
        <Navigation />
      </div>
      <HomeContainer>
        <Card />
        <div>Contact</div>
      </HomeContainer>
    </>
  );
};

export default Contact;
