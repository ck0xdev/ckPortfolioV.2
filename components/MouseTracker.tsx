'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MouseTracker() {
  const circleRef = useRef(null)

  useEffect(() => {
    // 1. Initial Position: Center it mathematically so the cursor is in the middle of the 60px circle
    gsap.set(circleRef.current, { xPercent: -50, yPercent: -50 })

    // 2. Setup Animation: A slight delay (duration: 0.3) makes it feel "magnetic"
    const xTo = gsap.quickTo(circleRef.current, "x", { duration: 0.3, ease: "power3" })
    const yTo = gsap.quickTo(circleRef.current, "y", { duration: 0.3, ease: "power3" })

    // 3. Move Listener
    const move = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div 
      ref={circleRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '60px',        // 60x60 Size as requested
        height: '60px',
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none', // Lets you click through the circle
        mixBlendMode: 'difference', // This makes the text turn black/inverted
        zIndex: 9999
      }}
    />
  )
}