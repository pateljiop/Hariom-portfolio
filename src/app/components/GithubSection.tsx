'use client';
import React, { useEffect, useState } from 'react';

export default function GithubSection() {
  const [stats, setStats] = useState({ repos: 0, followers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetches your live data straight from GitHub every time the page loads
    fetch('https://api.github.com/users/pateljiop')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setStats({
            repos: data.public_repos || 0,
            followers: data.followers || 0,
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('GitHub fetch error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="reveal mb-12">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">09 — Open Source</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight mb-4">
            GitHub <span className="gradient-text-cyan italic">Live Stats</span>
          </h2>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8 reveal-left stagger-1">
          {/* Repositories Card */}
          <div className="glass border border-primary/20 rounded-2xl p-8 glow-cyan tilt-card flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Public Repositories</p>
              <p className="text-5xl font-display font-bold text-foreground">
                {loading ? '-' : stats.repos}
              </p>
            </div>
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>

          {/* Followers Card */}
          <div className="glass border border-accent/20 rounded-2xl p-8 glow-cyan tilt-card flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Followers</p>
              <p className="text-5xl font-display font-bold text-foreground">
                {loading ? '-' : stats.followers}
              </p>
            </div>
            <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}