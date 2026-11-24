import React, { useState, useEffect, useRef } from 'react';
import { X, CornerDownLeft } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'macOS Terminal.app — riyaz@macbook-pro ~' },
    { text: 'Type "help" to view commands, or "projects", "skills", "contact".' },
    { text: '─'.repeat(45) },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const next = [...history, { isInput: true, text: cmd }];

    switch (trimmed) {
      case 'help':
        next.push({
          text: `Commands:
  skills     - View full technical stack
  projects   - Highlighted projects
  experience - Career trajectory
  education  - University & scores
  contact    - Email, phone, location
  clear      - Clear console
  exit       - Close window`
        });
        break;

      case 'skills':
        next.push({
          text: `Languages: TypeScript, JavaScript, Python, SQL
Frontend:  React.js, Tailwind CSS, Next.js, HTML5/CSS3
Backend:   Node.js, Express.js, NestJS, REST APIs, GraphQL
Databases: MongoDB, MySQL, Supabase
Fintech:   Razorpay, Cashfree, Easebuzz (HMAC Webhooks)
Systems:   AWS, Linux, Windows (CIS), WebSockets, SSE`
        });
        break;

      case 'projects':
        next.push({
          text: `1. WardWatch (MERN + SSE): Real-time hospital ward management with RBAC
2. ReServe (Next.js + Supabase): Top 105 in Google Solution Challenge 2025
3. DevTogether (React + Node + WebSockets): Collaborative coding terminal
4. Edviron (NestJS + MongoDB): Multi-gateway payment infrastructure`
        });
        break;

      case 'experience':
        next.push({
          text: `• Capgemini: Software Engineer (Sep 2026 – Present)
• Edviron: SDE Intern (Oct 2025 – Mar 2026)
• Pace Institute: Android App Intern (Jan 2023 – Jul 2023)
• CyberPoint Computers: Web Developer (Oct 2022 – Dec 2022)`
        });
        break;

      case 'education':
        next.push({
          text: `Don Bosco Institute of Technology (B.E. Comp) | CGPA: 9.3 / 10
Vivekanand Education Society's Polytechnic | Aggregate: 89.43%`
        });
        break;

      case 'contact':
        next.push({
          text: `Email:    memonriyazwork@gmail.com
Phone:    +91 9820757189
Location: Thane, Maharashtra, India
GitHub:   github.com/memonriyaz
LinkedIn: linkedin.com/in/riyaz-memon`
        });
        break;

      case 'exit':
        onClose();
        return;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        next.push({ text: `command not found: ${cmd}. Type "help".` });
    }

    setHistory(next);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl h-[440px] rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
        {/* macOS Window Title Bar */}
        <div className="h-9 px-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 flex items-center justify-center transition-opacity"
            />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[11px] text-zinc-400 font-medium">riyaz@macbook-pro: ~</div>
          <div className="w-10" />
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-1.5 text-zinc-300">
          {history.map((h, i) => (
            <div key={i} className={h.isInput ? 'text-zinc-100 flex items-center gap-1.5' : 'text-zinc-400 whitespace-pre-wrap'}>
              {h.isInput ? (
                <>
                  <span className="text-zinc-500">➜</span>
                  <span className="text-zinc-400">~</span>
                  <span>{h.text}</span>
                </>
              ) : (
                h.text
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Row */}
        <div className="p-3 bg-zinc-900/60 border-t border-zinc-800/80 flex items-center gap-2">
          <span className="text-zinc-500">➜</span>
          <span className="text-zinc-400">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCommand(input);
            }}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-zinc-600 font-mono text-xs"
          />
        </div>
      </div>
    </div>
  );
}
