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
        title="Core capabilities for modern AI products."
        titleClassName="max-w-3xl"
      />

      <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability) => (
          <StaggerContainer.Item key={capability}>
            <GlassCard>
              <p className="text-left text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-secondary)]">
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
