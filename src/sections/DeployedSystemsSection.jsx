import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { PROJECTS } from '../data/systemModules.js'

function DeployedSystemsSection() {
  return (
    <Section id="projects" spacing="spacious">
      <SectionIntro
        eyebrow="PROJECTS"
        
        description="A collection of projects built through curiosity, learning, and experimentation."
        titleClassName="max-w-5xl text-4md sm:text-6xl lg:text-7xl"
      />

      <StaggerContainer className="mt-10 grid gap-4 lg:grid-cols-3">
        {PROJECTS.map((system) => (
          <StaggerContainer.Item key={system.name}>
            <GlassCard className="h-full">
              <div className="flex h-full flex-col text-left">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-[color:var(--color-text-primary)]">
                    {system.name}
                  </h3>
                  <p className="whitespace-nowrap rounded-full bg-[rgba(148,210,232,0.1)] px-2.5 py-1 font-system text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[rgba(148,210,232,0.8)]">
                    {system.status}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-primary)]/80">
                  {system.role}
                </p>

                <div className="mt-5 space-y-2 font-system text-[0.68rem] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                  <span className="block">TYPE: {system.type}</span>
                  <span className="block">STACK: {system.stack}</span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {system.github && (
                    <a
                      href={system.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-[rgba(232,237,242,0.08)] bg-[rgba(232,237,242,0.02)] px-3 py-1.5 font-system text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-primary)]/70 transition duration-300 hover:border-[rgba(148,210,232,0.16)] hover:bg-[rgba(148,210,232,0.06)] hover:text-[color:var(--color-text-primary)]/85"
                    >
                      Code
                    </a>
                  )}
                  {system.live && (
                    <a
                      href={system.live.startsWith('http') ? system.live : `https://${system.live}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-[rgba(232,237,242,0.08)] bg-[rgba(232,237,242,0.02)] px-3 py-1.5 font-system text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-primary)]/70 transition duration-300 hover:border-[rgba(148,210,232,0.16)] hover:bg-[rgba(148,210,232,0.06)] hover:text-[color:var(--color-text-primary)]/85"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>
    </Section>
  )
}

export default DeployedSystemsSection
