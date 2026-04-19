import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: ["JavaScript", "Python", "Java", "C", "React.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["MySQL", "Firebase"]
    },
    {
      title: "Design & Creative",
      skills: ["UI/UX Design", "Graphic Design", "Figma", "Framer", "Canva", "Affinity", "Spline (3D)"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Render"]
    }
  ];

  return (
    <section id="skills" style={{ padding: '7rem 2rem 2rem 2rem', display: 'flex', justifyContent: 'center', width: '100%', color: 'var(--text-dark)', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
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
            Technical Arsenal
          </span>
        </div>

        {/* Categories Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              style={{
                background: 'transparent',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '10px 10px 0 var(--c-red)',
                position: 'relative',
                border: '4px solid var(--c-yellow)'
              }}
            >

              <h3 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '1.6rem', 
                color: 'var(--text-dark)', 
                fontWeight: 900, 
                textTransform: 'uppercase',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(0,0,0,0.1)',
                paddingBottom: '0.5rem'
              }}>
                {category.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{
                    padding: '0.4rem 0.8rem',
                    color: 'var(--text-dark)',
                    fontFamily: "'Fira Code', 'Courier New', monospace",
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    backgroundColor: '#fff',
                    border: '2px solid var(--c-pink)',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--c-pink)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = 'var(--text-dark)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
