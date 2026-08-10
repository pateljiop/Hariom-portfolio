'use client';
import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">10 — Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight mb-4">
            Let&apos;s <span className="gradient-text-cyan italic">Connect</span>
          </h2>
        </div>

        {/* Terminal intro */}
        <div className="reveal mb-12">
          <div className="terminal-window max-w-2xl">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#FF5F56' }} />
              <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
              <div className="terminal-dot" style={{ background: '#27C93F' }} />
            </div>
            <div className="p-5 font-mono text-sm space-y-2">
              <div>
                <span className="text-accent">hariom@portfolio:~$</span>
                <span className="text-foreground"> connect</span>
              </div>
              <p className="text-muted-foreground pl-4">Looking forward to meeting you.</p>
              <p className="text-muted-foreground pl-4">Let&apos;s build something together.</p>
              <div className="flex items-center gap-1 pt-1">
                <span className="text-accent">hariom@portfolio:~$</span>
                <span className="w-2 h-4 bg-primary cursor-blink inline-block ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="reveal-left stagger-1">
            <div className="terminal-window">
              <div className="terminal-header justify-between">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                  <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                  <div className="terminal-dot" style={{ background: '#27C93F' }} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">send_message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {submitted && (
                  <div className="glass border border-accent/40 rounded-xl p-4 text-center">
                    <p className="font-mono text-sm text-accent">✓ Message sent successfully!</p>
                  </div>
                )}

                <div>
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                    <span className="text-accent">$</span> name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    required
                    suppressHydrationWarning
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 font-mono text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                    <span className="text-accent">$</span> email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    required
                    suppressHydrationWarning
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 font-mono text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                    <span className="text-accent">$</span> message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Your message..."
                    required
                    rows={5}
                    suppressHydrationWarning
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 font-mono text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full magnetic-btn bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-300 glow-cyan flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="reveal-right stagger-2 space-y-6">
            {/* Contact details */}
            <div className="glass border border-border rounded-2xl p-6 border-glow-hover">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">Reach me at</p>
              <div className="space-y-4">
                <a href="mailto:hariompatel.dev@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">hariompatel.dev@gmail.com</p>
                  </div>
                </a>

                <a href="https://github.com/pateljiop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">GitHub</p>
                    <p className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">github.com/pateljiop</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/pateljiop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">LinkedIn</p>
                    <p className="font-semibold text-foreground text-sm group-hover:text-secondary transition-colors">linkedin.com/in/pateljiop</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Big terminal cursor */}
            <div className="terminal-window p-8 text-center">
              <p className="font-mono text-xs text-muted-foreground mb-4">hariom@portfolio:~$ _</p>
              <div
                className="w-8 h-14 bg-primary mx-auto cursor-blink"
                style={{ borderRadius: '2px' }}
              />
              <p className="font-mono text-xs text-muted-foreground mt-4 italic">
                Always ready to learn and connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}