import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArchitectureSimulator from './components/ArchitectureSimulator';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Shortcut key: Ctrl + ` or Cmd + ` toggles DevTerm
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      
      <main className="flex-1">
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResumeModal={() => setResumeOpen(true)}
        />
        
        {/* Systems & Architecture Workbench (commented for future re-enablement) */}
        {/* <ArchitectureSimulator /> */}
        
        <Projects />
        
        <SkillsMatrix />
        
        <Experience />
        
        <Achievements />
        
        <Contact />
      </main>

      <Footer />

      {/* Interactive Terminal Shell Modal */}
      <TerminalModal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />

      {/* Printable Resume Document Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}
