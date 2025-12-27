'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const container = useRef(null)
  const titleRef = useRef(null)
  const lineRef = useRef(null)
  const emailRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Line Draw
      gsap.fromTo(lineRef.current, { scaleX: 0 }, { 
          scaleX: 1, duration: 1.5, ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 70%" }
      })
      
      // Text Reveal
      gsap.fromTo(titleRef.current, { y: 150, opacity: 0 }, { 
          y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 60%" }
      })

      // Email Hover Animation (Magnetic Pull)
      const emailEl = emailRef.current as unknown as HTMLElement
      
      if(emailEl) {
        emailEl.addEventListener('mouseenter', () => {
            gsap.to(emailEl, { scale: 1.1, color: "#d4af37", duration: 0.3 })
        })
        emailEl.addEventListener('mouseleave', () => {
            gsap.to(emailEl, { scale: 1, color: "#ffffff", duration: 0.3 })
        })
      }

    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-center px-10 md:px-20 bg-rich-black text-soft-cream overflow-hidden">
      
      {/* Decorative Line */}
      <div ref={lineRef} className="w-full h-[1px] bg-white/20 origin-left mb-20"></div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-20">
        
        {/* Massive Call To Action */}
        <div className="md:w-1/2 overflow-hidden">
          <h2 ref={titleRef} className="font-serif text-[12vw] leading-[0.85] text-soft-cream">
            Let's <br /> <span className="text-gray-700 italic">Create</span>.
          </h2>
        </div>

        {/* Info Column */}
        <div className="md:w-1/3 flex flex-col gap-16 mt-10 md:mt-4">
          
          <div className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase">( Get in Touch )</p>
            <a 
              ref={emailRef} 
              href="mailto:hello@ck0x.dev" 
              className="font-serif text-4xl md:text-5xl border-b border-white/10 pb-2 inline-block transition-all origin-left"
            >
              hello@ck0x.dev
            </a>
          </div>

          <div className="flex flex-col gap-6">
             <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase">( Socials )</p>
             <div className="flex gap-8 font-sans text-sm text-gray-300 uppercase tracking-widest">
               {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map(social => (
                 <a key={social} href="#" className="hover:text-luxury-gold hover:underline transition-colors decoration-luxury-gold/50 underline-offset-4">
                   {social}
                 </a>
               ))}
             </div>
          </div>

          <div className="mt-auto pt-10">
             <p className="font-sans text-[10px] text-gray-600 uppercase tracking-widest">
               © 2025 ck0xDev — All Rights Reserved.
             </p>
          </div>

        </div>
      </div>
    </section>
  )
}