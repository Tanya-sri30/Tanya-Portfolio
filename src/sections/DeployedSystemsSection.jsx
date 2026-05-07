import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { deployedSystems } from '../data/systemModules.js'

function DeployedSystemsSection() {
  return (
    <Section id="projects" spacing="spacious">
      <SectionIntro
        eyebrow="DEPLOYED SYSTEMS"
        title="Operational modules with active interface logic."
        description="Projects are framed as deployed systems: each one carries status, stack, version, and role within the portfolio OS."
        titleClassName="max-w-5xl text-4xl sm:text-6xl lg:text-7xl"
      />

      <StaggerContainer className="mt-10 grid gap-4 lg:grid-cols-3">
        {deployedSystems.map((system) => (
          <StaggerContainer.Item key={system.name}>
            <GlassCard className="h-full">
              <div className="flex h-full flex-col text-left">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-system text-[0.65rem] uppercase tracking-[0.24em] text-[color:var(--color-success)]">
                    {system.status}
                  </p>
                  <p className="font-system text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                    {system.version}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[color:var(--color-text-primary)]">
                  {system.name}
                </h3>
                <div className="mt-6 grid gap-3 font-system text-[0.68rem] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                  <span>TYPE: {system.type}</span>
                  <span>STACK: {system.stack}</span>
                </div>
                <p className="mt-6 text-sm leading-7 text-[color:var(--color-text-primary)]/80">
                  SYSTEM_ROLE: {system.role}
                </p>
              </div>
            </GlassCard>
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>
    </Section>
  )
}

export default DeployedSystemsSection
