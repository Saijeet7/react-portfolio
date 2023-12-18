import React from "react";
import { CardDescription, CardLink, CardAddress } from "./Card.styles";


const CardContent = () => {
  return (
    <>
      <CardDescription>
        <CardLink href="mailto:saijeet2019@gmail.com">
          Saijeet2019@gmail.com
        </CardLink>
        <CardAddress>Base in Kathmandu, Nepal</CardAddress>
      </CardDescription>
    </>
  );
};

export default CardContent;
