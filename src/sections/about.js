import React from "react";
import profile_photo from "../assets/profile_photo.jpeg";

function About() {

const handleClick = ()=> { 
document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

  return (
    <section id="about" className="bg-bg text-white px-5 mb-16 min-h-screen">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-gray-400">Get To Know</h3>
        <h2 className="text-3xl font-bold">About Me</h2>
      </div>

      {/* Content */}
      <div className="flex justify-center items-center">
        <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="relative group flex justify-center">
            <img
              src={profile_photo}
              alt="Aditya"
              className="
                w-56 h-56 
                rounded-2xl 
                object-cover 
                border-4 border-blue-500
                transition-all duration-500 ease-in-out
                transform group-hover:scale-105 group-hover:rotate-1
                animate-fadeIn
              "
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a recent 2025 graduate in Information Technology
              with a strong interest in Web and Mobile Development.
              I have built projects using modern frameworks like ReactJS and React Native.
            </p>

            <button
              className="
                border bg-primary text-bg px-6 py-2 rounded-md
                transition-all duration-300
                hover:bg-white hover:text-black
              "
              onClick={handleClick}
            >
              Let's Talk
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
