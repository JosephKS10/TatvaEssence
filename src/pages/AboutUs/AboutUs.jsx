import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

import BookingModal from '../../components/BookingModal/BookingModal';
import MinimalTeamCard from '../../components/MinimalTeamCard/MinimalTeamCard';

export default function AboutUs() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.classList.remove('no-scroll');
  }, []);

  // Team data with updated descriptions and LinkedIn URLs
  const teamMembers = [
    {
      name: "Abhijith Menon",
      role: "Co-founder",
      description: "A BBA Graduate from Ambedkar University Delhi, Abhijith is the driving force behind Tatva Essence's growth and partnerships. With expertise in strategic execution, negotiation, and business development, he brings clarity and momentum to the organization. His mindset and ability to forge strong collaborations are central to shaping long-term impact.",
      avatarUrl: "/images/about/abhijith.jpeg",
      miniAvatarUrl: "/images/about/abhijith.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/abhijith-menon-910002200/"
    },
    {
      name: "Tejas Pokhriyal",
      role: "Co-founder",
      description: "Also a graduate from Ambedkar University Delhi, Tejas specializes in marketing, production management, and logistics. He ensures innovation and efficiency in product development, making sustainability both practical and scalable. His creative problem-solving strengthens Tatva Essence's operations.",
      avatarUrl: "/images/about/tejas.jpeg",
      miniAvatarUrl: "/images/about/tejas.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/tejas-pokhriyal/"
    },
    {
      name: "Joseph K. Saji",
      role: "The Tech Guy",
      description: "Joseph is the technological backbone of Tatva Essence, turning ideas into scalable digital systems. With a strong background in software engineering and product development, he designs and manages the platforms that power the brand’s online presence, operations, and growth infrastructure.",
      avatarUrl: "/images/about/joseph.jpeg",
      miniAvatarUrl: "/images/about/joseph.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/josephks10/"
    }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section 
        className="about-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')" }}
      >
        <div className="hero-overlay" />
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Turning Waste Into Value, Building a Greener Tomorrow.</h1>
          <p className="hero-subtitle">
            We are Tatva Essence, a sustainability-driven organization reshaping how communities and companies think about waste.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Our Story" 
              />
            </motion.div>
            <motion.div 
              className="story-text"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                Tatva Essence was born as a college project during our second year at Ambedkar University, Delhi. 
                With a passion for waste management and sustainability, we turned an idea into action. 
                After months of pilots and experiments, we officially founded Tatva Essence on 7th December 2024, 
                with a vision to make sustainability practical, impactful, and measurable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section 
        className="why-section"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="overlay" />
        <div className="container">
          <motion.div 
            className="why-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why We Exist</h2>
            <p>
              We exist to solve two pressing issues—rising organic waste and lack of awareness. 
              By transforming waste into value, promoting safe food practices, and creating engaging 
              educational experiences, we're building a culture of sustainability across schools, 
              corporates, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MinimalTeamCard
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  avatarUrl={member.avatarUrl}
                  miniAvatarUrl={member.miniAvatarUrl}
                  linkedinUrl={member.linkedinUrl}
                />
              </motion.div>
            ))}
          </div>
          <motion.p 
            className="team-closing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Together, we combine strategic vision, operational expertise, and innovative thinking to drive Tatva Essence forward.
          </motion.p>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className="values-grid">
            {[
              { icon: '♻️', title: 'Sustainability', desc: 'Commitment to environmental and social responsibility in all our actions.' },
              { icon: '🔍', title: 'Transparency', desc: 'Open and honest communication with our stakeholders.' },
              { icon: '💡', title: 'Innovation', desc: 'Constantly seeking creative solutions to complex problems.' },
              { icon: '🤝', title: 'Community', desc: 'Building strong, inclusive communities around sustainability.' },
              { icon: '📈', title: 'Measurable Impact', desc: 'Focusing on outcomes that can be tracked and scaled.' },
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="cta-section"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')" }}
      >
        <div className="overlay" />
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Join us in creating workplaces, schools, and communities that thrive on sustainable action.</h2>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBookingModal(true)}
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}