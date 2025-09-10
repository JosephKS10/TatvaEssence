import { useState } from 'react'
import { motion } from 'framer-motion'
import './FAQSection.css'

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
    <section className="faq-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className="faq-container">
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="faq-cta"
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
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="faq-icon"
        >
          +
        </motion.span>
      </button>
      
      <motion.div
        className="faq-answer"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="faq-answer-content">
          {answer}
          <div>
             {(index === 2 || index === 3 || index === 4) && (
                    <button className="inline-cta">Book a Meeting Now</button>
                )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}