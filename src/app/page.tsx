'use client';
import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
// import { TestimonialsSection } from "@/sections/Testimonials";
// import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Contact2 from "@/sections/Contact2";
import SkillsSection from "@/sections/Skill";
import Agent from "@/sections/Agent";
import Hero2 from "@/sections/Hero2";
import { Nav } from "@/sections/Nav";
import { useState, useEffect } from 'react';
import Loader from "@/components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time
  }, []);

  if (loading) {
    return (
      <Loader/>
    );
  }

  return (
    <div>
      <Nav/>
      <Header />
   
      {/* <TestimonialsSection/> */}
      <section id="home">
        {/* Home Content */}
        {/* <HeroSection /> */}
        <Hero2/>
      </section>
      <section id="services">
        <SkillsSection/>
      </section>

      <section id="projects">
        {/* Projects Content */}
        <ProjectsSection />
      </section>
      <TapeSection />
      <Agent/>
      <section id="about">
        {/* About Content */}
        <AboutSection />
      </section>

      <section id="contact">
        {/* Contact Content */}
        <Contact2/>
      </section>
      <Footer />
    </div>
  );
}
