interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="UK Casino Win logo"
      >
        <defs>
          <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#fcd34d" />
            <stop offset="50%"  stopColor="#f4b942" />
            <stop offset="100%" stopColor="#d4920d" />
          </linearGradient>
          <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#f4b942" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>
        </defs>

        {/* Outer card/shield shape */}
        <rect
          x="4"
          y="4"
          width="30"
          height="30"
          rx="8"
          fill="rgba(244,185,66,0.06)"
          stroke="url(#logoGold)"
          strokeWidth="1.5"
        />

        {/* Crown */}
        <path
          d="M10 24 L13 15 L19 21 L25 15 L28 24 Z"
          fill="url(#logoGold)"
          opacity="0.95"
        />

        {/* Crown base */}
        <rect x="10" y="24" width="18" height="3" rx="1.5" fill="url(#logoGold)" opacity="0.85" />

        {/* Center gem */}
        <circle cx="19" cy="18" r="2" fill="url(#logoGlow)" opacity="0.9" />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-tight vd-gold-text">
          UKCasinoWin
        </span>
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: 'rgba(244,185,66,0.45)' }}>
          .com
        </span>
      </div>
    </div>
  );
}
