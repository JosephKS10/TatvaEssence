import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function GardensService() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    document.body.classList.remove('overflow-hidden')
  }, [])

  return (
    <div className="bg-[#f6f7f5] min-h-screen">
      <header 
        className="h-[45vh] md:h-[58vh] bg-cover bg-center flex items-center justify-center relative overflow-hidden mb-8 md:mb-10" 
        style={{ backgroundImage: "url('/images/service/kitchen_garden_service.png')" }} 
        data-aos="fade-in" 
        data-aos-duration="800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/45" />
        <h1 
          className="relative z-10 text-white text-[clamp(1.8rem,4vw,2.5rem)] md:text-[clamp(2rem,4.5vw,3.5rem)] tracking-wide text-center px-6"
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          Kitchen Garden Services
        </h1>
      </header>

      <main className="max-w-[1180px] mx-auto px-4 md:px-5 pb-16">
        {/* --- First section --- */}
        <SplitSection
          title="At Tatva Essence — Kitchen Garden Setup"
          images={[
            '/images/garden/garden1.png',
            '/images/garden/garden2.png'
          ]}
        >
          <p className="text-gray-500 text-[0.95rem] md:text-[1.05rem] leading-[1.7] mb-5">
            At Tatva Essence, we turn unused corners of your balcony, terrace, or backyard into vibrant kitchen gardens that bring fresh, chemical-free produce right to your home. Our approach is simple yet thoughtful — designing gardens that fit your lifestyle while giving you the joy of growing your own vegetables, herbs, and greens.
          </p>

          <h3 className="text-[#2F9C4A] text-[1.2rem] mt-6 mb-3 font-medium">How We Do It</h3>
          <ul className="mt-6 pl-0 list-none space-y-3">
            {[
              { strong: "Site Visit & Consultation", text: "– Our experts visit your space to understand sunlight, layout, and preferences." },
              { strong: "3D Garden Concepts", text: "– Detailed visual models so you can see the outcome before we begin." },
              { strong: "Customized Plant Selection", text: "– We handpick plants that thrive in your conditions." },
              { strong: "Professional Installation", text: "– Quality planters, nutrient-rich soil, and smart design." },
              { strong: "Guidance for Care", text: "– Simple tips to nurture your plants season after season." }
            ].map((item, i) => (
              <li key={i} className="text-gray-500 relative pl-6 leading-[1.6] text-[0.95rem] before:content-['🌱'] before:absolute before:left-0 before:top-0 before:text-[#2F9C4A] before:text-base">
                <strong className="text-gray-800 font-semibold">{item.strong}</strong> {item.text}
              </li>
            ))}
          </ul>

          <p className="text-gray-500 text-[0.95rem] md:text-[1.05rem] leading-[1.7] mt-5">
            Every garden we build is unique to your home — functional, sustainable, and beautiful. With Tatva Essence, your space becomes more than green; it becomes alive.
          </p>
        </SplitSection>

        {/* --- Full-width separator image --- */}
        <div 
          className="w-full my-8 md:my-12 rounded-[16px] md:rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.12)] relative group" 
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2F9C4A]/10 to-[#2F9C4A]/5 opacity-0 transition-opacity duration-300 z-10 pointer-events-none group-hover:opacity-100" />
          <img 
            src="/images/garden/garden3.png" 
            alt="Garden separator" 
            className="w-full h-[200px] md:h-[300px] object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* --- Second section (reverse) --- */}
        <SplitSection
          title="Annual Maintenance Contract (AMC)"
          reverse
          images={[
            '/images/garden/garden5.jpg',
            '/images/garden/garden4.png',
          ]}
        >
          <h3 className="text-[#2F9C4A] text-[1.2rem] mt-6 mb-3 font-medium">AMC — Keep your garden lush all year</h3>
          <p className="text-gray-500 text-[0.95rem] md:text-[1.05rem] leading-[1.7] mb-5">
            Your kitchen garden deserves care beyond just the setup. With Tatva Essence’s Annual Maintenance Contract (AMC), we ensure your garden stays lush, productive, and thriving all year round—without you having to worry about upkeep.
          </p>

          <h4 className="text-[#2F9C4A] text-[1.1rem] mt-5 mb-2 font-medium">What’s Included</h4>
          <ul className="mt-4 pl-0 list-none space-y-3">
            {[
              { strong: "Quarterly Plan – ₹5,000", text: ": Covers monthly visits by a trained gardener." },
              { strong: "Organic Compost & Supplies", text: ": Regular replenishment of essentials to keep soil healthy." },
              { strong: "Seasonal Care Guidance", text: ": Tips and adjustments tailored to weather and plant needs." },
              { strong: "Plant Replacement Support", text: ": Replacement under specific conditions." }
            ].map((item, i) => (
              <li key={i} className="text-gray-500 relative pl-6 leading-[1.6] text-[0.95rem] before:content-['🌱'] before:absolute before:left-0 before:top-0 before:text-[#2F9C4A] before:text-base">
                <strong className="text-gray-800 font-semibold">{item.strong}</strong>{item.text}
              </li>
            ))}
          </ul>

          <p className="text-gray-500 text-[0.95rem] md:text-[1.05rem] leading-[1.7] mt-5">
            Whether you’re new to gardening or already growing your own food, our AMC ensures your garden flourishes effortlessly.
          </p>
        </SplitSection>

        <div className="flex justify-center mt-8 md:mt-12 px-4" data-aos="fade-up" data-aos-delay="300">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            className="w-full md:w-auto bg-gradient-to-br from-[#2F9C4A] to-[#24863a] text-white border-none py-4 px-10 rounded-full font-semibold text-[1.05rem] md:text-[1.1rem] shadow-[0_8px_25px_rgba(47,156,74,0.25),0_4px_12px_rgba(47,156,74,0.15)] cursor-pointer transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(47,156,74,0.3),0_6px_18px_rgba(47,156,74,0.2)]"
          >
            <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full" />
            Book a Consultation
          </motion.button>
        </div>
      </main>
    </div>
  )
}

