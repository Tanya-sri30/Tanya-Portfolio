import FadeUp from '../components/animations/FadeUp.jsx'
import Section from '../components/Section.jsx'
import MagneticHover from '../components/interactions/MagneticHover.jsx'
import FloatingPanel from '../components/ui/FloatingPanel.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import SecondaryButton from '../components/ui/SecondaryButton.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'

function TransmissionSection() {
  return (
    <Section id="contact" spacing="spacious">
      <FloatingPanel className="mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="CONTACT"
          title="Start a thoughtful conversation."
          description="Ready to discuss internships, collaborations, or product ideas with room for craft and clarity."
          as={FadeUp}
          titleClassName="max-w-3xl"
        />

        <div className="mt-10 grid gap-3 sm:flex">
          <MagneticHover>
            <PrimaryButton href="mailto:tanya@example.com">Send Message</PrimaryButton>
          </MagneticHover>
          <MagneticHover strength={0.08}>
            <SecondaryButton href="#home">Return Home</SecondaryButton>
          </MagneticHover>
        </div>
      </FloatingPanel>
    </Section>
  )
}

export default TransmissionSection
