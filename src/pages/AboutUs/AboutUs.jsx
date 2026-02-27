import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookingModal from '../../components/BookingModal/BookingModal';
import MinimalTeamCard from '../../components/MinimalTeamCard/MinimalTeamCard';
import { MdOutlineRecycling, MdOutlineSearch, MdOutlineLightbulb, MdOutlineTrendingUp } from 'react-icons/md';
import { FaRegHandshake } from 'react-icons/fa';

export default function AboutUs() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.classList.remove('overflow-hidden');
  }, []);

  const teamMembers = [
    { name: "Abhijith Menon", role: "Co-founder", description: "A BBA Graduate from Ambedkar University Delhi, Abhijith is the driving force behind Tatva Essence's growth and partnerships. With expertise in strategic execution, negotiation, and business development, he brings clarity and momentum to the organization. His mindset and ability to forge strong collaborations are central to shaping long-term impact.", avatarUrl: "/images/about/abhijith.jpeg", linkedinUrl: "https://www.linkedin.com/in/abhijith-menon-910002200/" },
    { name: "Tejas Pokhriyal", role: "Co-founder", description: "Also a graduate from Ambedkar University Delhi, Tejas specializes in marketing, production management, and logistics. He ensures innovation and efficiency in product development, making sustainability both practical and scalable. His creative problem-solving strengthens Tatva Essence's operations.", avatarUrl: "/images/about/tejas.jpeg", linkedinUrl: "https://www.linkedin.com/in/tejas-pokhriyal/" },
    { name: "Joseph K. Saji", role: "Fractional CTO", description: "Joseph is the technological backbone of Tatva Essence, turning ideas into scalable digital systems. With a strong background in software engineering and product development, he designs and manages the platforms that power the brand’s online presence, operations, and growth infrastructure.", avatarUrl: "/images/about/joseph.jpeg", linkedinUrl: "https://www.linkedin.com/in/josephks10/" }
  ];

  return (
    <div className="font-sans text-[#333] leading-relaxed">
      {/* Hero Section */}
      <section className="h-[60vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] bg-cover bg-center relative flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <motion.div 
          className="relative z-10 max-w-[800px] px-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] leading-tight">Turning Waste Into Value, Building a Greener Tomorrow.</h1>
          <p className="text-lg md:text-[1.4rem] font-light opacity-90 max-w-[700px] mx-auto">We are Tatva Essence, a sustainability-driven organization reshaping how communities and companies think about waste.</p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div className="flex-1 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <img src="/images/about/ourteam.jpeg" alt="Our Story" className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
            <motion.div className="flex-1" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-[2.5rem] font-semibold text-[#222] mb-6">Our Story</h2>
              <p className="text-base md:text-[1.1rem] text-[#555] leading-[1.8]">
                Tatva Essence was born as a college project during our second year at Ambedkar University, Delhi. With a passion for waste management and sustainability, we turned an idea into action. After months of pilots and experiments, we officially founded Tatva Essence on 7th December 2024, with a vision to make sustainability practical, impactful, and measurable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 md:py-24 bg-cover bg-center relative text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div className="relative z-10 max-w-[800px] mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold mb-6">Why We Exist</h2>
            <p className="text-lg md:text-[1.2rem] leading-[1.8] opacity-90">
              We exist to solve two pressing issues—rising organic waste and lack of awareness. By transforming waste into value, promoting safe food practices, and creating engaging educational experiences, we're building a culture of sustainability across schools, corporates, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2 className="text-center text-3xl md:text-[2.5rem] font-semibold text-[#222] mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            Who We Are
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
            {teamMembers.map((member, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <MinimalTeamCard {...member} />
              </motion.div>
            ))}
          </div>
          <motion.p className="text-center text-lg md:text-[1.2rem] text-[#555] italic max-w-[800px] mx-auto pt-8 border-t border-[#e0e0e0]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
            Together, we combine strategic vision, operational expertise, and innovative thinking to drive Tatva Essence forward.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2 className="text-center text-3xl md:text-[2.5rem] font-semibold text-[#222] mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <MdOutlineRecycling />, title: 'Sustainability', desc: 'Commitment to environmental and social responsibility in all our actions.' },
              { icon: <MdOutlineSearch />, title: 'Transparency', desc: 'Open and honest communication with our stakeholders.' },
              { icon: <MdOutlineLightbulb />, title: 'Innovation', desc: 'Constantly seeking creative solutions to complex problems.' },
              { icon: <FaRegHandshake />, title: 'Community', desc: 'Building strong, inclusive communities around sustainability.' },
              { icon: <MdOutlineTrendingUp />, title: 'Measurable Impact', desc: 'Focusing on outcomes that can be tracked and scaled.' },
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8 bg-[#f8f8f8] rounded-xl border border-[#eee] transition-all duration-300 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:border-[#ddd]" 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                whileHover={{ scale: 1.05 }}
              >
                {/* Fixed alignment with flex justify-center and added brand color */}
                <div className="text-4xl md:text-5xl mb-4 flex justify-center text-tatva-green">
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-[1.3rem] font-semibold text-[#222] mb-4">{value.title}</h3>
                <p className="text-[#666] text-sm md:text-[0.95rem] leading-[1.6]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-cover bg-center relative text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div className="relative z-10 text-center max-w-[800px] mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-[2.2rem] font-semibold mb-8 md:mb-10 leading-[1.4]">Join us in creating workplaces, schools, and communities that thrive on sustainable action.</h2>
            <motion.button className="bg-tatva-green hover:bg-[#45a049] text-white border-none py-4 px-10 md:px-12 text-[1.1rem] font-semibold rounded-full cursor-pointer transition-all duration-300 tracking-wide shadow-lg hover:shadow-[0_10px_25px_rgba(76,175,80,0.3)]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowBookingModal(true)}>
              Partner With Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}