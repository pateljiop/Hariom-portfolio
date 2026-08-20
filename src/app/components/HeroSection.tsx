'use client';
import React, { useEffect, useState } from 'react';

const TERMINAL_LINES = [
  { prompt: 'hariom@portfolio:~$', command: ' whoami', delay: 800 },
  { output: 'Hariom Patel', delay: 1400 },
  { output: 'BCA Student · Python & Web Developer', delay: 1700 },
  { output: 'Building automation, APIs & practical web solutions', delay: 2000 },
  { prompt: 'hariom@portfolio:~$', command: ' status', delay: 2800 },
  { output: '● Building...', delay: 3400, color: '#39FF14' },
  { output: '● Learning...', delay: 3700, color: '#00D4FF' },
  { output: '● Improving...', delay: 4000, color: '#8B5CF6' },
  { prompt: 'hariom@portfolio:~$', command: ' echo $MINDSET', delay: 4800 },
  { output: '"Never stop building."', delay: 5400, color: '#F1FA8C' },
];

interface TerminalLine {
  prompt?: string;
  command?: string;
  output?: string;
  delay?: number;
  color?: string;
}

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typedCommand, setTypedCommand] = useState<Record<number, string>>({});
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    TERMINAL_LINES.forEach((line: TerminalLine, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1);
          if (line.command) {
            let charIdx = 0;
            const cmd = line.command;
            const typeInterval = setInterval(() => {
              charIdx++;
              setTypedCommand((prev) => ({ ...prev, [i]: cmd.slice(0, charIdx) }));
              if (charIdx >= cmd.length) clearInterval(typeInterval);
            }, 60);
            intervals.push(typeInterval);
          }
        }, line.delay || 0),
      );
    });

    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 530);
    intervals.push(cursorInterval);

    return () => {
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient grid-bg overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-accent status-dot" />
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  Open to Remote Opportunities
                </span>
              </div>
            </div>

            <div>
              <p className="font-mono text-primary text-lg mb-3 tracking-wider">
                <span className="syntax-comment">// Hello World 👋</span>
              </p>
              <h1 className="font-display text-hero font-light leading-none tracking-tight text-foreground mb-4">
                Hi, I&apos;m <span className="gradient-text-cyan font-semibold">Hariom</span>
              </h1>
              <p className="text-hero-sm font-display font-light text-muted-foreground leading-tight">
                Python &amp; Web Developer building{' '}
                <span className="text-accent italic">automation, APIs &amp; web solutions.</span>
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg border-l-2 border-primary/30 pl-5">
              BCA student focused on building practical software, responsive websites, automation tools, and API-driven projects for real-world use.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="magnetic-btn relative group flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-300 glow-cyan">
                <span>View My Work</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="magnetic-btn flex items-center gap-2 glass border border-primary/30 text-foreground px-7 py-3 rounded-full font-semibold text-sm tracking-wide hover:border-primary/60 transition-all duration-300">
                Let&apos;s Connect
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Find me on</span>
              <div className="h-px flex-1 max-w-16 bg-border" />
              <a href="https://github.com/pateljiop" target="_blank" rel="noopener noreferrer" className="glass p-2.5 rounded-xl border border-border hover:border-primary/40 transition-all group" aria-label="GitHub">
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://linkedin.com/in/pateljiop" target="_blank" rel="noopener noreferrer" className="glass p-2.5 rounded-xl border border-border hover:border-primary/40 transition-all group" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774.792 0 1.771 0z" /></svg>
              </a>
              <a href="https://instagram.com/patelji_op" target="_blank" rel="noopener noreferrer" className="glass p-2.5 rounded-xl border border-border hover:border-primary/40 transition-all group" aria-label="Instagram">
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 4.919 4.919 1.266.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>

          <div className="reveal-right stagger-2">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/40 shadow-lg" style={{ boxShadow: '0 0 32px rgba(0,212,255,0.18)' }}>
                  <img src="/assets/images/avatar-1786371866345.jpg" alt="Hariom Patel portfolio avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-accent border-2 border-background status-dot" />
              </div>
            </div>

            <div className="terminal-window float-anim">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">hariom@portfolio</span>
              </div>
              <div className="p-5 font-mono text-sm min-h-64">
                {TERMINAL_LINES.map((line, i) => {
                  if (i >= visibleLines) return null;
                  return (
                    <div key={`${line.output ?? line.command}-${i}`} className="leading-7">
                      {line.prompt && <span className="text-primary">{line.prompt}</span>}
                      {line.command && <span className="text-foreground">{typedCommand[i] || ''}</span>}
                      {line.output && <span style={{ color: line.color }}>{line.output}</span>}
                    </div>
                  );
                })}
                <span className={`inline-block w-2 h-4 bg-primary ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex-1 glass border border-border rounded-xl p-4 text-center border-glow-hover">
                <p className="font-mono text-primary text-2xl font-bold">2027</p>
                <p className="font-mono text-xs text-muted-foreground tracking-wider mt-1">GRAD</p>
              </div>
              <div className="flex-1 glass border border-border rounded-xl p-4 text-center border-glow-hover">
                <p className="font-mono text-accent text-2xl font-bold">BCA</p>
                <p className="font-mono text-xs text-muted-foreground tracking-wider mt-1">DEGREE</p>
              </div>
              <div className="flex-1 glass border border-border rounded-xl p-4 text-center border-glow-hover">
                <p className="font-mono text-secondary text-2xl font-bold">4+</p>
                <p className="font-mono text-xs text-muted-foreground tracking-wider mt-1">PROJECTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
