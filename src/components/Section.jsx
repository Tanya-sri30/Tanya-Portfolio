import { useEffect, useRef } from 'react'
import Container from './Container.jsx'
import { cn } from '../utils/cn.js'

const spacingStyles = {
  compact: 'py-[72px] lg:py-[100px]',
  default: 'py-[72px] lg:py-[110px]',
  spacious: 'py-[72px] lg:py-[120px]',
}

function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  fullScreen = false,
  spacing = 'default',
}) {
  const sectionRef = useRef(null)
  const shouldReveal = !fullScreen && ['about', 'projects', 'skills', 'experience', 'contact'].includes(id)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !shouldReveal) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible')
          observer.unobserve(section)
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [shouldReveal])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        fullScreen
          ? 'flex min-h-[100svh] items-center py-24 lg:py-32'
          : spacingStyles[spacing],
        'scroll-mt-[90px]',
        shouldReveal && 'scroll-reveal-section',
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export default Section
