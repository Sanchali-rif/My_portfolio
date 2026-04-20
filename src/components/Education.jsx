import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Education = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const educationList = [
    {
      school: "RCC Institute of Information Technology",
      degree: "B.Tech in Information Technology • 2nd Year",
      link: "https://www.google.com/search?gs_ssp=eJzj4tLP1TcwKivJyS43YPRiK0pOzswsAQBBDwZ5&q=rcciit&oq=rcc&gs_lcrp=EgZjaHJvbWUqDAgCEC4YJxiABBiKBTIHCAAQABiPAjIKCAEQLhixAxiABDIMCAIQLhgnGIAEGIoFMgcIAxAAGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMg0IBxAAGIMBGLEDGIAEMgcICBAAGIAEMgcICRAAGI8C0gEMODcwMTMxN2owajE1qAIIsAIB8QWoZXqwp6XnSA&sourceid=chrome&ie=UTF-8"
    },
    {
      school: "PM SHRI Kendriya Vidyalaya, Cossipore",
      degree: "High School Education",
      link: "https://www.google.com/search?q=pm+shri+kendriya+vidyalaya+cossipore&sca_esv=a3d84300357be008&biw=1639&bih=774&sxsrf=ANbL-n6p6mfkFdxcGfIMDvNwLxezF-QjSw%3A1776686368501&ei=IBXmaZScHtXiseMPlaPtsQI&gs_ssp=eJwNxskNgCAQAMD4NbEHHvqW9QRKsAuuVSIKQmK0e53XlFW7tgAaLn9q2GkhGvr0HBk32AEyGHCcBX1wVj0azifQSrLOLnU8SN6SI7s9TXKvJLczr_Tynw45uxiS_QDzIB25&oq=pm+shri+kendriya+vidyalaya+co&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXBtIHNocmkga2VuZHJpeWEgdmlkeWFsYXlhIGNvKgIIADIUEC4YgAQYkQIYxwEYigUYjgUYrwEyBRAAGIAEMgsQLhiABBjHARivATILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyIxAuGIAEGJECGMcBGIoFGI4FGK8BGJcFGNwEGN4EGOAE2AEBSIInUNsDWLobcAF4AZABAZgBkQKgAasSqgEFMC44LjS4AQHIAQD4AQGYAgqgAp4WwgIKEAAYsAMY1gQYR8ICFhAuGIAEGLADGEMYxwEYigUYjgUYrwHCAhMQLhiABBjHARgnGIoFGI4FGK8BwgILEAAYgAQYhgMYigXCAggQABiABBiiBMICBRAAGO8FwgIgEC4YgAQYxwEYigUYjgUYrwEYlwUY3AQY3gQY4ATYAQHCAg4QLhiABBjHARiOBRivAZgDAIgGAZAGCboGBggBEAEYFJIHCTEuMy41LjctMaAHqr8CsgcFMC4zLjW4B4wNwgcHMC4xLjIuN8gHVYAIAA&sclient=gws-wiz-serp"
    }
  ];

  return (
    <section id="education" style={{ padding: '3rem 2rem 2rem 2rem', color: 'var(--text-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative left-side background gradient (Light Yellow & Orange Mix) */}
      <motion.div style={{ position: 'absolute', top: '-10%', left: '-15%', width: '50vw', height: '50vw', background: 'linear-gradient(135deg, rgba(255, 235, 130, 0.7), rgba(255, 180, 80, 0.5))', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, opacity: 0.6, y: yPos }} />

      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            Education
          </span>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {educationList.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{
                border: '4px solid var(--c-yellow)',
                padding: '2rem',
                borderRadius: '8px',
                position: 'relative',
                background: 'transparent',
                boxShadow: '10px 10px 0 var(--c-red)'
              }}
            >
              <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.2rem', letterSpacing: '-1px', color: 'var(--text-dark)', lineHeight: 1.1 }}>
                {edu.link ? (
                  <a href={edu.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    {edu.school}
                  </a>
                ) : (
                  edu.school
                )}
              </h3>
              <p style={{ fontSize: '1.4rem', color: 'var(--c-pink)', fontWeight: 800, marginBottom: '0.5rem' }}>
                {edu.degree}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
