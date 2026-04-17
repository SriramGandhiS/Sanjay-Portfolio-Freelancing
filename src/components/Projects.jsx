import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code, Layout, Database, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const getProjectIcon = (iconKey) => {
    switch(iconKey) {
      case 'DP': return <Cpu size={24} />;
      case 'EM': return <Database size={24} />;
      case 'CF': return <Layout size={24} />;
      case 'MG': return <Terminal size={24} />;
      case 'BT': return <Code size={24} />;
      default: return <Code size={24} />;
    }
  };

  return (
    <section id="projects" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="label">Creations</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
            Featured <span style={{ color: 'var(--accent-blue)' }}>Creations.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.1rem' }}>
            Technical projects developed during my academic journey, focusing on real-world utility and code quality.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '3rem' 
        }}>
          {portfolioData.projects.map((project, i) => (
            <motion.div 
              key={i}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ 
                height: '220px', 
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-blue)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                  zIndex: 1
                }}>
                  {getProjectIcon(project.icon)}
                </div>
              </div>

              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}>
                    <ArrowUpRight size={24} />
                  </a>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
                  {project.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} style={{ 
                      padding: '4px 12px', 
                      borderRadius: '8px', 
                      background: 'rgba(59, 130, 246, 0.08)', 
                      fontSize: '0.75rem', 
                      fontWeight: 700,
                      color: 'var(--accent-blue)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
