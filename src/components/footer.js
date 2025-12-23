import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-bg-variant py-10  mt-10">
      {/* Name */}
      <div className="text-center">
        <span className="text-white text-3xl font-bold">
          Aditya Kauthkar
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center items-center gap-6 mt-8">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`transition-all duration-300 cursor-pointer
              ${
                active === link.id
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-white hover:text-primary"
              }
            `}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-primary transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-primary transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://github.com/adityakauthkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-primary transition"
        >
          <FaGithub />
        </a>
      </div>
      <div> 
        <p className="flex justify-center items-center text-white mt-32">
           © Aditya Kauthkar. All rights reserved 2025. 
        </p> 
    </div>
   
    </footer>
  );
}

export default Footer;
