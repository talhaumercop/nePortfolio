'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import image1 from '@/assets/images/n8n2.png';
import image2 from '@/assets/images/room.png';
import image3 from '@/assets/images/blender2.png';
import image4 from '@/assets/images/haunt.png';
import image5 from '@/assets/images/galaxy.png';
import image6 from '@/assets/images/earth.png';

const images = [
  { id: 6, src: image6, alt: 'Image 6', span: 'col-span-2 row-span-1' },
  { id: 3, src: image3, alt: 'Image 3', span: 'col-span-2 row-span-2' },
  { id: 4, src: image4, alt: 'Image 4', span: 'col-span-2 row-span-2' },
  { id: 5, src: image5, alt: 'Image 5', span: 'col-span-2 row-span-1' },
];

export default function SkillsSection() {
  return (
    <div className="flex justify-center w-full h-[100vh] items-center min-h-screen p-4">
      <div className="w-full max-w-6xl h-full rounded-xl shadow-lg p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-[100vh] grid-rows-none sm:grid-rows-2 md:grid-rows-3 gap-3">
          {images.map((image) => (
            <div 
              key={image.id} 
              className={`${image.span} border-[3px] relative rounded-lg overflow-hidden min-h-[200px] ${image.id === 1 || image.id === 3 ? 'border-4' : ''}`}
              style={{
                backgroundImage: 'linear-gradient(to right, #f97316, #ef4444, #ec4899)',
                padding: '2px'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
