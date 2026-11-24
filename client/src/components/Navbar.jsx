import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X, Code2, Sparkles, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Navbar({ onOpenTerminal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture Lab', href: '#architecture-lab' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-3 shadow-lg shadow-black/40 border-b border-slate-800' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 group-hover:text-white transition-colors">
                RM
              </div>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {RESUME_DATA.personal.name}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active Engineer @ Capgemini</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Terminal Launch Pill */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-slate-700/80 text-cyan-300 hover:text-cyan-200 text-xs font-mono transition-all hover:border-cyan-500/50 shadow-sm"
              title="Launch interactive DevTerm shell"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>DevTerm</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 rounded border border-slate-700 text-slate-400">Ctrl+`</kbd>
            </button>

            {/* Social Icons */}
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-xs hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-dark-850 border border-slate-700 text-cyan-400"
              title="Launch DevTerm"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex gap-3">
              <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-slate-400 hover:text-cyan-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              DevTerm Shell
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
