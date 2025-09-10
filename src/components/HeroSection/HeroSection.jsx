import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import "./HeroSection.css"

const banners = [
    {
    id: 1,
    image: "/images/banners/opening_banner.png",
    title: "Tatva Essence",
    subtitle: "Where Sustainability Meets Everyday Living.",
    link: "#"
  },
  {
    id: 2,
    image: "/images/banners/organic_garden.png",
    title: "Organic Gardens",
    subtitle: "Grow What You Eat",
    link: "/gardens"
  },
  {
    id: 3,
    image: "/images/banners/workshops.png",
    title: "Workshops",
    subtitle: "Hands-on Green Learning",
    link: "/workshops#workshops"
  },
  {
    id: 4,
    image: "/images/banners/green_gifting_banner.png",
    title: "Green Gifting",
    subtitle: "Gifts That Grow",
    link: "/workshops#gifting"
  },
  {
    id: 5,
    image: "/images/banners/green_store.jpg",
    title: "Your Green Store",
    subtitle: "Turn waste into nutrient-rich compost",
    link: "/store"
  }
]

export default function HeroSection() {
  const ref = useRef(null)
  const [currentBanner, setCurrentBanner] = useState(0)

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  // Auto-rotate banners every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={ref}
      className="hero-section"
    >
      {/* Background Image */}
      <div className="hero-background">
        <img 
          src={banners[currentBanner].image} 
          alt={banners[currentBanner].title}
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div 
        className="hero-content"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <h1
          className="hero-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {banners[currentBanner].title}
        </h1>
        
        <p
          className="hero-subtitle"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          {banners[currentBanner].subtitle}
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="900"
        >
          <motion.a
            href={banners[currentBanner].link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-button"
          >
            Explore Now
          </motion.a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="hero-nav hero-nav-left" onClick={prevBanner}>
        &lt;
      </button>
      <button className="hero-nav hero-nav-right" onClick={nextBanner}>
        &gt;
      </button>

      {/* Banner Indicators */}
      <div className="banner-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentBanner ? 'active' : ''}`}
            onClick={() => setCurrentBanner(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}