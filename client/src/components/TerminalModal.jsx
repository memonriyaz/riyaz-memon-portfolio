import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESUME_DATA } from '../data/resumeData';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: '⚡ RiyazOS Interactive DevTerm [Version 2.4.0]' },
    { type: 'output', text: 'Type "help" to see available commands or "sudo hire" to trigger hiring pipeline.' },
    { type: 'output', text: '────────────────────────────────────────────────────────────' },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: cmdText }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help         - Show this help menu
  skills       - View full-stack technical competencies
  projects     - List featured production & hackathon projects
  experience   - Display career milestones & roles
  education    - Show academic degree & CGPA
  contact      - Get direct contact info (Email, Phone, LinkedIn)
  cat resume   - Display quick text resume
  sudo hire    - Fast-track hiring Riyaz Memon (triggers celebration!)
  clear        - Clear terminal screen
  whoami       - Current user session info
  date         - Current local date & time`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[LANGUAGES]: TypeScript, JavaScript, Python, SQL
[FRONTEND]:  React.js, Tailwind CSS, HTML5, CSS3, Responsive UI
[BACKEND]:   Node.js, Express.js, NestJS, RESTful APIs, GraphQL
[DATABASES]: MongoDB, MySQL, Supabase
[FINTECH]:   Razorpay, Cashfree, Easebuzz (Webhook HMAC checks)
[REAL-TIME]: WebSockets, Server-Sent Events (SSE), JWT, RBAC
[SYSTEMS]:   AWS, Linux, Windows (CIS), Networking Core, Git`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `1. WardWatch Clinical System
   • MERN Stack + SSE + Tailwind CSS + MongoDB + JWT RBAC
   • Real-time hospital ward bed availability stream

2. ReServe – Food Redistribution Platform
   • Next.js + Supabase + Google Cloud + AI Prediction
   • Selected Top 105 in Google Solution Challenge 2025!

3. DevTogether – Collaborative Coding Platform
   • React.js + Node.js + WebSockets + Shared Terminal

4. Edviron Production Fintech Architecture
   • NestJS + TypeScript + MongoDB + Razorpay/Cashfree/Easebuzz`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `[Sep 2026 – Present] Software Engineer @ Capgemini (CIS Training, Linux, Networking)
[Oct 2025 – Mar 2026] SDE Intern @ Edviron (Fintech, NestJS, MongoDB, 3 Payment Gateways)
[Jan 2023 – Jul 2023] Android App Intern @ Pace Institute (Firebase, MCQs, Video Learning)
[Oct 2022 – Dec 2022] Freelance Web Developer @ CyberPoint Computers (AWS Storefront)`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `🎓 Don Bosco Institute of Technology (DBIT)
   • B.E. in Computer Engineering (2023 – 2026)
   • CGPA: 9.3 / 10

🎓 Vivekanand Education Society's Polytechnic
   • Diploma in Computer Engineering (2020 – 2023)
   • Aggregate: 89.43%`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `📧 Email:    memonriyazwork@gmail.com
📱 Phone:    +91 9820757189
📍 Location: Thane, Maharashtra, India
💼 LinkedIn: https://linkedin.com/in/riyaz-memon
🐙 GitHub:   https://github.com/memonriyaz`
        });
        break;

      case 'cat resume':
      case 'cat resume.txt':
        newHistory.push({
          type: 'output',
          text: `=== RIYAZ MEMON - SOFTWARE ENGINEER ===
Summary: Full-stack engineer experienced in MERN stack, NestJS, real-time systems (SSE, WebSockets), and fintech payment integrations (Razorpay, Cashfree, Easebuzz).
Current: Capgemini (Software Engineer)
Contact: memonriyazwork@gmail.com | +91 9820757189`
        });
        break;

      case 'sudo hire':
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (e) {}
        navigator.clipboard?.writeText('memonriyazwork@gmail.com');
        newHistory.push({
          type: 'output',
          text: `🎉 EXCELLENT DECISION!
[OFFER PIPELINE INITIATED]
Email copied to clipboard: memonriyazwork@gmail.com
Direct line: +91 9820757189
Riyaz is ready to ship high-impact code for your engineering team!`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'recruiter@talent-workstation [Permissions: sudo allowed]'
        });
        break;

      case 'date':
        newHistory.push({
          type: 'output',
          text: new Date().toString()
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not found: "${cmdText}". Type "help" for a list of valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="glass-panel-glow max-w-3xl w-full h-[520px] rounded-3xl border border-cyan-500/50 flex flex-col overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-dark-900/90 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 font-mono text-xs text-slate-300 font-bold flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>riyaz-memon@devterm:~</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500">Press ESC or click X to close</span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-5 font-mono text-xs overflow-y-auto space-y-2 text-slate-300 bg-dark-950/90">
          {history.map((item, idx) => (
            <div key={idx} className={item.type === 'input' ? 'text-cyan-300 font-semibold' : 'text-slate-300 whitespace-pre-wrap'}>
              {item.type === 'input' ? (
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-purple-400 font-mono">riyaz-os</span>
                  <span className="text-slate-400">$</span>
                  <span>{item.text}</span>
                </div>
              ) : (
                item.text
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Command Input */}
        <div className="bg-dark-900/90 px-5 py-3 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-xs font-bold">➜</span>
          <span className="text-purple-400 font-mono text-xs font-bold">riyaz-os</span>
          <span className="text-slate-400 font-mono text-xs">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCommand(inputVal);
              }
            }}
            placeholder="Type 'help', 'skills', 'projects', 'sudo hire'..."
            className="flex-1 bg-transparent border-none text-xs font-mono text-white focus:outline-none placeholder-slate-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono flex items-center gap-1"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
