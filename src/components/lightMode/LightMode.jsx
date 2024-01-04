import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const LightMode = () => {
  return (
    <Wrapper>
      <div className="container">
        <Item>
          <FontAwesomeIcon icon={faLightbulb} className="dark-icon" />
        </Item>
      </div>
    </Wrapper>
  );
};

export default LightMode;

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

const Item = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 100%;
  .dark-icon {
    color: #ffffff;
    height: 20px;
    width: auto;
  }
`;
