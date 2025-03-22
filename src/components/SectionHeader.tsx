import React from 'react'

type Props = {}

function SectionHeader({title,description}:{title:string,description:string}) {
  return (
    <div>
     <h2 className="text-center uppercase text-5xl font-semibold text-white">{title}  </h2>
     <p className="text-center text-white/60">{description}</p>
    </div>  
)
}

export default SectionHeader