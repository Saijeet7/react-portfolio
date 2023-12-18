import React from "react";
import { CardIconWrap, CardIconLink } from "./Card.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const CardContact = () => {
  return (
    <>
      <CardIconWrap>
        <CardIconLink href="https://twitter.com/saijeet1999" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </CardIconLink>
        <CardIconLink
          href="https://www.instagram.com/saijeet_7/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </CardIconLink>
        <CardIconLink
          href="https://www.linkedin.com/in/saijeet-upadhyay-370b111a1/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </CardIconLink>
        <CardIconLink href="https://github.com/Saijeet7" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </CardIconLink>
      </CardIconWrap>
    </>
  );
};

export default CardContact;
