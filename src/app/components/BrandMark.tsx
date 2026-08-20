import React from 'react';

export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? '' : 'py-1'}`} aria-label="Hariom Patel brand">
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="hp-brand-ring" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#00D2FF" />
            <stop offset="0.55" stopColor="#007BFF" />
            <stop offset="1" stopColor="#FF2055" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="#0D0F1A" stroke="url(#hp-brand-ring)" strokeWidth="3" />
        <path d="M16 31c0-13 7-21 16-21s16 8 16 21" fill="none" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
        <path d="M13 27c0-6 4-10 8-10v18c-4 0-8-3-8-8Zm38 0c0-6-4-10-8-10v18c4 0 8-3 8-8Z" fill="#111827" stroke="#FF2055" strokeWidth="1.5" />
        <circle cx="32" cy="33" r="16" fill="#F8FAFC" />
        <circle cx="24" cy="28" r="5" fill="#111827" /><circle cx="40" cy="28" r="5" fill="#111827" />
        <circle cx="25" cy="27" r="1.5" fill="#00D2FF" /><circle cx="39" cy="27" r="1.5" fill="#00D2FF" />
        <path d="M28 37c2 2 6 2 8 0" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 46h14" stroke="#FF2055" strokeWidth="3" strokeLinecap="round" />
        <text x="32" y="52" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="800" fill="#fff">HP</text>
      </svg>
      {!compact && (
        <div className="leading-none">
          <div className="font-display text-base font-bold tracking-tight text-foreground">Hariom <span className="text-primary">Patel</span></div>
          <div className="mt-1 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">Freelance Web Developer</div>
        </div>
      )}
    </div>
  );
}
