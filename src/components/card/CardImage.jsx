import React from "react";
import { CardMedia } from "./Card.styles";
import Image from '../../assets/images/portfolio.jpg'

const CardImage = () => {
  return (
    <>
      <CardMedia>
        <img src={Image} alt="Saijeet Black and white profile picture"/>
      </CardMedia>
    </>
  );
};

export default CardImage;
