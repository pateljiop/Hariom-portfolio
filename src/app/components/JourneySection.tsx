'use client';
import React from 'react';

const STAGES = [
  {
    num: '01',
    title: 'Learn',
    subtitle: 'UNDERSTAND',
    description: 'Understand programming fundamentals and modern technologies. Build the mental model before writing a single line.',
    items: ['Programming Logic', 'Data Structures', 'Web Fundamentals', 'Computer Science'],
    color: '#00D4FF',
    status: 'Active',
  },
  {
    num: '02',
    title: 'Practice',
    subtitle: 'EXPERIMENT',
    description: 'Solve problems and experiment with code. Break things intentionally to understand how they work.',
    items: ['Problem Solving', 'Code Challenges', 'Debugging', 'Experimentation'],
    color: '#8B5CF6',
    status: 'Active',
  },
  {
    num: '03',
    title: 'Build',
    subtitle: 'CREATE',
    description: 'Create mini projects and practical applications. Apply learned concepts to real-world scenarios.',
    items: ['Mini Projects', 'Web Apps', 'Practice Tools', 'Personal Projects'],
    color: '#39FF14',
    status: 'In Progress',
  },
  {
    num: '04',
    title: 'Improve',
    subtitle: 'ITERATE',
    description: 'Learn from mistakes and continuously improve. Refactor, optimize, and keep getting better.',
    items: ['Code Review', 'Refactoring', 'Performance', 'Best Practices'],
    color: '#FF79C6',
    status: 'Ongoing',
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">05 — Journey</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight mb-4">
            My Development <span className="gradient-text-cyan italic">Journey</span>
          </h2>
          <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
            {['LEARN', '→', 'PRACTICE', '→', 'BUILD', '→', 'IMPROVE']?.map((item, i) => (
              <span
                key={i}
                className={item === '→' ? 'text-muted-foreground' : 'font-semibold'}
                style={item !== '→' ? { color: STAGES?.[Math.floor(i / 2)]?.color } : {}}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Journey stages — vertical on mobile, grid on desktop */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 journey-line opacity-30 mx-24" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {STAGES?.map((stage, i) => (
              <div key={stage?.num} className={`reveal stagger-${i + 1} group`}>
                <div
                  className="glass border border-border rounded-2xl p-6 h-full border-glow-hover tilt-card transition-all duration-300 relative overflow-hidden"
                  style={{ borderColor: `rgba(${stage?.color === '#00D4FF' ? '0,212,255' : stage?.color === '#8B5CF6' ? '139,92,246' : stage?.color === '#39FF14' ? '57,255,20' : '255,121,198'},0.15)` }}
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${stage?.color}08 0%, transparent 70%)` }}
                  />

                  {/* Stage number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-5xl font-bold opacity-10 text-foreground">{stage?.num}</span>
                    <span
                      className="font-mono text-xs px-2 py-1 rounded-full border"
                      style={{ borderColor: `${stage?.color}40`, color: stage?.color, background: `${stage?.color}10` }}
                    >
                      {stage?.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display text-3xl font-semibold mb-1 transition-colors duration-300"
                    style={{ color: stage?.color }}
                  >
                    {stage?.title}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">{stage?.subtitle}</p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{stage?.description}</p>

                  {/* Items */}
                  <div className="space-y-2">
                    {stage?.items?.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: stage?.color }} />
                        <span className="font-mono text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}