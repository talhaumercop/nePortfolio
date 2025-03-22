"use client";

import Image from "next/image";
import Card from "@/components/Card";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import darkSaasLandingPage from "@/assets/images/game.png";
import lightSaasLandingPage from "@/assets/images/zajno.png";
import aiStartupLandingPage from "@/assets/images/devebco.png";
import portfolio from "@/assets/images/portfolio.png";

const portfolioProjects = [
  {
    title: "3d Portfolio(Responsive)",
    link: "https://portfolio-eight-lime-22.vercel.app/",
    image: portfolio,
  },
  {
    title: "Zajno 3D Website",
    link: "https://zajno-neon.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    title: "Devebco Impressive Website",
    link: "https://devebco.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    title: "3D Mini Game",
    link: "https://game-swart-xi.vercel.app/",
    image: darkSaasLandingPage,
  },
 
];
// ...existing code...

export const ProjectsSection = () => {
  const handleClick = () => {
    alert("Please view these projects on a desktop screen as they are not responsive.");
  };

  return (
    <section className="pb-16 z-[999]">
      <div className="container">
        <h2 className="text-center text-5xl uppercase font-semibold text-white">
          Featured Projects
        </h2>
        <p className="text-center text-white/60">
          These projects may not be{" "}
          <span className="uppercase text-lg bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent">
            responsive
          </span>{" "}
          as they are my personal projects.
        </p>

        <div className="gap-20 flex flex-col mt-10 justify-center">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 sticky top-0  pt-8 text-white"
            >
              <div className="flex">
                <div className="inline-flex gap-2 text-transparent bg-clip-text text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-emerald-300 to-sky-400">
                  <span>&bull;</span>
                </div>
              </div>

              <h3 className="text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10">
                <button
                  className="md:w-auto px-8 mt-4 bg-white inline-flex justify-center gap-2 items-center text-gray-950 h-12 w-full rounded-xl font-semibold"
                  onClick={handleClick}
                >
                  <span>View Project</span>
                  <ArrowUpRightIcon className="inline-flex h-6 w-6 text-gray-950" />
                </button>
              </a>

              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 mx-auto"
                priority
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
