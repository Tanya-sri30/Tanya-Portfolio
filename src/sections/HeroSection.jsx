import FadeUp from '../components/animations/FadeUp.jsx'
import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import Divider from '../components/ui/Divider.jsx'
import FloatingPanel from '../components/ui/FloatingPanel.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import MagneticHover from '../components/interactions/MagneticHover.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import SecondaryButton from '../components/ui/SecondaryButton.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import StatCard from '../components/ui/StatCard.jsx'
import { siteContent } from '../data/siteContent.js'

const systemStats = [
  {
    label: 'Signal',
    value: '99.7%',
    detail: 'Interface stability',
  },
  {
    label: 'Modules',
    value: '07',
    detail: 'Portfolio nodes',
  },
  {
    label: 'Latency',
    value: '12ms',
    detail: 'Interaction response',
  },
]

function HeroSection() {
  return (
    <Section
      id="home"
      fullScreen
      className="relative overflow-hidden"
      containerClassName="relative z-10 flex max-w-[1180px] flex-col items-center text-center"
    >
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-grid" />
        <span className="hero-aura hero-aura-primary" />
        <span className="hero-aura hero-aura-secondary" />
        <span className="hero-scanline" />
      </div>

      <SectionIntro
        eyebrow={siteContent.status}
        title={siteContent.systemName}
        description="Intelligent portfolio environment calibrated for cinematic interfaces, neural design systems, and precise frontend engineering."
        as={FadeUp}
        className=""
        titleClassName="max-w-[11ch] text-shadow-system"
        descriptionClassName="max-w-2xl"
      />

      <FadeUp className="mt-9 w-full sm:mt-10" delay={0.08}>
        <Divider />
      </FadeUp>

      <StaggerContainer className="mt-7 grid grid-cols-1 gap-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-cyan-100/55 sm:mt-8 sm:grid-cols-3 sm:gap-6">
        <StaggerContainer.Item as="span">Protocol: React</StaggerContainer.Item>
        <StaggerContainer.Item as="span">Interface: Tailwind</StaggerContainer.Item>
        <StaggerContainer.Item as="span">Status: Synced</StaggerContainer.Item>
      </StaggerContainer>

      <StaggerContainer className="mt-11 grid w-full max-w-xl grid-cols-1 gap-3 sm:mt-12 sm:flex sm:justify-center">
        <StaggerContainer.Item as="span" className="inline-flex w-full sm:w-auto">
          <MagneticHover className="inline-flex w-full sm:w-auto" strength={0.12} max={9}>
            <PrimaryButton href="#projects">Initialize Work</PrimaryButton>
          </MagneticHover>
        </StaggerContainer.Item>
        <StaggerContainer.Item as="span" className="inline-flex w-full sm:w-auto">
          <MagneticHover className="inline-flex w-full sm:w-auto" strength={0.09} max={7}>
            <SecondaryButton href="#contact">Open Channel</SecondaryButton>
          </MagneticHover>
        </StaggerContainer.Item>
      </StaggerContainer>

      <StaggerContainer className="mt-14 grid w-full gap-4 sm:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <StaggerContainer.Item>
          <FloatingPanel className="h-full text-left">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/55">
                  Active Interface
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Cinematic command layer for intelligent web systems.
                </h2>
              </div>
              <div className="rounded-full border border-cyan-100/15 bg-cyan-100/[0.04] px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-cyan-50/75">
                Synced
              </div>
            </div>
          </FloatingPanel>
        </StaggerContainer.Item>

        <StaggerContainer.Item>
          <GlassCard className="h-full text-left">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/55">
              System Note
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300/82">
              Built for calm navigation, precise presentation, and reusable visual language across every portfolio node.
            </p>
          </GlassCard>
        </StaggerContainer.Item>
      </StaggerContainer>

      <StaggerContainer className="mt-4 grid w-full gap-4 sm:grid-cols-3">
        {systemStats.map((stat) => (
          <StaggerContainer.Item key={stat.label}>
            <StatCard {...stat} />
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>
    </Section>
  )
}

export default HeroSection
