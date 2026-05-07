import AboutSection from '../sections/AboutSection.jsx'
import AchievementsSection from '../sections/AchievementsSection.jsx'
import CapabilitiesSection from '../sections/CapabilitiesSection.jsx'
import DeployedSystemsSection from '../sections/DeployedSystemsSection.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import HeroSection from '../sections/HeroSection.jsx'
import TransmissionSection from '../sections/TransmissionSection.jsx'

function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <DeployedSystemsSection />
      <AchievementsSection />
      <ExperienceSection />
      <CapabilitiesSection />
      <TransmissionSection />
    </MainLayout>
  )
}

export default Home
