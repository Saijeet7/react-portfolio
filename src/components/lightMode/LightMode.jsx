import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { BrowserStyle } from "../../layout/Theme";

const LightMode = ({ toggleTheme, isLightTheme }) => {
  const [isToggled, setIsToggled] = useState(isLightTheme);
  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };
  return (
    <BrowserStyle>
      <Wrapper>
        <div className="container">
          <Item onClick={onToggle}>
            <FontAwesomeIcon icon={faLightbulb} className="dark-icon" />
            <span className="screen-reader-text">Switch Theme mode</span>
          </Item>
        </div>
      </Wrapper>
    </BrowserStyle>
  );
};

export default LightMode;

const Wrapper = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

const Item = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.body};
  border-radius: 100%;
  transition: all 0.2s ease-in;
  cursor: pointer;
  .dark-icon {
    color: ${({ theme }) => theme.fontColor};
    height: 20px;
    width: auto;
    transition: all 0.2s ease-in;
  }
  &:hover {
    border: 1px solid #ff6f00;
    .dark-icon {
      transform: scale(1.1);
      color: #ff6f00;
    }
  }
`;
