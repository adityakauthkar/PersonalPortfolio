import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import StudyNotion from "../assets/Screenshot (4).png";
import News from "../assets/news.jpeg";
import Medcare from "../assets/medcare.jpeg";

function Projects() {
  const projectData = [
    {
      title: "Ed-Tech Platform",
      description:
        "A learning platform built using React with user authentication, course management, and dashboards.",
      github: "https://github.com/adityakauthkar/StudyNotion",
      live: "#",
      image:StudyNotion,
    },
    {
      title: "Medcare Application",
      description:
        "Prescription scanning and ordering medicines , get nearest pharmacy stores and set reminders  .",
      github: "https://github.com/adityakauthkar/MedCare_Frontend",
      live: "#",
      image:Medcare,
    },
    {
      title:"News Application ",
      description:
       "News App built using React Native which shows real time news with options like favourites , comment and share.",
      github: "https://github.com/adityakauthkar/NewsApp/tree/master",
      live: "#",
      image:News,
    }
  ];

  return (
    <section id="projects" className="px-5 py-16 bg-bg text-white min-h-screen">
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="text-gray-400 block text-lg">My React Work</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Portfolio</h2>
      </div>

      {/* Projects Container */}
      <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-72 bg-bg-variant p-6 rounded-3xl hover:bg-bg transition transform hover:scale-105 hover:border border-blue-400 shadow-lg"
          >
             <img
    src={project.image}
    alt={project.title}
    className="w-full h-40 object-cover rounded-xl mb-4"
  />
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
            <div className="flex gap-4 text-2xl">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaGithub />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                <FaLink />
              </a>
            </div>
          </div>
        ))}
        
      </div>

      <div className="flex justify-center align-center">
        <button className=" bg-primary   px-5 py-2 rounded-md hover:bg-white mt-7  transition-all duration-300 shadow-lg  ">
          <span className="text-bg">Show More</span>
        </button>
      </div>
      
        
    </section>
    
  );
}

export default Projects;
