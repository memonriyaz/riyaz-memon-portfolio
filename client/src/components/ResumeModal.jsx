import React from 'react';
import { X, Download, Printer, ExternalLink, Award, Building2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="glass-panel-glow max-w-4xl w-full max-h-[90vh] rounded-3xl border border-cyan-500/40 flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-dark-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-bold text-white text-base">Riyaz Memon - Resume Document</div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
              Verified
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 hover:text-white text-xs flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto space-y-8 bg-dark-950 text-slate-200 text-xs">
          {/* Header row */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{RESUME_DATA.personal.name}</h1>
              <p className="text-cyan-400 font-medium text-sm mt-0.5">{RESUME_DATA.personal.title}</p>
              <p className="text-slate-400 text-xs mt-1">
                {RESUME_DATA.personal.location} • {RESUME_DATA.personal.phone} • {RESUME_DATA.personal.email}
              </p>
            </div>
            <div className="flex flex-col gap-1 text-right text-xs text-slate-400 font-mono">
              <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                linkedin.com/in/riyaz-memon
              </a>
              <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">
                github.com/memonriyaz
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">Profile Summary</h2>
            <p className="text-slate-300 leading-relaxed text-xs">{RESUME_DATA.summary}</p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">Work Experience</h2>
            <div className="space-y-4">
              {RESUME_DATA.experience.map((exp) => (
                <div key={exp.company} className="border-l-2 border-slate-800 pl-4 py-1">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{exp.role} | {exp.company}</span>
                    <span className="font-mono text-[11px] text-slate-400 font-normal">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">Key Projects</h2>
            <div className="space-y-3">
              {RESUME_DATA.projects.map((proj) => (
                <div key={proj.id} className="border-l-2 border-slate-800 pl-4 py-1">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{proj.title}</span>
                    <span className="text-[11px] font-mono text-cyan-400 font-normal">{proj.tags.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="text-slate-300 mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">Education</h2>
            <div className="space-y-2">
              {RESUME_DATA.education.map((edu) => (
                <div key={edu.institution} className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white">{edu.degree}</span> | {edu.institution}
                  </div>
                  <div className="font-mono text-cyan-400 font-semibold">{edu.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">Achievements &amp; Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <div>• Top 10 – ColoHacks 2026</div>
              <div>• Top 105 – Google Solution Challenge 2025</div>
              <div>• AWS Academy Graduate – Cloud Foundations</div>
              <div>• AWS Academy Graduate – Cloud Architecting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
