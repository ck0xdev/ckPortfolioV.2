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

    // 1. Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update)

    // 2. Add GSAP ticker (Optional for smoothness)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    // 3. Disable lag smoothing to prevent visual jumps
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <ReactLenis 
      root 
      ref={lenisRef} 
      autoRaf={true} // <--- MUST BE TRUE for consistent scrolling
      options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;