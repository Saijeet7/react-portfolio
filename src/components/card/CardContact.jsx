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
          <span className="accessible-text">Twitter Link</span>
        </CardIconLink>
        <CardIconLink
          href="https://www.instagram.com/saijeet_7/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <span className="accessible-text">instagram Link</span>
        </CardIconLink>
        <CardIconLink
          href="https://www.linkedin.com/in/saijeet-upadhyay-370b111a1/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <span className="accessible-text">Linked Inn Link</span>
        </CardIconLink>
        <CardIconLink href="https://github.com/Saijeet7" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <span className="accessible-text">Github Link</span>
        </CardIconLink>
      </CardIconWrap>
    </>
  );
};

export default CardContact;
