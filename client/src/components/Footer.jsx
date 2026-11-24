import React from 'react';
import { RESUME_DATA } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 py-10 bg-black text-xs text-zinc-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© {new Date().getFullYear()} Riyaz Memon. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
            GitHub
          </a>
          <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${RESUME_DATA.personal.email}`} className="hover:text-zinc-300 transition-colors">
            Email
          </a>
          <button onClick={scrollToTop} className="hover:text-zinc-300 transition-colors">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
