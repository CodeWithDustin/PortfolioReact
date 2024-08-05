import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Dustin Weeks</h1>
      <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
      </nav>
    </header>
  );
};

export default Header;
