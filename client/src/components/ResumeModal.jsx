import React from 'react';
import { X, Printer } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="apple-glass max-w-3xl w-full max-h-[88vh] rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-2xl">
        {/* Title Bar */}
        <div className="px-6 py-3.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="text-xs font-medium text-zinc-300">Riyaz_Memon_Resume.pdf</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto space-y-6 text-xs text-zinc-300 leading-relaxed bg-zinc-950 font-sans">
          <div className="border-b border-zinc-800 pb-5">
            <h1 className="text-2xl font-bold text-white tracking-tight">{RESUME_DATA.personal.name}</h1>
            <p className="text-zinc-400 mt-0.5">{RESUME_DATA.personal.title}</p>
            <p className="text-zinc-500 text-[11px] mt-1">
              {RESUME_DATA.personal.email} • {RESUME_DATA.personal.phone} • {RESUME_DATA.personal.location}
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase text-zinc-500 font-semibold mb-1">Profile</div>
            <p className="text-zinc-400">{RESUME_DATA.summary}</p>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase text-zinc-500 font-semibold mb-2">Experience</div>
            <div className="space-y-3">
              {RESUME_DATA.experience.map((e) => (
                <div key={e.company} className="border-l border-zinc-800 pl-3">
                  <div className="font-semibold text-white">{e.role} — {e.company} <span className="font-normal font-mono text-zinc-500 text-[11px]">({e.period})</span></div>
                  <ul className="mt-1 text-zinc-400 space-y-0.5">
                    {e.highlights.map((h, idx) => (
                      <li key={idx}>• {h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase text-zinc-500 font-semibold mb-2">Projects</div>
            <div className="space-y-2">
              {RESUME_DATA.projects.map((p) => (
                <div key={p.id}>
                  <span className="font-semibold text-white">{p.title}</span>: <span className="text-zinc-400">{p.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase text-zinc-500 font-semibold mb-2">Education &amp; Honors</div>
            <div className="space-y-1 text-zinc-400">
              <div>• Don Bosco Institute of Technology — B.E. Computer Engineering (CGPA: 9.3 / 10)</div>
              <div>• Vivekanand Education Society's Polytechnic — Diploma in Computer Engineering (89.43%)</div>
              <div>• Top 105 Nationally — Google Solution Challenge 2025</div>
              <div>• AWS Academy Graduate — Cloud Foundations &amp; Architecting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
