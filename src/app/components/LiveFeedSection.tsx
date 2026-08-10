'use client';
import React, { useEffect, useState } from 'react';

interface LogEntry {
  time: string;
  message: string;
  color: string;
  type: string;
}

const BASE_LOGS: Omit<LogEntry, 'time'>[] = [
  { message: 'Building Python automation scripts...', color: '#F1FA8C', type: 'BUILD' },
  { message: 'Integrating AI API endpoints...', color: '#8B5CF6', type: 'TASK' },
  { message: 'Setting up GitHub Actions CI/CD...', color: '#39FF14', type: 'DEVOPS' },
  { message: 'Scraping web data with BeautifulSoup...', color: '#00D4FF', type: 'SCRAPE' },
  { message: 'Learning JavaScript + React...', color: '#FF79C6', type: 'LEARN' },
  { message: 'Status: Open to Remote Opportunities', color: '#00D4FF', type: 'STATUS' },
];

function padTwo(n: number) {
  return String(n).padStart(2, '0');
}

export default function LiveFeedSection() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const addLog = (idx: number) => {
      const now = new Date();
      const time = `${padTwo(now.getHours())}:${padTwo(now.getMinutes())}:${padTwo(now.getSeconds())}`;
      const base = BASE_LOGS[idx % BASE_LOGS.length];
      setLogs((prev) => [...prev.slice(-7), { ...base, time }]);
      setCurrentIdx((i) => i + 1);
    };

    // Initial logs
    BASE_LOGS.forEach((_, i) => {
      setTimeout(() => addLog(i), i * 800);
    });

    // Continuous loop
    const interval = setInterval(() => {
      setCurrentIdx((i) => {
        addLog(i);
        return i + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="livefeed" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">09 — Live Feed</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight">
            Live <span className="gradient-text-green italic">Feed</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Terminal log */}
          <div className="reveal-left stagger-1">
            <div className="terminal-window">
              <div className="terminal-header justify-between">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                  <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                  <div className="terminal-dot" style={{ background: '#27C93F' }} />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent status-dot" />
                  <span className="font-mono text-xs text-accent">LIVE</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">activity.log</span>
              </div>
              <div className="p-5 min-h-[300px] space-y-2 overflow-hidden">
                {logs.map((log, i) => (
                  <div key={i} className="log-line flex items-start gap-3">
                    <span className="font-mono text-xs text-muted-foreground shrink-0 w-20">[{log.time}]</span>
                    <span
                      className="font-mono text-xs px-1.5 py-0.5 rounded shrink-0"
                      style={{ background: `${log.color}15`, color: log.color, fontSize: '9px' }}
                    >
                      {log.type}
                    </span>
                    <span className="font-mono text-xs text-foreground/80">{log.message}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1 mt-2">
                  <span className="font-mono text-xs text-accent">$</span>
                  <span className="w-1.5 h-3.5 bg-primary cursor-blink inline-block ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Status cards */}
          <div className="reveal-right stagger-2 space-y-4">
            {[
              { dot: '#F1FA8C', label: 'Currently Building', value: 'Python Automation Tools', icon: '🐍' },
              { dot: '#8B5CF6', label: 'Current Focus', value: 'REST APIs & CI/CD Pipelines', icon: '🎯' },
              { dot: '#39FF14', label: 'Learning', value: 'JavaScript + React', icon: '📚' },
              { dot: '#FF79C6', label: 'Status', value: 'Open to Remote Opportunities', icon: '✅' },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`reveal stagger-${i + 1} glass border border-border rounded-xl p-5 border-glow-hover flex items-center gap-4`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
                  style={{ background: `${item.dot}15`, border: `1px solid ${item.dot}30` }}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full status-dot" style={{ background: item.dot }} />
                    <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">{item.label}</span>
                  </div>
                  <p className="font-semibold text-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Disclaimer */}
            <p className="font-mono text-xs text-muted-foreground italic pl-1">
              <span className="syntax-comment">// Timestamps are decorative examples. Not real-time activity.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}