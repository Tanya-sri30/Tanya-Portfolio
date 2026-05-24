import StaggerContainer from '../components/animations/StaggerContainer.jsx'
import Section from '../components/Section.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'
import StatCard from '../components/ui/StatCard.jsx'
import { achievements } from '../data/systemModules.js'

function AchievementsSection() {
  return (
    <Section id="achievements">
      <SectionIntro
        eyebrow="ACHIEVEMENTS"
        title="Milestones with measurable intent."
        titleClassName="max-w-3xl"
      />

      <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-3">
        {achievements.map((achievement) => (
          <StaggerContainer.Item key={achievement.label}>
            <StatCard {...achievement} detail="Portfolio signal" />
          </StaggerContainer.Item>
        ))}
      </StaggerContainer>
    </Section>
  )
}

export default AchievementsSection
