import { motion } from 'framer-motion'
import tatvaLogo from '/icon.svg' 

export default function EssenceSection() {
  return (
    <section className="relative bg-[#fdfaf5] py-16 px-6 md:py-20 md:px-8 overflow-hidden">
      {/* Logo Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 z-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] flex items-center justify-center">
        <img src={tatvaLogo} alt="Tatva Logo Background" className="w-full h-full object-contain" loading="lazy" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <motion.h2
          className="text-[clamp(2rem,7vw,3rem)] md:text-[clamp(2.5rem,6vw,3rem)] font-black mb-8 text-[#3e2723]"
          data-aos="fade-up"
        >
          The Essence Behind Tatva
        </motion.h2>

        <motion.p
          className="text-base md:text-[1.15rem] leading-relaxed md:leading-[1.7] mb-6 text-[#4b3a2f]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At Tatva Essence, we believe sustainability begins with the choices we make every day. To us, waste is not an end—it is the start of renewal. Through organic composting, sustainable workshops, and eco-conscious gifting, we transform what is often discarded into something purposeful and lasting. Our mission is to design experiences and solutions that bring people closer to nature, making sustainability not just an idea, but a way of life.
        </motion.p>

        <motion.p
          className="text-base md:text-[1.15rem] leading-relaxed md:leading-[1.7] mb-6 text-[#4b3a2f]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          What began as a university project to address untreated market waste soon grew into a mission to create practical, nature-driven solutions for homes, schools, and corporates.
        </motion.p>
      </div>
    </section>
  )
}