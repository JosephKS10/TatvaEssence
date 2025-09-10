import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import "./Navbar.css"

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
    visible: { 
      y: 0,
      transition: { duration: 0.35, ease: [0.36, 0.66, 0.04, 1] }
    },
    hidden: { 
      y: -100,
      transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] }
    },
  }

  const backgroundVariants = {
    initial: { opacity: 0 },
    scrolled: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    unscrolled: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  }

 return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        variants={navVariants}
        animate={hidden ? "hidden" : "visible"}
        className="navbar"
      >
        {/* Glass background layer */}
        <motion.div
          variants={backgroundVariants}
          animate={isScrolled ? "scrolled" : "unscrolled"}
          className="glass-background"
        />
        
        <div className="navbar-container">
          <Link 
            to="/" 
            className="navbar-brand"
            style={{ color: mobileMenuOpen ? "black" : "white" }}
          >
            <img className='navbar-logo' src="/icon.svg" alt="Tatva Essence" />Tatva Essence
          </Link>
          <div className="desktop-nav">
            <NavLink to="/" scrollTarget="top">Home</NavLink>
            <NavLink to="/" scrollTarget="services">Our Services</NavLink>
            <NavLink to="/store">Our Store</NavLink>
            <NavLink to="/gardens">Garden Services</NavLink>
            <NavLink to="/workshops">Workshops</NavLink>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="appointment-button"
          >
            Book an appointment
          </motion.button>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="menu-icon">
              <motion.span 
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0, y: 0, backgroundColor: "white" },
                  open: { rotate: 45, y: 7, backgroundColor: "black" }
                }}
              />
              <motion.span 
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { opacity: 1, backgroundColor: "white" },
                  open: { opacity: 0, backgroundColor: "black" }
                }}
              />
              <motion.span 
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0, y: 0, backgroundColor: "white" },
                  open: { rotate: -45, y: -7, backgroundColor: "black" }
                }}
              />
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
            className="mobile-menu"
          >
            <div className="mobile-nav">
              <MobileNavLink to="/" scrollTarget="top" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/" scrollTarget="services" onClick={() => setMobileMenuOpen(false)}>Our Services</MobileNavLink>
              <MobileNavLink to="/store" onClick={() => setMobileMenuOpen(false)}>Our Store</MobileNavLink>
              <MobileNavLink to="/gardens" onClick={() => setMobileMenuOpen(false)}>Garden Services</MobileNavLink>
              <MobileNavLink to="/workshops" onClick={() => setMobileMenuOpen(false)}>Workshops</MobileNavLink>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mobile-appointment-button"
            >
              Book an appointment
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Reusable NavLink component
function NavLink({ to, children, scrollTarget }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleClick = (e) => {
    e.preventDefault()
    
    if (to === "/") {
      // If we're already on home page, just scroll
      if (location.pathname === "/") {
        if (scrollTarget === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else if (scrollTarget === "services") {
          const servicesSection = document.getElementById("services-section")
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" })
          }
        }
      } else {
        // If we're on a different page, navigate to home first
        navigate("/")
        // Small delay to allow page to load before scrolling
        setTimeout(() => {
          if (scrollTarget === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" })
          } else if (scrollTarget === "services") {
            const servicesSection = document.getElementById("services-section")
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" })
            }
          }
        }, 100)
      }
    } else {
      // Navigate to other pages normally
      navigate(to)
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <a href={to} className="nav-link" onClick={handleClick}>
        {children}
      </a>
    </motion.div>
  )
}
// Mobile NavLink component
function MobileNavLink({ to, children, onClick, scrollTarget }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleClick = (e) => {
    e.preventDefault()
    
    if (to === "/") {
      // If we're already on home page, just scroll
      if (location.pathname === "/") {
        if (scrollTarget === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else if (scrollTarget === "services") {
          const servicesSection = document.getElementById("services-section")
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" })
          }
        }
      } else {
        // If we're on a different page, navigate to home first
        navigate("/")
        // Small delay to allow page to load before scrolling
        setTimeout(() => {
          if (scrollTarget === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" })
          } else if (scrollTarget === "services") {
            const servicesSection = document.getElementById("services-section")
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" })
            }
          }
        }, 100)
      }
    } else {
      // Navigate to other pages normally
      navigate(to)
    }

    if (onClick) onClick()
  }

  return (
    <motion.div whileTap={{ scale: 0.95 }} className="mobile-nav-link">
      <a href={to} onClick={handleClick}>
        {children}
      </a>
    </motion.div>
  )
}
