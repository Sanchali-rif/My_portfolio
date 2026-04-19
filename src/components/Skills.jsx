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
    <section id="skills" style={{ padding: '8rem 2rem', display: 'flex', justifyContent: 'center', width: '100%', color: 'var(--text-dark)', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4rem' }}>
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
          gap: '2.5rem' 
        }}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              style={{
                background: '#191717',
                padding: '2.5rem 2rem',
                clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
                boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                position: 'relative',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {/* Accent bar */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '3px', 
                background: 'linear-gradient(90deg, var(--c-red, #E43D12), #5eb3ad)' 
              }}></div>

              <h3 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '1.8rem', 
                color: '#fff', 
                fontWeight: 500, 
                marginBottom: '1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: '1rem'
              }}>
                {category.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{
                    padding: '0.6rem 1.2rem',
                    color: '#fff',
                    fontFamily: "'Fira Code', 'Courier New', monospace",
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    backgroundColor: 'rgba(228, 61, 18, 0.15)',
                    border: '2px solid var(--c-red, #E43D12)',
                    boxShadow: '0 0 12px rgba(228, 61, 18, 0.3)',
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--c-red, #E43D12)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 25px rgba(228, 61, 18, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(228, 61, 18, 0.15)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(228, 61, 18, 0.3)';
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
