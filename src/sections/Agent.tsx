"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import image from '@/assets/images/n8n2.png'
export default function Agent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4 py-0 md:py-8">
      <motion.div
        className="relative w-full max-w-7xl h-auto aspect-video p-1 rounded-2xl overflow-hidden"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #34d399, #38bdf8, #34d399, #38bdf8)",
          backgroundSize: "200% 200%",
        }}
      >
        <div className="w-full h-full bg-gray-800 rounded-2xl flex justify-center items-center">
          <Image
                         src={image}
                         alt='Agent'
                         width={900}
                         height={900}
                         className="w-full h-full object-contain md:object-cover"
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                         priority
                       />
        </div>
      </motion.div>
    </div>
  );
}
