import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '10rem 2rem 8rem 2rem', display: 'flex', justifyContent: 'center', width: '100%', color: 'var(--text-dark)', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', gap: '6rem', flexWrap: 'wrap' }}>
        
        {/* Left Column */}
        <div style={{ flex: '1 1 500px' }}>
          
          {/* ABOUT ME Pre-header */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
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
              About Me
            </span>
          </div>

          {/* Main Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', 
              fontFamily: "'Playfair Display', Georgia, serif", 
              lineHeight: 1.1, 
              marginBottom: '4rem',
              fontWeight: 500,
              color: 'var(--text-dark, #111)'
            }}
          >
            I turn bold ideas <br/>
            into <br/>
            <i style={{ fontWeight: 'normal', fontStyle: 'italic', color: '#444' }}>experiences people <br/> remember.</i>
          </motion.h2>

          {/* Paragraphs */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ 
              fontFamily: "'Fira Code', 'Courier New', monospace", 
              fontSize: '1.05rem', 
              fontWeight: 600,
              lineHeight: 1.8, 
              color: '#222',
              maxWidth: '550px',
              marginBottom: '4rem'
            }}
          >
            <p style={{ marginBottom: '2rem' }}>
              Based in <span style={{ color: '#5eb3ad' }}>Kolkata</span>, I'm a frontend developer and designer working at the intersection of aesthetics and functionality. My focus is not just building interfaces — but creating experiences that feel intuitive, engaging, and purposeful.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              Currently, I'm focused on <span style={{ color: '#5eb3ad' }}>full-stack web development</span> while continuing to explore interactive design, motion, and 3D experiences. I'm open to freelance projects and collaborations where I can contribute to meaningful, impactful work.
            </p>
          </motion.div>

          {/* Skill Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
          >
            {['REACT.JS', 'REACT NATIVE', 'PYTHON', 'JAVA', 'C', 'MYSQL', 'UI/UX', 'FIGMA', 'FIREBASE', 'MOTION', '3D / SPLINE', 'GRAPHIC DESIGN', 'GIT', 'GITHUB', 'VERCEL', 'RENDER', 'POSTMAN'].map((tag, idx) => (
              <div key={idx} style={{
                padding: '0.6rem 1.2rem',
                border: '2px solid rgba(0,0,0,0.8)',
                color: '#fff',
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '1px',
                clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                background: '#1a1a1a',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--c-red, #E43D12)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'var(--c-red, #E43D12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1a1a1a';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.8)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {tag}
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Column (Cyberpunk Cyber-Card) */}
        <div style={{ flex: '1 1 400px', display: 'flex', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            style={{
              position: 'relative',
              background: '#191717', // slight dark brownish/grey tint like the design
              width: '100%',
              padding: '4rem 3rem',
              clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
            }}
          >
            {/* Top gradient accent line */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '3px', 
              background: 'linear-gradient(90deg, var(--c-red, #E43D12), #5eb3ad)' 
            }}></div>

            {/* Card Content Sections */}
            <div style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
              <p style={{ color: '#5eb3ad', fontFamily: "'Fira Code', 'Courier New', monospace", textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                Current Focus
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2.4rem', color: '#fff', fontWeight: 500, lineHeight: 1.2 }}>
                Full-Stack Web<br/>Development
              </h3>
            </div>

            <div style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
              <p style={{ color: '#5eb3ad', fontFamily: "'Fira Code', 'Courier New', monospace", textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                Location
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', color: '#fff', fontWeight: 500 }}>
                Kolkata, India <span style={{ fontWeight: 800 }}>IN</span>
              </h3>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ color: '#5eb3ad', fontFamily: "'Fira Code', 'Courier New', monospace", textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                Availability
              </p>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', color: '#5eb3ad', fontStyle: 'italic' }}>
                Open to Freelance & Collab
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
