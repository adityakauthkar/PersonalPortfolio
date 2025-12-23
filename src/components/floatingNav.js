import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
  { id: "home", icon: <FaHome /> },
  { id: "about", icon: <FaUser /> },
  { id: "skills", icon: <FaCode /> },
  { id: "projects", icon: <FaProjectDiagram /> },
  { id: "contact", icon: <FaEnvelope /> },
];

function FloatingNav() {
  const [active, setActive] = useState("home");
  const navRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // const activeIndex = sections.findIndex((s) => s.id === active);
  const activeEl = itemRefs.current[active];

  return (
    <nav
      ref={navRef}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 -translate-y-1/2
        z-40 flex gap-10 px-12 py-6 rounded-full
        backdrop-blur-xl bg-white/15 border border-white/25
        shadow-2xl
      "
    >
      {sections.map((item) => (
        <a
          key={item.id}
          ref={(el) => (itemRefs.current[item.id] = el)}
          href={`#${item.id}`}
          className={`relative text-2xl transition-all
            ${
              active === item.id
                ? "text-primary scale-125"
                : "text-white"
            }`}
        >
          {item.icon}
        </a>
      ))}

      {/* 🔥 Glowing Active Dot */}
      {activeEl && (
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute bottom-3"
          style={{
            left:
              activeEl.offsetLeft +
              activeEl.offsetWidth / 2 -
              6,
          }}
        >
          <span className="glow-dot" />
        </motion.div>
      )}
    </nav>
  );
}

export default FloatingNav;
