import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import FloatingPanel from '../components/ui/FloatingPanel.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { operatorMetadata } from '../data/systemModules.js'

function AboutSection() {
  return (
    <Section id="about" spacing="spacious">
      <SectionIntro
        eyebrow="ABOUT ME"
        
        description="AI/ML student passionate about learning, building, and exploring intelligent systems and asking way too many “what if?” questions."
        titleClassName="max-w-4xl text-4xl sm:text-2xl lg:text-1xl"
      />

      <StaggerContainer className="mt-10 grid gap-3 sm:mt-14 lg:grid-cols-2">
        {operatorMetadata.map((item) => (
          <StaggerContainer.Item key={item.label}>
            <FloatingPanel className="h-full">
              <div className="flex flex-col gap-3 text-left sm:flex-row sm:items-start sm:justify-between">
                <p className="font-system text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-text-muted)]">
                  {item.label}
                </p>
                <p className="max-w-xl text-sm leading-7 text-[color:var(--color-text-primary)] sm:text-right sm:text-base">
                  {item.value}
                </p>
              </div>
            </FloatingPanel>
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>
    </Section>
  )
}

export default AboutSection
