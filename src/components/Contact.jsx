import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Code, Briefcase, MessageSquare, Camera, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '100px 1.5rem', background: 'white' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Contact <span style={{ color: 'var(--accent-blue)' }}>us.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}>
            Whether you have a project in mind or just want to say hi, feel free to reach out.
          </p>
        </div>

        <form style={{ display: 'grid', gap: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>First Name</label>
              <input type="text" placeholder="First Name" style={{ 
                padding: '12px 16px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-light)', 
                background: 'var(--bg-secondary)',
                fontSize: '1rem'
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Last Name</label>
              <input type="text" placeholder="Last Name" style={{ 
                padding: '12px 16px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-light)', 
                background: 'var(--bg-secondary)',
                fontSize: '1rem'
              }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Company</label>
            <input type="text" placeholder="Company" style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: '1px solid var(--border-light)', 
              background: 'var(--bg-secondary)',
              fontSize: '1rem'
            }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Email</label>
            <input type="email" placeholder="email@example.com" style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: '1px solid var(--border-light)', 
              background: 'var(--bg-secondary)',
              fontSize: '1rem'
            }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Phone Number</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select style={{ 
                padding: '12px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-light)', 
                background: 'var(--bg-secondary)' 
              }}>
                <option>US</option>
                <option>IN</option>
              </select>
              <input type="tel" placeholder="+1 (555) 000-0000" style={{ 
                flex: 1,
                padding: '12px 16px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-light)', 
                background: 'var(--bg-secondary)',
                fontSize: '1rem'
              }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Message</label>
            <textarea placeholder="Your message here..." style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: '1px solid var(--border-light)', 
              background: 'var(--bg-secondary)',
              fontSize: '1rem',
              minHeight: '150px',
              resize: 'vertical'
            }} />
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">By selecting this, you agree to our privacy policy.</label>
          </div>

          <button type="submit" className="btn-premium primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem', marginTop: '1rem' }}>
            Let's talk
          </button>
        </form>

        <div style={{ 
          marginTop: '6rem', 
          paddingTop: '3rem', 
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Copyrights. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--text-primary)' }}><Globe size={20} /></a>
            <a href="#" style={{ color: 'var(--text-primary)' }}><Camera size={20} /></a>
            <a href="#" style={{ color: 'var(--text-primary)' }}><Briefcase size={20} /></a>
            <a href="#" style={{ color: 'var(--text-primary)' }}><Code size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
