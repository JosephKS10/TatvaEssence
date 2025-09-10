import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import './ClientShowcaseSection.css'

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
  
  // Animation controls
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-50% 0px -50% 0px"
  })
  const controls = useAnimation()
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      addAnimation();
    } else {
      scrollerInnerRef.current?.style.setProperty('animation', 'none');
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
    <section className="client-showcase" ref={sectionRef}>
      {/* Static background */}
      <div className="parallax-bg" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.4, duration: 0.8, ease: "easeOut" }
            }
          }}
        >
          <h2 className="client-section-title">Trusted by Leading Organizations</h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                transition: { delay: 0.6, duration: 0.8 }
              }
            }}
          >
            We've had the privilege to work with these amazing companies through our 
            campaigns, workshops, and corporate gifting programs
          </motion.p>
        </motion.div>
        
        <motion.div
          className="scroller" 
          ref={scrollerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              transition: { delay: 0.8, duration: 0.8 } 
            }
          }}
        >
          <div className="scroller-inner" ref={scrollerInnerRef}>
            {clientLogos.map(client => (
              <motion.div 
                key={client.id} 
                className="client-logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  width={120}
                  height={60}
                  loading="lazy"
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
