import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container.jsx'
import { navbarLinks } from '../data/navbarLinks.js'
import { cn } from '../utils/cn.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--color-cyan-border)] bg-[color:var(--color-navbar-surface)] shadow-[var(--shadow-navbar)] backdrop-blur-2xl">
      <Container>
        <nav className="flex min-h-20 items-center justify-between gap-6" aria-label="Primary navigation">
          <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-200 opacity-25" />
              <span className="relative inline-flex h-3 w-3 rounded-full border border-cyan-100/60 bg-cyan-300 shadow-[var(--shadow-cyan-soft)]" />
            </span>

            <span className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.22em] text-white transition duration-300 group-hover:text-cyan-50 group-hover:[text-shadow:0_0_18px_rgba(34,211,238,0.18)] sm:text-base">
                Tanya Srivastava
              </span>
              <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-cyan-100/55">
                Online // Neural Link Stable
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navbarLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/75 transition duration-300 hover:text-cyan-50"
              >
                <span className="relative z-10 transition duration-300 group-hover:[text-shadow:0_0_18px_rgba(34,211,238,0.2)]">
                  {link.label}
                </span>
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-200/70 shadow-[var(--shadow-cyan-line)] transition duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition duration-300 hover:border-[color:var(--color-cyan-border-strong)] hover:bg-[color:var(--color-cyan-glass)] hover:shadow-[var(--shadow-cyan-soft)] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  'h-px w-full bg-cyan-50 transition duration-300',
                  isOpen && 'translate-y-2 rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-cyan-50 transition duration-300',
                  isOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-cyan-50 transition duration-300',
                  isOpen && '-translate-y-2 -rotate-45',
                )}
              />
            </span>
          </button>
        </nav>

        <div
          className={cn(
            'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden',
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="min-h-0">
            <div className="border-t border-white/10 py-3">
              {navbarLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between px-1 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300/80 transition duration-300 hover:text-cyan-50"
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span className="h-px w-8 origin-left scale-x-0 bg-cyan-200/70 transition duration-300 group-hover:scale-x-100" />
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
