import React from 'react';
import { RESUME_DATA } from '../data/resumeData';

export default function Achievements() {
  return (
    <section className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Academics</div>
            <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
              Education
            </h2>

            <div className="space-y-4">
              {RESUME_DATA.education.map((edu) => (
                <div key={edu.institution} className="apple-card rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-white text-sm">{edu.institution}</h3>
                    <span className="text-xs font-mono font-medium text-zinc-200 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 mb-2">{edu.degree} • <span className="font-mono text-zinc-500">{edu.period}</span></div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{edu.highlights}</p>
                </div>
              ))}
            </div>

            {/* AWS Credentials */}
            <div className="mt-6">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">AWS Credentials</div>
              <div className="space-y-2">
                {RESUME_DATA.certifications.map((c) => (
                  <div key={c.title} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                    <div className="font-medium text-white">{c.title}</div>
                    <div className="text-[11px] text-zinc-500">{c.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Honors & Hackathons */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Recognition</div>
            <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
              Honors &amp; Hackathons
            </h2>

            <div className="space-y-4">
              {RESUME_DATA.achievements.map((item) => (
                <div key={item.title} className="apple-card rounded-2xl p-5">
                  <div className="font-semibold text-white text-sm mb-0.5">{item.title}</div>
                  <div className="text-xs font-mono text-zinc-500 mb-2">{item.issuer}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
