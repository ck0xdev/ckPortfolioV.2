// File: components/SmoothScroll.jsx
'use client'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SmoothScroll({ children }) {
  const lenisRef = useRef()

  useEffect(() => {
    const lenis = lenisRef.current?.lenis
    if (!lenis) return

    // 1. Tell ScrollTrigger to update whenever Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update)

    // 2. We do NOT manually drive the RAF loop here because autoRaf={true} does it.
    // This prevents the double-loop freeze issue.
    
    // Optional: Add lag smoothing to GSAP to prevent jitters during heavy scrolls
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
    }
  }, [])

  return (
    <ReactLenis 
      root 
      ref={lenisRef} 
      autoRaf={true} // <--- KEEPS SCROLLING ALIVE
      options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;