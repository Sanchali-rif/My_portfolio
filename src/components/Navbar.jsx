import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { name: 'About me', href: '#about' },
    { name: 'Project', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        right: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      {/* Brand / Logo (matching reference) */}
      <a 
        href="#"
        style={{ 
          fontSize: '2rem', 
          margin: 0, 
          color: 'var(--c-red)',
          lineHeight: 1,
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          border: '3px solid var(--c-red)',
          padding: '0.4rem 0.6rem',
          borderRadius: '12px',
          display: 'inline-block'
        }}
      >
        ss.
      </a>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', gap: '2rem' }}>
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.href}
            style={{ 
              fontWeight: 800, 
              fontSize: '1.2rem', 
              color: 'var(--c-red)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar;
