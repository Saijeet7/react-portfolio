import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const IconWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
  border: ${({ theme }) => theme.borderColor};
  border-radius: 100%;
  transition: all 0.2s ease-in;
  .icon {
    width: 20px;
    height: auto;
    color: ${({ theme }) => theme.fontColor};
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
    border: ${({ theme }) => theme.borderLight};
    box-shadow:${({ theme }) => theme.shadow};
  }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-family: " Roboto", sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 500;
  margin-bottom: 60px;
  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-family: "Futura", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 20px;
  }
  h3 {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-family: " Roboto", sans-serif;
    font-weight: 700;
    margin-bottom: 10px;
    color: rgba(#ffffff, 0.7);
  }
  p {
    width: min(100%, 600px);
    opacity: 0.7;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      width: 100%;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    text-align: center;
  }
`;
