import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Project = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" style={{ padding: '8rem 2rem', color: 'var(--text-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background element */}
      <motion.div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'var(--c-light-pink)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, opacity: 0.5, y: yPos }} />

      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="title-cursive" 
          style={{ marginBottom: '3rem', textAlign: 'center', color: 'var(--c-red)' }}
        >
          Selected Project
        </motion.h2>

        <motion.div
          className="glass-dark"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '4rem',
            borderRadius: '32px',
            background: 'rgba(255, 255, 255, 0.4)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            color: 'var(--text-dark)'
          }}
        >
          <h3 style={{ fontSize: '3rem', fontFamily: 'var(--font-sans)', fontWeight: 800, marginBottom: '1rem', color: 'var(--c-red)', textTransform: 'uppercase' }}>Civic Lens</h3>
          
          <p style={{ fontSize: '1.4rem', marginBottom: '2rem', fontWeight: 500 }}>
            A web platform designed to analyze and highlight civic issues using AI-powered image processing.
          </p>

          <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '3rem', fontSize: '1.2rem', lineHeight: 1.8 }}>
            <li><span style={{ color: 'var(--c-pink)', marginRight: '10px' }}>✦</span> Built a responsive frontend using React.js</li>
            <li><span style={{ color: 'var(--c-pink)', marginRight: '10px' }}>✦</span> Integrated Firebase for backend services</li>
            <li><span style={{ color: 'var(--c-pink)', marginRight: '10px' }}>✦</span> Used Vision API for image-based analysis</li>
            <li><span style={{ color: 'var(--c-pink)', marginRight: '10px' }}>✦</span> Focused on usability and real-world problem solving</li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>
              <span style={{ color: 'var(--c-red)' }}>Tech:</span> React.js, Firebase, Vision API, PHP
            </p>
            <a 
              href="https://civic-lens-zeta.vercel.app" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--text-dark)', 
                color: 'var(--c-bg)', 
                padding: '1rem 2.5rem', 
                borderRadius: '50px', 
                fontSize: '1.1rem', 
                fontWeight: 600, 
                transition: '0.3s transform',
                alignSelf: 'flex-start',
                marginTop: '1rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Visit Live Site
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
