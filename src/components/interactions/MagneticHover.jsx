import { useEffect, useRef } from 'react'
import { cn } from '../../utils/cn.js'

function MagneticHover({
  as,
  children,
  className = '',
  strength = 0.18,
  max = 10,
  ...props
}) {
  const elementRef = useRef(null)
  const frameRef = useRef(0)
  const canMagnetize = useRef(false)

  useEffect(() => {
    canMagnetize.current =
      window.matchMedia('(hover: hover)').matches &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const moveTo = (x, y) => {
    cancelAnimationFrame(frameRef.current)

    frameRef.current = requestAnimationFrame(() => {
      elementRef.current?.style.setProperty('transform', `translate3d(${x}px, ${y}px, 0)`)
    })
  }

  const handlePointerMove = (event) => {
    if (!canMagnetize.current) {
      return
    }

    const bounds = elementRef.current?.getBoundingClientRect()

    if (!bounds) {
      return
    }

    const x = (event.clientX - (bounds.left + bounds.width / 2)) * strength
    const y = (event.clientY - (bounds.top + bounds.height / 2)) * strength

    moveTo(Math.max(-max, Math.min(max, x)), Math.max(-max, Math.min(max, y)))
  }

  const handlePointerLeave = () => {
    moveTo(0, 0)
  }

  const Component = as || 'span'

  return (
    <Component
      ref={elementRef}
      className={cn('inline-flex transition-transform duration-500 ease-out will-change-transform', className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
    </Component>
  )
}

export default MagneticHover
