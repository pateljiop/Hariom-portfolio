'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '../components/ui/AppLogo';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Workspace', href: '#workspace' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = NAV_ITEMS?.map((item) => item?.href?.slice(1));
      for (let i = sections?.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections?.[i]);
        if (el) {
          const rect = el?.getBoundingClientRect();
          if (rect?.top <= 120) {
            setActiveSection(sections?.[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener('scroll', close, { once: true });
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${scrolled ? 'glass border border-border/60' : ''}`}>
          <nav className="px-6 md:px-8 h-14 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <AppLogo size={32} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
              <span className="font-mono font-semibold text-sm text-foreground tracking-wide hidden sm:block">
                hariom<span className="text-primary">.</span>dev
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS?.map((item) => {
                const sectionId = item?.href?.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item?.label}
                    href={item?.href}
                    className={`relative px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-300 rounded-lg ${
                      isActive
                        ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                      />
                    )}
                    <span className="relative">{item?.label}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wide hover:shadow-lg transition-all duration-300 glow-cyan"
              >
                Let&apos;s Connect
              </a>

              {/* Hamburger */}
              <button
                className="lg:hidden flex flex-col gap-1.5 p-2 group"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <div
                  className="w-5 h-px bg-foreground transition-all duration-300"
                  style={{ transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }}
                />
                <div
                  className="w-4 h-px bg-foreground transition-all duration-300"
                  style={{ opacity: menuOpen ? 0 : 1 }}
                />
                <div
                  className="w-5 h-px bg-foreground transition-all duration-300"
                  style={{ transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,11,14,0.95)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {NAV_ITEMS?.map((item, i) => (
            <a
              key={item?.label}
              href={item?.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-light text-foreground hover:text-primary transition-colors duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transition: `color 0.3s, transform 0.4s ${i * 50}ms, opacity 0.4s ${i * 50}ms`,
              }}
            >
              {item?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-primary text-primary-foreground px-8 py-3 rounded-full font-mono text-sm font-semibold tracking-wide"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </>
  );
}
