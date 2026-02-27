import { motion } from 'framer-motion'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black to-[#1a1a1a] text-white pt-20 pb-12 px-6 md:pt-16 md:pb-8 md:px-4 sm:pt-12 sm:pb-6 sm:px-3">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent" />
      
      {/* Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div 
        className="relative z-10 max-w-[1200px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="text-center mb-16 md:mb-12" variants={itemVariants}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light tracking-tight mb-4 text-white leading-[1.1]">Get in Touch</h2>
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-white to-[#666] mx-auto rounded-[1px]"></div>
        </motion.div>
        
        <motion.div className="grid gap-16 mb-16 md:gap-12 md:mb-12" variants={itemVariants}>
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-[1.1rem] md:text-base leading-[1.8] text-[#cccccc] font-light">
              Tatva Essence is a sustainability-driven brand transforming the way India gardens, gifts, and manages organic waste. We create nutrient-rich compost from local market waste, design green spaces, and deliver impactful workshops.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 md:gap-12 max-w-[800px] mx-auto w-full">
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
              <h3 className="text-sm text-[#999999] uppercase tracking-[1px] mb-4 font-normal">Call Us</h3>
              <div className="flex flex-row gap-2 sm:gap-1">
                <a href="tel:+919310187504" className="text-white no-underline text-base md:text-[1.1rem] font-normal transition-transform duration-300 hover:-translate-y-[1px] inline-block">+91-9310187504</a>,
                <a href="tel:+919205047819" className="text-white no-underline text-base md:text-[1.1rem] font-normal transition-transform duration-300 hover:-translate-y-[1px] inline-block">+91-9205047819</a>
              </div>
            </div>
            
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
              <h3 className="text-sm text-[#999999] uppercase tracking-[1px] mb-4 font-normal">Email Us</h3>
              <a href="mailto:tatvaessence@gmail.com" className="text-white no-underline text-base md:text-[1.1rem] font-normal transition-transform duration-300 hover:-translate-y-[1px] inline-block">tatvaessence@gmail.com</a>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="text-center" variants={itemVariants}>
          <div className="flex justify-center gap-6 md:gap-8 mb-8">
            <motion.a 
              href="https://www.linkedin.com/company/tatva-essence/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block no-underline group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-[44px] h-[44px] md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md group-hover:bg-white/10 group-hover:border-white/30 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-[18px] h-[18px] md:w-5 md:h-5 object-contain opacity-80 transition-opacity duration-300 filter invert sepia-0 saturate-0 hue-rotate-180 brightness-150 group-hover:opacity-100" />
              </div>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/tatvaessence?igsh=MWl4dmZnMHY4dTFtNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block no-underline group"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-[44px] h-[44px] md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md group-hover:bg-white/10 group-hover:border-white/30 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <img src="/instagram.svg" alt="Instagram" className="w-[18px] h-[18px] md:w-5 md:h-5 object-contain opacity-80 transition-opacity duration-300 filter invert sepia-0 saturate-0 hue-rotate-180 brightness-150 group-hover:opacity-100" />
              </div>
            </motion.a>
          </div>
          
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          
          <div className="text-[#888888] text-[0.9rem] font-light">
            <p>© {new Date().getFullYear()} Tatva Essence. All rights reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}