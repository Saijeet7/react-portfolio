import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import LightMode from "./components/lightMode/lightMode";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./layout/Theme";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const isLightTheme = theme === "light";
  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };
  return (
    <>
      <ThemeProvider theme={isLightTheme ? darkTheme : lightTheme}>
        <LightMode toggleTheme={toggleTheme} isLightTheme={isLightTheme} />
        <Name color="red">SAIJEET </Name>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

const Name = styled.h1`
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`;


