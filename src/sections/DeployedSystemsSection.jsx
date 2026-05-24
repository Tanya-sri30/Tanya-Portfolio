import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { PROJECTS } from '../data/systemModules.js'

const getStatusClassName = (status) => {
  const normalized = status.toLowerCase()

  if (normalized.includes('active') || normalized.includes('deployed')) {
    return 'status-badge status-badge-green'
  }

  if (normalized.includes('development') || normalized.includes('progress')) {
    return 'status-badge status-badge-amber'
  }

  return 'status-badge status-badge-muted'
}

function DeployedSystemsSection() {
  return (
    <Section id="projects" spacing="spacious">
      <SectionIntro
        eyebrow="PROJECTS"
        title="Selected systems and experiments."
        description="A collection of projects built through curiosity, learning, and experimentation."
      />

      <StaggerContainer className="mt-10 grid gap-4 lg:grid-cols-3">
        {PROJECTS.map((system) => (
          <StaggerContainer.Item key={system.name}>
            <GlassCard className="project-card h-full">
              <div className="flex h-full flex-col text-left">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-tight text-[color:var(--color-text-primary)]">
                    {system.name}
                  </h3>
                  <p className={`whitespace-nowrap rounded-full border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.55)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-text-muted)] ${getStatusClassName(system.status)}`}>
                    <span aria-hidden="true" />
                    {system.status}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-secondary)]">
                  {system.role}
                </p>

                <div className="mt-5 space-y-2 text-xs uppercase tracking-[0.14em] text-[color:var(--color-text-muted)]">
                  <span className="block">TYPE: {system.type}</span>
                  <span className="block">STACK: {system.stack}</span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {system.github && (
                    <a
                      href={system.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.45)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)] transition duration-500 ease-out hover:-translate-y-0.5 hover:border-[rgba(217,107,43,0.24)] hover:text-[color:var(--color-accent-primary)]"
                    >
                      Code
                    </a>
                  )}
                  {system.live && (
                    <a
                      href={system.live.startsWith('http') ? system.live : `https://${system.live}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.45)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)] transition duration-500 ease-out hover:-translate-y-0.5 hover:border-[rgba(217,107,43,0.24)] hover:text-[color:var(--color-accent-primary)]"
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
