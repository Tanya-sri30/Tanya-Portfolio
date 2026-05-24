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
          ? 'border-white/10 bg-[rgba(11,15,20,0.72)] backdrop-blur-md'
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
          <MagneticHover as={Link} to="/" className="group min-w-0" strength={0.02} max={3} onClick={closeMenu}>
            <span
              className={cn(
                'font-display text-sm font-semibold tracking-normal text-[color:var(--color-text-primary)] transition-all duration-500 group-hover:text-white sm:text-base',
                isScrolled && 'sm:text-[0.95rem]',
              )}
            >
              Tanya Srivastava
            </span>
          </MagneticHover>

          <div className="hidden items-center gap-1 xl:flex">
            {navbarLinks.map((link) => (
              <MagneticHover
                as="a"
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium text-zinc-400 transition duration-500 ease-out hover:text-zinc-100"
                strength={0.02}
                max={3}
              >
                <span className="relative z-10 transition duration-500">
                  {link.label}
                </span>
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[color:var(--color-accent-primary)]/60 transition duration-500 ease-out group-hover:scale-x-100" />
              </MagneticHover>
            ))}
          </div>

          <button
            type="button"
            className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-transparent transition duration-500 ease-out hover:bg-white/[0.04] xl:hidden"
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
            <div className="border-t border-white/10 py-3">
              {navbarLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-12 items-center justify-between px-1 py-3 text-sm font-medium text-zinc-300 transition duration-500 ease-out hover:text-white"
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span className="h-px w-8 origin-left scale-x-0 bg-[color:var(--color-accent-primary)]/60 transition duration-500 group-hover:scale-x-100" />
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
