import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
 const Button = styled(Link)`
  background-color: #ff6f00;
  text-decoration: none;
  flex-wrap: wrap;
  display: inline-flex;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 12px 50px;
  cursor: pointer;
  .icon {
    color: #ffffff;
    height: 15px;
  }
  transition: all 0.2s ease-in;
  &:hover {
    background: #1983d4;
  }
`;
