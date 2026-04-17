import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative', 
      background: 'white',
      paddingTop: '120px'
    }}>
      <div className="section-container" style={{ textAlign: 'center', maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ 
            fontSize: 'clamp(4rem, 10vw, 8rem)', 
            fontWeight: 800, 
            color: 'var(--accent-primary)',
            lineHeight: 0.9,
            marginBottom: '1rem',
            letterSpacing: '-0.04em'
          }}>
            Sanjay<span style={{ color: 'var(--accent-blue)' }}>.</span>
          </h1>
          
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 3rem)', 
            fontWeight: 700, 
            color: '#334155',
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            {portfolioData.role}
          </h2>

          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '0 auto 3rem auto',
            fontWeight: 500
          }}>
            {portfolioData.bio}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid var(--border-light)',
            borderRadius: '12px',
            position: 'relative'
          }}>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{
                width: '4px',
                height: '8px',
                background: 'var(--accent-primary)',
                borderRadius: '2px',
                position: 'absolute',
                left: '50%',
                top: '6px',
                transform: 'translateX(-50%)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
