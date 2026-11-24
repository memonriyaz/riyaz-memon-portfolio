import React, { useState } from 'react';
import { Github, ArrowUpRight, Cpu, X, Play, Zap } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedArch, setSelectedArch] = useState(null);

  const categories = ['All', 'MERN Stack', 'Real-Time', 'Fintech', 'Cloud'];

  const filteredProjects = filter === 'All'
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  const handleLaunchWorkbench = (projectId) => {
    let tab = 'fintech';
    if (projectId === 'wardwatch') tab = 'sse';
    if (projectId === 'devtogether') tab = 'collab';
    if (projectId === 'edviron-fintech') tab = 'fintech';

    window.dispatchEvent(new CustomEvent('switch-workbench-tab', { detail: tab }));
    document.getElementById('workbench')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Featured Work</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Projects
            </h2>
          </div>

          {/* Minimalist filter pills */}
          <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-zinc-800 self-start sm:self-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  filter === c ? 'apple-segment-active' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project, idx) => {
            const isLarge = idx === 0 && filter === 'All';
            const hasSimulator = ['wardwatch', 'devtogether', 'edviron-fintech'].includes(project.id);

            return (
              <div
                key={project.id}
                className={`apple-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Category Pill and Action Icons */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800">
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      {hasSimulator && (
                        <button
                          onClick={() => handleLaunchWorkbench(project.id)}
                          className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-mono font-medium"
                          title="Test in Interactive Workbench"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>Test Live</span>
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedArch(project)}
                        className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1 font-mono"
                        title="Architecture Blueprint"
                      >
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 text-zinc-400 hover:text-white transition-colors"
                        title="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs text-zinc-400 mb-4">{project.subtitle}</div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-zinc-400 flex items-start gap-2">
                        <span className="text-zinc-600 mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tags and Test Button */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-[10px] font-mono text-zinc-400 border border-zinc-800/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {hasSimulator && (
                    <button
                      onClick={() => handleLaunchWorkbench(project.id)}
                      className="shrink-0 text-xs text-white hover:text-zinc-300 font-medium flex items-center gap-1 group"
                    >
                      <span>Interactive Sim</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architecture Spec Modal */}
      {selectedArch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="apple-glass max-w-lg w-full rounded-2xl p-6 border border-white/10 relative shadow-2xl">
            <button
              onClick={() => setSelectedArch(null)}
              className="absolute top-5 right-5 p-1 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Architecture Blueprint</div>
            <h3 className="text-lg font-semibold text-white mb-4">{selectedArch.title}</h3>

            <div className="space-y-3 mb-6">
              {selectedArch.architecture && Object.entries(selectedArch.architecture).map(([layer, desc]) => (
                <div key={layer} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs">
                  <div className="font-mono text-[10px] text-zinc-400 uppercase font-semibold mb-0.5">{layer} Layer</div>
                  <div className="text-zinc-300">{desc}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs">
              <span className="text-zinc-500">Architected by Riyaz Memon</span>
              <a
                href={selectedArch.github}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline flex items-center gap-1"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
