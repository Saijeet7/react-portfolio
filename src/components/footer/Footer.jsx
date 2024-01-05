import React from "react";
import { FooterWrap } from "./Footer.styles";
import { BrowserStyle } from "../../layout/Theme";

const Footer = () => {
  return (
    <BrowserStyle>
      <FooterWrap>
        <p>
          <strong>© 2023 Saijeet Upadhyay</strong>
          <br />A self developed and design website
        </p>
      </FooterWrap>
    </BrowserStyle>
  );
};

export default Footer;
