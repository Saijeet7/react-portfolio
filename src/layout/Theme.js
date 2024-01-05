import styled from "styled-components";

export const darkTheme = {
  body: "#1d1d1d",
  fontColor: "#fff",
  borderColor: "1px solid #fff;",
  borderLight: "1px solid rgba(255, 255, 255, 0.5)"
};
export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  borderColor: "1px solid #000000;",
  borderLight: "1px solid rgba(0, 0, 0, 0.5)"
};

export const BrowserStyle = styled.div`
  background-color: ${({ theme }) => theme.body};
  transition: all 0.25s ease;
`;
