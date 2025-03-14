import React from 'react'

type Props = {}

function LanguageIcons({components}: {components:React.ElementType}) {
  const Component = components
  return (
    <>
    <Component className='size-10 fill-[url(#icon-gradient)] text-sky-400'/>
    <svg className='absolute size-0'>
      <linearGradient id='icon-gradient'>
        <stop offset='0%' stopColor='rgb(110 231 183 )'/>
        <stop offset='100%' stopColor='rgb(56 189 248)'/>
      </linearGradient>
    </svg>
    </>
    
  )
}

export default LanguageIcons