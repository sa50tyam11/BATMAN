// components/SmoothScroll.jsx
'use client'
import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,          // smoothness — 0.1 is silky, 0.05 is ultra-smooth
        duration: 1.2,       // total scroll animation duration (seconds)
        smoothTouch: false,  // keep native momentum scrolling on iOS
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      }}
    >
      {children}
    </ReactLenis>
  )
}