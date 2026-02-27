import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: "Balcony Kitchen Gardens",
    tagline: "Homegrown Greens",
    description: "Turn your balcony into a fresh, edible paradise.",
    images: ["/images/service/kitchen_garden_service.png"],
    size: "large",
    link: "/gardens"
  },
  {
    title: "Gardening Workshops",
    tagline: "Learn & Grow",
    description: "Hands-on sessions for schools, corporates, and communities.",
    images: ["/images/workshop1.JPG"],
    size: "small",
    link: "/workshops#workshops"
  },
  {
    title: "Tatva Store",
    tagline: "Waste to Wonder",
    description: "Smart composting kits and organic soil enhancers.",
    images: ["/images/service/store_service.jpg"],
    size: "small",
    link: "/store"
  },
  {
    title: "Green Gifting",
    tagline: "Gifts that Grow",
    description: "Sustainable plant-based gifts for every occasion.",
    images: ["/images/service/corporate_gifting_service.jpg"],
    size: "wide",
    link: "/workshops#gifting"
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-12 px-6 md:py-20 bg-white" id="services-section">
      <h2 
        className="text-center text-3xl md:text-[2.5rem] font-bold mb-8 md:mb-12 text-[#333]"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Our Services
      </h2>
      
      {/* Grid Layout without template-areas */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Large Tile */}
        <div data-aos="fade-up" data-aos-delay="100" className="h-[300px] md:h-[600px]">
          <ServiceCard service={services[0]} />
        </div>
        
        {/* Small Tiles Container */}
        <div className="flex flex-col md:flex-col sm:flex-row gap-6 h-auto md:h-[600px]">
          <div data-aos="fade-up" data-aos-delay="200" className="h-[300px] md:h-[calc(50%-12px)] w-full">
            <ServiceCard service={services[1]} />
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="h-[300px] md:h-[calc(50%-12px)] w-full">
            <ServiceCard service={services[2]} />
          </div>
        </div>
        
        {/* Wide Tile */}
        <div className="md:col-span-2 h-[300px]" data-aos="fade-up" data-aos-delay="400">
          <ServiceCard service={services[3]} />
        </div>

      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const navigate = useNavigate()

  return (
    <motion.div
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-xl group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-full">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
        <h3 className="text-2xl md:text-[1.75rem] font-bold mb-2 leading-tight">{service.title}</h3>
        <p className="text-lg md:text-[1.25rem] font-medium mb-3 md:mb-4 italic opacity-90">"{service.tagline}"</p>
        <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-[90%]">{service.description}</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="self-start bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-full text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-white/30"
          onClick={() => navigate(service.link)}
        >
          Learn more
        </motion.button>
      </div>
    </motion.div>
  )
}