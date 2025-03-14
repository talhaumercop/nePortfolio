import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcons from "@/assets/icons/star.svg";
import SparkleIcons from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
  return <div className="py-32 relative md:py-48 lg:py-60 z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
      <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: "cover" }}>
      </div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit Orbit OrbitDuration={30} size={350} rotation={98}>
        <StarIcons className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit Orbit OrbitDuration={32} size={430} rotation={-18}>
        <SparkleIcons className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit Orbit OrbitDuration={34} size={440} rotation={80}>
        <SparkleIcons className="size-2 text-emerald-300/40" />
      </HeroOrbit>
      <HeroOrbit Orbit OrbitDuration={36} size={520} rotation={-40}>
        <div className="size-2 rounded-full text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit Orbit OrbitDuration={38} size={540} rotation={180}>
        <SparkleIcons className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit Orbit OrbitDuration={40} size={550} rotation={0}>
        <StarIcons className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit Orbit OrbitDuration={42} size={650} rotation={-5}>
        <div className="size-5 rounded-full text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit Orbit OrbitDuration={44} size={710} rotation={144}>
        <SparkleIcons className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit shouldSpin spinDuration={2}   Orbit OrbitDuration={46} size={720} rotation={85}>
        <div className="size-5 rounded-full text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit Orbit OrbitDuration={58} size={800} rotation={-45}>
        <StarIcons className="size-28 text-emerald-300" />
      </HeroOrbit>
     
    </div>
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="memoji" />
        <div className="items-center gap-4 bg-gray-950 border border-gray-800 py-1.5 px-4 rounded-lg inline-flex">
          <div className="bg-green-500 size-2.5 rounded-full animate-pulse"></div>
          <div className="text-sm font-medium">Availiable for new Projects</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="md:text-5xl text-3xl text-center mt-8 tracking-wide">Building Exceptional User Experience</h1>
        <p className="text-center mt-4 text-white/60 md:text-lg">
          We create websites that are not just visually appealing, but also user-friendly, easy to navigate, and deliver excellent performance.
        </p>
      </div>
      <div className="flex md:flex-row justify-center flex-col items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border px-6 h-12 rounded-xl border-white/15">
          <span className="font-semibold">
            Explore My Work
          </span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border px-6 h-12 rounded-xl border-white bg-white text-gray-900">
          <span>✋</span>
          <span className="font-semibold">
            Let&apos;s Connect
          </span>
        </button>
      </div>
    </div>
  </div>
};
