import BrandMark from '../components/BrandMark.jsx'
import { siteContent } from '../data/siteContent.js'

function HeroSection() {
  return (
    <section className="hero-section" aria-label="Portfolio introduction">
      <BrandMark name={siteContent.name} />
    </section>
  )
}

export default HeroSection
