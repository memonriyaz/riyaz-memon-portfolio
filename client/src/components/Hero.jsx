import React from 'react';
import { ArrowDown, Terminal, FileText, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Hero({ onOpenTerminal, onOpenResumeModal }) {
  return (
    <section id="overview" className="pt-36 pb-20 md:pt-44 md:pb-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Understated Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-8 tracking-tight">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Software Engineer at Capgemini</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">Mumbai / Thane</span>
        </div>

        {/* Clean, Decisive Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
          Crafting resilient <br />
          <span className="text-zinc-400 font-normal">full-stack web products.</span>
        </h1>

        {/* Crisp Narrative Bio */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 tracking-tight font-normal">
          Hi, I’m <span className="text-zinc-200 font-medium">Riyaz Memon</span>. I design and build full-stack web applications, 
          real-time systems using WebSockets and Server-Sent Events, and reliable payment workflows across 
          Razorpay, Cashfree, and Easebuzz.
        </p>

        {/* Refined Apple-Style Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 font-medium text-xs tracking-tight transition-all"
          >
            Explore Projects
          </a>

          <a
            href="#workbench"
            className="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-medium text-xs tracking-tight transition-all"
          >
            Interactive Workbench
          </a>

          <button
            onClick={onOpenTerminal}
            className="px-4 py-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800/80 font-mono text-xs transition-all flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>DevTerm</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="px-4 py-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800/80 font-normal text-xs transition-all flex items-center gap-1.5 tracking-tight"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Minimal Bento Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="apple-card p-4 rounded-2xl text-left">
            <div className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider mb-1">Academics</div>
            <div className="text-2xl font-semibold text-white tracking-tight">9.3 CGPA</div>
            <div className="text-xs text-zinc-400 mt-0.5">Don Bosco (B.E. Comp)</div>
          </div>

          <div className="apple-card p-4 rounded-2xl text-left">
            <div className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider mb-1">Recognition</div>
            <div className="text-2xl font-semibold text-white tracking-tight">Top 105</div>
            <div className="text-xs text-zinc-400 mt-0.5">Google Solution Challenge</div>
          </div>

          <div className="apple-card p-4 rounded-2xl text-left">
            <div className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider mb-1">Fintech</div>
            <div className="text-2xl font-semibold text-white tracking-tight">3 Gateways</div>
            <div className="text-xs text-zinc-400 mt-0.5">Production at Edviron</div>
          </div>

          <div className="apple-card p-4 rounded-2xl text-left">
            <div className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider mb-1">Systems</div>
            <div className="text-2xl font-semibold text-white tracking-tight">Cloud &amp; CIS</div>
            <div className="text-xs text-zinc-400 mt-0.5">AWS &amp; Linux Training</div>
          </div>
        </div>
      </div>
    </section>
  );
}
