import React from 'react';
import { Award, GraduationCap, CheckCircle, Trophy, BookOpen, Cloud } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Achievements() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education & Certifications */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Education &amp; <span className="text-gradient-cyan">Certifications</span>
            </h2>

            {/* Education Cards */}
            <div className="space-y-4 mb-8">
              {RESUME_DATA.education.map((edu) => (
                <div key={edu.institution} className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white text-base">{edu.institution}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">{edu.degree} • <span className="font-mono text-slate-500">{edu.period}</span></div>
                  <p className="text-xs text-slate-300 leading-relaxed">{edu.highlights}</p>
                </div>
              ))}
            </div>

            {/* AWS Certifications */}
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Cloud className="w-4 h-4 text-amber-400" />
              <span>AWS Academy Credentials</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESUME_DATA.certifications.map((cert) => (
                <div key={cert.title} className="p-4 rounded-xl bg-dark-850 border border-slate-800 text-xs">
                  <div className="font-bold text-amber-300 mb-1">{cert.title}</div>
                  <div className="text-[11px] text-slate-400 mb-1">{cert.issuer}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{cert.skills}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Recognition */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>National Honors</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Hackathons &amp; <span className="text-gradient-amber">Achievements</span>
            </h2>

            <div className="space-y-4">
              {RESUME_DATA.achievements.map((item, idx) => (
                <div key={item.title} className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <div className="text-xs font-mono text-amber-400/90 mb-2">{item.issuer}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
