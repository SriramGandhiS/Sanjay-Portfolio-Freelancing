import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, Award, Code, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Modals = ({ activeModal, setActiveModal }) => {
  const closeModal = () => setActiveModal(null);

  const getCertIcon = (iconKey) => {
    switch(iconKey) {
      case 'dev': return <Code size={20} />;
      case 'ai': return <Cpu size={20} />; // Using Cpu as fallback for AI
      case 'logic': return <FileText size={20} />;
      default: return <Award size={20} />;
    }
  };

  return (
    <>
      <AnimatePresence>
        {activeModal === 'resume' && (
          <motion.div 
            className="modal-overlay active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content glass-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="close-modal" onClick={closeModal}><X size={20} /></div>
              
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'var(--bg-secondary)', 
                  borderRadius: '16px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-blue)',
                  marginBottom: '1.25rem',
                  border: '1px solid var(--border-light)'
                }}>
                  <FileText size={32} />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Resume Selection</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Choose how you'd like to interact with the file</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', textAlign: 'center', cursor: 'pointer', background: 'var(--bg-secondary)' }}>
                    <ExternalLink size={32} style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>View Online</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Open in a new tab</p>
                  </div>
                </a>
                <a 
                  href="/resume.pdf" 
                  download 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', textAlign: 'center', cursor: 'pointer', background: 'var(--accent-primary)', color: 'white' }}>
                    <Download size={32} style={{ marginBottom: '1rem', color: 'white' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Download PDF</h3>
                    <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Save to your device</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeModal === 'certificates' && (
          <motion.div 
            className="modal-overlay active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content glass-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="close-modal" onClick={closeModal}><X size={20} /></div>
              
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Award size={32} color="var(--accent-blue)" />
                  <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Certifications</h2>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>Verified professional credentials and technical achievements</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {portfolioData.certs.map((cert, i) => (
                  <div key={i} className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ color: 'var(--accent-blue)' }}>{getCertIcon(cert.icon)}</div>
                      <div>
                        <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{cert.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{cert.issuer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modals;
