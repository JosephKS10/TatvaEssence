import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BookingModal.css';

export default function BookingModal({ onClose }) {
  useEffect(() => {
    // Add cal.com script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="booking-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="booking-modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>Schedule a Meeting</h2>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          
          <div className="modal-content">
            {/* Cal.com inline embed */}
            <div 
              className="cal-inline"
              data-cal-namespace="inline"
              data-cal-link="tatva-essence/30min"
              data-cal-config='{"layout":"month_view"}'
              style={{ width: '100%', height: '600px', overflow: 'scroll' }}
            />
          </div>
          
          <div className="modal-footer">
            <p>Select a date and time that works for you</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}