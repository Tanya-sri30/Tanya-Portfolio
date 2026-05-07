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
        'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-500 ease-out',
        isScrolled || isOpen
          ? 'border-[color:var(--color-cyan-border)] bg-[color:var(--color-navbar-surface)] shadow-[var(--shadow-navbar)]'
          : 'border-transparent bg-transparent shadow-none',
      )}
    >
      <Container className="px-4 sm:px-6 lg:px-8 xl:px-10">
        <nav
          className={cn(
            'flex items-center justify-between gap-4 transition-[min-height] duration-500 ease-out sm:gap-6',
            isScrolled ? 'min-h-16' : 'min-h-[4.5rem] sm:min-h-20',
          )}
          aria-label="Primary navigation"
        >
          <MagneticHover as={Link} to="/" className="group flex min-w-0 items-center gap-3" strength={0.08} max={6} onClick={closeMenu}>
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-success)] opacity-25" />
              <span className="relative inline-flex h-3 w-3 rounded-full border border-[rgba(0,255,136,0.6)] bg-[color:var(--color-success)] shadow-[0_0_18px_rgba(0,255,136,0.18)]" />
            </span>

            <span className="flex flex-col">
              <span
                className={cn(
                  'font-display text-[0.78rem] font-semibold tracking-[0.16em] text-[color:var(--color-text-primary)] transition-all duration-500 group-hover:text-[color:var(--color-accent-primary)] group-hover:[text-shadow:0_0_18px_rgba(0,212,255,0.18)] min-[390px]:text-sm sm:text-base sm:tracking-[0.22em]',
                  isScrolled && 'sm:text-[0.92rem]',
                )}
              >
                Tanya Srivastava
              </span>
              <span
                className={cn(
                  'mt-1 hidden font-system text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[color:var(--color-text-muted)] transition-all duration-500 min-[390px]:block',
                  isScrolled && 'opacity-75',
                )}
              >
                Online 
              </span>
            </span>
          </MagneticHover>

          <div className="hidden items-center gap-0 xl:flex">
            {navbarLinks.map((link) => (
              <MagneticHover
                as="a"
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 font-system text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-primary)]/70 transition duration-300 hover:text-[color:var(--color-accent-primary)]"
                strength={0.12}
                max={7}
              >
                <span className="relative z-10 transition duration-300 group-hover:[text-shadow:0_0_18px_rgba(34,211,238,0.2)]">
                  {link.label}
                </span>
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[color:var(--color-accent-primary)] shadow-[var(--shadow-cyan-line)] transition duration-300 ease-out group-hover:scale-x-100" />
              </MagneticHover>
            ))}
          </div>

          <button
            type="button"
            className="group inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(232,237,242,0.1)] bg-[color:var(--color-surface)] transition duration-300 hover:border-[color:var(--color-cyan-border-strong)] hover:bg-[color:var(--color-cyan-glass)] hover:shadow-[var(--shadow-cyan-soft)] xl:hidden"
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
            <div className="border-t border-[rgba(232,237,242,0.1)] py-3">
              {navbarLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-12 items-center justify-between px-1 py-3 font-system text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-primary)]/80 transition duration-300 hover:text-[color:var(--color-accent-primary)]"
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span className="h-px w-8 origin-left scale-x-0 bg-[color:var(--color-accent-primary)] transition duration-300 group-hover:scale-x-100" />
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
