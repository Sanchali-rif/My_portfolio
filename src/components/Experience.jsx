import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Social Media Manager",
      company: "SlashByte",
      link: "https://www.slashbyte.org/",
      points: [
        "Managed and created content for digital platforms",
        "Focused on visual communication and audience engagement"
      ]
    },
    {
      title: "Freelance Graphic Designer",
      company: "Self-Employed",
      link: null,
      points: [
        "Designed visual assets for clients",
        "Worked on branding, social media creatives, and digital designs",
        "Collaborated with clients on creative direction"
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: '7rem 2rem 2rem 2rem', color: 'var(--text-dark)' }}>
      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '2.5rem' }}
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
            Experience
          </span>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{
                borderLeft: '4px solid var(--c-yellow)',
                paddingLeft: '2rem',
                position: 'relative'
              }}
            >
              <h3 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.2rem', letterSpacing: '-1px', color: 'var(--text-dark)' }}>{exp.title}</h3>
              <p style={{ fontSize: '1.6rem', color: 'var(--c-pink)', fontWeight: 800, marginBottom: '0.5rem' }}>
                {exp.company}
                {exp.link && (
                 <a href={exp.link} target="_blank" rel="noreferrer" style={{ marginLeft: '12px', fontSize: '1.2rem', textDecoration: 'underline', fontWeight: 700 }}>View Site</a>
                )}
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.4rem', fontWeight: 600, lineHeight: 1.4, color: '#222' }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--c-red)', marginRight: '10px' }}>•</span>{point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
