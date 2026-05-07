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
          <SectionLabel>NEURAL ROUTE FAILURE</SectionLabel>

          <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-cyan-100/45">
            Diagnostic Code
          </p>

          <h1 className="mt-3 text-7xl font-semibold leading-none tracking-normal text-white text-shadow-system sm:text-8xl lg:text-9xl">
            404
          </h1>
        </div>

        <Divider className="animate-fade-up mt-8 max-w-xl [animation-delay:120ms]" />

        <p className="animate-fade-up mt-8 max-w-xl text-base leading-8 text-slate-300/90 [animation-delay:180ms] sm:text-lg">
          Requested interface node is offline or does not exist in the current
          SYSTEM.TANYA() navigation matrix.
        </p>

        <div className="animate-fade-up mt-8 grid w-full max-w-xl grid-cols-1 gap-3 text-left text-xs uppercase tracking-[0.24em] text-cyan-100/55 [animation-delay:240ms] sm:grid-cols-3">
          <span className="border border-white/10 bg-white/[0.025] p-4">Signal: Lost</span>
          <span className="border border-white/10 bg-white/[0.025] p-4">Route: Unknown</span>
          <span className="border border-white/10 bg-white/[0.025] p-4">Recovery: Ready</span>
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
