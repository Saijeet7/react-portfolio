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
  height: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 40px;
  }
`;
