import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;
