import React from "react";
import Navigation from "../components/navigation/index";
import HomeContainer from "../layout/HomeContainer";
import Card from "../components/card/index";
import TopContent from "../components/topContent/TopContent";
import ContentTitle from "../components/contentTitle/ContentTitle";
import Footer from "../components/footer/footer";
import { FadeAnimation } from "./Page.styles";
import ContactForm from "../components/contactForm/ContactForm";

const Contact = () => {
  const introText =
    "I design and code simple things and gym rat chasing aesthetics. Just simple like that!";
  const title = "Contact Me. ";

  return (
    <>
      <HomeContainer>
        <Card />
        <div>
          <Navigation />
          <FadeAnimation>
            <TopContent text={introText} />
            <ContentTitle title={title} />
            <ContactForm />
          </FadeAnimation>
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Contact;
