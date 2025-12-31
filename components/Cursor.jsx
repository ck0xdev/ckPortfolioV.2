// File: components/Cursor.jsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const cursorRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const text = textRef.current
    
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" })
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" })
    
    const xToText = gsap.quickTo(text, "x", { duration: 0.5, ease: "power3" })
    const yToText = gsap.quickTo(text, "y", { duration: 0.5, ease: "power3" })

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xToText(e.clientX)
      yToText(e.clientY)
    })
  }, [])

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
      <div ref={textRef} className="fixed top-0 left-0 pointer-events-none z-[9998] ml-6 mt-6">
        <span className="font-sans text-xs tracking-widest text-luxury-gold uppercase">Scroll</span>
      </div>
    </>
  )
}