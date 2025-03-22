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
    <div className="py-16">
      <div className=" -mx-1 bg-gradient-to-r from-black-800 to-white-900 overflow-hidden">
        <div className="relative flex whitespace-nowrap animate-scroll">
          <div className="flex gap-4 py-3  border-white/20 border-[1px] ">
            {words.map((word, index) => (
              <div key={index} className="inline-flex gap-4 items-center">
                <span className="word-tile text-white uppercase font-extrabold text-8xl">
                  {word}
                </span>
                {/* <StarIcon className="size-6 text-white" /> */}
                <span className='text-7xl'>🔥</span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="flex gap-4 py-3" aria-hidden="true">
            {words.map((word, index) => (
              <div key={index} className="inline-flex gap-4 items-center">
                <span className="word-tile text-gray-900 uppercase font-extrabold text-3xl">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
};
