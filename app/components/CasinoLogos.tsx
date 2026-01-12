import React from 'react';

export const logos = {
  voodooDreams: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="80" fill="#1a1a2e"/>
      <circle cx="40" cy="40" r="18" fill="#00d4ff" opacity="0.2"/>
      <circle cx="40" cy="40" r="12" fill="#00d4ff" opacity="0.4"/>
      <text x="75" y="38" fontFamily="Impact, Arial Black" fontSize="22" fill="#00d4ff" fontWeight="bold">VOODOO</text>
      <text x="75" y="58" fontFamily="Arial" fontSize="14" fill="#00d4ff" letterSpacing="2">DREAMS</text>
    </svg>
  ),
  pubCasino: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="80" fill="#6b4423"/>
      <rect x="10" y="10" width="180" height="60" fill="#8b6f47" rx="4"/>
      <text x="100" y="48" fontFamily="Georgia, serif" fontSize="38" fill="#fff4e6" textAnchor="middle" fontWeight="bold">PUB</text>
      <text x="100" y="68" fontFamily="Georgia, serif" fontSize="11" fill="#fff4e6" textAnchor="middle" letterSpacing="3">CASINO</text>
      <rect x="15" y="15" width="170" height="50" fill="none" stroke="#fff4e6" strokeWidth="2" rx="2"/>
    </svg>
  ),
  ladbrokes: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ladbrokesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#dc2626'}}/>
          <stop offset="100%" style={{stopColor: '#991b1b'}}/>
        </linearGradient>
      </defs>
      <rect width="200" height="80" fill="url(#ladbrokesGrad)"/>
      <text x="100" y="52" fontFamily="Arial Black, sans-serif" fontSize="28" fill="#ffffff" textAnchor="middle" fontWeight="900">LADBROKES</text>
    </svg>
  ),
  midnite: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="80" fill="#0a0a0a"/>
      <circle cx="30" cy="40" r="20" fill="#ffffff" opacity="0.1"/>
      <circle cx="170" cy="40" r="20" fill="#ffffff" opacity="0.1"/>
      <text x="100" y="52" fontFamily="Arial Black, sans-serif" fontSize="32" fill="#ffffff" textAnchor="middle" fontWeight="900">MIDNITE</text>
      <rect x="5" y="5" width="190" height="70" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
    </svg>
  ),
  spinland: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="spinlandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#7c3aed'}}/>
          <stop offset="100%" style={{stopColor: '#c026d3'}}/>
        </linearGradient>
      </defs>
      <rect width="200" height="80" fill="url(#spinlandGrad)"/>
      <circle cx="30" cy="30" r="15" fill="#ffffff" opacity="0.2">
        <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="3s" repeatCount="indefinite"/>
      </circle>
      <text x="100" y="52" fontFamily="Arial Black, sans-serif" fontSize="32" fill="#ffffff" textAnchor="middle" fontWeight="bold">Spinland</text>
    </svg>
  ),
  karamba: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="80" fill="#00d4ff"/>
      <path d="M20,60 Q30,20 40,60 T60,60" fill="none" stroke="#1e293b" strokeWidth="3"/>
      <text x="100" y="52" fontFamily="Comic Sans MS, Arial Rounded MT Bold, sans-serif" fontSize="34" fill="#1e293b" textAnchor="middle" fontWeight="bold">KARAMBA</text>
    </svg>
  ),
  coral: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="coralGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981'}}/>
          <stop offset="100%" style={{stopColor: '#059669'}}/>
        </linearGradient>
      </defs>
      <rect width="200" height="80" fill="url(#coralGrad)"/>
      <circle cx="180" cy="15" r="8" fill="#ffffff" opacity="0.3"/>
      <text x="25" y="55" fontFamily="Arial Black, sans-serif" fontSize="48" fill="#ffffff" fontWeight="900">C</text>
      <text x="70" y="55" fontFamily="Arial, sans-serif" fontSize="36" fill="#ffffff" fontWeight="bold">ORAL</text>
    </svg>
  ),
  lottogo: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="lottogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#fbbf24'}}/>
          <stop offset="100%" style={{stopColor: '#f59e0b'}}/>
        </linearGradient>
      </defs>
      <rect width="200" height="80" fill="url(#lottogoGrad)"/>
      <circle cx="30" cy="25" r="8" fill="#1e293b" opacity="0.8"/>
      <circle cx="50" cy="25" r="8" fill="#1e293b" opacity="0.8"/>
      <circle cx="70" cy="25" r="8" fill="#1e293b" opacity="0.8"/>
      <text x="30" y="23" fontFamily="Arial Black" fontSize="11" fill="#fbbf24" textAnchor="middle" fontWeight="bold">7</text>
      <text x="50" y="23" fontFamily="Arial Black" fontSize="11" fill="#fbbf24" textAnchor="middle" fontWeight="bold">3</text>
      <text x="70" y="23" fontFamily="Arial Black" fontSize="11" fill="#fbbf24" textAnchor="middle" fontWeight="bold">9</text>
      <text x="100" y="60" fontFamily="Arial Black, sans-serif" fontSize="28" fill="#1e293b" textAnchor="middle" fontWeight="bold">LottoGo</text>
    </svg>
  ),
  mrq: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="mrqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#3b82f6'}}/>
          <stop offset="100%" style={{stopColor: '#1d4ed8'}}/>
        </linearGradient>
      </defs>
      <rect width="200" height="80" fill="url(#mrqGrad)"/>
      <circle cx="170" cy="20" r="12" fill="#ffffff" opacity="0.2"/>
      <text x="100" y="58" fontFamily="Arial Black, sans-serif" fontSize="48" fill="#ffffff" textAnchor="middle" fontWeight="900">MrQ</text>
    </svg>
  ),
  netbet: (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="netbetGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#dc2626'}}/>
          <stop offset="50%" style={{stopColor: '#b91c1c'}}/>
          <stop offset="100%" style={{stopColor: '#991b1b'}}/>
        </linearGradient>
      </defs>
      <rect width="200" height="80" fill="url(#netbetGrad)"/>
      <path d="M10,10 L20,20 M190,10 L180,20" stroke="#ffffff" strokeWidth="2" opacity="0.3"/>
      <text x="100" y="52" fontFamily="Arial Black, sans-serif" fontSize="36" fill="#ffffff" textAnchor="middle" fontWeight="900">NetBet</text>
    </svg>
  ),
};

export type LogoKey = keyof typeof logos;
