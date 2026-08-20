'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import BrandMark from '../app/components/BrandMark';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Workspace', href: '#workspace' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Work With Me', href: '/freelance' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isFreelance = pathname === '/freelance';
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(isFreelance ? 'work' : 'home');
  const [menuOpen, setMenuOpen] = useState(false);

  const resolveHref = (href: string) => {
    if (!href.startsWith('#')) return href;
    return isFreelance ? `/freelance${href}` : href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = isFreelance
        ? ['services', 'work', 'process', 'contact']
        : NAV_ITEMS.filter((item) => item.href.startsWith('#')).map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFreelance]);

  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener('scroll', close, { once: true });
      return () => window.removeEventListener('scroll', close);
    }
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className={`mx-4 rounded-2xl transition-all duration-500 md:mx-8 ${scrolled ? 'glass border border-border/60' : ''}`}>
          <nav className="flex h-14 items-center justify-between px-5 md:px-8">
            <a href={isFreelance ? '/freelance' : '#home'} aria-label="Hariom Builds home" className="transition-opacity hover:opacity-80">
              <BrandMark compact />
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const href = isFreelance && item.label === 'Work With Me' ? '/freelance' : resolveHref(item.href);
                const isActive = isFreelance
                  ? (item.label === 'Work With Me' || (item.href.startsWith('#') && activeSection === item.href.slice(1)))
                  : (!item.href.startsWith('#') ? pathname === item.href : activeSection === item.href.slice(1));
                return (
                  <a key={item.label} href={href} className={`relative rounded-lg px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                    {isActive && <span className="absolute inset-0 rounded-lg border border-primary/20 bg-primary/10" />}
                    <span className="relative">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <a href={isFreelance ? '#contact' : '#contact'} className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 font-mono text-xs font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg md:flex">
                Let&apos;s Connect
              </a>
              <button className="group flex flex-col gap-1.5 p-2 lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
                <div className="h-px w-5 bg-foreground transition-all duration-300" style={{ transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
                <div className="h-px w-4 bg-foreground transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
                <div className="h-px w-5 bg-foreground transition-all duration-300" style={{ transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} style={{ background: 'rgba(10,11,14,0.96)', backdropFilter: 'blur(20px)' }}>
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {NAV_ITEMS.map((item, i) => {
            const href = isFreelance && item.label === 'Work With Me' ? '/freelance' : resolveHref(item.href);
            return <a key={item.label} href={href} onClick={() => setMenuOpen(false)} className="font-display text-3xl font-light text-foreground transition-colors duration-300 hover:text-primary" style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms', transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0, transition: `color 0.3s, transform 0.4s ${i * 50}ms, opacity 0.4s ${i * 50}ms` }}>{item.label}</a>;
          })}
          <a href={isFreelance ? '#contact' : '#contact'} onClick={() => setMenuOpen(false)} className="mt-4 rounded-full bg-primary px-8 py-3 font-mono text-sm font-semibold tracking-wide text-primary-foreground">Let&apos;s Connect</a>
        </div>
      </div>
    </>
  );
}
