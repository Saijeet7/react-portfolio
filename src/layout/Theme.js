import styled from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};
export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const BrowserStyle = styled.div`
  background-color: ${({ theme }) =>
    theme.body}; /* Use theme.body for background */
  color: ${({ theme }) =>
    theme.fontColor}; /* Use theme.fontColor for text color */
  /* Other styles */
`;
