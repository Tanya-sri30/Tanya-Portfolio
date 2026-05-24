import FadeUp from '../components/animations/FadeUp.jsx'
import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import SecondaryButton from '../components/ui/SecondaryButton.jsx'

function HeroSection() {
  return (
    <Section
      id="home"
      fullScreen
      className="relative overflow-hidden"
      containerClassName="relative z-10 flex flex-col items-start"
    >
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-aura hero-aura-primary" />
        <span className="hero-aura hero-aura-secondary" />
      </div>

      <div className="max-w-4xl">
        <FadeUp as="p" className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          AI/ML Student &bull; Systems Builder
        </FadeUp>

        <FadeUp
          as="h1"
          delay={0.08}
          className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[color:var(--color-text-primary)] text-shadow-system sm:text-5xl lg:text-6xl"
        >
          Tanya Srivastava
        </FadeUp>

        <FadeUp
          as="p"
          delay={0.16}
          className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
        >
          AI/ML student fascinated by intelligent systems, machine learning, and building technology that creates meaningful impact.
        </FadeUp>

        <FadeUp
          as="p"
          delay={0.24}
          className="mt-10 max-w-2xl text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
        >
          Based in India &bull; Building & Learning &bull; Open to Opportunities
        </FadeUp>

        <StaggerContainer className="mt-10 grid w-full max-w-md grid-cols-1 gap-3 sm:flex">
          <StaggerContainer.Item as="span" className="inline-flex w-full sm:w-auto">
            <PrimaryButton href="#projects">View Projects</PrimaryButton>
          </StaggerContainer.Item>
          <StaggerContainer.Item as="span" className="inline-flex w-full sm:w-auto">
            <SecondaryButton href="#contact">Contact Me</SecondaryButton>
          </StaggerContainer.Item>
        </StaggerContainer>
      </div>
    </Section>
  )
}

export default HeroSection
