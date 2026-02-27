import { motion } from 'framer-motion'
import React, { useEffect } from 'react'

export default function StoreService() {
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
     
    }, [])
  
  return (
   <div className="bg-[#f9f9f9] min-h-screen">
      <div
        className="h-[40vh] md:h-[60vh] bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        data-aos="fade-in"
        data-aos-duration="800"
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 
          className="text-white text-[2.5rem] md:text-5xl font-bold relative z-10 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          Compost Solutions
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto py-8 px-4 md:py-16 md:px-8">
        <section 
          className="mb-12 md:mb-16 bg-white p-6 md:p-8 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)]" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-tatva-green mb-6">Our Compost Products</h2>
          <p className="text-[1.1rem] leading-[1.8] text-[#555] mb-4">
            Our compost is made from organic mandi waste and enriched with cocopeat—100% natural and chemical-free.
          </p>
          <p className="text-[1.1rem] leading-[1.8] text-[#555] mb-4">
            How to use it: Mix it with soil or top-dress your plants. It works for all types—indoor, outdoor, flowering, or fruiting.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 md:gap-8 mt-8" data-aos="fade-up" data-aos-delay="200">
            
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1.5 flex flex-col group">
              <div className="overflow-hidden">
                <img src="/images/TatvaProduct.jpeg" alt="Compost Bag" className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-[1.3rem] font-semibold text-[#333] px-4 pt-4 pb-0">Standard Compost Bag</h3>
              <p className="text-[#777] px-4 pb-4 flex-grow">5kg of nutrient-rich compost</p>
              <button className="block w-[calc(100%-2rem)] mx-4 mb-4 p-3 bg-tatva-green hover:bg-[#3e8e41] text-white font-medium border-none rounded cursor-pointer transition-colors duration-300">
                Add to Cart
              </button>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1.5 flex flex-col group">
              <div className="overflow-hidden">
                <img src="/images/TatvaProduct.jpeg" alt="Compost Kit" className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-[1.3rem] font-semibold text-[#333] px-4 pt-4 pb-0">Compost Starter Kit</h3>
              <p className="text-[#777] px-4 pb-4 flex-grow">Everything you need to start composting</p>
              <button className="block w-[calc(100%-2rem)] mx-4 mb-4 p-3 bg-tatva-green hover:bg-[#3e8e41] text-white font-medium border-none rounded cursor-pointer transition-colors duration-300">
                Add to Cart
              </button>
            </div>

          </div>
        </section>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-12" data-aos="fade-up" data-aos-delay="300">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-tatva-green hover:bg-[#3e8e41] text-white border-none py-4 px-8 md:py-3 md:px-8 rounded-full text-[1.1rem] font-medium cursor-pointer transition-colors duration-300 shadow-md"
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </div>
  )
}