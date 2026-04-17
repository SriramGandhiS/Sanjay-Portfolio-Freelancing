import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const skillValues = {
    'Python': 95,
    'JavaScript': 90,
    'HTML/CSS': 95,
    'React.js': 85,
    'MySQL': 80,
    'Django': 75,
    'Figma': 80,
    'Node.js': 70
  };

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', padding: '100px 1.5rem' }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="label">Capabilities</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
            Technical <span style={{ color: 'var(--accent-blue)' }}>Expertise.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.1rem' }}>
            A comprehensive set of technical skills honed through academic projects and competitive engineering challenges.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '3rem', borderRadius: '32px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem 5rem' 
          }}>
            {Object.entries(skillValues).map(([skill, value], i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: 700, fontSize: '0.95rem' }}>
                  <span>{skill}</span>
                  <span style={{ color: 'var(--accent-blue)' }}>{value}%</span>
                </div>
                <div className="progress-bar-container" style={{ background: 'rgba(59, 130, 246, 0.05)', height: '10px' }}>
                  <motion.div 
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
