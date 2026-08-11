'use client';
import React, { useState, useEffect } from 'react';

export default function DeveloperIdentitySection() {
  // 1. Set up the state to hold your live stats (default is the dash)
  const [githubStats, setGithubStats] = useState<Record<string, string | number>>({
    'Repositories': '—',
    'Commits': '—',
    'Stars': '—'
  });

  // 2. Fetch the actual data from GitHub when the page loads
  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch Total Repositories
        const userRes = await fetch('https://api.github.com/users/pateljiop');
        const userData = await userRes.json();
        
        // Fetch Total Stars (sums up stars across all your public repos)
        const reposRes = await fetch('https://api.github.com/users/pateljiop/repos?per_page=100');
        const reposData = await reposRes.json();
        const totalStars = Array.isArray(reposData) 
          ? reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)
          : '—';

        // Fetch Total Commits (using GitHub Search API)
        const commitsRes = await fetch('https://api.github.com/search/commits?q=author:pateljiop');
        const commitsData = await commitsRes.json();
        const totalCommits = commitsData.total_count !== undefined ? commitsData.total_count : '—';

        // Update the state with real numbers
        setGithubStats({
          'Repositories': userData.public_repos !== undefined ? userData.public_repos : '—',
          'Commits': totalCommits,
          'Stars': totalStars
        });
      } catch (error) {
        console.error("Error fetching GitHub stats", error);
      }
    }
    
    fetchStats();
  }, []);

  return (
    <section id="identity" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">08 — Identity</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight">
            Developer <span className="gradient-text-cyan italic">Identity</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Identity card */}
          <div className="reveal-left stagger-1">
            <div className="terminal-window glow-cyan tilt-card">
              <div className="terminal-header justify-between">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                  <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                  <div className="terminal-dot" style={{ background: '#27C93F' }} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">developer.profile</span>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { key: 'USER', value: 'hariom_patel', color: '#00D4FF' },
                  { key: 'ROLE', value: 'Software Developer & Automation Specialist', color: '#F1FA8C' },
                  { key: 'FOCUS', value: 'Python + Web Development + CI/CD', color: '#8B5CF6' },
                  { key: 'LEVEL', value: 'Beginner → Growing', color: '#39FF14' },
                  { key: 'LOCATION', value: 'Prayagraj, UP, India', color: '#FF79C6' },
                  { key: 'STATUS', value: 'Open to Remote Opportunities', color: '#00D4FF' },
                  { key: 'YOUTUBE', value: 'TechMind Central', color: '#FF79C6' },
                  { key: 'MINDSET', value: '"Never stop building."', color: '#F1FA8C' },
                ]?.map((item) => (
                  <div key={item?.key} className="flex items-start gap-4 group cursor-default">
                    <span className="font-mono text-xs text-muted-foreground w-24 shrink-0 tracking-widest group-hover:text-foreground transition-colors">{item?.key}</span>
                    <span className="font-mono text-xs" style={{ color: item?.color }}>=</span>
                    <span className="font-mono text-xs font-medium" style={{ color: item?.color }}>{item?.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Links */}
          <div className="reveal-right stagger-2 space-y-6">
            {/* Profile links */}
            <div className="glass border border-border rounded-2xl p-6 border-glow-hover">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">Connect with me</p>
              <div className="space-y-3">
                <a
                  href="https://github.com/pateljiop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-light border border-border rounded-xl p-4 hover:border-primary/40 transition-all group"
                >
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">GitHub</p>
                    <p className="font-mono text-xs text-muted-foreground">github.com/pateljiop</p>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/pateljiop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-light border border-border rounded-xl p-4 hover:border-primary/40 transition-all group"
                >
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">LinkedIn</p>
                    <p className="font-mono text-xs text-muted-foreground">linkedin.com/in/pateljiop</p>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com/patelji_op"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-light border border-border rounded-xl p-4 hover:border-primary/40 transition-all group"
                >
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Instagram</p>
                    <p className="font-mono text-xs text-muted-foreground">@patelji_op</p>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href="https://youtube.com/@TechMindCentral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-light border border-border rounded-xl p-4 hover:border-red-500/40 transition-all group"
                >
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-red-500 transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm group-hover:text-red-500 transition-colors">YouTube</p>
                    <p className="font-mono text-xs text-muted-foreground">TechMind Central</p>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Live GitHub Stats */}
            <div className="glass border border-border rounded-2xl p-6 border-glow-hover">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">GitHub Activity</p>
              <p className="font-mono text-xs text-muted-foreground italic mb-4">
                <span className="syntax-comment">// Real-time stats fetched from API</span>
              </p>
              <div className="grid grid-cols-3 gap-3">
                {['Repositories', 'Commits', 'Stars']?.map((stat) => (
                  <div key={stat} className="glass-light border border-border/50 rounded-xl p-3 text-center">
                    <p className="font-mono text-xs text-muted-foreground mb-1">{stat}</p>
                    <p className="font-mono text-sm text-foreground font-semibold">{githubStats[stat]}</p>
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