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
        title="Experience shaped through focused building."
        titleClassName="max-w-3xl"
      />

      <StaggerContainer className="mt-10 grid gap-4">
        {experienceTimeline.map((item) => (
          <StaggerContainer.Item key={item.phase}>
            <FloatingPanel>
              <div className="grid gap-4 text-left md:grid-cols-[0.22fr_0.34fr_1fr] md:items-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {item.phase}
                </p>
                <h3 className="text-xl font-semibold text-[color:var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-400">
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
