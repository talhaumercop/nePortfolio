import React from 'react'

type Props = {}

function SectionHeader({title,description}:{title:string,description:string}) {
  return (
    <div>
     <h2 className="text-center text-3xl upercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-500 bg-clip-text text-transparent ">{title}  </h2>
     <p className="text-center">{description}</p>
    </div>  
)
}

export default SectionHeader