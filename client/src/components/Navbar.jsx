import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
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
    { name: 'Overview', href: '#overview' },
    // { name: 'Workbench', href: '#workbench' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 pt-4 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <nav className={`apple-glass rounded-full px-5 py-2.5 transition-all duration-300 flex items-center justify-between shadow-2xl ${
          isScrolled ? 'border-white/10 bg-black/80' : 'border-white/[0.08] bg-black/60'
        }`}>
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-7 h-7 rounded-full bg-white text-black font-semibold text-xs flex items-center justify-center tracking-tight transition-transform duration-200 group-hover:scale-105">
              RM
            </span>
            <span className="text-sm font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
              Riyaz Memon
            </span>
          </a>

          {/* Center Navigation Links (Apple Clean Style) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-normal text-zinc-400 hover:text-white transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenTerminal}
              className="px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5"
              title="Open Terminal (Ctrl + `)"
            >
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              <span>Terminal</span>
            </button>

            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-colors tracking-tight"
            >
              Connect
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-1.5 text-zinc-400 hover:text-white"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 apple-glass rounded-2xl p-4 border border-white/10 sm:hidden space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-zinc-300 hover:text-white tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex gap-3">
                <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                  <Github className="w-4 h-4" />
                </a>
                <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1 rounded-full bg-white text-black text-xs font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
