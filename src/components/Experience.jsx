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
    <section id="experience" style={{ padding: '8rem 2rem', color: 'var(--text-dark)' }}>
      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="title-cursive" 
          style={{ marginBottom: '4rem', color: 'var(--text-dark)' }}
        >
          Experience
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
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
              <h3 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{exp.title}</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--c-pink)', fontWeight: 600, marginBottom: '1.5rem' }}>
                {exp.company}
                {exp.link && (
                 <a href={exp.link} target="_blank" rel="noreferrer" style={{ marginLeft: '10px', fontSize: '1rem', textDecoration: 'underline' }}>View Site</a>
                )}
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2rem', lineHeight: 1.6 }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.8rem' }}>
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
