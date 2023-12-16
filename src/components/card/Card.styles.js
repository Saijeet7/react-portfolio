import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 50px 40px 60px 40px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const CardTopWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  p {
    max-width: 72px;
  }
`;

export const CardTitle = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: clamp(1.75rem, 2vw, 2.5rem);
  color: #ffffff;
  font-weight: 700;
`;

export const CardMedia = styled.figure`
  width: 100%;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

export const CardDescription = styled.div`
  margin-bottom: 32px;
  width: 100%;
`;

export const CardLink = styled.a`
  display: inline-block;
  text-align: center;
  width: 100%;
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 700;
  margin-bottom: 15px;
  transition: all 0.2s ease-in;
  text-decoration: none;
  &:hover {
    color: #ff6f00;
  }
`;

export const CardAddress = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-family: "Roboto", sans-serif;
  font-size: clamp(1rem, 2vw, 1.275rem);
  font-weight: 700;
  text-align: center;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
`;

export const CardIconWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;

export const CardIconLink = styled.a`
  .icon {
    width: 34px;
    height: auto;
    color: white;
    transition: all 0.2s ease-in;
    &:hover,
    &:active,
    &:focus {
      color: #ff6f00;
      transform: scale(1.1);
    }
  }
`;

export const ContactButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContactButton = styled.a`
  color: #ffffff;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 1.375rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ff6f00;
  padding: 15px 40px;
  border-radius: 40px;
  .icon {
    width: 25px;
    height: auto;
    color: white;
  }
  transition: all 0.2s ease-in;
  &:hover {
    background: #1983d4;;
  }
`;
