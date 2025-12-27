'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MouseTracker() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3" })
      const yTo = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3" })
      
      const xToCursor = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" })
      const yToCursor = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" })

      window.addEventListener("mousemove", (e) => {
        // The main dot follows instantly (or very fast)
        xToCursor(e.clientX)
        yToCursor(e.clientY)
        
        // The outer ring follows with a "lag" (duration 0.6)
        xTo(e.clientX)
        yTo(e.clientY)
      })
    })

    return () => {
      ctx.revert()
      window.removeEventListener("mousemove", () => {})
    }
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference">
      
      {/* 1. The Center Dot (Fast) */}
      <div 
        ref={cursorRef}
        className="absolute w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* 2. The Outer Ring (Slow/Laggy) */}
      <div 
        ref={followerRef}
        className="absolute w-12 h-12 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
      
    </div>
  )
}