import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Layout, Monitor, Search, FileText, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const services = [
    { 
      title: 'Full Stack Development', 
      desc: 'Building robust web applications using modern stacks like React, Node.js, and Python/Django.', 
      icon: <Monitor size={32} /> 
    },
    { 
      title: 'UI/UX Design', 
      desc: 'Designing intuitive, user-centric interfaces and interactive prototypes using Figma.', 
      icon: <Layout size={32} /> 
    },
    { 
      title: 'Problem Solving', 
      desc: 'Applying strong algorithmic thinking and data structures to solve complex technical challenges.', 
      icon: <Zap size={32} /> 
    }
  ];

  return (
    <section id="experience" style={{ padding: '100px 1.5rem', background: 'white' }}>
      <div className="section-container">
        
        {/* Personal Branding & Resume Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="soft-square"
            style={{ 
              width: '180px', 
              height: '180px', 
              margin: '0 auto 2rem auto', 
              overflow: 'hidden',
              border: '6px solid white',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <img src="/src/assets/sanjay.jpg" alt="Sanjay G" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>{portfolioData.name}</h2>
          <p style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '3rem' }}>{portfolioData.role}</p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="btn-premium primary"
              style={{ padding: '14px 32px' }}
            >
              View Resume <ExternalLink size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="btn-premium secondary"
              style={{ padding: '14px 32px', border: '1px solid var(--border-light)' }}
            >
              Download PDF <Download size={18} />
            </a>
          </div>
        </div>

        {/* Resume Content Block */}
        <div style={{ marginBottom: '8rem' }}>
          <span className="label">Background</span>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem' }}>Journey & <span style={{ color: 'var(--accent-blue)' }}>Education.</span></h3>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {portfolioData.education.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ 
                  padding: '2rem', 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FileText size={18} color="var(--accent-blue)" /> {item.title}
                  </h4>
                  <div style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px', paddingLeft: '28px' }}>{item.sub}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 700, paddingLeft: '28px' }}>{item.badge}</div>
                </div>
                <div style={{ padding: '8px 16px', borderRadius: '100px', background: 'white', border: '1px solid var(--border-light)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <span className="label">Expertise</span>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem' }}>Core Services.</h3>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ 
                  padding: '3rem 2rem', 
                  textAlign: 'center'
                }}
              >
                <div style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{service.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
