'use client';

import Card from '@/components/Card';
import { motion } from 'framer-motion';
// import { twMerge } from 'tailwind-merge';

const skills = [
  {
    title: 'Frontend Development',
    description: 'Building beautiful, responsive, and high-performance websites using React, Next.js, Tailwind CSS, and GSAP animations.',
  },
  {
    title: '3D Blender Modeling',
    description: 'Creating basic 3D models, UV unwrapping, baking shadows, and integrating them into web applications with Three.js.',
  },
  {
    title: 'Building AI Agents',
    description: 'Exploring AI-powered applications and agents with a focus on interactivity and automation.',
    banner: 'Work in Progress',
  }
];

const SkillsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-500 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2">Technologies and fields I specialize in</p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative p-6 hover:shadow-xl transition-shadow">
                {skill.banner && (
                  <div className="absolute top-4 left-14 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-gray-900 px-3 py-1 rounded-full">
                    {skill.banner}
                  </div>
                )}
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  {skill.title}
                </h3>
                <p className="text-gray-300 mt-2">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
