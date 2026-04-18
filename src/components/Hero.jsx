import React from 'react';
import { motion } from 'framer-motion';
import CurvedLoop from './CurvedLoop';

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '6rem',
      overflow: 'hidden'
    }}>

      {/* Background Giant Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: '6%', // ⛔ unchanged (keep as is)
          fontSize: 'clamp(8rem, 25vw, 15rem)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 900,
          color: 'var(--c-red)',
          lineHeight: 0.8,
          zIndex: 1,
          whiteSpace: 'nowrap',
          letterSpacing: '-2px'
        }}
      >
        HI! I'M
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          width: '320px',
          height: '320px',
          borderRadius: '40px',
          overflow: 'hidden',
          zIndex: 1,
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          marginTop: '5rem' // 👈 moved image DOWN
        }}
      >
        <img
          src="/profile.png"
          alt="Sanchali Saha Profile"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          position: 'relative',
          marginTop: '-30px', // moved name UP (overlap)
          zIndex: 2
        }}
      >
        <h1 style={{
          fontSize: 'clamp(5rem, 18vw, 12rem)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 900,
          color: 'var(--c-red)',
          textTransform: 'uppercase',
          lineHeight: 0.8,
          margin: 0,
          textShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}>
          Sanchali
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          marginTop: '-1rem', // 👈 slightly reduced space above subtitles
          textAlign: 'center',
          maxWidth: '800px',
          padding: '0 2rem',
          zIndex: 2
        }}
      >
        <p style={{
          fontSize: '1.4rem',
          fontWeight: 600,
          color: 'var(--text-dark)',
          marginBottom: '0.2rem' // 👈 reduced gap between subtitles
        }}>
          Frontend Developer • UI/UX Designer • Creative Technologist
        </p>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-dark)',
          opacity: 0.8,
          margin: 0 // 👈 remove extra space
        }}>
          Crafting digital experiences at the intersection of design, motion, and technology.
        </p>
      </motion.div>

      <CurvedLoop marqueeText="PIXELS ✦ MOTION ✦ LOGIC ✦ CHAOS ✦ CRAFT" />

    </section>
  );
};

export default Hero;