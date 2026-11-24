import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs">
              RM
            </div>
            <div>
              <div className="font-bold text-white text-sm">{RESUME_DATA.personal.name}</div>
              <div className="text-xs text-slate-500 font-mono">Full-Stack MERN Architecture</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Riyaz Memon. Engineered with React, Express, Node.js &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
