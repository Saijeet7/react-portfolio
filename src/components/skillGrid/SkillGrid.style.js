import styled from "styled-components";

export const Title = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-family: "Nunito Sans", sans-serif;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 70px);
  gap: 30px;
  align-items: center;
`;

export const Media = styled.figure`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
