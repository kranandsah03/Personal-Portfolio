import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-950 text-gray-200 overflow-x-hidden">
      {/* Subtle global background radial gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent-indigo/5 rounded-full blur-[120px]" />
      </div>

      {/* Components */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Interests />
        <Terminal />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
