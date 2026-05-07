import Section from '../components/Section.jsx'
import Divider from '../components/ui/Divider.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import { siteContent } from '../data/siteContent.js'

function HeroSection() {
  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
      containerClassName="relative z-10 flex flex-col items-center text-center"
    >
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-grid" />
        <span className="hero-aura hero-aura-primary" />
        <span className="hero-aura hero-aura-secondary" />
        <span className="hero-scanline" />
      </div>

      <div className="animate-fade-up flex flex-col items-center">
        <SectionLabel>{siteContent.status}</SectionLabel>

        <SectionTitle className="mt-8 text-shadow-system">
          {siteContent.systemName}
        </SectionTitle>
      </div>

      <Divider className="animate-fade-up mt-8 [animation-delay:120ms]" />

      <p className="animate-fade-up mt-8 max-w-2xl text-base leading-8 text-slate-300/90 [animation-delay:180ms] sm:text-lg">
        Intelligent portfolio environment calibrated for cinematic interfaces,
        neural design systems, and precise frontend engineering.
      </p>

      <div className="animate-fade-up mt-6 grid grid-cols-1 gap-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-cyan-100/55 [animation-delay:240ms] sm:grid-cols-3 sm:gap-6">
        <span>Protocol: React</span>
        <span>Interface: Tailwind</span>
        <span>Status: Synced</span>
      </div>

      <div className="animate-fade-up mt-12 flex w-full max-w-lg flex-col gap-3 [animation-delay:320ms] sm:flex-row sm:justify-center">
        <PrimaryButton href="#projects">Initialize Work</PrimaryButton>
        <PrimaryButton href="#contact" variant="secondary">
          Open Channel
        </PrimaryButton>
      </div>
    </Section>
  )
}

export default HeroSection
