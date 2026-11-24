import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="text-gradient-cyan">Work Experience</span>
          </h2>
          <p className="text-slate-400 text-base">
            Track record of shipping production code across enterprise infrastructure, fintech startups, and agile teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent">
          {RESUME_DATA.experience.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-6 md:gap-12`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-4 w-6 h-6 rounded-full bg-dark-900 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/40">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>

                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <div className="glass-panel p-7 rounded-3xl border border-slate-800/90 hover:border-cyan-500/40 transition-all group">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {exp.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                      <Building2 className="w-4 h-4 text-slate-500" />
                      <span className="font-semibold text-slate-300">{exp.company}</span>
                      {exp.subtitle && <span className="text-xs text-slate-500">({exp.subtitle})</span>}
                      <span>•</span>
                      <span className="text-xs">{exp.location}</span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                      {exp.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-dark-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
