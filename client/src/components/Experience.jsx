import React from 'react';
import { RESUME_DATA } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Career History</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Work Experience
          </h2>
          <p className="text-sm text-zinc-400">
            Engineering background spanning enterprise infrastructure at Capgemini, fintech APIs at Edviron, and mobile development.
          </p>
        </div>

        {/* Minimalist Chronological List */}
        <div className="space-y-6">
          {RESUME_DATA.experience.map((exp) => (
            <div key={exp.company} className="apple-card rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white tracking-tight">{exp.role}</h3>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-300 font-medium">{exp.company}</span>
                </div>
                <div className="text-xs font-mono text-zinc-500">{exp.period}</div>
              </div>

              <div className="text-xs text-zinc-400 mb-4">
                {exp.location} {exp.subtitle && `• ${exp.subtitle}`}
              </div>

              <ul className="space-y-2 mb-5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-start gap-2">
                    <span className="text-zinc-600 mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
