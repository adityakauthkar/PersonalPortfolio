import React from "react";
import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import FloatingNav from "./components/floatingNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


    
  return (
    <BrowserRouter>
      <div className="mt-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <FloatingNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
