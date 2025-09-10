import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import './GardenService.css'

export default function GardensService() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    document.body.classList.remove('no-scroll')
  }, [])

  return (
    <div className="service-page">
      <header className="service-hero" style={{ backgroundImage: "url('/images/service/kitchen_garden_service.png')" }} data-aos="fade-in" data-aos-duration="800">
        <div className="hero-overlay" />
        <h1 data-aos="fade-up" data-aos-delay="300">Kitchen Garden Services</h1>
      </header>

      <main className="service-content">
        {/* --- First section: content left, images right --- */}
        <SplitSection
          title="At Tatva Essence — Kitchen Garden Setup"
          images={[
            '/images/garden/garden1.png',
            '/images/garden/garden2.png'
          ]}
        >
          <p>
            At Tatva Essence, we turn unused corners of your balcony, terrace, or backyard into vibrant kitchen gardens that bring fresh, chemical-free produce right to your home. Our approach is simple yet thoughtful — designing gardens that fit your lifestyle while giving you the joy of growing your own vegetables, herbs, and greens.
          </p>

          <h3>How We Do It</h3>
          <ul>
            <li><strong>Site Visit & Consultation</strong> – Our experts visit your space to understand sunlight, layout, and preferences.</li>
            <li><strong>3D Garden Concepts</strong> – Detailed visual models so you can see the outcome before we begin.</li>
            <li><strong>Customized Plant Selection</strong> – We handpick plants that thrive in your conditions.</li>
            <li><strong>Professional Installation</strong> – Quality planters, nutrient-rich soil, and smart design.</li>
            <li><strong>Guidance for Care</strong> – Simple tips to nurture your plants season after season.</li>
          </ul>

          <p>
            Every garden we build is unique to your home — functional, sustainable, and beautiful. With Tatva Essence, your space becomes more than green; it becomes alive.
          </p>
        </SplitSection>

        {/* --- Full-width separator image --- */}
        <div 
          className="separator-image-section" 
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img 
            src="/images/garden/garden3.png" 
            alt="Garden separator" 
            className="separator-image"
          />
        </div>

        {/* --- Second section: images left, content right (reverse) --- */}
        <SplitSection
          title="Annual Maintenance Contract (AMC)"
          reverse
          images={[
            '/images/garden/garden5.jpg',
            '/images/garden/garden4.png',
          ]}
        >
          <h3>AMC — Keep your garden lush all year</h3>
          <p>
            Your kitchen garden deserves care beyond just the setup. With Tatva Essence’s Annual Maintenance Contract (AMC), we ensure your garden stays lush, productive, and thriving all year round—without you having to worry about upkeep.
          </p>

          <h4>What’s Included</h4>
          <ul>
            <li><strong>Quarterly Plan – ₹5,000</strong>: Covers monthly visits by a trained gardener.</li>
            <li><strong>Organic Compost & Supplies</strong>: Regular replenishment of essentials to keep soil healthy.</li>
            <li><strong>Seasonal Care Guidance</strong>: Tips and adjustments tailored to weather and plant needs.</li>
            <li><strong>Plant Replacement Support</strong>: Replacement under specific conditions.</li>
          </ul>

          <p>
            Whether you’re new to gardening or already growing your own food, our AMC ensures your garden flourishes effortlessly.
          </p>
        </SplitSection>

        <div className="cta-section" data-aos="fade-up" data-aos-delay="300">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="cta-button">
            Book a Consultation
          </motion.button>
        </div>
      </main>
    </div>
  )
}

function SplitSection({ title, children, images = [], reverse = false }) {
  return (
    <section className={`split-section ${reverse ? 'reverse' : ''}`}>
      <div 
        className="split-content"
        data-aos={reverse ? "fade-right" : "fade-left"} 
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h2 data-aos="fade-up" data-aos-delay="200">{title}</h2>
        <div data-aos="fade-up" data-aos-delay="300">
          {children}
        </div>
      </div>

      <div 
        className="image-column" 
        data-aos={reverse ? "fade-left" : "fade-right"}
        data-aos-duration="800"
        data-aos-delay="200"
        aria-hidden
      >
        {images.map((src, idx) => (
          <motion.div 
            key={idx} 
            className={`image-card ${idx === 1 ? 'tall' : 'small'}`} 
            whileHover={{ y: -8, scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            data-aos="zoom-in"
            data-aos-delay={300 + (idx * 100)}
            data-aos-duration="600"
          >
            <img src={src} alt={`garden-photo-${idx + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
