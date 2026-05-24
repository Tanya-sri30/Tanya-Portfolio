import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import Divider from '../components/ui/Divider.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import { routePaths } from '../routes/routePaths.js'

function NotFound() {
  return (
    <MainLayout>
      <Section
        id="system-error"
        className="relative flex min-h-screen items-center overflow-hidden"
        containerClassName="relative z-10 flex flex-col items-center text-center"
      >
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-grid" />
          <span className="hero-aura hero-aura-primary" />
          <span className="hero-scanline" />
        </div>

        <div className="animate-fade-up flex flex-col items-center">
          <SectionLabel>PAGE NOT FOUND</SectionLabel>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Error Code
          </p>

          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-primary)] text-shadow-system sm:text-5xl lg:text-6xl">
            404
          </h1>
        </div>

        <Divider className="animate-fade-up mt-8 max-w-xl [animation-delay:120ms]" />

        <p className="animate-fade-up mt-8 max-w-xl text-base leading-7 text-zinc-400 [animation-delay:180ms] sm:text-lg">
          The page you are looking for is unavailable or has moved.
        </p>

        <div className="animate-fade-up mt-8 grid w-full max-w-xl grid-cols-1 gap-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 [animation-delay:240ms] sm:grid-cols-3">
          <span className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Page: Missing</span>
          <span className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Route: Unknown</span>
          <span className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Home: Ready</span>
        </div>

        <div className="animate-fade-up mt-10 [animation-delay:320ms]">
          <PrimaryButton as={Link} to={routePaths.home}>
            Return Home
          </PrimaryButton>
        </div>
      </Section>
    </MainLayout>
  )
}

export default NotFound
