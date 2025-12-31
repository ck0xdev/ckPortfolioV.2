// File: components/Preloader.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const words = [
  "Hello", "Bonjour", "Ciao", "Olà", "やぁ", "Hallå", "Guten Tag", "Namaste",
  "Salaam", "Zdravstvuyte", "Nǐ hǎo", "Konnichiwa", "Anyoung", "Hola", "Merhaba",
  "Sawatdee", "Jambo", "Hej", "Aloha", "Sziasztok", "Cześć", "Privet", "Marhaba",
  "Yassas", "Shalom"
]

export default function Preloader() {
  const container = useRef(null)
  const textRef = useRef(null)
  const dotRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // 1. Lock Scroll & Set Dimensions
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden'
      document.body.style.cursor = 'none'
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    const ctx = gsap.context(() => {
      // Initial text reveal
      if (index === 0) {
        gsap.to(textRef.current, { opacity: 1, duration: 0.5 })
      }

      // Word Cycle
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev === words.length - 1) {
            clearInterval(interval)
            exitAnimation()
            return prev
          }
          return prev + 1
        })
      }, 160) 

    }, container)

    return () => ctx.revert()
  }, [])

  const exitAnimation = () => {
    const tl = gsap.timeline()
    const h = window.innerHeight

    tl
    // 1. Shrink Text
    .to(textRef.current, {
      scale: 0, opacity: 0, duration: 0.5, ease: "power3.in"
    })
    
    // 2. Show Dot
    .to(dotRef.current, {
      scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)"
    })
    
    // 3. Drop Dot (0.5s Duration)
    .to(dotRef.current, {
      y: h / 2 + 100, 
      duration: 0.5, // <--- FIXED: 0.5s
      ease: "bounce.out"
    })

    // 4. Draw Borders
    .to(".border-path", {
      strokeDashoffset: 0, duration: 4, ease: "power2.inOut" 
    })

    // 5. Fill Screen White
    .to(container.current, {
      backgroundColor: "#ffffff", duration: 0.5, ease: "power1.in"
    }, "-=0.5") 

    // 6. Reveal Site
    .to(container.current, {
      clipPath: "circle(0% at 50% 50%)",
      duration: 1.5,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(container.current, { display: "none" })
        document.body.style.overflow = ''
        document.body.style.cursor = ''
      }
    })
  }

  // SVG Calculation
  const pad = 0
  const w = dimension.width
  const h = dimension.height
  const r = 20 

  const leftPath = `M ${w/2} ${h-pad} L ${pad+r} ${h-pad} Q ${pad} ${h-pad} ${pad} ${h-pad-r} L ${pad} ${pad+r} Q ${pad} ${pad} ${pad+r} ${pad} L ${w/2} ${pad}`
  const rightPath = `M ${w/2} ${h-pad} L ${w-pad-r} ${h-pad} Q ${w-pad} ${h-pad} ${w-pad} ${h-pad-r} L ${w-pad} ${pad+r} Q ${w-pad} ${pad} ${w-pad-r} ${pad} L ${w/2} ${pad}`

  return (
    <div 
      ref={container} 
      className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-[#0a0a0a] text-[#f5f5f0] overflow-hidden visible opacity-100"
      style={{ clipPath: "circle(150% at 50% 50%)" }}
    >
      <h1 ref={textRef} className="font-serif text-5xl md:text-7xl tracking-wider flex items-center gap-4 absolute opacity-0 z-10">
        <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
        {words[index]}
      </h1>

      <div ref={dotRef} className="absolute w-4 h-4 bg-white rounded-full opacity-0 scale-0 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <path d={leftPath} className="border-path" fill="none" stroke="white" strokeWidth="25" strokeDasharray={w + h + 200} strokeDashoffset={w + h + 200} strokeLinecap="round" />
        <path d={rightPath} className="border-path" fill="none" stroke="white" strokeWidth="25" strokeDasharray={w + h + 200} strokeDashoffset={w + h + 200} strokeLinecap="round" />
      </svg>
    </div>
  )
}