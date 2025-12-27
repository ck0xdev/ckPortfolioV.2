'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLHeadingElement>(null)
  const subTitle = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline()
      
      // 1. Main Title Animation
      tl.fromTo(title.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
      )
      
      // 2. Subtitle Animation
      .fromTo(subTitle.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1"
      )

      // 3. Parallax Scroll Effect
      gsap.to(title.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: -150, 
        opacity: 0.5
      })

    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative h-screen w-full flex flex-col items-center justify-center bg-rich-black overflow-hidden">
      
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="z-10 text-center px-4">
        
        {/* The Display Name: ck0xDev (Solid ClamWhite) */}
        <h1 ref={title} className="font-serif text-[15vw] leading-[0.85] text-[#f8f8f8] tracking-tighter">
          ck0x<span className="italic">Dev</span>
        </h1>

        {/* The Subtext */}
        <div ref={subTitle} className="mt-12 flex flex-col items-center gap-2">
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#f8f8f8]/80">
            Immersive Web Experience
          </p>
          <div className="h-[1px] w-24 bg-[#f8f8f8] mt-6 opacity-50"></div>
        </div>

      </div>

      {/* --- DECORATIVE GEOMETRY --- */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 border border-white/5 rounded-full blur-[1px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] border border-white/5 rounded-full blur-[2px]"></div>
    
    </section>
  )
}