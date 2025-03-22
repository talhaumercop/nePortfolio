"use client";
import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/mypic.png";
import heroImage2 from "@/assets/images/Adobe Express - file.png";
import { motion } from "framer-motion";

const Hero2 = () => {
  return (
    <div className="w-full h-[100vh] flex items-center overflow-hidden relative bg-slate-200">
      {/* Infinite Scrolling Text */}
      <div className="flex w-max z-0">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
        >
          <span className="flex">
            <h1 className="text-black text-[15vw] font2 sm:text-[19vw] md:text-[28vw] lg:text-[15vw] font-bold mx-5">DEVELOPER</h1>
            <h1 className="text-black text-[15vw] font2 sm:text-[19vw] md:text-[28vw] lg:text-[15vw] font-bold mx-5">&</h1>
            <h1 className="text-black text-[15vw] font2 sm:text-[19vw] md:text-[28vw] lg:text-[15vw] font-bold mx-5">MODELER</h1>
          </span>
          <span className="flex">
            <h1 className="text-black text-[15vw] font2 sm:text-[19vw] md:text-[28vw] lg:text-[15vw] font-bold mx-5">DEVELOPER</h1>
            <h1 className="text-black text-[15vw] font2 sm:text-[19vw] md:text-[28vw] lg:text-[15vw] font-bold mx-5">&</h1>
            <h1 className="text-black text-[15vw] font2 sm:text-[19vw] md:text-[28vw] lg:text-[15vw] font-bold mx-5">MODELER</h1>
          </span>
        </motion.div>
      </div>

      {/* Foreground Image */}
      <div className="absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:top-[70%] sm:w-[100%] md:w-[80%] md:top-[75%] lg:w-[100vw] lg:top-[60%] flex justify-center h-auto z-10">
        <Image 
          src={heroImage2} 
          alt="Hero Image" 
          width={600} 
          height={600} 
          priority 
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero2;
