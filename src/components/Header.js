// components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1); // Get the target id
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('header').offsetHeight; // Get the header height

    if (targetElement) {
      // Scroll to the target element with an offset
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="header">
      <h1>Dustin Weeks</h1>
      <nav>
        <a href="#about" onClick={handleLinkClick}>About Me</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#experience" onClick={handleLinkClick}>Experience</a>
        <a href="#education" onClick={handleLinkClick}>Education</a>
      </nav>
    </header>
  );
};

export default Header;
