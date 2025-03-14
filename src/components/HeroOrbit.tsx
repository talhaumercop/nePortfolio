import React from 'react'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
type Props = {}

function HeroOrbit(
  {
    children,
    size,
    rotation,
    OrbitDuration,
    Orbit = false,
    shouldSpin = false,
    spinDuration,
  }: PropsWithChildren<{
    size: number,
    rotation: number,
    OrbitDuration?: number,
    Orbit?: boolean,
    shouldSpin?: boolean,
    spinDuration?: number,
  }>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" >
      <div className={twMerge(Orbit === true && 'animate-spin')} style={{ animationDuration: `${OrbitDuration}s` }}>
        <div className=''
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`
          }}
        >
          <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{ animationDuration: `${spinDuration}s` }}>
            <div className="inline-flex" style={{
              transform: `rotate(${rotation * -1}deg)`
            }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOrbit