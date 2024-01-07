import React from "react";
import styled from "styled-components";

export const FooterWrap = styled.footer`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.fontColor};
  opacity: 0.7;
  text-align: center;
  font-family: "Futura", sans-serif;
  width: 100%;
  padding-bottom: 20px;
  strong {
    font-size: 1rem;
  }
`;
