'use client'
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import LanguageIcons from "@/components/LanguageIcons";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import JsIcon from "@/assets/icons/square-js.svg"
import ReactIcon from "@/assets/icons/react.svg"
import NextIcon from "@/assets/icons/nextjs.svg"
import BlenderIcon from "@/assets/icons/blender.svg"
import GithubIcon from "@/assets/icons/github.svg"
import ThreeJSIcon from "@/assets/icons/threejs.svg"
import mapImage from '@/assets/images/map.png'
import smileEmoji from "@/assets/images/memoji-smile.png"
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import {motion} from 'framer-motion'
const toolBox=[
  {
    title: "javascript",
    iconType: JsIcon
  },
  {
    title: "HTML5",
    iconType: HtmlIcon
  },
  {
    title: "CSS3",
    iconType: CssIcon
  },
  {
    title: "React",
    iconType: ReactIcon
  },
  {
    title: "Next",
    iconType: NextIcon
  },
  {
    title: "Blender",
    iconType: BlenderIcon
  },
  {
    title: "Github",
    iconType: GithubIcon
  },
  {
    title: "Three JS",
    iconType: ThreeJSIcon
  },
]
const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    top: "5%",
    left: "5%",
    gradient: "from-purple-400 to-pink-300"
  },
  {
    title: "Cricket", 
    emoji: "🏏",
    top: "5%",
    left: "50%",
    gradient: "from-blue-400 to-cyan-300"
  },
  {
    title: "Photography",
    emoji: "📸",
    top: "35%",
    left: "40%",
    gradient: "from-teal-400 to-emerald-300"
  },
  {
    title: "Sketching",
    emoji: "✏️",
    top: "30%",
    left: "5%",
    gradient: "from-amber-300 to-yellow-200"
  },
  {
    title: "Fashion",
    emoji: "👔",
    top: "70%",
    left: "45%",
    gradient: "from-rose-400 to-pink-300"
  },
  {
    title: "Music",
    emoji: "🎵",
    top: "65%",
    left: "5%",
    gradient: "from-indigo-400 to-violet-300"
  }
];
export const AboutSection = () => {
  return (
  <div className="py-20 text-white">
    <div className="container">
    <SectionHeader description="Learn More About Me" title="A Glimpse Into My World" />
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
      <Card className="h-[320px] md:col-span-2">
       <CardHeader title="My Reads" description="Explore the books shaping my perspective"/>
        <div className="w-40 mx-auto mt-8">
        <Image src={bookImage} alt="Book Cover" />
        </div>
      </Card>
      <Card className="h-[320px] p-0 md:col-span-3">
      <CardHeader
    title="My Toolbox"
    className="px-6 pt-6"
    description="Explore the technologies I use"
  />
  
  {/* Top Toolbox (Moves Right) */}
  <ToolBoxItems toolBox={toolBox} className="mt-6" animationDirection="right" />
  
  {/* Bottom Toolbox (Moves Left) */}
  <ToolBoxItems toolBox={toolBox} className="mt-6" animationDirection="left" />
      </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      <Card className="h-[320px] p-0  col-span-3 flex flex-col">
  <CardHeader
    title="Beyond the Code"
    className="px-6 py-6"
    description="Explore my personal interests and hobbies beyond the screen"
  />
  
  <div className="relative flex-1">
    {hobbies.map((hobby, index) => (
      <motion.div
        key={index}
        style={{ top: hobby.top, left: hobby.left }}
        drag
        dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
        whileDrag={{ scale: 1.1 }}
        className={`absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r ${hobby.gradient} rounded-full py-1.5 cursor-grab active:cursor-grabbing`}
      >
        <span className="font-medium text-gray-900">{hobby.title}</span>
        <span>{hobby.emoji}</span>
      </motion.div>
    ))}
  </div>
      </Card>
      <Card className="h-[320px] col-span-2 p-0 relative">
        <Image src={mapImage} alt="map" className=" w-full h-full object-cover"/>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <Image src={smileEmoji} className="size-20 bg-gradient-to-r from-sky-400 to-violet-300 rounded-full" alt="smiles" />
         </div>
      </Card>
      </div>
    </div>
  </div>
</div>)
};
