// File: components/Hero.tsx
'use client'
import { useEffect, useRef, forwardRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  
  // Hero Element Refs
  const titleWrapper = useRef<HTMLDivElement>(null)
  const titleText = useRef<HTMLHeadingElement>(null)
  const imageWrapper = useRef<HTMLDivElement>(null)
  const imageElement = useRef<HTMLDivElement>(null)
  const subTitle = useRef<HTMLDivElement>(null)

  // Slider Refs
  const firstText = useRef(null)
  const secondText = useRef(null)
  let xPercent = 0
  let direction = -1

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animations
      const tl = gsap.timeline()
      tl.fromTo(titleWrapper.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" })
        .fromTo(imageWrapper.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }, "-=1.2")
        .fromTo(subTitle.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=1")

      // 2. Scroll Parallax
      gsap.to(titleText.current, {
        scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: true },
        y: 200, opacity: 0.8
      })
      gsap.to(imageElement.current, {
        scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: true },
        y: -100,
      })
    }, container)

    // 3. Start Infinite Slider Loop
    requestAnimationFrame(animate)

    return () => ctx.revert()
  }, [])

  // Animation Frame Function for Slider
  const animate = () => {
    if(xPercent <= -100) xPercent = 0
    if(xPercent > 0) xPercent = -100
    
    // Safety Check
    if(firstText.current && secondText.current) {
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
    }
    
    // Adjust 0.03 to change speed (Lower = Slower)
    xPercent += 0.03 * direction
    requestAnimationFrame(animate)
  }

  return (
    <section ref={container} className="relative h-screen w-full flex flex-col items-center justify-center bg-rich-black overflow-hidden perspective-1000">
      
      {/* --- BACKGROUND DIAGONAL SLIDER --- */}
      {/* -rotate-[15deg] matches your red lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] -rotate-[15deg] z-0 opacity-20 pointer-events-none select-none mix-blend-overlay">
        <div className="relative flex whitespace-nowrap">
          <Phrase ref={firstText} />
          <Phrase ref={secondText} />
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      
      {/* LAYER 1: HUGE TEXT (Behind Image, In Front of Slider) */}
      <div ref={titleWrapper} className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
        <h1 ref={titleText} className="font-serif text-[18vw] leading-[0.8] text-[#f8f8f8] tracking-tighter whitespace-nowrap">
          ck0x<span className="italic text-gray-500">Dev</span>
        </h1>
      </div>

      {/* LAYER 2: MAIN IMAGE (Center) */}
      <div ref={imageWrapper} className="relative z-20 w-[300px] md:w-[400px] aspect-[3/4]">
        <div ref={imageElement} className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image 
                src="/hero-avatar.png"
                alt="CK Avatar"
                fill
                className="object-cover object-center"
                priority
            />
        </div>
      </div>

      {/* LAYER 3: SUBTEXT (Front) */}
      <div ref={subTitle} className="relative z-30 mt-8 flex flex-col items-center gap-2 mix-blend-difference">
        <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#f8f8f8]/80">
          Immersive Web Experience
        </p>
        <div className="h-[1px] w-24 bg-[#f8f8f8] mt-6 opacity-50"></div>
      </div>
    
    </section>
  )
}

// Sub-component for text
const Phrase = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="flex items-center gap-[5vw] px-[2.5vw]">
      <span className="text-[12vw] font-serif uppercase leading-none text-transparent stroke-2 stroke-white/50">
        Front-End Developer
      </span>
      <span className="text-[12vw] font-serif uppercase leading-none text-transparent stroke-2 stroke-white/50">
        UI/UX Designer
      </span>
      <span className="text-[12vw] font-serif uppercase leading-none text-transparent stroke-2 stroke-white/50">
        Creative Coder
      </span>
    </div>
  )
})

Phrase.displayName = "Phrase";