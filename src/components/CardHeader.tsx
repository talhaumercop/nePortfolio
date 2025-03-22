import React from 'react'
import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from 'tailwind-merge'

type Props = {}

function CardHeader({title,description,className}:{title:string,description:string,className?:string }) {
  return (
    <div className={twMerge("flex flex-col",className)}>
    <div className="inline-flex gap-2 items-center">
      <StarIcon className='size-9 text-white'/>
      <h3 className="text-3xl">{title}</h3>
    </div>
    <p className="text-sm text-white/60 mt-2" >{description}</p>
  </div>
  )
}

export default CardHeader