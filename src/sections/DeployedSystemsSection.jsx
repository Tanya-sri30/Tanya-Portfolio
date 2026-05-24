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
        title="Selected systems and experiments."
        description="A collection of projects built through curiosity, learning, and experimentation."
      />

      <StaggerContainer className="mt-10 grid gap-4 lg:grid-cols-3">
        {PROJECTS.map((system) => (
          <StaggerContainer.Item key={system.name}>
            <GlassCard className="h-full">
              <div className="flex h-full flex-col text-left">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-tight text-[color:var(--color-text-primary)]">
                    {system.name}
                  </h3>
                  <p className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    {system.status}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {system.role}
                </p>

                <div className="mt-5 space-y-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
                  <span className="block">TYPE: {system.type}</span>
                  <span className="block">STACK: {system.stack}</span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {system.github && (
                    <a
                      href={system.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-zinc-400 transition duration-500 ease-out hover:border-white/15 hover:bg-white/[0.055] hover:text-zinc-100"
                    >
                      Code
                    </a>
                  )}
                  {system.live && (
                    <a
                      href={system.live.startsWith('http') ? system.live : `https://${system.live}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-zinc-400 transition duration-500 ease-out hover:border-white/15 hover:bg-white/[0.055] hover:text-zinc-100"
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
