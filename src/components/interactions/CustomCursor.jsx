import { useEffect, useRef } from 'react'
import CursorGlow from './CursorGlow.jsx'

function CustomCursor() {
  const cursorRef = useRef(null)
  const glowRef = useRef(null)
  const position = useRef({ x: 0, y: 0 })
  const cursor = useRef({ x: 0, y: 0 })
  const previous = useRef({ x: 0, y: 0 })
  const speed = useRef(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    if (prefersReducedMotion || isCoarsePointer) {
      return undefined
    }

    let frameId = 0

    const handlePointerMove = (event) => {
      position.current = { x: event.clientX, y: event.clientY }
    }

    const animate = () => {
      const dx = position.current.x - cursor.current.x
      const dy = position.current.y - cursor.current.y

      cursor.current.x += dx * 0.16
      cursor.current.y += dy * 0.16

      const movement = Math.hypot(
        cursor.current.x - previous.current.x,
        cursor.current.y - previous.current.y,
      )

      speed.current += (movement - speed.current) * 0.18
      previous.current = { ...cursor.current }

      const scale = Math.min(1.2, 1 + speed.current / 160)
      const glowScale = Math.min(1.35, 1 + speed.current / 140)
      const opacity = Math.min(0.34, 0.14 + speed.current / 260)

      cursorRef.current?.style.setProperty(
        'transform',
        `translate3d(${cursor.current.x - 8}px, ${cursor.current.y - 8}px, 0) scale(${scale})`,
      )
      glowRef.current?.style.setProperty(
        'transform',
        `translate3d(${cursor.current.x - 48}px, ${cursor.current.y - 48}px, 0) scale(${glowScale})`,
      )
      glowRef.current?.style.setProperty('opacity', opacity)

      frameId = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    frameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      <span
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-4 w-4 rounded-full border border-[rgba(125,211,252,0.32)] bg-[rgba(125,211,252,0.06)] shadow-[var(--shadow-cursor)] transition-opacity duration-500 lg:block"
        aria-hidden="true"
      />
      <CursorGlow ref={glowRef} />
    </>
  )
}

export default CustomCursor
