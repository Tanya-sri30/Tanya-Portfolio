import { useEffect, useRef } from 'react'
import Container from './Container.jsx'
import { cn } from '../utils/cn.js'

function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  fullScreen = false,
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
      className={cn(
        fullScreen
          ? 'flex min-h-[100svh] items-center py-20 md:py-24 lg:py-28'
          : 'py-16 md:py-20 lg:py-24',
        shouldReveal && 'scroll-reveal-section',
        className,
      )}
    >
      <Container id={id} className={cn('scroll-mt-[90px]', containerClassName)}>
        {children}
      </Container>
    </section>
  )
}

export default Section
