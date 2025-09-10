import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }) {
  const [showSplash, setShowSplash] = useState(true);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Tatva Essence";

  useEffect(() => {
    // Smooth typewriter effect with variable timing
    let i = 0;
    const typing = () => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
        // Variable typing speed for more natural feel
        const delay = 70
        setTimeout(typing, delay);
      } else {
        // Hide cursor after typing completes
        setTimeout(() => setShowCursor(false), 500);
      }
    };

    // Start typing after logo animation
    setTimeout(typing, 800);

    // Hide splash after 4.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorBlink);
  }, [showCursor]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="splash-content">
            <motion.img 
              src="/icon.svg" 
              alt="Tatva Essence Logo" 
              className="splash-logo"
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            />
            <motion.div 
              className="splash-text-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <h1 className="splash-text">
                {text}
                <motion.span 
                  className="typing-cursor"
                  animate={{ 
                    opacity: showCursor ? [1, 0] : 0,
                  }}
                  transition={{ 
                    duration: 0.53,
                    repeat: showCursor ? Infinity : 0,
                    repeatType: "reverse"
                  }}
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