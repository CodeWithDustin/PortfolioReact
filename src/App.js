import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from './components/Skills';
import "./styles/App.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
  // State to manage the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply the theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }

    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className="App">
      <Header />
      <button className="theme-toggle" onClick={toggleDarkMode}>
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <main>
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;
