import React from "react";
import { Button } from "./Content.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight  } from "@fortawesome/free-solid-svg-icons";
const ContentButton = () => {
  return (
    <Button to="/about">
      <span>MORE ABOUT ME</span>{" "}
      <FontAwesomeIcon icon={faAngleRight } className="icon" />
    </Button>
  );
};

export default ContentButton;
