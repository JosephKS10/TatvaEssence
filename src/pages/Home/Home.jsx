import { useEffect } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import AboutWorkSection from '../../components/AboutWorkSection/AboutWorkSection'
import EssenceSection from '../../components/EssenceSection/EssenceSection'
import ClientShowcaseSection from '../../components/ClientShowcaseSection/ClientShowcaseSection'
import ServicesSection from '../../components/ServiceSection/ServicesSection'
import ReviewSection from '../../components/ReviewSection/ReviewSection'
import FAQSection from '../../components/FAQSection/FAQSection'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    // Replaced custom 'no-scroll' class with Tailwind's 'overflow-hidden' just in case
    document.body.classList.remove('overflow-hidden')
  }, [])

  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <AboutWorkSection />
      <EssenceSection />
      <ClientShowcaseSection />
      <ServicesSection />
      <ReviewSection />
      <FAQSection />
    </div>
  )
}