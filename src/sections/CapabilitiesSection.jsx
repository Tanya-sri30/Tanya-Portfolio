import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { capabilities } from '../data/systemModules.js'

function CapabilitiesSection() {
  return (
    <Section id="skills" spacing="spacious">
      <SectionIntro
        eyebrow="CORE CAPABILITIES"
        title="Capability nodes calibrated for modern interface systems."
        titleClassName="max-w-5xl text-4xl sm:text-6xl lg:text-7xl"
      />

      <StaggerContainer className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability) => (
          <StaggerContainer.Item key={capability}>
            <GlassCard>
              <p className="font-system text-left text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-text-primary)]">
                {capability}
              </p>
            </GlassCard>
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>
    </Section>
  )
}

export default CapabilitiesSection
