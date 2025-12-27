// File: components/Marquee.tsx
'use client'
import { useEffect, useRef, forwardRef } from 'react'
import gsap from 'gsap'

export default function Marquee() {
  return (
    // REMOVED: "border-y border-white/5" -> Now it's just clean black
    <div className="relative flex flex-col gap-2 py-16 bg-rich-black overflow-hidden">
      {/* Slider 1: Right to Left */}
      <SliderRow direction={-1} />
      
      {/* Slider 2: Left to Right */}
      <SliderRow direction={1} />
    </div>
  )
}

// Reusable Slider Row Component
const SliderRow = ({ direction }: { direction: number }) => {
  const firstText = useRef(null)
  const secondText = useRef(null)
  let xPercent = 0
  
  useEffect(() => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if(direction === -1) {
       if(xPercent <= -100) xPercent = 0
    } else {
       if(xPercent >= 0) xPercent = -100
    }
    
    if(firstText.current && secondText.current) {
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
    }
    
    xPercent += 0.05 * direction
    requestAnimationFrame(animate)
  }

  return (
    <div className="flex whitespace-nowrap">
      <Phrase ref={firstText} />
      <Phrase ref={secondText} />
    </div>
  )
}

// The Text Content
const Phrase = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="flex items-center gap-[10vw] px-[5vw]">
      <span className="text-[8vw] font-serif text-white/10 uppercase leading-none">
        Front-End Developer
      </span>
      <span className="text-[2vw] text-luxury-gold">✦</span>
      <span className="text-[8vw] font-serif text-white/10 uppercase leading-none">
        UI/UX Designer
      </span>
      <span className="text-[2vw] text-luxury-gold">✦</span>
      <span className="text-[8vw] font-serif text-white/10 uppercase leading-none">
        Creative Coder
      </span>
      <span className="text-[2vw] text-luxury-gold">✦</span>
    </div>
  )
})

Phrase.displayName = "Phrase";