import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import './StoreService.css'

export default function StoreService() {

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      document.body.classList.remove('no-scroll')
    }, [])
  
  return (
    <div className="service-page">
      <div
        className="service-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        data-aos="fade-in"
        data-aos-duration="800"
      >
        <div className="hero-overlay" />
        <h1 data-aos="fade-up" data-aos-delay="300">Compost Solutions</h1>
      </div>

      <div className="service-content">
        <section className="service-section" data-aos="fade-up" data-aos-delay="100">
          <h2>Our Compost Products</h2>
          <p>
            Our compost is made from organic mandi waste and enriched with cocopeat—100% natural and chemical-free.
          </p>
          <p>
            How to use it: Mix it with soil or top-dress your plants. It works for all types—indoor, outdoor, flowering, or fruiting.
          </p>
          
          <div className="product-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="product-card">
              <img src="/images/TatvaProduct.jpeg" alt="Compost Bag" />
              <h3>Standard Compost Bag</h3>
              <p>5kg of nutrient-rich compost</p>
              <button className="product-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="/images/TatvaProduct.jpeg" alt="Compost Kit" />
              <h3>Compost Starter Kit</h3>
              <p>Everything you need to start composting</p>
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        </section>

        <div className="cta-section" data-aos="fade-up" data-aos-delay="300">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </div>
  )
}