import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: "What is Tatva Essence compost made of?",
    answer: "It's made from organic mandi waste and enriched with cocopeat—100% natural and chemical-free."
  },
  {
    question: "How do I use the compost?",
    answer: "Mix it with soil or top-dress your plants. It works for all types—indoor, outdoor, flowering, or fruiting."
  },
  {
    question: "Can I place bulk or gifting orders?",
    answer: "Yes! We offer sustainable gardening kits and eco-friendly gifts for corporate events and offices."
  },
  {
    question: "Do you conduct workshops?",
    answer: "Absolutely! We offer hands-on gardening and composting workshops for schools, offices, and communities."
  },
  {
    question: "Do you set up home gardens too?",
    answer: "Yes, we design and maintain terrace, vertical, and balcony gardens."
  },
  {
    question: "Are your products safe for indoor use?",
    answer: "Yes, our compost is non-toxic, odor-free, and perfect for houseplants."
  }
]

export default function FAQSection() {
  return (
    <section className="py-12 px-6 md:py-20 bg-white">
      <motion.h2 
        className="text-center text-3xl md:text-[2.5rem] font-bold mb-8 md:mb-12 text-[#333]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className="max-w-[800px] mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05, translateY: -2 }}
        whileTap={{ scale: 0.95 }}
        className="block mx-auto mt-12 bg-tatva-green hover:bg-[#3e8e41] text-white border-none px-8 py-4 rounded-full text-[1.1rem] font-medium cursor-pointer transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
      >
        Book a Meeting Now
      </motion.button>
    </section>
  )
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div 
      className="mb-4 rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-black/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button 
        className="w-full flex justify-between items-center p-4 md:p-6 bg-white hover:bg-gray-50 border-none cursor-pointer text-base md:text-[1.1rem] font-medium text-left text-[#333] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-light text-tatva-green ml-4"
        >
          +
        </motion.span>
      </button>
      
      <motion.div
        className="overflow-hidden bg-[#f9f9f9]/80"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-4 md:px-6 pb-6 pt-2 text-black leading-[1.6]">
          {answer}
          <div>
             {(index === 2 || index === 3 || index === 4) && (
                <button className="inline-block mt-4 bg-tatva-green hover:bg-[#3e8e41] text-white border-none px-4 py-2 rounded-full text-[0.9rem] cursor-pointer transition-colors duration-300">
                  Book a Meeting Now
                </button>
              )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}