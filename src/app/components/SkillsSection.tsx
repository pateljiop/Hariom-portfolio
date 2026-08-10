'use client';
import React, { useState } from 'react';

interface Skill {
  name: string;
  level: string;
  description: string;
  category: string;
  color: string;
  icon: string;
}

const SKILLS: Skill[] = [
  { name: 'Python', level: 'Hands-on', description: 'Scripting, automation, web scraping, and AI API integration.', category: 'Language', color: '#F1FA8C', icon: 'Py' },
  { name: 'JavaScript', level: 'Learning', description: 'ES6+, dynamic web interactions and DOM manipulation.', category: 'Language', color: '#F1FA8C', icon: 'JS' },
  { name: 'HTML5', level: 'Beginner', description: 'Web page structure and semantic markup.', category: 'Web', color: '#FF79C6', icon: 'HT' },
  { name: 'CSS3', level: 'Beginner', description: 'Styling, layouts, and responsive design.', category: 'Web', color: '#8B5CF6', icon: 'CS' },
  { name: 'Django / FastAPI', level: 'Learning', description: 'Python web frameworks for building REST APIs and backends.', category: 'Framework', color: '#39FF14', icon: 'Dj' },
  { name: 'Flask', level: 'Learning', description: 'Lightweight Python web framework for microservices.', category: 'Framework', color: '#39FF14', icon: 'Fl' },
  { name: 'Pandas / NumPy', level: 'Learning', description: 'Data manipulation and numerical computing in Python.', category: 'Library', color: '#00D4FF', icon: 'Pd' },
  { name: 'BeautifulSoup', level: 'Hands-on', description: 'Web scraping — extracting structured data from HTML.', category: 'Library', color: '#00D4FF', icon: 'BS' },
  { name: 'GitHub Actions', level: 'Hands-on', description: 'CI/CD pipelines, scheduled cron jobs, automated deployments.', category: 'DevOps', color: '#FF79C6', icon: 'GA' },
  { name: 'Git', level: 'Beginner', description: 'Version control and code management.', category: 'Tool', color: '#FF79C6', icon: 'Gt' },
  { name: 'REST APIs', level: 'Hands-on', description: 'Fetching, integrating, and building REST API endpoints.', category: 'Concept', color: '#8B5CF6', icon: 'API' },
  { name: 'OOPs', level: 'Learning', description: 'Object-oriented programming principles and design patterns.', category: 'Concept', color: '#F1FA8C', icon: 'OO' },
];

export default function SkillsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">04 — Skills</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground tracking-tight mb-4">
            Technical <span className="gradient-text-cyan italic">Stack</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-lg">
            <span className="syntax-comment">// Real skills from hands-on projects. Learning every day.</span>
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className={`reveal stagger-${(i % 9) + 1} terminal-window tilt-card cursor-default group`}
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="terminal-header justify-between">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                  <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                  <div className="terminal-dot" style={{ background: '#27C93F' }} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{skill.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300"
                    style={{
                      background: hovered === skill.name ? `${skill.color}20` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${hovered === skill.name ? skill.color + '50' : 'rgba(255,255,255,0.06)'}`,
                      color: skill.color,
                      boxShadow: hovered === skill.name ? `0 0 20px ${skill.color}30` : 'none',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-full border"
                    style={{
                      borderColor: `${skill.color}40`,
                      color: skill.color,
                      background: `${skill.color}10`,
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{skill.name}</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">{skill.description}</p>

                <div
                  className="mt-4 pt-4 border-t transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: `${skill.color}20`,
                    maxHeight: hovered === skill.name ? '40px' : '0px',
                    opacity: hovered === skill.name ? 1 : 0,
                  }}
                >
                  <p className="font-mono text-xs" style={{ color: skill.color }}>
                    → Used in real projects
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="syntax-comment">// More skills being added as I build. Check back soon!</span>
          </p>
        </div>
      </div>
    </section>
  );
}