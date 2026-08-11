'use client';
import React from 'react';

const CERTIFICATIONS = [
  { name: 'Python Development Certification', issuer: 'CodSoft', color: '#F1FA8C', icon: '🐍' },
  { name: 'Python Programming Certification', issuer: 'InternPe', color: '#00D4FF', icon: '💻' },
  { name: 'Unlock AI Integrations & MCP', issuer: 'Practical Training', color: '#8B5CF6', icon: '🤖' },
  { name: 'Excel: Beginner to Expert', issuer: 'Online Certification', color: '#39FF14', icon: '📊' },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">07 — Education</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight">
            Academic <span className="gradient-text-cyan italic">Timeline</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Git-commit timeline */}
          <div className="reveal-left stagger-1">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                <div className="terminal-dot" style={{ background: '#27C93F' }} />
                <span className="ml-3 font-mono text-xs text-muted-foreground">git log --oneline</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-0">
                <div className="flex items-start gap-4 pb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary pulse-glow shrink-0 mt-1" />
                    <div className="git-line flex-1 mt-2" style={{ minHeight: '80px' }} />
                  </div>
                  <div>
                    <p className="text-accent text-xs mb-1">2024 → 2027 (Expected)</p>
                    <p className="text-foreground font-semibold">BCA — Bachelor of Computer Applications</p>
                    <p className="text-muted-foreground text-xs mt-1">Currently Pursuing</p>
                    <p className="text-muted-foreground text-xs mt-0.5">Prof. Rajendra Singh (Rajju Bhaiya) University</p>
                    <p className="text-muted-foreground text-xs mt-0.5">Prayagraj, Uttar Pradesh</p>
                    <div className="flex gap-2 mt-3">
                      <span className="font-mono text-xs px-2 py-0.5 rounded border border-primary/30 text-primary bg-primary/10">Active</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">3 Years</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent shrink-0 mt-1" />
                    <div className="git-line flex-1 mt-2" style={{ minHeight: '80px' }} />
                  </div>
                  <div>
                    <p className="text-accent text-xs mb-1">2022</p>
                    <p className="text-foreground font-semibold">Higher Secondary (12th)</p>
                    <p className="text-muted-foreground text-xs mt-1">Completed</p>
                    <div className="flex gap-2 mt-3">
                      <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent/30 text-accent bg-accent/10">Done</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-secondary shrink-0 mt-1" />
                  </div>
                  <div>
                    <p className="text-secondary text-xs mb-1">2020</p>
                    <p className="text-foreground font-semibold">Secondary (10th)</p>
                    <p className="text-muted-foreground text-xs mt-1">Completed</p>
                    <div className="flex gap-2 mt-3">
                      <span className="font-mono text-xs px-2 py-0.5 rounded border border-secondary/30 text-secondary bg-secondary/10">Done</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education detail card + certifications */}
          <div className="reveal-right stagger-2 space-y-6">
            <div className="hidden glass border border-primary/20 rounded-2xl p-8 glow-cyan tilt-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">BCA</h3>
                  <p className="font-mono text-xs text-primary">Bachelor of Computer Applications</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Status', value: 'Currently Pursuing', color: 'text-accent' },
                  { label: 'Expected', value: '2027', color: 'text-primary' },
                  { label: 'University', value: 'Prof. Rajendra Singh University', color: 'text-foreground' },
                  { label: 'Location', value: 'Prayagraj, UP', color: 'text-secondary' },
                  { label: 'Duration', value: '3 Years', color: 'text-muted-foreground' },
                ]?.map((item) => (
                  <div key={item?.label} className="flex items-center justify-between py-2 border-b border-border/40">
                    <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">{item?.label}</span>
                    <span className={`font-mono text-xs font-medium ${item?.color}`}>{item?.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                <div className="terminal-dot" style={{ background: '#27C93F' }} />
                <span className="ml-3 font-mono text-xs text-muted-foreground">certifications.json</span>
              </div>
              <div className="p-5 space-y-3">
                <p className="font-mono text-xs text-primary mb-4">// Certifications</p>
                {CERTIFICATIONS?.map((cert) => (
                  <div key={cert?.name} className="flex items-center gap-3 group">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                      style={{ background: `${cert?.color}15`, border: `1px solid ${cert?.color}30` }}
                    >
                      {cert?.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-xs text-foreground truncate">{cert?.name}</p>
                      <p className="font-mono text-xs text-muted-foreground">{cert?.issuer}</p>
                    </div>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-full border shrink-0"
                      style={{ borderColor: `${cert?.color}40`, color: cert?.color, background: `${cert?.color}10` }}
                    >
                      ✓
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}