import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Workshops.css';

export default function Workshops() {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    document.body.classList.remove('no-scroll')
  }, [])

  // Workshop data with updated descriptions
  const workshops = {
    schools: [
      { 
        id: 1, 
        title: 'Tray Garden', 
        subheading: 'Create your mini garden', 
        image: './images/workshops/tray.jpg', 
        description: ['Participants create their own mini tray garden using an elegant white planter, Tatva Essence’s organic compost, and a healthy plant.','After potting, they add decorative elements such as pebbles, moss, and figurines to personalize their garden.','A creative and relaxing activity that blends nature, design, and learning.'],
        emoji: '🌱'
      },
      { 
        id: 2, 
        title: 'Bottle Bloom', 
        subheading: 'Upcycle bottles into planters', 
        image: './images/workshops/bottle.png', 
        description: ['Encourages participants to upcycle waste plastic bottles into hanging planters.','With threads, soil, compost, and organic seeds, they transform bottles into green displays for campuses or offices.','Promotes sustainability and environmental awareness in a fun, hands-on way.'],
        emoji: '🌱'
      },
      { 
        id: 3, 
        title: 'Terrarium Making', 
        subheading: 'Build your own ecosystem', 
        image: './images/workshops/terarium.png', 
        description: ['Teaches the art of creating a miniature self-sustaining garden inside a glass container.','Participants carefully layer soil, stones, moss, and small plants to build their terrarium.','Aesthetic, low-maintenance décor that sparks creativity and connects people with nature.'],
        emoji: '🌱'
      },
      { 
        id: 4, 
        title: 'Bonsai Making', 
        subheading: 'Art of miniature trees', 
        image: './images/workshops/bonsai.png', 
        description: ['Introduces participants to the traditional Japanese art of bonsai.','Learn techniques like pruning, wiring, and shaping to craft miniature trees.','A thoughtful and meditative activity that symbolizes balance and harmony.'],
        emoji: '🌱'
      },
      { 
        id: 5, 
        title: 'Kokedama', 
        subheading: 'Japanese string garden', 
        image: './images/workshops/kokedama.png', 
        description: ['A Japanese gardening style where plants are grown in a ball of soil wrapped with moss.','Participants tie the moss ball with threads, creating a unique hanging or decorative plant.','A blend of eco-friendliness and artistry, resulting in a striking piece of natural décor.'],
        emoji: '🌱'
      }
    ],
    corporates: [
      { 
        id: 1, 
        title: 'Tray Garden', 
        subheading: 'Team building with plants', 
        image: './images/workshops/tray.jpg', 
        description: ['Participants create their own mini tray garden using an elegant white planter, Tatva Essence’s organic compost, and a healthy plant.','After potting, they add decorative elements such as pebbles, moss, and figurines to personalize their garden.','A creative and relaxing activity that blends nature, design, and learning.'],
        emoji: '🌱'
      },
      { 
        id: 2, 
        title: 'Kokedama', 
        subheading: 'Japanese string garden', 
        image: './images/workshops/kokedama.png', 
        description: ['A Japanese gardening style where plants are grown in a ball of soil wrapped with moss.','Participants tie the moss ball with threads, creating a unique hanging or decorative plant.','A blend of eco-friendliness and artistry, resulting in a striking piece of natural décor.'],
        emoji: '🌱'
      },
      { 
        id: 3, 
        title: 'Terrarium Making', 
        subheading: 'Build ecosystems together', 
        image: './images/workshops/terarium.png', 
        description: ['Teaches the art of creating a miniature self-sustaining garden inside a glass container.','Participants carefully layer soil, stones, moss, and small plants to build their terrarium.','Aesthetic, low-maintenance décor that sparks creativity and connects people with nature.'],
        emoji: '🌱'
      },
      { 
        id: 4, 
        title: 'Bonsai Making', 
        subheading: 'Cultivate patience together', 
        image: './images/workshops/bonsai.png', 
        description: ['Teaches the art of creating a miniature self-sustaining garden inside a glass container.','Participants carefully layer soil, stones, moss, and small plants to build their terrarium.','Aesthetic, low-maintenance décor that sparks creativity and connects people with nature.'],
        emoji: '🌱'
      }
    ]
  };

  return (
    <div className="workshops-page">
      <div 
        className="workshops-hero"
        style={{ backgroundImage: "url('./images/workshops/workshop-bg.jpg')" }}
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
              <div className="tile-image" style={{ backgroundImage: "url('./images/workshops/grow-together-workshop.jpg')" }} />
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
              <div className="tile-image" style={{ backgroundImage: "url('./images/workshops/garden-for-good-workshop.jpg')" }} />
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
          <div className="card-back-content">
            <div className="card-emoji">{workshop.emoji}</div>
            <h3>{workshop.title}</h3>
            {Array.isArray(workshop.description) ? (
              <ul className='card-back-description'>
                {workshop.description.map((desc, idx) => (
                  <li key={idx} className='card-back-description-points'>{desc}</li>
                ))}
              </ul>
            ) : (
              <p>{workshop.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}