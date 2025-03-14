'use client';
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="flex justify-center z-10 w-full fixed top-3 items-center">
      <nav className="flex gap-1 p-0.5 border bg-white/10 backdrop-blur border-white/15 rounded-full">
        <a 
          href="#home" 
          onClick={() => setActiveItem("home")}
          className={`nav-items transition-colors duration-300 ${
            activeItem === "home" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </a>
        <a 
          href="#projects"
          onClick={() => setActiveItem("projects")} 
          className={`nav-items transition-colors duration-300 ${
            activeItem === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
        </a>
        <a 
          href="#about"
          onClick={() => setActiveItem("about")}
          className={`nav-items transition-colors duration-300 ${
            activeItem === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </a>
        <a 
          href="#contact"
          onClick={() => setActiveItem("contact")}
          className={`nav-items transition-colors duration-300 ${
            activeItem === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
