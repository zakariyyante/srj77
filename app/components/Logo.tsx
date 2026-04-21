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
        aria-label="SweetSlots UK logo"
      >
        <defs>
          <linearGradient id="sweetPink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="55%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="sweetGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="5"
          width="28"
          height="28"
          rx="8"
          fill="rgba(255,255,255,0.03)"
          stroke="url(#sweetPink)"
          strokeWidth="1.5"
        />
        <path
          d="M19 9.2c-4.2 0-7.6 3.4-7.6 7.6 0 4.8 4.9 7.2 7.6 12 2.7-4.8 7.6-7.2 7.6-12 0-4.2-3.4-7.6-7.6-7.6z"
          fill="url(#sweetPink)"
          opacity="0.95"
        />
        <path
          d="M12.4 16.8c2.6 2.6 6.6 1.8 9.2-.8 2.6-2.6 3.4-6.6.8-9.2"
          stroke="url(#sweetGlow)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[16px] font-extrabold tracking-tight gold-text">
          SweetSlots
        </span>
        <span className="text-[10px] font-bold tracking-[0.28em] text-[color:var(--muted)] uppercase">
          UK
        </span>
      </div>
    </div>
  );
}
