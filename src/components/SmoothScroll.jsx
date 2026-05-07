import { ReactLenis } from 'lenis/react'

const lenisOptions = {
  anchors: {
    offset: -88,
  },
  duration: 1.25,
  easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
  lerp: 0.08,
  smoothWheel: true,
  syncTouch: true,
  touchMultiplier: 0.9,
}

function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
