import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Project = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" style={{ padding: '3rem 2rem 2rem 2rem', color: 'var(--text-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background element */}
      <motion.div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'var(--c-light-pink)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, opacity: 0.5, y: yPos }} />

      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '1.5rem' }}
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
             background: 'transparent', 
             padding: '1.5rem 2rem',
             borderRadius: '8px',
             boxShadow: '10px 10px 0 var(--c-red)',
             color: 'var(--text-dark)',
             border: '4px solid var(--c-yellow)',
             margin: '0 auto',
             maxWidth: '800px'
           }}
        >
          <h3 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, marginBottom: '0.2rem', color: 'var(--text-dark)', textTransform: 'uppercase' }}>Civic Lens</h3>
          
          <p style={{ fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--c-pink)', fontWeight: 800, lineHeight: 1.4 }}>
            A web platform designed to analyze and highlight civic issues using AI-powered image processing.
          </p>

          <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.3, fontFamily: "'Fira Code', 'Courier New', monospace", color: '#222' }}>
            <li style={{ marginBottom: '0.4rem' }}><span style={{ color: 'var(--c-red)', marginRight: '15px' }}>✦</span> Built a responsive frontend using React.js</li>
            <li style={{ marginBottom: '0.4rem' }}><span style={{ color: 'var(--c-yellow)', marginRight: '15px' }}>✦</span> Integrated Firebase for backend services</li>
            <li style={{ marginBottom: '0.4rem' }}><span style={{ color: 'var(--c-pink)', marginRight: '15px' }}>✦</span> Used Vision API for image-based analysis</li>
            <li style={{ marginBottom: '0.4rem' }}><span style={{ color: 'var(--c-red)', marginRight: '15px' }}>✦</span> Focused on usability and real-world problem solving</li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.9rem', fontFamily: "'Fira Code', 'Courier New', monospace", color: 'var(--c-red)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              <span style={{ fontWeight: 800 }}>Tech Stack</span> <br/>
              <span style={{ color: 'var(--text-dark)', fontSize: '1.1rem', marginTop: '0.4rem', display: 'inline-block', fontWeight: 700 }}>React.js · Firebase · Vision API · PHP</span>
            </p>
            <a 
              href="https://civic-lens-zeta.vercel.app" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--c-red)', 
                color: '#fff', 
                padding: '0.8rem 1.5rem', 
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: '1rem', 
                fontWeight: 800, 
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                alignSelf: 'flex-start',
                textDecoration: 'none',
                marginTop: '0.2rem',
                cursor: 'pointer'
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
