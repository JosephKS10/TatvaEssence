import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [showSplash, setShowSplash] = useState(true);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Tatva Essence";

  useEffect(() => {
    let i = 0;
    const typing = () => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typing, 70);
      } else {
        setTimeout(() => setShowCursor(false), 500);
      }
    };

    setTimeout(typing, 800);

    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    if (!showCursor) return;
    const cursorBlink = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(cursorBlink);
  }, [showCursor]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 w-full h-full bg-gradient-to-br from-white to-[#f8f8f8] flex justify-center items-center z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Subtle radial overlay for premium feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.01)_0%,transparent_70%)] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative z-10">
            <motion.img 
              src="/icon.svg" 
              alt="Tatva Essence Logo" 
              className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] [image-rendering:-webkit-optimize-contrast]"
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100, damping: 15 }}
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <h1 className="text-[2rem] md:text-[3rem] font-semibold text-black tracking-tight leading-none drop-shadow-sm flex items-center">
                {text}
                <motion.span 
                  className="text-gray-800 font-light ml-[2px]"
                  animate={{ opacity: showCursor ? [1, 0] : 0 }}
                  transition={{ duration: 0.53, repeat: showCursor ? Infinity : 0, repeatType: "reverse" }}
                >
                  |
                </motion.span>
              </h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}