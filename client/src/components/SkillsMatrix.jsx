import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  CreditCard, 
  Radio, 
  Cloud, 
  Terminal, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'frontend', name: 'Frontend & UI' },
    { id: 'backend', name: 'Backend & APIs' },
    { id: 'databases', name: 'Databases' },
    { id: 'fintech', name: 'Fintech & Payments' },
    { id: 'realtime', name: 'Real-Time & Security' },
    { id: 'cloud', name: 'Cloud & Systems' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Full-Stack <span className="text-gradient-emerald">Skills Matrix</span>
          </h2>
          <p className="text-slate-400 text-base">
            From MERN web apps to distributed payment architectures and low-level Linux troubleshooting.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-md shadow-emerald-500/20'
                  : 'glass-panel text-slate-400 hover:text-white border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          {(activeCategory === 'all' || activeCategory === 'frontend') && (
            <div className="glass-panel p-6 rounded-3xl border border-slate-800/90 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Frontend Engineering</h3>
                  <p className="text-xs text-slate-400">Modern, reactive web interfaces</p>
                </div>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.skills.frontend.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2.5 rounded-xl bg-dark-900/70 border border-slate-800/70 text-xs">
                    <span className="font-medium text-slate-200">{item.name}</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono text-[10px]">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backend */}
          {(activeCategory === 'all' || activeCategory === 'backend') && (
            <div className="glass-panel p-6 rounded-3xl border border-slate-800/90 hover:border-indigo-500/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Backend &amp; Microservices</h3>
                  <p className="text-xs text-slate-400">Scalable RESTful &amp; GraphQL APIs</p>
                </div>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.skills.backend.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2.5 rounded-xl bg-dark-900/70 border border-slate-800/70 text-xs">
                    <span className="font-medium text-slate-200">{item.name}</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono text-[10px]">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fintech & Payments */}
          {(activeCategory === 'all' || activeCategory === 'fintech') && (
            <div className="glass-panel p-6 rounded-3xl border border-slate-800/90 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Fintech &amp; Payment Gateways</h3>
                  <p className="text-xs text-slate-400">Production payment integrations</p>
                </div>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.skills.fintech.map((item) => (
                  <div key={item.name} className="p-3 rounded-xl bg-dark-900/70 border border-slate-800/70 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-emerald-300">{item.name}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                        {item.level}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Databases */}
          {(activeCategory === 'all' || activeCategory === 'databases') && (
            <div className="glass-panel p-6 rounded-3xl border border-slate-800/90 hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Databases &amp; Storage</h3>
                  <p className="text-xs text-slate-400">Data persistence &amp; transactions</p>
                </div>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.skills.databases.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2.5 rounded-xl bg-dark-900/70 border border-slate-800/70 text-xs">
                    <span className="font-medium text-slate-200">{item.name}</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono text-[10px]">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real-Time & Security */}
          {(activeCategory === 'all' || activeCategory === 'realtime') && (
            <div className="glass-panel p-6 rounded-3xl border border-slate-800/90 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Real-Time &amp; Security</h3>
                  <p className="text-xs text-slate-400">Bidirectional events &amp; RBAC</p>
                </div>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.skills.realtimeSecurity.map((item) => (
                  <div key={item.name} className="p-2.5 rounded-xl bg-dark-900/70 border border-slate-800/70 text-xs">
                    <div className="font-bold text-purple-300">{item.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cloud & Systems */}
          {(activeCategory === 'all' || activeCategory === 'cloud') && (
            <div className="glass-panel p-6 rounded-3xl border border-slate-800/90 hover:border-blue-500/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Cloud, OS &amp; Systems</h3>
                  <p className="text-xs text-slate-400">AWS, Linux, Windows &amp; CIS</p>
                </div>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.skills.cloudDevOps.map((item) => (
                  <div key={item.name} className="p-2.5 rounded-xl bg-dark-900/70 border border-slate-800/70 text-xs">
                    <div className="font-bold text-blue-300">{item.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