function SplitSection({ title, children, images = [], reverse = false }) {
  return (
    <section className={`flex flex-col gap-8 mb-10 md:mb-12 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div 
        className="flex-1 bg-white p-6 md:p-10 rounded-[16px] shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-[#2F9C4A]/10 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(15,23,42,0.1)] hover:-translate-y-[2px]"
        data-aos={reverse ? "fade-right" : "fade-left"} 
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h2 className="text-[#0f5132] text-[clamp(1.4rem,3.5vw,1.8rem)] mt-0 mb-4 font-bold" data-aos="fade-up" data-aos-delay="200">{title}</h2>
        <div data-aos="fade-up" data-aos-delay="300">
          {children}
        </div>
      </div>

      <div 
        className="w-full lg:w-[360px] flex flex-row lg:flex-col gap-3 md:gap-4 min-h-[auto] lg:min-h-[480px]" 
        data-aos={reverse ? "fade-left" : "fade-right"}
        data-aos-duration="800"
        data-aos-delay="200"
        aria-hidden
      >
        {images.map((src, idx) => (
          <motion.div 
            key={idx} 
            className={`flex-1 relative overflow-hidden rounded-[12px] md:rounded-[16px] shadow-[0_10px_30px_rgba(15,23,42,0.08)] bg-white transition-all duration-300 group hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)] ${idx === 1 ? 'lg:aspect-[4/5.2]' : 'lg:aspect-[4/2.8]'} aspect-square md:aspect-auto`} 
            whileHover={{ y: -8, scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            data-aos="zoom-in"
            data-aos-delay={300 + (idx * 100)}
            data-aos-duration="600"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F9C4A]/10 to-[#2F9C4A]/5 opacity-0 transition-opacity duration-300 z-10 pointer-events-none group-hover:opacity-100" />
            <img 
              src={src} 
              alt={`garden-photo-${idx + 1}`} 
              className="w-full h-[140px] md:h-[160px] lg:h-full object-cover block transition-transform duration-400 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}