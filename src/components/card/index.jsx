import React from "react";
import { CardWrapper } from "./Card.styles";
import CardTop from "./CardTop";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardContact from './CardContact';

const Card = () => {
  return (
    <>
      <CardWrapper>
        <CardTop />
        <CardImage />
        <CardContent />
        <CardContact/>
      </CardWrapper>
    </>
  );
};

export default Card;
