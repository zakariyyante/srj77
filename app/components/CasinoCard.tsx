'use client';

import { Casino } from '../data/casinos';
import { logos } from './CasinoLogos';
import Image from 'next/image';
import { track } from '@vercel/analytics';

interface CasinoCardProps {
  casino: Casino;
  rank?: number;
  badge?: 'gold' | 'silver' | 'bronze' | 'fourth' ;
  isOnline?: boolean;
}

export default function CasinoCard({ casino, rank, badge, isOnline = false }: CasinoCardProps) {
  const handleCasinoClick = () => {
    if (casino.isMobile) {
      track('Casino Click', {
        casino: casino.name
      });
    }
  };
  const handleCardClick = () => {
    handleCasinoClick();
    window.open(casino.url, '_blank', 'noopener,noreferrer');
  };
  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      return (
        <Image 
          src={casino.logo} 
          alt={`${casino.name} Casino`} 
          width={260} 
          height={180} 
          className="h-full w-full object-contain"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  const badgeLabel = badge === 'gold' ? "Fast Withdrawal" : badge === 'silver' ? 'Most Popular' : badge === 'bronze' ? 'Trusted/Licensed' : null;

  return (
    <article
      className="group relative overflow-hidden casino-card-bg rounded-2xl p-5 shadow-xl transition-all duration-300 cursor-pointer border border-blue-500/20 hover:border-cyan-400/40 casino-glow gold-shimmer"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 rounded-br-2xl" />

      {isOnline && badge && (
        <span className="absolute top-0 left-0 rounded-br-xl rounded-tl-2xl px-3 py-1.5 text-[11px] font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
          {badgeLabel}
        </span>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-40 h-28 sm:w-48 sm:h-32 flex items-start justify-start [&>svg]:text-white [&>svg]:fill-white [&>svg]:w-full [&>svg]:h-full">
          {renderLogo()}
        </div>
        <div className="text-right">
          <div className="gold-text text-3xl sm:text-4xl font-extrabold leading-none">
            {casino.rating.toFixed(1)}
          </div>
          <div className="text-cyan-400 text-sm tracking-tight">★★★★★</div>
        </div>
      </div>

      <div className="text-center mb-4 rounded-xl bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 border border-blue-500/15 px-4 py-3">
        <div className="text-base sm:text-lg font-extrabold text-blue-100 tracking-tight">
          {casino.bonus}
        </div>
      </div>

      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          event.stopPropagation();
          handleCasinoClick();
        }}
        className="block w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-extrabold py-3 px-4 rounded-xl text-base uppercase shadow-lg transition-all duration-300 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-500 hover:shadow-blue-500/25 flex items-center justify-center gap-2 tracking-wide"
      >
         Play Now
      </a>
      <div className="mt-2 text-center text-[11px] text-blue-200/40">
        T&amp;Cs apply.
      </div>
    </article>
  );
}
