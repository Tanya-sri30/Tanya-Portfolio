import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import FloatingPanel from '../components/ui/FloatingPanel.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { experienceTimeline, industrySimulations } from '../data/systemModules.js'

const getExperienceStatusClassName = (status) => {
  if (status === 'CURRENT') {
    return 'status-badge status-badge-green'
  }

  if (status === 'ACTIVE') {
    return 'status-badge status-badge-blue'
  }

  return 'status-badge status-badge-muted'
}

function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionIntro
        eyebrow="EXPERIENCE"
        title="Experience shaped through focused building."
        description="Professional experience, internships, leadership roles, and industry exposure that have shaped my learning journey."
        titleClassName="max-w-3xl"
      />

      <StaggerContainer className="mt-10 grid gap-4">
        {experienceTimeline.map((item) => (
          <StaggerContainer.Item key={`${item.company}-${item.role}`}>
            <FloatingPanel>
              <div className="grid gap-4 text-left md:grid-cols-[0.22fr_0.34fr_1fr] md:items-center">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                    {item.period}
                  </p>
                  <p className={`whitespace-nowrap rounded-full border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.55)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-text-muted)] ${getExperienceStatusClassName(item.status)}`}>
                    <span aria-hidden="true" />
                    {item.status}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[color:var(--color-text-primary)]">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-text-muted)]">
                    {item.company}
                  </p>
                </div>

                <p className="text-sm leading-7 text-[color:var(--color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            </FloatingPanel>
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>

      <div className="mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
          Industry Simulations
        </h3>

        <StaggerContainer className="mt-4 grid gap-4 md:grid-cols-2">
          {industrySimulations.map((item) => (
            <StaggerContainer.Item key={`${item.company}-${item.role}`}>
              <FloatingPanel>
                <div className="grid gap-3 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                    {item.year}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-[color:var(--color-text-primary)]">
                      {item.company}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--color-text-secondary)]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </FloatingPanel>
            </StaggerContainer.Item>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  )
}

export default ExperienceSection
