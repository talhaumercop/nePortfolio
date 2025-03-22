import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import grainImage from '@/assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge'

type Props = {}

function Card({className,children,...other}:ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={twMerge(
      "project bg-black border-white border-[2px] rounded-3xl relative p-6 overflow-hidden",
      "after:content-[''] after:bg-gradient-to-b",
      "after:absolute after:inset-0 after:-z-10 after:rounded-3xl after:outline-2 after:outline after:-outline-offset-2 after:outline-white/20",
      "after:pointer-events-none", // ✅ Add this line
      className
    )} {...other}>    
    <div className="flex ">
    {/* <div className="absolute  inset-0 -z-1 opacity-5 " style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: "cover" }}></div> */}
    </div>
    {children}
    </div>
  )
}

export default Card