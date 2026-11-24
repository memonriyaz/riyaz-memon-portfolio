import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Code, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  X,
  Layers,
  Sparkles
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'MERN Stack', 'Real-Time Systems', 'Fintech', 'Full Stack & Cloud'];

  const filteredProjects = filter === 'All' 
    ? RESUME_DATA.projects 
    : RESUME_DATA.projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Highlighted <span className="text-gradient-cyan">Projects &amp; Architectures</span>
          </h2>
          <p className="text-slate-400 text-base">
            Production-grade systems designed with scalability, real-time sync, and security in mind.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'bg-dark-850 hover:bg-dark-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-slate-800/90 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col group"
            >
              <div className="p-7 flex-1 flex flex-col">
                {/* Header row: Badge and Links */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-2.5 py-1 rounded-lg bg-dark-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-colors flex items-center gap-1.5"
                      title="Inspect System Architecture"
                    >
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Architecture</span>
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-dark-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-medium text-slate-400 mb-4">
                  {project.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Highlights Bullet points */}
                <div className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-dark-900 text-[11px] font-mono text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="glass-panel-glow max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/40 relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-dark-900 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-xs text-slate-400 mb-6">{selectedProject.subtitle}</p>

            <div className="space-y-4 mb-6">
              {selectedProject.architecture && Object.entries(selectedProject.architecture).map(([layer, desc]) => (
                <div key={layer} className="p-3.5 rounded-xl bg-dark-900/90 border border-slate-800">
                  <div className="text-xs font-mono uppercase font-bold text-cyan-300 mb-1">{layer} Layer</div>
                  <div className="text-xs text-slate-300">{desc}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">Architected by Riyaz Memon</span>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-medium text-xs flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Open in GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
