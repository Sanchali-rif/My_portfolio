import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiPython, SiC, SiHtml5, SiCss, SiTailwindcss, SiMysql, SiFirebase, SiFigma, SiFramer, SiCanva, SiAffinity, SiGit, SiGithub, SiVercel, SiRender } from 'react-icons/si';
import { FaJava, FaReact, FaPaintBrush } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { TbBox } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: [
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Java", icon: <FaJava color="#5382a1" /> },
        { name: "C", icon: <SiC color="#A8B9CC" /> },
        { name: "React.js", icon: <FaReact color="#61DAFB" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss color="#1572B6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> }
      ]
    },
    {
      title: "Design & Creative",
      skills: [
        { name: "UI/UX Design", icon: <MdDesignServices color="#FF4081" /> },
        { name: "Graphic Design", icon: <FaPaintBrush color="#E040FB" /> },
        { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
        { name: "Framer", icon: <SiFramer color="#0055FF" /> },
        { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
        { name: "Affinity", icon: <SiAffinity color="#1E1E1E" /> },
        { name: "Spline (3D)", icon: <TbBox color="#737373" /> }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "GitHub", icon: <SiGithub color="#181717" /> },
        { name: "Vercel", icon: <SiVercel color="#000000" /> },
        { name: "Render", icon: <SiRender color="#46E3B7" /> }
      ]
    }
  ];

  return (
    <section id="skills" style={{ padding: '3rem 2rem 2rem 2rem', display: 'flex', justifyContent: 'center', width: '100%', color: 'var(--text-dark)', position: 'relative', zIndex: 2 }}>
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
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
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
                    <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.1rem' }}>
                      {skill.icon}
                    </span>
                    {skill.name}
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
