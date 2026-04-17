import React, { useState, useEffect } from 'react';
import PillNav from './components/PillNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Modals from './components/Modals';
import './index.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="app">
      <PillNav />
      
      <main>
        <Hero />
        
        {/* Infinite Marquee Loop (Branding) */}
        <div style={{ 
          background: 'var(--bg-secondary)', 
          padding: '2rem 0', 
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          overflow: 'hidden',
          display: 'flex'
        }}>
          <div className="marquee-track" style={{ 
            display: 'flex', 
            gap: '4rem', 
            whiteSpace: 'nowrap',
            animation: 'marquee 30s linear infinite'
          }}>
            {[1,2,3,4].map(num => (
              <div key={num} style={{ display: 'flex', gap: '4rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-secondary)' }}>SANJAY G.</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-blue)', opacity: 0.5 }}>• SOFTWARE ENGINEER •</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-secondary)' }}>PORTFOLIO 2026</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-primary)', opacity: 0.5 }}>• CREATING VALUE •</span>
              </div>
            ))}
          </div>
        </div>

        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer style={{ 
        padding: '4rem 2rem', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border-light)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; 2026 Sanjay G. Built with Precision and Passion.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
          <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Work</a>
          <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Hire</a>
        </div>
      </footer>

      {/* Global Modals */}
      <Modals activeModal={activeModal} setActiveModal={setActiveModal} />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default App;
