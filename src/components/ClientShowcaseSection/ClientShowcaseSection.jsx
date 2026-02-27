import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const clientLogos = [
  { id: 1, name: "St Columba's School", logo: '/images/clients/col.jpeg' },
  { id: 2, name: 'Microsoft', logo: '/images/clients/karo.jpeg' },
  { id: 3, name: 'Amazon', logo: '/images/clients/krbl.jpeg' },
  { id: 4, name: 'Tata', logo: '/images/clients/mia.jpeg' },
  { id: 5, name: 'Infosys', logo: '/images/clients/mps.jpeg' },
  { id: 6, name: 'Wipro', logo: '/images/clients/nxp.jpeg' },
  { id: 7, name: 'Reliance', logo: '/images/clients/you.jpeg' },
]

export default function ClientShowcase() {
  const scrollerRef = useRef(null)
  const scrollerInnerRef = useRef(null)
  const sectionRef = useRef(null)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-50% 0px -50% 0px" })
  const controls = useAnimation()
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      addAnimation();
    } else {
      if(scrollerInnerRef.current) scrollerInnerRef.current.style.animation = 'none';
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  function addAnimation() {
    if (scrollerRef.current && scrollerInnerRef.current) {
      const scrollerContent = Array.from(scrollerInnerRef.current.children)
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInnerRef.current.appendChild(duplicatedItem)
      })
    }
  }

  return (
    <section className="py-12 px-4 md:py-20 bg-white text-center relative overflow-hidden" ref={sectionRef}>
      {/* Static background */}
      <div className="absolute top-0 left-0 w-full h-[150%] md:h-[120%] bg-[url('/images/workshop5.JPG')] bg-cover bg-center bg-no-repeat z-0 opacity-90" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8, ease: "easeOut" } }
          }}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold mb-4 text-white relative">Trusted by Leading Organizations</h2>
          <motion.p 
            className="text-base md:text-[1.4rem] text-white max-w-[700px] mx-auto mb-8 md:mb-12 leading-relaxed relative pt-4"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { delay: 0.6, duration: 0.8 } }
            }}
          >
            We've had the privilege to work with these amazing companies through our campaigns, workshops, and corporate gifting programs
          </motion.p>
        </motion.div>
        
        <motion.div
          className="max-w-full overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]" 
          ref={scrollerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { delay: 0.8, duration: 0.8 } }
          }}
        >
          <div className="flex gap-4 md:gap-8 py-4 w-max flex-nowrap animate-infinite-scroll will-change-transform" ref={scrollerInnerRef}>
            {clientLogos.map(client => (
              <motion.div 
                key={client.id} 
                className="flex items-center justify-center min-w-[120px] md:min-w-[10rem] max-w-[12rem] h-[6rem] shadow-md p-2 bg-[#f8f8f8]/90 rounded-lg backdrop-blur-[2px] relative z-10"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  width={120}
                  height={60}
                  loading="lazy"
                  className="object-cover w-full h-full transition-all duration-300"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}