import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 10)
  })

  const navVariants = {
    visible: { y: 0, transition: { duration: 0.35, ease: [0.36, 0.66, 0.04, 1] } },
    hidden: { y: -100, transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] } },
  }

  const backgroundVariants = {
    initial: { opacity: 0 },
    scrolled: { opacity: 1, transition: { duration: 0.3 } },
    unscrolled: { opacity: 0, transition: { duration: 0.3 } }
  }

  const mobileMenuVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } }
  }

  return (
    <>
      <motion.nav
        variants={navVariants}
        animate={hidden ? "hidden" : "visible"}
        className="fixed w-full top-0 z-50 p-4 flex justify-center transition-all duration-300"
      >
        {/* Glass background layer */}
        <motion.div
          variants={backgroundVariants}
          animate={isScrolled ? "scrolled" : "unscrolled"}
          className="absolute inset-0 bg-white/15 backdrop-blur-[20px] border-b border-white/20"
        />
        
        <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center relative z-20 px-2 md:px-5">
          <Link 
            to="/" 
            className={`text-xl font-bold flex items-center gap-2 relative z-50 transition-colors ${mobileMenuOpen ? "text-black" : "text-white"}`}
          >
            <img className='h-10 w-10 object-contain bg-white rounded-full' src="/icon.svg" alt="Tatva Essence Logo" />
            Tatva Essence
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink to="/" scrollTarget="top">Home</NavLink>
            <NavLink to="/" scrollTarget="services-section">Our Services</NavLink>
            <NavLink to="/store">Our Store</NavLink>
            <NavLink to="/gardens">Garden Services</NavLink>
            <NavLink to="/workshops">Workshops</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-white/20 text-white border border-white/30 px-6 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-all hover:bg-white/30"
          >
            Book an appointment
          </motion.button>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden bg-transparent border-none p-2 cursor-pointer z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span animate={mobileMenuOpen ? "open" : "closed"} variants={{ closed: { rotate: 0, y: 0, backgroundColor: "#fff" }, open: { rotate: 45, y: 8, backgroundColor: "#000" } }} className="block h-[2px] w-full transition-all" />
              <motion.span animate={mobileMenuOpen ? "open" : "closed"} variants={{ closed: { opacity: 1, backgroundColor: "#fff" }, open: { opacity: 0, backgroundColor: "#000" } }} className="block h-[2px] w-full transition-all" />
              <motion.span animate={mobileMenuOpen ? "open" : "closed"} variants={{ closed: { rotate: 0, y: 0, backgroundColor: "#fff" }, open: { rotate: -45, y: -8, backgroundColor: "#000" } }} className="block h-[2px] w-full transition-all" />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-2xl font-medium">
              <MobileNavLink to="/" scrollTarget="top" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/" scrollTarget="services-section" onClick={() => setMobileMenuOpen(false)}>Our Services</MobileNavLink>
              <MobileNavLink to="/store" onClick={() => setMobileMenuOpen(false)}>Our Store</MobileNavLink>
              <MobileNavLink to="/gardens" onClick={() => setMobileMenuOpen(false)}>Garden Services</MobileNavLink>
              <MobileNavLink to="/workshops" onClick={() => setMobileMenuOpen(false)}>Workshops</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-black text-white px-6 py-4 rounded-full text-lg font-medium w-full shadow-lg"
            >
              Book an appointment
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ to, children, scrollTarget }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleClick = (e) => {
    e.preventDefault()
    if (to === "/") {
      if (location.pathname === "/") {
        if (scrollTarget === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else if (scrollTarget) {
          document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        navigate("/")
        setTimeout(() => {
          if (scrollTarget === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" })
          } else if (scrollTarget) {
            document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    } else {
      navigate(to)
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <a href={to} className="text-sm font-medium text-white relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full" onClick={handleClick}>
        {children}
      </a>
    </motion.div>
  )
}

function MobileNavLink({ to, children, onClick, scrollTarget }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleClick = (e) => {
    e.preventDefault()
    if (to === "/") {
      if (location.pathname === "/") {
        if (scrollTarget === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else if (scrollTarget) {
          document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        navigate("/")
        setTimeout(() => {
          if (scrollTarget === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" })
          } else if (scrollTarget) {
            document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    } else {
      navigate(to)
    }
    if (onClick) onClick()
  }

  return (
    <motion.div whileTap={{ scale: 0.95 }} className="pb-4 border-b border-gray-200">
      <a href={to} onClick={handleClick} className="text-gray-800 text-xl font-semibold w-full block">
        {children}
      </a>
    </motion.div>
  )
}