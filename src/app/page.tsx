import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
// import { TestimonialsSection } from "@/sections/Testimonials";
// import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Contact2 from "@/sections/Contact2";
import SkillsSection from "@/sections/Skill";
import Agent from "@/sections/Agent";
export default function Home() {
  return (
    <div>
      <Header />
   
      {/* <TestimonialsSection/> */}
      <section id="home">
        {/* Home Content */}
        <HeroSection />
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
