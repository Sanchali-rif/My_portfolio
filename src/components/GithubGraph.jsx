import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubGraph = () => {
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2 className="title-sans" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--c-yellow)' }}>GitHub Contributions</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GitHubCalendar
          username="Sanchali-rif"
          colorScheme="dark"
        />
      </div>
    </section>
  );
};

export default GithubGraph;
