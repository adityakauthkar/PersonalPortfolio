import React from "react";
import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import FloatingNav from "./components/floatingNav";
import Footer from "./components/footer";

function App() {


    
  return (
      <div className="mt-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <FloatingNav />
        <Footer/>

      </div>
  );
}

export default App;
