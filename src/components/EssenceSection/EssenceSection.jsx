import { motion } from 'framer-motion'
import './EssenceSection.css'
import tatvaLogo from '/icon.svg' 

export default function EssenceSection() {
  return (
    <section className="essence-section">
      {/* Logo Background */}
      <div className="logo-background">
        <img src={tatvaLogo} alt="Tatva Logo" />
      </div>

      {/* Text Content */}
      <div className="essence-container">
        <motion.h2
          className="essence-title"
          data-aos="fade-up"
        >
          The Essence Behind Tatva
        </motion.h2>

        <motion.p
          className="essence-text"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At Tatva Essence, we believe sustainability begins with the choices we make every day. To us, waste is not an end—it is the start of renewal. Through organic composting, sustainable workshops, and eco-conscious gifting, we transform what is often discarded into something purposeful and lasting. Our mission is to design experiences and solutions that bring people closer to nature, making sustainability not just an idea, but a way of life.
        </motion.p>

        <motion.p
          className="essence-text"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          What began as a university project to address untreated market waste soon grew into a mission to create practical, nature-driven solutions for homes, schools, and corporates.
        </motion.p>
      </div>
    </section>
  )
}
