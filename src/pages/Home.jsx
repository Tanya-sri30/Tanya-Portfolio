import AboutSection from '../sections/AboutSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import DeployedSystemsSection from '../sections/DeployedSystemsSection.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import HeroSection from '../sections/HeroSection.jsx'
import SkillsSection from '../sections/SkillsSection.jsx'

function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <DeployedSystemsSection />
      <SkillsSection />
      <ContactSection />
    </MainLayout>
  )
}

export default Home
