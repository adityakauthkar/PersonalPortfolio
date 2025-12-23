import React from "react";
import {
  SiPostman,
  SiAndroidstudio,
  SiCanva,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNodejs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaCss3Alt } from "react-icons/fa6";  
import { IoLogoJavascript } from "react-icons/io";

function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-bg text-white flex flex-col items-center justify-center px-6 md:px-16 py-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h3 className="text-gray-400 text-lg tracking-wide">What Skills I Have</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">My Experience</h2>
      </div>

      {/* Blocks */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">

        {/* Tools Block */}
        <div className="bg-bg-variant p-8 rounded-3xl w-72 md:w-80 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-blue-400">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">Tools</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.simpleicons.org/visualstudiocode/007ACC"
                alt="VS Code"
                className="w-7 h-7"
              />
              <span className="text-lg">VS Code</span>
            </div>
            <div className="flex items-center gap-3">
              <SiPostman className="text-orange-500 text-2xl" />
              <span className="text-lg">Postman</span>
            </div>
            <div className="flex items-center gap-3">
              <SiAndroidstudio className="text-green-500 text-2xl" />
              <span className="text-lg">Android</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-white text-2xl" />
              <span className="text-lg">GitHub</span>
            </div>
            <div className="flex items-center gap-3">
              <SiCanva className="text-sky-400 text-2xl" />
              <span className="text-lg">Canva</span>
            </div>
          </div>
        </div>

        {/* Technologies Block */}
        <div className="bg-bg-variant p-8 rounded-3xl w-72 md:w-80 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-cyan-400">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Technologies
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <FaReact className="text-sky-400 text-2xl" />
              <span className="text-lg">React</span>
            </div>
            <div className="flex items-center gap-3">
              <TbBrandReactNative className="text-sky-400 text-2xl" />
              <span className="text-lg">React Native</span>
            </div>
            <div className="flex items-center gap-3">
              <TbBrandNodejs className="text-green-500 text-2xl" />
              <span className="text-lg">Node.js</span>
            </div>
            <div className="flex items-center gap-3">
              <SiExpress className="text-gray-300 text-2xl" />
              <span className="text-lg">Express</span>
            </div>
            <div className="flex items-center gap-3">
              <SiMongodb className="text-green-500 text-2xl" />
              <span className="text-lg">MongoDB</span>
            </div>
            <div className="flex items-center gap-3">
              <GrMysql className="text-blue-500 text-2xl" />
              <span className="text-lg">MySQL</span>
            </div>
            <div className="flex items-center gap-3">
              <SiTailwindcss className="text-cyan-400 text-2xl" />
              <span className="text-lg">Tailwind</span>
            </div>
            <div className="flex items-center gap-3">
              <SiHtml5 className="text-orange-500 text-2xl" />
              <span className="text-lg">HTML5</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCss3Alt className="text-blue-500 text-2xl" />
              <span className="text-lg">CSS3</span>
            </div>
            <div className="flex items-center gap-3">
              <IoLogoJavascript className="text-yellow-400 text-2xl" />
              <span className="text-lg">JavaScript</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
