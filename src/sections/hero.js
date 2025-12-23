import React from "react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/heroAnimation.json";
import { useNavigate } from "react-router-dom";


const texts = [
  "i build websites using MERN ",
  "I build mobile apps using React Native",
  "I am MERN stack developer",
  "Tech Enthusiast",
];

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  const navigate = useNavigate();
  const handleClick = () => { 
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

}


  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((index + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);



  return (
    <section id="home" className="min-h-screen">
    <div className="bg-bg min-h-screen flex items-center justify-center ">
      <div className="text-center mb-16">
        <h1 className="text-white text-lg">Hello I'm</h1>

        <h2 className="text-white text-5xl font-extrabold  mt-2">Aditya Kauthkar</h2>

        <h3 className="text-gray-300 mt-2 text-xl">
          {text}
          <span className="cursor">|</span>
        </h3>

        <div className="mt-6 flex justify-center gap-4" >
          <button className="border-2 border-primary border-blue-500 text-white px-5 py-2 rounded-md  hover:bg-white "  onClick={() => window.open("/Aditya_Kauthkar_resume__.pdf")}>
            <span className="text-primary"> Download CV </span>  
          </button>
          
          <button className="bg-primary   px-5 py-2 rounded-md hover:bg-white" onClick={handleClick} >
           <span className="text-bg">Let's Talk</span> 
          </button>

          
        </div>

          <div className="mt-32">
            <Lottie animationData={heroAnimation} className="w-96" />
          </div>

      </div>
    </div>
    </section>
  );
}

export default Hero;
