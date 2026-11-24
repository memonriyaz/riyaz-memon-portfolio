import React from 'react';
import { RESUME_DATA } from '../data/resumeData';

export default function SkillsMatrix() {
  const sections = [
    {
      title: 'Languages & Core',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'SQL', 'HTML5 & CSS3']
    },
    {
      title: 'Frontend Engineering',
      skills: ['React.js', 'Tailwind CSS', 'Responsive UI/UX', 'Next.js', 'Component Architecture']
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Fintech & Payment Integrations',
      skills: ['Razorpay', 'Cashfree', 'Easebuzz', 'HMAC SHA-256 Webhooks', 'Idempotency Guarantees']
    },
    {
      title: 'Databases & Storage',
      skills: ['MongoDB (Mongoose)', 'MySQL', 'Supabase', 'PostgreSQL']
    },
    {
      title: 'Real-Time & Security',
      skills: ['WebSockets', 'Server-Sent Events (SSE)', 'JWT Authentication', 'RBAC (Role-Based Access)']
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS (Academy Graduate)', 'Linux Administration', 'Windows Server', 'Networking Core (TCP/IP, DNS)', 'Git & GitHub']
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Technical Profile</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm text-zinc-400">
            Core competencies across full-stack web development, fintech integrations, real-time protocols, and systems infrastructure.
          </p>
        </div>

        {/* Clean Apple Specification List */}
        <div className="apple-card rounded-2xl divide-y divide-zinc-800/80">
          {sections.map((section) => (
            <div key={section.title} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div className="sm:w-1/3 text-xs font-medium text-zinc-200 tracking-tight">
                {section.title}
              </div>
              <div className="sm:w-2/3 flex flex-wrap gap-1.5">
                {section.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900/90 text-xs text-zinc-400 border border-zinc-800"
                  >
                    {s}
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
