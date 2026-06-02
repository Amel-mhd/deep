import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Intro.css';

function Intro({ onFinish }) {
  const [revealing, setRevealing] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleReveal = () => {
  setRevealing(true);

  setTimeout(() => {
    setHidden(true);
    onFinish();
  }, 950);
};

  if (hidden) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="intro-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: revealing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: revealing ? 0.25 : 0,
          delay: revealing ? 0.75 : 0,
        }}
      >
        <motion.button
          className="intro-hole"
          onClick={handleReveal}
          aria-label="Entrer dans le site"
          initial={{ scale: 1, opacity: 1}}
          animate={{
            scale: revealing ? 8 : 1,
            opacity: 1,
          }}
          transition={{
            duration: revealing ? 0.95 : 1.15,
            ease: [0.76, 0, 0.24, 1],
          }}
        />

        {!revealing && (
          <>
            <motion.div
              className="intro-sonar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <span />
              <span />
              <span />
            </motion.div>

            <motion.div
              className="intro-content"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
            >
              <p>Expédition sous-marine</p>
              <h1>DEEP</h1>
              <span>Cliquer pour dévoiler</span>
            </motion.div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Intro;