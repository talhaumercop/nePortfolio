"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import image from '@/assets/images/n8n2.png';
import image2 from '@/assets/images/room.png';
import image3 from '@/assets/images/blender2.png';
import image4 from '@/assets/images/haunt.png';
import image5 from '@/assets/images/galaxy.png';
import image6 from '@/assets/images/earth.png';

export default function Agent() {
  const [images, setImages] = useState([
    { id: 1, src: image },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 }
  ]);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: any, info: any, index: number) => {
    const newImages = [...images];
    const [removed] = newImages.splice(index, 1);
    const insertAt = Math.round(info.point.x / 200);
    newImages.splice(Math.min(Math.max(insertAt, 0), newImages.length), 0, removed);
    setImages(newImages);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4 py-8">
      <motion.div
        className="relative w-full max-w-7xl h-auto p-4 rounded-2xl overflow-hidden"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(90deg, #34d399, #38bdf8, #34d399, #38bdf8)",
          backgroundSize: "200% 200%",
        }}
      >
        <div ref={containerRef} className="w-full h-full bg-gray-800 rounded-2xl p-4">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                drag
                dragConstraints={containerRef}
                onDragEnd={(event, info) => handleDragEnd(event, info, index)}
                whileDrag={{ scale: 1.1 }}
                className="relative inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg py-1.5 cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={img.src}
                  alt='Agent'
                  width={900}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  priority
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
