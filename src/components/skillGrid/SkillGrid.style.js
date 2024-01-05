import styled from "styled-components";

export const Title = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-family: "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 70px);
  gap: 30px;
  align-items: center;
  @media screen and (max-width: 768px) {
    gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(4, 50px);
  }
`;

export const Media = styled.figure`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
