import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Project = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" style={{ padding: '4rem 2rem', color: 'var(--text-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background element */}
      <motion.div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'var(--c-light-pink)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, opacity: 0.5, y: yPos }} />

      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '3rem' }}
        >
          <div style={{ 
            position: 'relative', 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            border: '1.5px solid rgba(228, 61, 18, 0.4)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--c-red, #E43D12)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', left: '100%', top: '50%', width: '40px', height: '1.5px', backgroundColor: 'rgba(228, 61, 18, 0.4)' }}></div>
          </div>
          <span style={{ 
            color: 'var(--c-red, #E43D12)', 
            letterSpacing: '5px', 
            fontSize: '2rem', 
            textTransform: 'uppercase', 
            fontWeight: 900, 
            marginLeft: '50px' 
          }}>
            Selected Project
          </span>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           style={{
             position: 'relative',
             background: '#191717', // Cyberpunk dark card for intense contrast against light background
             padding: '4rem 3rem',
             clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
             boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
             color: '#fff',
             border: 'none',
             margin: '0 auto',
             maxWidth: '800px'
           }}
        >
          {/* Top gradient accent line using prime color palette */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '4px', 
            background: 'linear-gradient(90deg, var(--c-red), var(--c-yellow))' 
          }}></div>
          
          <h3 style={{ fontSize: '3.5rem', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, marginBottom: '1rem', color: '#fff', textTransform: 'uppercase' }}>Civic Lens</h3>
          
          <p style={{ fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: '1.1rem', marginBottom: '2.5rem', color: '#b0b0b0', fontWeight: 500, lineHeight: 1.6 }}>
            A web platform designed to analyze and highlight civic issues using AI-powered image processing.
          </p>

          <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 2, fontFamily: "'Fira Code', 'Courier New', monospace", color: '#e0e0e0' }}>
            <li><span style={{ color: 'var(--c-red)', marginRight: '15px' }}>✦</span> Built a responsive frontend using React.js</li>
            <li><span style={{ color: 'var(--c-yellow)', marginRight: '15px' }}>✦</span> Integrated Firebase for backend services</li>
            <li><span style={{ color: 'var(--c-pink)', marginRight: '15px' }}>✦</span> Used Vision API for image-based analysis</li>
            <li><span style={{ color: 'var(--c-red)', marginRight: '15px' }}>✦</span> Focused on usability and real-world problem solving</li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem' }}>
            <p style={{ fontSize: '0.9rem', fontFamily: "'Fira Code', 'Courier New', monospace", color: 'var(--c-yellow)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              <span style={{ fontWeight: 800 }}>Tech Stack</span> <br/>
              <span style={{ color: '#fff', fontSize: '1.2rem', marginTop: '0.8rem', display: 'inline-block' }}>React.js · Firebase · Vision API · PHP</span>
            </p>
            <a 
              href="https://civic-lens-zeta.vercel.app" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--c-red)', 
                color: '#fff', 
                padding: '1rem 2.5rem', 
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: '1.1rem', 
                fontWeight: 800, 
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                alignSelf: 'flex-start',
                textDecoration: 'none',
                marginTop: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--c-yellow)';
                e.currentTarget.style.color = '#111';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--c-red)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              VISIT LIVE SITE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
