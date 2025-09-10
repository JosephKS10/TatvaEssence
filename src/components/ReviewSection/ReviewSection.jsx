import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import './ReviewSection.css'

const reviews = [
  {
    id: 1,
    content: "Tatva Essence transformed my balcony into a beautiful kitchen garden. The fresh herbs and vegetables have changed how I cook! Their attention to detail and sustainable approach made the entire process seamless.",
    author: "Priya Sharma",
    role: "Home Chef",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    id: 2,
    content: "The composting workshop was incredibly informative. We've reduced our household waste by 60% thanks to their simple solutions. The trainers were knowledgeable and made complex concepts easy to understand.",
    author: "Rahul Mehta",
    role: "Environmentalist",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    content: "Our corporate team loved the gardening workshop. It was both educational and a great team-building activity. The session was perfectly tailored to our needs and left everyone inspired to go green.",
    author: "Neha Kapoor",
    role: "HR Manager",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    content: "The green gifts we ordered were a huge hit at our wedding. Beautiful, sustainable, and unique - exactly what we wanted. Our guests couldn't stop talking about these thoughtful favors.",
    author: "Amit & Ananya",
    role: "Newlyweds",
    avatar: "https://randomuser.me/api/portraits/lego/5.jpg"
  },
  {
    id: 5,
    content: "As a school principal, I appreciate how Tatva Essence made gardening fun and educational for our students. The curriculum was age-appropriate and the hands-on activities kept the kids engaged throughout.",
    author: "Deepika Joshi",
    role: "School Principal",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg"
  }
]

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 10000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToReview = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <section className="reviews-section">
      <h2 
        className="section-title"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        What People Say
      </h2>
      
      <div className="reviews-container" data-aos="fade-up" data-aos-delay="200">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            className="review-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="quote-icon">“</div>
            <p className="review-content">{reviews[currentIndex].content}</p>
            <div className="review-author">
              <img 
                src={reviews[currentIndex].avatar} 
                alt={reviews[currentIndex].author}
                className="author-avatar"
              />
              <div className="author-info">
                <h4>{reviews[currentIndex].author}</h4>
                <p>{reviews[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="review-dots">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`review-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToReview(index)}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}