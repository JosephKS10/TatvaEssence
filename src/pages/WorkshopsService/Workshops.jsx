import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Workshops.css';

export default function Workshops() {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    document.body.classList.remove('no-scroll')
  }, [])

  // Workshop data
  const workshops = {
    schools: [
      { id: 1, title: 'Tray Garden', subheading: 'Create your mini garden', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop', description: 'Learn to create beautiful tray gardens with a variety of plants. Perfect for small spaces and beginners.' },
      { id: 2, title: 'Bottle Bloom', subheading: 'Upcycle bottles into planters', image: 'https://images.unsplash.com/photo-1597848212624-e9f912c936f5?q=80&w=1974&auto=format&fit=crop', description: 'Transform used bottles into beautiful plant containers. Eco-friendly and creative gardening solution.' },
      { id: 3, title: 'Terrarium Making', subheading: 'Build your own ecosystem', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1932&auto=format&fit=crop', description: 'Create self-sustaining miniature ecosystems in glass containers. Low maintenance and visually stunning.' },
      { id: 4, title: 'Bonsai Making', subheading: 'Art of miniature trees', image: 'https://images.unsplash.com/photo-1613601315535-23c6e7aeeaf3?q=80&w=2072&auto=format&fit=crop', description: 'Learn the ancient art of bonsai cultivation. Patience and technique for beautiful miniature trees.' },
      { id: 5, title: 'Kokedama', subheading: 'Japanese string garden', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop', description: 'Create beautiful moss ball plants using the traditional Japanese kokedama technique.' }
    ],
    corporates: [
      { id: 1, title: 'Tray Garden', subheading: 'Team building with plants', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop', description: 'Perfect team activity to create mini gardens. Encourages collaboration and creativity.' },
      { id: 2, title: 'Kokedama', subheading: 'Japanese string garden', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop', description: 'Team building with traditional Japanese technique. Create beautiful moss ball plants together.' },
      { id: 3, title: 'Terrarium Making', subheading: 'Build ecosystems together', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1932&auto=format&fit=crop', description: 'Collaborative terrarium building session. Great for fostering teamwork and creativity.' },
      { id: 4, title: 'Bonsai Making', subheading: 'Cultivate patience together', image: 'https://images.unsplash.com/photo-1613601315535-23c6e7aeeaf3?q=80&w=2072&auto=format&fit=crop', description: 'Learn the art of bonsai as a team. Develop patience and attention to detail together.' }
    ]
  };

  return (
    <div className="workshops-page">
      <div 
        className="workshops-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        data-aos="fade-in" 
        data-aos-duration="800"
      >
        <div className="hero-overlay" />
        <h1 data-aos="fade-up" data-aos-delay="300">Workshops</h1>
      </div>

      <div className="workshops-container">
        {!activeCategory ? (
          <div className="category-tiles">
            <motion.div 
              className="tile school-tile"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory('schools')}
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="tile-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }} />
              <div className="tile-content">
                <h2 data-aos="fade-up" data-aos-delay="200">GROW TOGETHER</h2>
                <p>For Schools</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="tile corporate-tile"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory('corporates')}
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="tile-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop')" }} />
              <div className="tile-content">
                <h2 data-aos="fade-up" data-aos-delay="200">GARDEN FOR GOOD</h2>
                <p>For Corporates</p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="workshops-section">
            <button 
              className="back-button" 
              onClick={() => setActiveCategory(null)}
              data-aos="fade-right"
              data-aos-duration="600"
            >
              &larr; Back
            </button>
            
            <h2 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              {activeCategory === 'schools' ? 'For Schools' : 'For Corporates'}
            </h2>
            
            <div 
              className={`workshop-grid ${activeCategory}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {workshops[activeCategory].map((workshop, index) => (
                <WorkshopCard 
                  key={workshop.id} 
                  workshop={workshop} 
                  index={index}
                  category={activeCategory}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function WorkshopCard({ workshop, index }) {
  return (
    <div 
      className={`workshop-card card-${index + 1}`}
      data-aos="zoom-in"
      data-aos-delay={300 + (index * 100)}
      data-aos-duration="600"
    >
      <div className="card-inner">
        <div className="card-front">
          <div 
            className="card-image" 
            style={{ backgroundImage: `url(${workshop.image})` }}
          />
          <div className="card-content">
            <h3>{workshop.title}</h3>
            <p>{workshop.subheading}</p>
          </div>
        </div>
        <div className="card-back">
          <h3>{workshop.title}</h3>
          <p>{workshop.description}</p>
        </div>
      </div>
    </div>
  );
}