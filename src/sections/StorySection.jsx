import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import { storySignals } from '../data/systemModules.js'

function StorySection() {
  return (
    <Section id="story">
      <SectionIntro
        eyebrow="MY STORY"
        title="An interface becoming more intelligent over time."
        description="This system is built as a living research surface: every module tests clarity, rhythm, and interaction feedback."
        titleClassName="max-w-3xl"
      />

      <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-3">
        {storySignals.map((signal, index) => (
          <StaggerContainer.Item key={signal}>
            <GlassCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                Signal 0{index + 1}
              </p>
              <p className="mt-5 text-left text-sm leading-7 text-[color:var(--color-text-secondary)]">
                {signal}
              </p>
            </GlassCard>
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>
    </Section>
  )
}

export default StorySection
