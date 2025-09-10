import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="footer">
      <div className="footer-gradient"></div>
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="footer-brand" variants={itemVariants}>
          <h2 className="footer-title">Get in Touch</h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <motion.div className="footer-content" variants={itemVariants}>
          <div className="footer-description-wrapper">
            <p className="footer-description">
              Tatva Essence is a sustainability-driven brand transforming the way India gardens, gifts, and manages organic waste. We create nutrient-rich compost from local market waste, design green spaces, and deliver impactful workshops.
            </p>
          </div>
          
          <div className="footer-contact-grid">
            <div className="contact-section">
              <h3 className="contact-label">Call Us</h3>
              <div className="contact-phones">
                <a href="tel:+919310187504" className="contact-link">+91-9310187504</a>,
                <a href="tel:+919205047819" className="contact-link">+91-9205047819</a>
              </div>
            </div>
            
            <div className="contact-section">
              <h3 className="contact-label">Email Us</h3>
              <a href="mailto:tatvaessence@gmail.com" className="contact-email">tatvaessence@gmail.com</a>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-social">
            <motion.a 
              href="https://www.linkedin.com/company/tatva-essence/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="social-icon-wrapper">
                <img src="/linkedin.svg" alt="LinkedIn" className="social-icon" />
              </div>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/tatvaessence?igsh=MWl4dmZnMHY4dTFtNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="social-icon-wrapper">
                <img src="/instagram.svg" alt="Instagram" className="social-icon" />
              </div>
            </motion.a>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-copyright">
            <p>© 2024 Tatva Essence. All rights reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}