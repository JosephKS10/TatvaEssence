import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Workshops() {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    document.body.classList.remove('overflow-hidden')
  }, [])

  const workshops = {
    schools: [
      { id: 1, title: 'Tray Garden', subheading: 'Create your mini garden', image: './images/workshops/tray.jpg', description: ['Participants create their own mini tray garden using an elegant white planter, Tatva Essence’s organic compost, and a healthy plant.','After potting, they add decorative elements such as pebbles, moss, and figurines to personalize their garden.','A creative and relaxing activity that blends nature, design, and learning.'], emoji: '🌱' },
      { id: 2, title: 'Bottle Bloom', subheading: 'Upcycle bottles into planters', image: './images/workshops/bottle.png', description: ['Encourages participants to upcycle waste plastic bottles into hanging planters.','With threads, soil, compost, and organic seeds, they transform bottles into green displays for campuses or offices.','Promotes sustainability and environmental awareness in a fun, hands-on way.'], emoji: '🌱' },
      { id: 3, title: 'Terrarium Making', subheading: 'Build your own ecosystem', image: './images/workshops/terarium.png', description: ['Teaches the art of creating a miniature self-sustaining garden inside a glass container.','Participants carefully layer soil, stones, moss, and small plants to build their terrarium.','Aesthetic, low-maintenance décor that sparks creativity and connects people with nature.'], emoji: '🌱' },
      { id: 4, title: 'Bonsai Making', subheading: 'Art of miniature trees', image: './images/workshops/bonsai.png', description: ['Introduces participants to the traditional Japanese art of bonsai.','Learn techniques like pruning, wiring, and shaping to craft miniature trees.','A thoughtful and meditative activity that symbolizes balance and harmony.'], emoji: '🌱' },
      { id: 5, title: 'Kokedama', subheading: 'Japanese string garden', image: './images/workshops/kokedama.png', description: ['A Japanese gardening style where plants are grown in a ball of soil wrapped with moss.','Participants tie the moss ball with threads, creating a unique hanging or decorative plant.','A blend of eco-friendliness and artistry, resulting in a striking piece of natural décor.'], emoji: '🌱' }
    ],
    corporates: [
      { id: 1, title: 'Tray Garden', subheading: 'Team building with plants', image: './images/workshops/tray.jpg', description: ['Participants create their own mini tray garden using an elegant white planter, Tatva Essence’s organic compost, and a healthy plant.','After potting, they add decorative elements such as pebbles, moss, and figurines to personalize their garden.','A creative and relaxing activity that blends nature, design, and learning.'], emoji: '🌱' },
      { id: 2, title: 'Kokedama', subheading: 'Japanese string garden', image: './images/workshops/kokedama.png', description: ['A Japanese gardening style where plants are grown in a ball of soil wrapped with moss.','Participants tie the moss ball with threads, creating a unique hanging or decorative plant.','A blend of eco-friendliness and artistry, resulting in a striking piece of natural décor.'], emoji: '🌱' },
      { id: 3, title: 'Terrarium Making', subheading: 'Build ecosystems together', image: './images/workshops/terarium.png', description: ['Teaches the art of creating a miniature self-sustaining garden inside a glass container.','Participants carefully layer soil, stones, moss, and small plants to build their terrarium.','Aesthetic, low-maintenance décor that sparks creativity and connects people with nature.'], emoji: '🌱' },
      { id: 4, title: 'Bonsai Making', subheading: 'Cultivate patience together', image: './images/workshops/bonsai.png', description: ['Teaches the art of creating a miniature self-sustaining garden inside a glass container.','Participants carefully layer soil, stones, moss, and small plants to build their terrarium.','Aesthetic, low-maintenance décor that sparks creativity and connects people with nature.'], emoji: '🌱' }
    ]
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen pb-16">
      <div 
        className="h-[40vh] md:h-[50vh] bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: "url('./images/workshops/workshop-bg.jpg')" }}
        data-aos="fade-in" 
        data-aos-duration="800"
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-[2.5rem] md:text-5xl font-bold relative z-10 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" data-aos="fade-up" data-aos-delay="300">
          Workshops
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-8 md:mt-12">
        {!activeCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="h-[300px] md:h-[400px] rounded-xl overflow-hidden relative cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.1)] group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory('schools')}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('./images/workshops/grow-together-workshop.jpg')" }} />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white z-10">
                <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-2">GROW TOGETHER</h2>
                <p className="text-[1.1rem] md:text-[1.2rem] opacity-90">For Schools</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="h-[300px] md:h-[400px] rounded-xl overflow-hidden relative cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.1)] group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory('corporates')}
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('./images/workshops/garden-for-good-workshop.jpg')" }} />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white z-10">
                <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-2">GARDEN FOR GOOD</h2>
                <p className="text-[1.1rem] md:text-[1.2rem] opacity-90">For Corporates</p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="mt-8">
            <button 
              className="bg-transparent border-none text-[1.1rem] text-tatva-green cursor-pointer py-2 px-4 mb-8 rounded transition-colors duration-300 hover:bg-tatva-green/10" 
              onClick={() => setActiveCategory(null)}
              data-aos="fade-right"
            >
              &larr; Back
            </button>
            
            <h2 className="text-[2rem] md:text-[2.5rem] text-[#333] mb-8 text-center font-bold" data-aos="fade-up">
              {activeCategory === 'schools' ? 'For Schools' : 'For Corporates'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8" data-aos="fade-up" data-aos-delay="200">
              {workshops[activeCategory].map((workshop, index) => (
                <div 
                  key={workshop.id} 
                  // Tailwind perfectly handles the dynamic spanning for perfect centering
                  className={`
                    ${activeCategory === 'schools' ? (index < 3 ? 'md:col-span-2' : 'md:col-span-3') : ''} 
                    ${activeCategory === 'corporates' ? (index < 3 ? 'md:col-span-2' : 'md:col-start-3 md:col-span-2') : ''}
                  `}
                >
                  <WorkshopCard workshop={workshop} index={index} />
                </div>
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
      className="h-[50vh] md:h-[60vh] lg:h-[70vh] group perspective-[1000px] w-full"
      data-aos="zoom-in"
      data-aos-delay={100 + (index * 100)}
    >
      <div className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5">
        
        {/* Front */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden bg-white flex flex-col">
          <div className="h-[65%] w-full bg-cover bg-center" style={{ backgroundImage: `url(${workshop.image})` }} />
          <div className="h-[35%] p-4 md:p-6 flex flex-col justify-center bg-white">
            <h3 className="mb-2 text-[1.3rem] md:text-[1.4rem] font-bold text-[#333]">{workshop.title}</h3>
            <p className="text-[0.9rem] text-[#666] m-0">{workshop.subheading}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl bg-white [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto">
          <div className="text-[2.5rem] md:text-[3rem] mb-2">{workshop.emoji}</div>
          <h3 className="mb-4 text-[1.2rem] md:text-[1.5rem] font-semibold text-[#2d5016]">{workshop.title}</h3>
          
          {Array.isArray(workshop.description) ? (
            <ul className="list-none p-0 m-0 w-full">
              {workshop.description.map((desc, idx) => (
                <li 
                  key={idx} 
                  className="relative pl-8 pr-2 mb-3 text-[0.85rem] md:text-[0.9rem] text-[#444] leading-[1.55] font-medium text-justify transition-transform duration-300 hover:translate-x-1 hover:text-[#2d5016] before:content-['>'] before:absolute before:left-0 before:top-0 before:text-[#3a7428] before:font-bold before:text-[1.1rem] before:pl-2"
                >
                  {desc}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[0.85rem] md:text-[0.9rem] leading-relaxed text-[#444]">{workshop.description}</p>
          )}
        </div>

      </div>
    </div>
  );
}