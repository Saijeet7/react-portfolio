import styled from "styled-components";

export const TopContenWrap = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-family: "Roboto", sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  margin-bottom: 50px;
  p {
    max-width: 390px;
  }
`;

export const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  color: #ff6f00;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  text-transform: uppercase;
  max-width: 610px;
  font-weight: 700;
  width: 100%;
  strong {
    font-size: clamp(2rem, 2.5vw, 3rem);
    font-weight: 700;
  }
  margin-bottom: 60px;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 40px;
    height: 5px;
    background: #ff6f00;
    top: 25px;
    right: calc(100% + 10px);
  }
`;

export const Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: Roboto;
  font-size: clamp(1.125rem, 2vw, 1.625rem);
  font-weight: 400;
  max-width: 600px;
  margin-bottom: 60px;
`;

export const Button = styled.a`
  background-color: #ff6f00;
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
