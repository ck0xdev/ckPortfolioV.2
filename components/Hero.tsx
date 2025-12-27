'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  
  // Create refs for Wrappers (Entrance) and Elements (Scroll)
  const titleWrapper = useRef<HTMLDivElement>(null)
  const titleText = useRef<HTMLHeadingElement>(null)
  
  const imageWrapper = useRef<HTMLDivElement>(null)
  const imageElement = useRef<HTMLDivElement>(null)
  
  const subTitle = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline()
      
      // --- 1. ENTRANCE ANIMATION (Targets the Wrappers) ---
      tl
      .fromTo(titleWrapper.current, 
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

      // --- 2. SCROLL PARALLAX (Targets the Inner Elements) ---
      // This ensures no conflict with the entrance animation
      
      // Text moves DOWN (Sinks) - Kept opacity high so it doesn't disappear
      gsap.to(titleText.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 200, 
        opacity: 0.8 // Only slight fade, ensuring visibility
      })

      // Image moves UP (Floats)
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
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* LAYER 1: HUGE TEXT (Behind) */}
      {/* Wrapper handles Entrance, H1 handles Scroll */}
      <div ref={titleWrapper} className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 ref={titleText} className="font-serif text-[18vw] leading-[0.8] text-[#f8f8f8] tracking-tighter opacity-100 whitespace-nowrap">
          ck0x<span className="italic text-gray-500">Dev</span>
        </h1>
      </div>

      {/* LAYER 2: MAIN IMAGE (Center) */}
      <div ref={imageWrapper} className="relative z-10 w-[300px] md:w-[400px] aspect-[3/4]">
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

      {/* LAYER 3: SUBTEXT (Front) */}
      <div ref={subTitle} className="relative z-20 mt-8 flex flex-col items-center gap-2 mix-blend-difference">
        <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#f8f8f8]/80">
          Immersive Web Experience
        </p>
        <div className="h-[1px] w-24 bg-[#f8f8f8] mt-6 opacity-50"></div>
      </div>
    
    </section>
  )
}