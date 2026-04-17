import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PillNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState('#hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Resume', href: '#experience' },
    { label: 'Skills', href: '#about' },
    { label: 'Services', href: '#experience' }, // In the screenshot, Services is between Skills and Portfolio
    { label: 'Portfolio', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSegment(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
      transition: 'all 0.3s ease',
      padding: '20px 0'
    }}>
      <div className="section-container" style={{ padding: '0 2rem', display: 'flex', justifyContent: 'center' }}>
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              style={{ 
                textDecoration: 'none', 
                fontSize: '0.85rem',
                fontWeight: 600,
                color: activeSegment === item.href ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'color 0.2s ease',
                paddingBottom: '4px',
                borderBottom: activeSegment === item.href ? '2px solid var(--text-primary)' : '2px solid transparent'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PillNav;
