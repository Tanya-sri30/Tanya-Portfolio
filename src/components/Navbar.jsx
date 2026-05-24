import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container.jsx'
import MagneticHover from './interactions/MagneticHover.jsx'
import { navbarLinks } from '../data/navbarLinks.js'
import { cn } from '../utils/cn.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let frameId = 0

    const updateScrollState = () => {
      cancelAnimationFrame(frameId)

      frameId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24)
      })
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', updateScrollState)
    }
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-out',
        isScrolled || isOpen
          ? 'border-[rgba(17,17,17,0.08)] bg-[rgba(245,242,235,0.78)] backdrop-blur-md'
          : 'border-transparent bg-transparent shadow-none',
      )}
    >
      <Container>
        <nav
          className={cn(
            'flex items-center justify-between gap-4 transition-[min-height] duration-500 ease-out sm:gap-6',
            isScrolled ? 'min-h-16' : 'min-h-[4.5rem] sm:min-h-20',
          )}
          aria-label="Primary navigation"
        >
          <MagneticHover as={Link} to="/" className="group flex min-w-0 items-center gap-3" strength={0.02} max={3} onClick={closeMenu}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(17,17,17,0.18)] bg-[rgba(255,255,255,0.38)] text-sm font-semibold text-[color:var(--color-text-primary)] transition duration-500 group-hover:border-[rgba(217,107,43,0.32)] group-hover:text-[color:var(--color-accent-primary)]">
              T
            </span>
            <span
              className={cn(
                'font-display text-sm font-semibold tracking-normal text-[color:var(--color-text-primary)] transition-all duration-500 group-hover:text-[color:var(--color-accent-primary)] sm:text-base',
                isScrolled && 'sm:text-[0.95rem]',
              )}
            >
              Tanya Srivastava
            </span>
          </MagneticHover>

          <div className="hidden items-center gap-1 rounded-full border border-[rgba(17,17,17,0.08)] bg-[rgba(237,231,220,0.62)] p-1 shadow-[var(--shadow-soft)] backdrop-blur-md xl:flex">
            {navbarLinks.map((link) => (
              <MagneticHover
                as="a"
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-[color:var(--color-text-secondary)] transition duration-500 ease-out hover:bg-[rgba(255,255,255,0.58)] hover:text-[color:var(--color-text-primary)]"
                strength={0.02}
                max={3}
              >
                <span className="relative z-10 transition duration-500">
                  {link.label}
                </span>
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[color:var(--color-accent-primary)] transition duration-500 ease-out group-hover:scale-x-100" />
              </MagneticHover>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-[rgba(17,17,17,0.18)] bg-[rgba(255,255,255,0.34)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-text-primary)] transition duration-500 ease-out hover:-translate-y-0.5 hover:border-[rgba(217,107,43,0.28)] hover:bg-[rgba(255,255,255,0.68)] hover:text-[color:var(--color-accent-primary)] xl:inline-flex"
          >
            Get in touch -&gt;
          </a>

          <button
            type="button"
            className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(17,17,17,0.12)] bg-[rgba(255,255,255,0.35)] transition duration-500 ease-out hover:bg-[rgba(255,255,255,0.65)] xl:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  'h-px w-full bg-[color:var(--color-text-primary)] transition duration-300',
                  isOpen && 'translate-y-2 rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-[color:var(--color-text-primary)] transition duration-300',
                  isOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-[color:var(--color-text-primary)] transition duration-300',
                  isOpen && '-translate-y-2 -rotate-45',
                )}
              />
            </span>
          </button>
        </nav>

        <div
          className={cn(
            'grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out xl:hidden',
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="min-h-0">
            <div className="border-t border-[rgba(17,17,17,0.08)] py-3">
              {navbarLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-12 items-center justify-between px-1 py-3 text-sm font-medium text-[color:var(--color-text-secondary)] transition duration-500 ease-out hover:text-[color:var(--color-text-primary)]"
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span className="h-px w-8 origin-left scale-x-0 bg-[color:var(--color-accent-primary)] transition duration-500 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
