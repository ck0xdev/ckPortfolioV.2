// File: components/Hero.tsx
'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  
  // Refs
  const titleWrapper = useRef<HTMLDivElement>(null)
  const titleText = useRef<HTMLHeadingElement>(null)
  const imageWrapper = useRef<HTMLDivElement>(null)
  const imageElement = useRef<HTMLDivElement>(null)
  const subTitle = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- ENTRANCE ANIMATIONS ---
      const tl = gsap.timeline()
      
      tl.fromTo(titleWrapper.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
      )
      .fromTo(imageWrapper.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1.2"
      )
      .fromTo(subTitle.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1"
      )
      // Fade in the OLD HUD (Simple & Clean)
      .fromTo(".hero-ui", 
        { opacity: 0 },
        { opacity: 1, duration: 1, stagger: 0.2 },
        "-=0.5"
      )

      // --- SCROLL PARALLAX ---
      // (No mouse interaction, only scroll movement)
      gsap.to(titleText.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 200, 
        opacity: 0.8 
      })

      gsap.to(imageElement.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: -100, 
      })

    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative h-screen w-full flex flex-col items-center justify-center bg-rich-black overflow-hidden perspective-1000">
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- HUD / CORNER UI (Restored to "The Old One") --- */}
      <div className="absolute inset-0 z-50 pointer-events-none p-8 md:p-12 flex flex-col justify-between h-full w-full mix-blend-difference text-soft-cream">
         
         {/* Top Row */}
         <div className="flex justify-between items-start">
            {/* Logo */}
            <div className="hero-ui opacity-0">
               <span className="font-serif text-2xl font-bold tracking-tighter">CK</span>
            </div>
            
            {/* Status (Simple Green Dot) */}
            <div className="hero-ui opacity-0 flex items-center gap-3">
               <div className="relative flex items-center justify-center w-3 h-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </div>
               <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-300">
                 Available for Work
               </span>
            </div>
         </div>
         
         {/* Bottom Row */}
         <div className="flex justify-between items-end">
            {/* Location */}
            <div className="hero-ui opacity-0 flex flex-col gap-1">
               <span className="font-sans text-[10px] tracking-widest uppercase text-gray-500">Location</span>
               <span className="font-serif text-lg">Surat, India</span>
            </div>
            
            {/* Scroll Indicator Removed as requested */}
            <div></div> 
         </div>
      </div>

      {/* --- CENTER CONTENT --- */}
      
      {/* LAYER 1: HUGE TEXT */}
      <div ref={titleWrapper} className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 ref={titleText} className="font-serif text-[18vw] leading-[0.8] text-[#f8f8f8] tracking-tighter opacity-100 whitespace-nowrap">
          ck0x<span className="italic text-gray-600">Dev</span>
        </h1>
      </div>

      {/* LAYER 2: MAIN IMAGE (Static, Clean, No Interaction) */}
      <div ref={imageWrapper} className="relative z-10 w-[300px] md:w-[400px] aspect-[3/4]">
        {/* No borders, no shadow, no mouse listeners */}
        <div ref={imageElement} className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image 
                src="/hero-avatar.png"
                alt="CK Avatar"
                fill
                className="object-cover object-center opacity-100"
                priority
            />
        </div>
      </div>

      {/* LAYER 3: SUBTEXT */}
      <div ref={subTitle} className="relative z-20 mt-8 flex flex-col items-center gap-2 mix-blend-difference">
        <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#f8f8f8]/80">
          Immersive Web Experience
        </p>
        <div className="h-[1px] w-24 bg-luxury-gold mt-6"></div>
      </div>
    
    </section>
  )
}