import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <section id="about" style={{ padding: '3rem 2rem 2rem 2rem', display: 'flex', justifyContent: 'center', width: '100%', color: 'var(--text-dark)', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
      {/* Decorative left-side background gradient (Light Orange & Light Pink Mix) */}
      <motion.div style={{ position: 'absolute', top: '10%', left: '-10%', width: '50vw', height: '50vw', background: 'linear-gradient(135deg, rgba(255, 204, 153, 0.6), rgba(255, 182, 193, 0.5))', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, opacity: 0.7, y: yPos }} />

      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', gap: '6rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>

        {/* Left Column */}
        <div style={{ flex: '1 1 500px' }}>

          {/* ABOUT ME Pre-header */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
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
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              fontWeight: 500,
              color: 'var(--text-dark, #111)'
            }}
          >
            I turn bold ideas <br />
            into <br />
            <i style={{
              fontWeight: 'normal',
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #f272ccff, #FF6600)',
              WebkitBackgroundClip: 'text',
              color: 'transparent', // using color: 'transparent' as fallback 
              WebkitTextFillColor: 'transparent'
            }}>experiences people <br /> remember.</i>
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
              marginBottom: '2rem'
            }}
          >
            <p style={{ marginBottom: '0.8rem' }}>
              Based in <span style={{ color: '#FF1493', fontWeight: 900 }}>Kolkata</span>, I'm a frontend developer and designer working at the intersection of aesthetics and functionality. My focus is not just building interfaces — but creating experiences that feel intuitive, engaging, and purposeful.
            </p>
            <p style={{ marginBottom: '0.8rem' }}>
              Currently, I'm focused on <span style={{ color: '#FF1493', fontWeight: 900 }}>full-stack web development</span> while continuing to explore interactive design, motion, and 3D experiences. I'm open to freelance projects and collaborations where I can contribute to meaningful, impactful work.
            </p>
          </motion.div>

          {/* Skill tags moved to Skills section */}

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
              background: '#191717',
              width: '100%',
              padding: '2rem 2.5rem',
              borderRadius: '8px',
              border: '4px solid var(--c-yellow)',
              boxShadow: '10px 10px 0 var(--c-red)'
            }}
          >

            {/* Card Content Sections */}
            <div style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <p style={{ color: 'var(--c-yellow)', fontFamily: "'Fira Code', 'Courier New', monospace", textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Current Focus
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2.4rem', color: '#fff', fontWeight: 500, lineHeight: 1.2 }}>
                Full-Stack Web<br />Development
              </h3>
            </div>

            <div style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <p style={{ color: 'var(--c-yellow)', fontFamily: "'Fira Code', 'Courier New', monospace", textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Location
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', color: '#fff', fontWeight: 500 }}>
                Kolkata, India <span style={{ fontWeight: 800 }}>IN</span>
              </h3>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ color: 'var(--c-yellow)', fontFamily: "'Fira Code', 'Courier New', monospace", textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Availability
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', color: '#fff', fontWeight: 500 }}>
                Open to Freelance & Collab
              </h3>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
