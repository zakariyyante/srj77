'use client';

import Image from 'next/image';
import { track } from '@vercel/analytics';
import { Casino } from '../data/casinos';
import { logos } from './CasinoLogos';

interface DesktopCasinoCardProps {
  casino: Casino;
  rank?: number;
  badge?: 'gold' | 'silver' | 'bronze';
}

const RANK_META: Record<number, { color: string; bg: string; border: string; label: string }> = {
  1: {
    color: '#f4b942',
    bg: 'rgba(244,185,66,0.09)',
    border: 'rgba(244,185,66,0.35)',
    label: '#1 Top Pick',
  },
  2: {
    color: '#94a3b8',
    bg: 'rgba(148,163,184,0.09)',
    border: 'rgba(148,163,184,0.3)',
    label: '#2 Editors\' Choice',
  },
  3: {
    color: '#c97c2c',
    bg: 'rgba(201,124,44,0.09)',
    border: 'rgba(201,124,44,0.3)',
    label: '#3 Highly Rated',
  },
};

const STARS = (rating: number) => {
  const full  = Math.floor(rating / 2);
  const empty = 5 - full;
  return '★'.repeat(full) + '☆'.repeat(empty);
};

export default function DesktopCasinoCard({ casino, rank }: DesktopCasinoCardProps) {
  const rankMeta = rank && rank <= 3 ? RANK_META[rank] : null;

  const handleClick = () => {
    track('Casino Click', { casino: casino.name, source: 'desktop_card' });
    window.open(casino.url, '_blank', 'noopener,noreferrer');
  };

  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      return (
        <Image
          src={casino.logo}
          alt={`${casino.name} logo`}
          width={220}
          height={110}
          className="h-full w-full object-contain"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  return (
    <article
      className="vd-card group rounded-2xl overflow-hidden cursor-pointer relative flex flex-col"
      role="link"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); }
      }}
    >
      {/* Top accent line */}
      {rankMeta && (
        <div
          className="h-[3px] w-full flex-shrink-0"
          style={{ background: `linear-gradient(90deg, ${rankMeta.color}, transparent)` }}
        />
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Rank badge */}
        {rankMeta && (
          <div
            className="inline-flex items-center gap-1.5 self-start mb-3 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider"
            style={{
              color: rankMeta.color,
              background: rankMeta.bg,
              border: `1px solid ${rankMeta.border}`,
            }}
          >
            <span style={{ color: rankMeta.color }}>◆</span>
            {rankMeta.label}
          </div>
        )}

        {/* Logo + rating row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-40 h-24 bg-white/[0.04] rounded-xl flex items-center justify-center p-2.5 flex-shrink-0 [&>svg]:w-full [&>svg]:h-full border border-white/[0.06]">
            {renderLogo()}
          </div>

          <div className="text-right pt-1">
            <div className="text-4xl font-black leading-none vd-gold-text">
              {casino.rating.toFixed(1)}
            </div>
            <div className="text-amber-400 text-sm mt-1 tracking-wider">
              {STARS(casino.rating)}
            </div>
            {casino.votes && (
              <div className="text-white/30 text-[11px] mt-1">
                {casino.votes.toLocaleString()} reviews
              </div>
            )}
          </div>
        </div>

        {/* Bonus highlight */}
        <div className="rounded-xl mb-4 px-4 py-3" style={{
          background: 'rgba(244,185,66,0.06)',
          border: '1px solid rgba(244,185,66,0.18)',
        }}>
          <div className="text-amber-400/60 text-[10px] font-black uppercase tracking-[0.15em] mb-1">
            Welcome Bonus
          </div>
          <div className="text-white font-extrabold text-sm sm:text-base leading-snug">
            {casino.bonus}
          </div>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="vd-trust-pill">✓ UKGC Licensed</span>
          <span className="vd-trust-pill">✓ Fast Payouts</span>
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold"
            style={{
              background: 'rgba(91,156,246,0.08)',
              border: '1px solid rgba(91,156,246,0.22)',
              color: '#5b9cf6',
            }}
          >
            ⚡ Mobile Friendly
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <a
          href={casino.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            track('Casino Click', { casino: casino.name, source: 'desktop_card_cta' });
          }}
          className="vd-btn-gold vd-btn-shine block w-full text-center rounded-xl py-3.5 px-4 text-sm font-black uppercase tracking-widest shadow-lg"
          style={{ boxShadow: '0 4px 20px rgba(244,185,66,0.18)' }}
        >
          Claim Bonus &rarr;
        </a>
        <p className="mt-2 text-center text-[10px] text-white/25">
          T&amp;Cs apply &middot; 18+ only &middot; Please gamble responsibly
        </p>
      </div>
    </article>
  );
}
