'use client';
import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    // Progress bars
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('[data-width]');
            fills.forEach((fill) => {
              const el = fill as HTMLElement;
              const width = el.getAttribute('data-width') || '0';
              setTimeout(() => {
                el.style.width = width;
              }, 300);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const progressSections = document.querySelectorAll('[data-progress-section]');
    progressSections.forEach((el) => progressObserver.observe(el));

    return () => {
      observer.disconnect();
      progressObserver.disconnect();
    };
  }, []);

  return null;
}