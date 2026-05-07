import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import FloatingPanel from '../components/ui/FloatingPanel.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { experienceTimeline } from '../data/systemModules.js'

function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionIntro
        eyebrow="EXPERIENCE"
        title="Build phases recorded as system memory."
        titleClassName="max-w-5xl text-4xl sm:text-6xl lg:text-7xl"
      />

      <StaggerContainer className="mt-10 grid gap-4">
        {experienceTimeline.map((item) => (
          <StaggerContainer.Item key={item.phase}>
            <FloatingPanel>
              <div className="grid gap-4 text-left md:grid-cols-[0.22fr_0.34fr_1fr] md:items-center">
                <p className="font-system text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--color-accent-primary)]">
                  {item.phase}
                </p>
                <h3 className="text-xl font-semibold text-[color:var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[color:var(--color-text-primary)]/75">
                  {item.detail}
                </p>
              </div>
            </FloatingPanel>
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>
    </Section>
  )
}

export default ExperienceSection
