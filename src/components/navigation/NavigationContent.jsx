import React from "react";
import { NavigationWrap, NavigationLink } from "./Navigation.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFile,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const NavigationContent = () => {
  return (
    <>
      <NavigationWrap>
        <NavigationLink to="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <p>Home</p>
        </NavigationLink>
        <NavigationLink to="/about">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <p>About</p>
        </NavigationLink>
        <NavigationLink to="/resume">
          <FontAwesomeIcon icon={faFile} className="icon" />
          <p>Resume</p>
        </NavigationLink>
        <NavigationLink to="/project">
          <FontAwesomeIcon icon={faCode} className="icon" />
          <p>Projects</p>
        </NavigationLink>
      </NavigationWrap>
    </>
  );
};

export default NavigationContent;
