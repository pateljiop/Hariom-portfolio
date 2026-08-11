'use client';
import React, { useEffect, useState } from 'react';

const TERMINAL_COMMANDS = [
  { cmd: '$ node --version', output: 'v20.11.0', delay: 0 },
  { cmd: '$ git status', output: 'On branch: learning', delay: 1200 },
  { cmd: '$ npm run dev', output: 'Server: localhost:3000', delay: 2400 },
  { cmd: '$ git commit -m "learning"', output: '[main] learning progress', delay: 3600 },
];

const LEARNING_PROGRESS = [
  { label: 'Learning', width: '70%', color: '#00D4FF' },
  { label: 'Practice', width: '55%', color: '#8B5CF6' },
  { label: 'Building', width: '40%', color: '#39FF14' },
  { label: 'Improving', width: '65%', color: '#FF79C6' },
];

const CURRENT_STACK = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Git'];

export default function WorkspaceSection() {
  const [terminalStep, setTerminalStep] = useState(0);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now?.toLocaleTimeString('en-IN', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalStep((s) => (s + 1) % TERMINAL_COMMANDS?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="workspace" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">03 — Workspace</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight">
            My <span className="gradient-text-green italic">Workspace</span>
          </h2>
        </div>

        {/* Dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Setup Photo Panel */}
          <div className="reveal stagger-1 glass border border-border rounded-2xl overflow-hidden border-glow-hover tilt-card md:col-span-2 lg:col-span-1">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#FF5F56' }} />
              <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
              <div className="terminal-dot" style={{ background: '#27C93F' }} />
              <span className="ml-3 font-mono text-xs text-muted-foreground">my_setup.jpg</span>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '62%' }}>
              <img
                src="/assets/images/setup1-1786371866439.jpg"
                alt="Hariom's developer workspace setup with desk and equipment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="font-mono text-xs text-accent">● My Setup</span>
              </div>
            </div>
          </div>

          {/* Terminal Panel */}
          <div className="reveal stagger-1 terminal-window tilt-card">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#FF5F56' }} />
              <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
              <div className="terminal-dot" style={{ background: '#27C93F' }} />
              <span className="ml-3 font-mono text-xs text-muted-foreground">terminal</span>
            </div>
            <div className="p-5 space-y-3 min-h-[200px]">
              {TERMINAL_COMMANDS?.slice(0, terminalStep + 1)?.map((item, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="font-mono text-xs text-accent">{item?.cmd}</p>
                  <p className="font-mono text-xs text-muted-foreground pl-2">→ {item?.output}</p>
                </div>
              ))}
              <div className="flex items-center gap-1">
                <span className="font-mono text-xs text-accent">$</span>
                <span className="w-1.5 h-3.5 bg-primary cursor-blink inline-block" />
              </div>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="reveal stagger-2 glass border border-border rounded-2xl p-6 border-glow-hover tilt-card">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-accent status-dot" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Currently Learning</span>
            </div>
            <div className="space-y-3">
              {CURRENT_STACK?.map((tech, i) => (
                <div key={tech} className="flex items-center gap-3 group cursor-default">
                  <div
                    className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                    style={{ background: i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#8B5CF6' : '#39FF14' }}
                  />
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">{tech}</span>
                  <span
                    className="ml-auto font-mono text-xs px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: i % 3 === 0 ? 'rgba(0,212,255,0.3)' : i % 3 === 1 ? 'rgba(139,92,246,0.3)' : 'rgba(57,255,20,0.3)',
                      color: i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#8B5CF6' : '#39FF14',
                    }}
                  >
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Status */}
          <div
            className="reveal stagger-3 glass border border-border rounded-2xl p-6 border-glow-hover"
            data-progress-section
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-primary status-dot" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Dev Status</span>
            </div>
            <p className="font-mono text-xs text-muted-foreground mb-5 italic">// Visual learning indicators</p>
            <div className="space-y-4">
              {LEARNING_PROGRESS?.map((item) => (
                <div key={item?.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-xs text-foreground">{item?.label}</span>
                    <span className="font-mono text-xs" style={{ color: item?.color }}>{item?.width}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      data-width={item?.width}
                      style={{ background: item?.color, width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Mode */}
          <div className="reveal stagger-4 terminal-window tilt-card">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#FF5F56' }} />
              <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
              <div className="terminal-dot" style={{ background: '#27C93F' }} />
              <span className="ml-3 font-mono text-xs text-muted-foreground">system.status</span>
            </div>
            <div className="p-5 space-y-3">
              {[
                { key: 'STATUS', value: 'ONLINE', color: '#39FF14' },
                { key: 'MODE', value: 'LEARNING', color: '#00D4FF' },
                { key: 'FOCUS', value: 'DEVELOPMENT', color: '#8B5CF6' },
                { key: 'MINDSET', value: 'BUILDING', color: '#FF79C6' },
                { key: 'UPTIME', value: time || '00:00:00', color: '#F1FA8C' },
              ]?.map((item) => (
                <div key={item?.key} className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{item?.key}:</span>
                  <span className="font-mono text-xs font-semibold" style={{ color: item?.color }}>
                    {item?.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="reveal stagger-5 glass border border-border rounded-2xl p-6 border-glow-hover tilt-card">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-secondary status-dot" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Tools Used</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['VS Code', 'Git', 'GitHub', 'Chrome DevTools', 'Terminal', 'npm']?.map((tool) => (
                <div key={tool} className="glass-light border border-border/50 rounded-lg px-3 py-2 text-center hover:border-primary/30 transition-colors">
                  <span className="font-mono text-xs text-foreground">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Routine */}
          <div className="hidden reveal stagger-6 glass border border-border rounded-2xl p-6 border-glow-hover tilt-card">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-accent status-dot" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Daily Routine</span>
            </div>
            <div className="space-y-3">
              {[
                { time: 'Morning', activity: 'Study concepts', color: '#00D4FF' },
                { time: 'Afternoon', activity: 'Practice coding', color: '#8B5CF6' },
                { time: 'Evening', activity: 'Build projects', color: '#39FF14' },
                { time: 'Night', activity: 'Review & improve', color: '#FF79C6' },
              ]?.map((item) => (
                <div key={item?.time} className="flex items-center gap-3">
                  <span className="font-mono text-xs w-20 shrink-0" style={{ color: item?.color }}>{item?.time}</span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="font-mono text-xs text-muted-foreground">{item?.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}