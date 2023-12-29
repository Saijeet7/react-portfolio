import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const IconWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const IconLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 100%;
  transition: all 0.2s ease-in;
  .icon {
    width: 20px;
    height: auto;
    color: white;
    transition: all 0.2s ease-in;
  }
  @media screen and (max-width: 768px) {
    .icon {
      width: 20px;
    }
  }
  &:hover {
    border: 1px solid #1983d4;
    .icon {
      color: #1983d4;
      transform: scale(1.1);
    }
  }
`;

export const ImageWrap = styled.figure`
  width: 100%;
  max-width: 600px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center center;
    border-radius: 20px;
  }
`;
