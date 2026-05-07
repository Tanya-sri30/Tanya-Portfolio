import FadeUp from '../components/animations/FadeUp.jsx'
import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import Divider from '../components/ui/Divider.jsx'
import MagneticHover from '../components/interactions/MagneticHover.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import SecondaryButton from '../components/ui/SecondaryButton.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { siteContent } from '../data/siteContent.js'

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
        
        className=""
        titleClassName="max-w-[28ch] text-shadow-system leading-[1.02] tracking-[-0.02em] sm:max-w-[32ch]"
        descriptionClassName="max-w-[42rem] px-1 sm:max-w-2xl sm:px-0"
      />

      <FadeUp className="mt-10 w-full sm:mt-12" delay={0.08}>
        <Divider />
      </FadeUp>

      <StaggerContainer className="mt-6 grid grid-cols-1 gap-2 font-system text-[0.64rem] font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)] sm:mt-8 sm:grid-cols-3 sm:gap-6 sm:text-[0.68rem] sm:tracking-[0.24em]">
        <StaggerContainer.Item as="span">LEARNING</StaggerContainer.Item>
        <StaggerContainer.Item as="span">Building</StaggerContainer.Item>
        <StaggerContainer.Item as="span">Evolving</StaggerContainer.Item>
      </StaggerContainer>

      <StaggerContainer className="mt-14 grid w-full max-w-xl grid-cols-1 gap-3 sm:mt-16 sm:flex sm:justify-center">
        <StaggerContainer.Item as="span" className="inline-flex w-full sm:w-auto">
          <MagneticHover className="inline-flex w-full sm:w-auto" strength={0.12} max={9}>
            <PrimaryButton href="#projects">Explore Work</PrimaryButton>
          </MagneticHover>
        </StaggerContainer.Item>
        <StaggerContainer.Item as="span" className="inline-flex w-full sm:w-auto">
          <MagneticHover className="inline-flex w-full sm:w-auto" strength={0.09} max={7}>
            <SecondaryButton href="#contact">Let's Connect</SecondaryButton>
          </MagneticHover>
        </StaggerContainer.Item>
      </StaggerContainer>
    </Section>
  )
}


export default HeroSection
