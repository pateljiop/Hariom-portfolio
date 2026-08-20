import React from 'react';

const BRAND_ASSETS = 'https://raw.githubusercontent.com/pateljiop/pateljiop/main/';

export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? '' : 'py-1'}`} aria-label="Hariom Builds brand">
      <img
        src={`${BRAND_ASSETS}03_Minimal_Logo.png`}
        alt="Hariom Builds"
        className={`${compact ? 'h-10 w-10' : 'h-12 w-12'} shrink-0 object-contain`}
      />
      {!compact && (
        <div className="leading-none">
          <div className="font-display text-base font-bold tracking-tight text-foreground">Hariom</div>
          <div className="mt-1 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">Hariom Builds</div>
        </div>
      )}
    </div>
  );
}
