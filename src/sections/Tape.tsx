'use client'
import StarIcon from '@/assets/icons/star.svg'

const words=[
  'Performent',
  'Asseccible',
  'Secure',
  'Interective',
  'Efficient',
  'Responsive',
  'Engaging',
  'Intuitive',
  'Innovative',
  'Dynamic',
  'Creative',
  'User-friendly',
]

export const TapeSection = () => {

  return (
    <div className="bg-black text-white py-10">
    <div className="relative flex whitespace-nowrap animate-scroll">
    <div className="flex gap-4 py-3 border-white/20 border-[1px]">
      {words.map((word, index) => (
        <div key={index} className="inline-flex gap-4 items-center">
          <span className="word-tile textclass2 text-white uppercase font-extrabold text-8xl sm:text-3xl md:text-5xl lg:text-8xl">
            {word}
          </span>
          <span className='text-7xl'>🔥</span>
        </div>
      ))}
    </div>
  
    {/* Exact duplicate for looping effect */}
    <div className="flex gap-4 py-3" aria-hidden="true">
      {words.map((word, index) => (
        <div key={index} className="inline-flex gap-4 items-center">
          <span className="word-tile text-white uppercase font-extrabold text-8xl sm:text-3xl md:text-5xl lg:text-8xl">
            {word}
          </span>
          <span className='text-7xl'>🔥</span>
        </div>
      ))}
    </div>
  </div>  

<style jsx>{`
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .animate-scroll {
    display: flex;
    white-space: nowrap;
    animation: scroll 10s linear infinite; /* Slower speed for smoothness */
  }
`}</style>
    </div>
  );
};
