import React from "react";
import { ContactButtonWrap, ContactButton } from "./Card.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane  } from "@fortawesome/free-solid-svg-icons";

const CardButton = () => {
  return (
    <>
      <ContactButtonWrap>
        <ContactButton href="mailto:saijeet2019@gmail.com">
          <FontAwesomeIcon icon={faPaperPlane } className="icon" />
          <p>Contact Me</p>
        </ContactButton>
      </ContactButtonWrap>
    </>
  );
};

export default CardButton;
