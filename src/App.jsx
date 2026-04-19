import React from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ShapeGrid from './components/ShapeGrid';

function App() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <ShapeGrid borderColor="rgba(228, 61, 18, 0.2)" hoverFillColor="#E43D12" />
      </div>
      <Navbar />
      <Cursor />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
