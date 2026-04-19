import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '3rem 2rem 2rem 2rem', color: 'var(--text-dark)', textAlign: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <span style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          background: 'rgba(0,0,0,0.1)', 
          padding: '0.5rem 1rem', 
          borderRadius: '50px', 
          fontSize: '0.9rem', 
          marginBottom: '1rem',
          textTransform: 'uppercase',
          fontWeight: 600
        }}>
          <span style={{ color: '#00cc00' }}>●</span> Open to Work & Freelance
        </span>
        
        <h2 className="title-sans" style={{ color: 'var(--c-yellow)', marginBottom: '1.5rem', lineHeight: 0.9 }}>Let's build</h2>
        <h2 className="title-sans" style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: 0.9 }}>something impactful.</h2>

        <p style={{ fontSize: '1.4rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--c-red)', fontWeight: 800 }}>
          I’m currently open to freelance work, collaborations, and creative opportunities.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchalisaha05@gmail.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-dark)' }}>
            <Mail /> Gmail
          </a>
          <a href="https://linkedin.com/in/sanchali-saha-6b4aa6328" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-dark)' }}>
            LinkedIn
          </a>
          <a href="https://github.com/Sanchali-rif" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-dark)' }}>
            GitHub
          </a>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchalisaha05@gmail.com" target="_blank" rel="noreferrer" style={{
            background: 'var(--c-yellow)', color: 'var(--text-dark)', padding: '1rem 3rem', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase'
          }}>
            Hire Me
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchalisaha05@gmail.com" target="_blank" rel="noreferrer" style={{
            background: 'transparent', border: '2px solid var(--c-yellow)', color: 'var(--c-yellow)', padding: '1rem 3rem', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase'
          }}>
            Let's Talk
          </a>
        </div>

        <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>© {new Date().getFullYear()} Sanchali Saha. Designed & Built with ❤️</p>
      </motion.div>
    </section>
  );
};

export default Contact;
