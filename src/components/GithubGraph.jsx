import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { useEffect, useState } from 'react';

export default function GithubGraph() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const brutalistTheme = {
    light: ['#EBE9E1', '#FFA2B6', '#EFB11D', '#D6536D', '#E43D12'],
    dark: ['#1F1F1F', '#FFA2B6', '#EFB11D', '#D6536D', '#E43D12'],
  };

  return (
    <section id="github-stats" style={{ padding: '4rem 2rem', color: 'var(--text-dark)' }}>
      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '4rem' }}
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
            Git Contributions
          </span>
        </motion.div>

        {/* Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background border-[4px] border-[var(--border-color)] p-6 md:p-10 shadow-[8px_8px_0px_var(--border-color)] hover:shadow-[12px_12px_0px_var(--primary)] transition-all duration-300 w-full max-w-6xl mx-auto flex justify-center items-center"
        >
          <div className="w-full flex justify-center overflow-x-auto pb-4 custom-scrollbar">
            <div className="inline-flex justify-center items-center mx-auto mt-2 px-4 w-fit">
              <GitHubCalendar
                username="Sanchali-rif"
                year={new Date().getFullYear()}
                blockSize={20}
                blockMargin={6}
                theme={brutalistTheme}
                style={{
                  color: 'inherit',
                  fontFamily: 'inherit',
                  fontWeight: 'bold',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}