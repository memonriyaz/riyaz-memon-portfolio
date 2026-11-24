import React from 'react';
import { ArrowRight, Terminal, Download, Sparkles, Award, Cpu, ShieldCheck, Database, Layers } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Hero({ onOpenTerminal, onOpenResumeModal }) {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glowing blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850/80 border border-slate-700/80 text-xs text-slate-300 mb-8 backdrop-blur-md shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-emerald-400">Available for Opportunities</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Capgemini Software Engineer</span>
          </div>

          {/* Main Hero Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Engineering scalable <br className="hidden sm:block" />
            <span className="text-gradient-cyan">MERN Stack</span> &amp;{' '}
            <span className="text-gradient-emerald">Fintech Systems</span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            I'm <span className="text-white font-semibold">{RESUME_DATA.personal.name}</span>, a Software Engineer specialized in 
            building resilient full-stack web applications, real-time architectures with 
            <span className="text-cyan-400 font-mono text-base"> WebSockets/SSE</span>, and production payment integrations across 
            <span className="text-emerald-400 font-medium"> Razorpay</span>, 
            <span className="text-emerald-400 font-medium"> Cashfree</span>, and 
            <span className="text-emerald-400 font-medium"> Easebuzz</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#architecture-lab"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Cpu className="w-4 h-4" />
              <span>Explore Architecture Lab</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all hover:border-slate-500 flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>View Projects</span>
            </a>

            <button
              onClick={onOpenTerminal}
              className="px-5 py-3.5 rounded-xl bg-dark-850/90 hover:bg-dark-800 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center gap-2 transition-all hover:border-cyan-400 shadow-sm"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Open DevTerm</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="px-5 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Standout Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-left hover:border-cyan-500/40 transition-colors group">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1 group-hover:text-cyan-400 transition-colors">
                Academic Excellence
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">9.3 CGPA</div>
              <div className="text-xs text-slate-400 mt-1">Don Bosco Inst. of Tech (B.E.)</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-left hover:border-emerald-500/40 transition-colors group">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1 group-hover:text-emerald-400 transition-colors">
                Google Recognition
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Top 105</div>
              <div className="text-xs text-slate-400 mt-1">Google Solution Challenge '25</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-left hover:border-indigo-500/40 transition-colors group">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1 group-hover:text-indigo-400 transition-colors">
                Fintech Production
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">3 Gateways</div>
              <div className="text-xs text-slate-400 mt-1">Razorpay, Cashfree &amp; Easebuzz</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-left hover:border-purple-500/40 transition-colors group">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1 group-hover:text-purple-400 transition-colors">
                Cloud Foundations
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">AWS + CIS</div>
              <div className="text-xs text-slate-400 mt-1">Certified Architect &amp; CIS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
