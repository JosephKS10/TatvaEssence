import { useEffect } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import AboutWorkSection from '../../components/AboutWorkSection/AboutWorkSection'
import EssenceSection from '../../components/EssenceSection/EssenceSection'
import ClientShowcaseSection from '../../components/ClientShowcaseSection/ClientShowcaseSection'
import ServicesSection from '../../components/ServiceSection/ServicesSection'
import ReviewSection from '../../components/ReviewSection/ReviewSection'
import FAQSection from '../../components/FAQSection/FAQSection'
import Footer from '../../components/Footer/Footer'

import "./Home.css"

export default function Home() {
  useEffect(() => {
       window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
       document.body.classList.remove('no-scroll')
     }, [])
     

  return (
    <div className="bg-black">
      <HeroSection />
      <AboutWorkSection />
      <EssenceSection />
      <ClientShowcaseSection />
      <ServicesSection />
      <ReviewSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
