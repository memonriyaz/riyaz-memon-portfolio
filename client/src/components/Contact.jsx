import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyText = (val, type) => {
    navigator.clipboard?.writeText(val);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {}

    const list = JSON.parse(localStorage.getItem('messages') || '[]');
    list.push({ ...formData, time: new Date().toISOString() });
    localStorage.setItem('messages', JSON.stringify(list));

    setSubmitted(true);
    setSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column: Direct Info */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Get in Touch</div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
                Let’s talk.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Currently open to software engineering and full-stack developer roles. Feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="apple-card p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Email</div>
                  <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-xs text-zinc-200 hover:underline">
                    {RESUME_DATA.personal.email}
                  </a>
                </div>
                <button
                  onClick={() => copyText(RESUME_DATA.personal.email, 'email')}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="apple-card p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Phone</div>
                  <a href={`tel:${RESUME_DATA.personal.phone}`} className="text-xs text-zinc-200 hover:underline">
                    {RESUME_DATA.personal.phone}
                  </a>
                </div>
                <button
                  onClick={() => copyText(RESUME_DATA.personal.phone, 'phone')}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="apple-card p-3.5 rounded-xl">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">Location</div>
                <div className="text-xs text-zinc-200">{RESUME_DATA.personal.location}</div>
              </div>
            </div>

            <div className="flex gap-4 pt-2 text-xs text-zinc-400">
              <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="md:col-span-7">
            <div className="apple-card rounded-2xl p-6 sm:p-7">
              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-white">Message received.</h3>
                  <p className="text-xs text-zinc-400">
                    Thank you for reaching out. Riyaz will respond to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-zinc-400 hover:text-white underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-mono text-zinc-500 uppercase block mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-500 uppercase block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-500 uppercase block mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Discussing an opportunity, project, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-medium tracking-tight transition-all disabled:opacity-50"
                  >
                    {submitting ? 'Transmitting...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
