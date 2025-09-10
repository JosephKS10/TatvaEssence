import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ServicesSection.css"

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
    images: ["/images/workshop1.JPG", "/images/workshop2.JPG", "/images/workshop3.JPG", "/images/workshop4.JPG", "/images/workshop5.JPG"],
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
    <section ref={ref} className="services-section" id="services-section">
      <h2 
        className="section-title"
        style={{ color: "#000" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Our Services
      </h2>
      
      <div className="services-grid">
        <div className="large-tile" data-aos="fade-up" data-aos-delay="100">
          <ServiceCard 
            service={services[0]}
          />
        </div>
        
        <div className="small-tiles">
          <div data-aos="fade-up" data-aos-delay="200">
            <ServiceCard 
              service={services[1]}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <ServiceCard 
              service={services[2]}
            />
          </div>
        </div>
        
        <div className="wide-tile" data-aos="fade-up" data-aos-delay="400">
          <ServiceCard 
            service={services[3]}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const navigate = useNavigate()

  const handleLearnMore = () => {
    navigate(service.link)
  }

  return (
    <motion.div
      className={`service-card ${service.size}`}
      whileHover={{ scale: 1.03 }}
    >
      <div className="image-container">
        <img
          src={service.images[0]}
          alt={service.title}
          className="service-image"
          loading="lazy"
        />
      </div>
      <div className="service-overlay">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-tagline">"{service.tagline}"</p>
        <p className="service-description">{service.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="service-button"
          onClick={handleLearnMore}
        >
          Learn more
        </motion.button>
      </div>
    </motion.div>
  )
}