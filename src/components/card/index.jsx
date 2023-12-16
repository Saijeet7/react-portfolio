import React from "react";
import { CardWrapper } from "./Card.styles";
import CardTop from "./CardTop";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardContact from "./CardContact";
import CardButton from "./CardButton";

const Card = () => {
  return (
    <>
      <CardWrapper>
        <CardTop />
        <CardImage />
        <CardContent />
        <CardContact />
        <CardButton />
      </CardWrapper>
    </>
  );
};

export default Card;
