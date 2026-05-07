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
          eyebrow="TRANSMISSION"
          title="Open a secure channel."
          description="Ready to transmit a brief, collaboration signal, or future system request."
          as={FadeUp}
          titleClassName="max-w-4xl text-4xl sm:text-6xl lg:text-7xl"
        />

        <div className="mt-10 grid gap-3 sm:flex sm:justify-center">
          <MagneticHover>
            <PrimaryButton href="mailto:tanya@example.com">Send Transmission</PrimaryButton>
          </MagneticHover>
          <MagneticHover strength={0.08}>
            <SecondaryButton href="#home">Return To Boot</SecondaryButton>
          </MagneticHover>
        </div>
      </FloatingPanel>
    </Section>
  )
}

export default TransmissionSection
