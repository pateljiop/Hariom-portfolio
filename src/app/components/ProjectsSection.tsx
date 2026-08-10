'use client';
import React from 'react';

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  status: 'live' | 'building' | 'completed';
  statusLabel: string;
  color: string;
  icon: string;
  githubUrl: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Automated Live Market Tracker',
    description: 'Real-time market data tracking utility that fetches live financial parameters via REST APIs with automated daily updates.',
    highlights: [
      'Engineered in Python to fetch live financial data via REST APIs',
      'GitHub Actions CI/CD with scheduled cron jobs for daily automation',
    ],
    tags: ['Python', 'REST APIs', 'GitHub Actions', 'CI/CD'],
    status: 'completed',
    statusLabel: 'Completed',
    color: '#39FF14',
    icon: '📈',
    githubUrl: 'https://github.com/pateljiop',
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Python-based utility assistant that automates routine OS tasks and executes system commands using AI API integration.',
    highlights: [
      'Automates routine OS tasks and system command execution',
      'Integrated external AI API endpoints with prompt-based decision workflows',
    ],
    tags: ['Python', 'AI API', 'Automation', 'OOPs'],
    status: 'completed',
    statusLabel: 'Completed',
    color: '#8B5CF6',
    icon: '🤖',
    githubUrl: 'https://github.com/pateljiop',
  },
  {
    title: 'Web Scraper & Data Utility Pipelines',
    description: 'Automated web scraping scripts that extract public web data at scale and structure it into clean CSV/JSON datasets.',
    highlights: [
      'Built with BeautifulSoup & Requests for large-scale data extraction',
      'Structures raw HTML into validated CSV and JSON for downstream analysis',
    ],
    tags: ['Python', 'BeautifulSoup', 'Requests', 'Pandas'],
    status: 'completed',
    statusLabel: 'Completed',
    color: '#00D4FF',
    icon: '🕷️',
    githubUrl: 'https://github.com/pateljiop',
  },
  {
    title: 'Self-Updating Developer Portfolio',
    description: 'Responsive single-page web application with dark mode, CSS animations, and an automated Python backend that auto-fetches tech feeds daily.',
    highlights: [
      'Custom dark mode, continuous CSS animations, interactive code windows',
      'Python backend script auto-fetches fresh tech feeds via GitHub Actions',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'GitHub Actions'],
    status: 'live',
    statusLabel: 'Live',
    color: '#FF79C6',
    icon: '🌐',
    githubUrl: 'https://github.com/pateljiop',
    liveUrl: 'https://pateljiop.github.io/Hariom-Professional-Portfolio',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-4">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">06 — Projects</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight mb-4">
            Featured <span className="gradient-text-green italic">Projects</span>
          </h2>
        </div>
        <div className="reveal mb-12">
          <div className="glass border border-border rounded-xl px-5 py-3 inline-flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent status-dot" />
            <span className="font-mono text-xs text-muted-foreground">
              Real projects built with Python, automation, and web technologies.
            </span>
          </div>
        </div>

        {/* Projects grid — 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`reveal stagger-${i + 1} terminal-window tilt-card group cursor-default`}
            >
              <div className="terminal-header justify-between">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                  <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                  <div className="terminal-dot" style={{ background: '#27C93F' }} />
                </div>
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded-full border"
                  style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}10` }}
                >
                  {project.statusLabel}
                </span>
              </div>

              <div className="p-6">
                {/* Project icon & title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${project.color}10`, border: `1px solid ${project.color}30` }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-1">{project.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4 space-y-1.5">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-xs mt-0.5" style={{ color: project.color }}>→</span>
                      <span className="font-mono text-xs text-muted-foreground">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded border"
                      style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#6B7280' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 glass border border-border rounded-lg py-2 font-mono text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 glass border border-border rounded-lg py-2 font-mono text-xs text-muted-foreground hover:border-accent/40 hover:text-accent transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  ) : (
                    <button
                      className="flex-1 flex items-center justify-center gap-2 glass border border-border rounded-lg py-2 font-mono text-xs text-muted-foreground opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="syntax-comment">// More projects in progress. Follow on GitHub for updates.</span>
          </p>
        </div>
      </div>
    </section>
  );
}