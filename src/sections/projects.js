import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function Projects() {
  const projectData = [
    {
      title: "Ed-Tech Platform",
      description:
        "A learning platform built using React with user authentication, course management, and dashboards.",
      github: "https://github.com/adityakauthkar/StudyNotion",
      live: "#",
    },
    {
      title: "Medcare Application",
      description:
        "Healthcare app for booking appointments, managing patients, and viewing medical records.",
      github: "https://github.com/adityakauthkar/MedCare_Frontend",
      live: "#",
    },
    {
      title:"News Application ",
      description:
       "News App.",
      github: "https://github.com/adityakauthkar/NewsApp/tree/master",
      live: "#",
    }
  ];

  return (
    <section className="px-5 py-16 bg-bg text-white min-h-screen">
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
    </section>
  );
}

export default Projects;
