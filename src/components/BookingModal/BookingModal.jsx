import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        className="fixed inset-0 bg-black/80 flex justify-center items-center z-[1000] p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white rounded-xl w-full max-w-[900px] max-h-[95vh] md:max-h-[90vh] overflow-hidden flex flex-col shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-6 py-4 md:px-8 md:py-6 border-b border-gray-200 bg-white">
            <h2 className="m-0 text-[1.3rem] md:text-2xl text-[#222] font-semibold">Schedule a Meeting</h2>
            <button 
              className="bg-transparent border-none text-3xl text-gray-500 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-100 hover:text-[#222] p-0" 
              onClick={onClose}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-0">
            {/* Cal.com inline embed */}
            <div 
              className="min-w-[320px] h-full"
              data-cal-namespace="inline"
              data-cal-link="tatva-essence/30min"
              data-cal-config='{"layout":"month_view"}'
              style={{ width: '100%', height: '600px', overflow: 'scroll' }}
            />
          </div>
          
          <div className="px-8 py-4 border-t border-gray-200 text-center bg-[#fafafa]">
            <p className="m-0 text-gray-500 text-sm">Select a date and time that works for you</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}