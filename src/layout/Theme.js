import styled from "styled-components";

export const darkTheme = {
  body: "#1d1d1d",
  fontColor: "#ffffff",
  fontColorLight: "rgba(255, 255, 255, 0.7)",
  borderColor: "1px solid #fff",
  borderLight: "1px solid rgba(255, 255, 255, 0.5)",
  shadow: "0px 4px 8px rgba(255, 255, 255, 0.2)"
};
export const lightTheme = {
  body: "#ffffff",
  fontColor: "#000000",
  fontColorLight: "rgba(0, 0, 0, 0.7)",
  borderColor: "1px solid #000000",
  borderLight: "1px solid rgba(0, 0, 0, 0.5)",
  shadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
};

export const BrowserStyle = styled.div`
  background-color: ${({ theme }) => theme.body};
  transition: all 0.25s ease;
  color: ${({ theme }) => theme.fontColor};
`;
