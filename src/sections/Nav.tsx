'use client';
import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="flex justify-center top-[90vh] fixed z-[100000000] w-full items-center">
      <nav className="flex justify-between items-center p-0.5 rounded-full border bg-white/10 backdrop-blur border-white/15">
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
