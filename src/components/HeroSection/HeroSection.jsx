import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={banners[currentBanner].image} 
          alt={banners[currentBanner].title}
          className="w-full h-full object-cover"
          /* SEO Fix: Prioritize loading the first image immediately */
          fetchPriority={currentBanner === 0 ? "high" : "auto"}
          loading={currentBanner === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 backdrop-contrast-90 transition-all duration-300" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <h1
          className="text-[2.25rem] md:text-5xl lg:text-[3rem] font-bold mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {banners[currentBanner].title}
        </h1>
        
        <p
          className="text-base md:text-xl mb-8 max-w-xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          {banners[currentBanner].subtitle}
        </p>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
          <motion.a
            href={banners[currentBanner].link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-7 py-3 md:px-8 md:py-3 rounded-full text-base md:text-lg font-medium shadow-md transition-transform no-underline"
          >
            Explore Now
          </motion.a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 border-none w-10 h-10 md:w-[50px] md:h-[50px] rounded-full text-white text-xl md:text-2xl cursor-pointer z-20 flex items-center justify-center backdrop-blur-sm transition-all"
        onClick={prevBanner}
        aria-label="Previous banner"
      >
      <FaChevronLeft/>
      </button>
      <button 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 border-none w-10 h-10 md:w-[50px] md:h-[50px] rounded-full text-white text-xl md:text-2xl cursor-pointer z-20 flex items-center justify-center backdrop-blur-sm transition-all"
        onClick={nextBanner}
        aria-label="Next banner"
      >
        <FaChevronRight/> 
      </button>

      {/* Banner Indicators */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${index === currentBanner ? 'bg-white scale-125' : 'bg-white/50'}`}
            onClick={() => setCurrentBanner(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}