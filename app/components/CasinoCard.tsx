import { Casino } from '../data/casinos';
import { Star } from 'lucide-react';
import { logos } from './CasinoLogos';

interface CasinoCardProps {
  casino: Casino;
}

export default function CasinoCard({ casino }: CasinoCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-3 sm:p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 w-full sm:w-28 lg:w-40">
            <div className="w-full aspect-[5/2]">
              {logos[casino.logo]}
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 lg:gap-4">
            {/* Bonus Text */}
            <div className="flex-1 min-w-0">
              {casino.badge && (
                <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold bg-orange-500 text-white rounded mb-1 sm:mb-2">
                  {casino.badge}
                </span>
              )}
              <p className="text-yellow-400 font-semibold text-xs sm:text-sm lg:text-lg leading-snug">
                {casino.bonus}
              </p>
            </div>

            {/* Rating & CTA */}
            <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-2 justify-between sm:justify-start">
              {/* Stars */}
              <div className="flex flex-col items-center sm:items-end gap-0.5 sm:gap-1">
                {renderStars(casino.rating)}
                <span className="text-emerald-400 text-xl sm:text-2xl lg:text-3xl font-bold">
                  {casino.rating.toFixed(1)}
                </span>
              </div>

              {/* CTA Button */}
              <a
                href={casino.url}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-2 px-5 sm:py-2.5 sm:px-6 lg:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm lg:text-base whitespace-nowrap"
              >
                GET BONUS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
