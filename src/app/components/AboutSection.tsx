'use client';
import React, { useState } from 'react';

const CODE_LINES = [
  { num: 1, content: '', type: 'empty' },
  { num: 2, content: 'const developer = {', type: 'bracket' },
  { num: 3, content: '    name: "Hariom Patel",', type: 'property-string', key: 'name', value: '"Hariom Patel"' },
  { num: 4, content: '    role: "Software Developer & Automation Specialist",', type: 'property-string', key: 'role', value: '"Software Developer & Automation Specialist"' },
  { num: 5, content: '    level: "Beginner → Growing",', type: 'property-string', key: 'level', value: '"Beginner → Growing"' },
  { num: 6, content: '    passion: [', type: 'property-array' },
  { num: 7, content: '        "Python Automation",', type: 'array-item', value: '"Python Automation"' },
  { num: 8, content: '        "Web Development",', type: 'array-item', value: '"Web Development"' },
  { num: 9, content: '        "REST APIs & CI/CD"', type: 'array-item', value: '"REST APIs & CI/CD"' },
  { num: 10, content: '    ],', type: 'bracket' },
  { num: 11, content: '    location: "Prayagraj, UP, India",', type: 'property-string', key: 'location', value: '"Prayagraj, UP, India"' },
  { num: 12, content: '    languages: ["Hindi", "English"],', type: 'property-array-inline' },
  { num: 13, content: '    mindset: "Learn • Practice • Build • Improve"', type: 'property-string', key: 'mindset', value: '"Learn • Practice • Build • Improve"' },
  { num: 14, content: '};', type: 'bracket' },
  { num: 15, content: '', type: 'empty' },
  { num: 16, content: '// console.log(developer.mindset);', type: 'comment' },
  { num: 17, content: '// → "Learn • Practice • Build • Improve"', type: 'comment' },
];

function renderCodeLine(line: typeof CODE_LINES[0]) {
  switch (line.type) {
    case 'comment':
      return <span className="syntax-comment">{line.content}</span>;
    case 'bracket':
      return <span className="syntax-bracket">{line.content}</span>;
    case 'empty':
      return <span>&nbsp;</span>;
    case 'property-string':
      return (
        <>
          <span className="text-muted-foreground">    </span>
          <span className="syntax-property">{line.key}</span>
          <span className="text-foreground">: </span>
          <span className="syntax-string">{line.value}</span>
          <span className="text-foreground">,</span>
        </>
      );
    case 'property-array':
      return (
        <>
          <span className="text-muted-foreground">    </span>
          <span className="syntax-property">passion</span>
          <span className="text-foreground">: [</span>
        </>
      );
    case 'array-item':
      return (
        <>
          <span className="text-muted-foreground">        </span>
          <span className="syntax-string">{line.value}</span>
          <span className="text-foreground">,</span>
        </>
      );
    case 'property-array-inline':
      return (
        <>
          <span className="text-muted-foreground">    </span>
          <span className="syntax-property">languages</span>
          <span className="text-foreground">: [</span>
          <span className="syntax-string">&quot;Hindi&quot;</span>
          <span className="text-foreground">, </span>
          <span className="syntax-string">&quot;English&quot;</span>
          <span className="text-foreground">],</span>
        </>
      );
    default:
      return <span>{line.content}</span>;
  }
}

export default function AboutSection() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">02 — About</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight mb-2">
            About <span className="gradient-text-cyan italic">Me</span>
          </h2>
          <p className="font-mono text-muted-foreground text-sm">// about_hariom.js</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Code Editor */}
          <div className="reveal-left stagger-2">
            <div className="terminal-window">
              {/* Editor header */}
              <div className="terminal-header justify-between">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                  <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                  <div className="terminal-dot" style={{ background: '#27C93F' }} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">about_hariom.js</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">JS</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-4 overflow-x-auto">
                {CODE_LINES.map((line) => (
                  <div
                    key={line.num}
                    className="flex items-center gap-0 group cursor-default transition-colors duration-150 rounded"
                    style={{
                      background: hoveredLine === line.num ? 'rgba(0,212,255,0.05)' : 'transparent',
                    }}
                    onMouseEnter={() => setHoveredLine(line.num)}
                    onMouseLeave={() => setHoveredLine(null)}
                  >
                    <span className="line-number text-muted-foreground select-none">{line.num}</span>
                    <span className="font-mono text-sm py-0.5 px-2 whitespace-pre">
                      {renderCodeLine(line)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About card */}
          <div className="reveal-right stagger-3 space-y-6">
            <div className="glass border border-border rounded-2xl p-8 border-glow-hover tilt-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30">
                  <img
                    src="/assets/images/avatar-1786371866345.jpg"
                    alt="Hariom - panda with laptop avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Hariom</p>
                  <p className="font-mono text-xs text-muted-foreground">BCA Student</p>
                </div>
              </div>

              <h3 className="font-display text-xl font-medium text-foreground mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                I&apos;m a detail-oriented BCA student from Prayagraj, UP with hands-on experience in Python, Web Scraping, REST APIs, and Automated CI/CD Workflows. I design script-driven tools, integrate AI APIs, and automate deployment pipelines using GitHub Actions.
              </p>

              <div className="space-y-3">
                {[
                  { label: 'Location', value: 'Prayagraj, UP, India', color: 'text-accent' },
                  { label: 'Email', value: 'hariompatel.dev@gmail.com', color: 'text-primary' },
                  { label: 'Languages', value: 'Hindi & English', color: 'text-secondary' },
                  { label: 'Mindset', value: 'Learn • Practice • Build', color: 'text-foreground' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">{item.label}</span>
                    <span className={`font-mono text-xs font-medium ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎓', label: 'Degree', value: 'BCA' },
                { icon: '📍', label: 'Based in', value: 'Prayagraj' },
                { icon: '🐍', label: 'Focus', value: 'Python' },
                { icon: '🌱', label: 'Level', value: 'Growing' },
              ].map((fact) => (
                <div key={fact.label} className="glass border border-border rounded-xl p-4 border-glow-hover tilt-card">
                  <span className="text-2xl block mb-2">{fact.icon}</span>
                  <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">{fact.label}</p>
                  <p className="font-semibold text-foreground text-sm mt-0.5">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}