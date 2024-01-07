import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import LightMode from "./components/lightMode/lightMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BrowserStyle, darkTheme, lightTheme } from "./layout/Theme";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const isLightTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isLightTheme ? "light" : "dark");
  };
  return (
    <>
      <ThemeProvider theme={isLightTheme ? darkTheme : lightTheme}>
        <BrowserStyle>
          <LightMode toggleTheme={toggleTheme} isLightTheme={isLightTheme} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </BrowserRouter>
        </BrowserStyle>
      </ThemeProvider>
    </>
  );
};

export default App;
