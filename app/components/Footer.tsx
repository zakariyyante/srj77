'use client';

import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
  const quickLinks = [
    { label: 'Home',           href: '/' },
    { label: 'Casino Reviews', href: '/#casinos' },
    { label: 'How We Rate',    href: '/#guide' },
    { label: 'About Us',       href: '/#about' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy',   href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact Us',       href: '/#contact' },
  ];

  const helpLinks = [
    { label: 'BeGambleAware', href: 'https://www.begambleaware.org',  note: 'begambleaware.org' },
    { label: 'GamCare',       href: 'https://www.gamcare.org.uk',     note: '0808 8020 133' },
    { label: 'GAMSTOP',       href: 'https://www.gamstop.co.uk',      note: 'gamstop.co.uk' },
  ];

  return (
    <footer id="contact" className="border-t" style={{ borderColor: 'rgba(244,185,66,0.10)', background: '#030508' }}>
      <div className="container mx-auto px-4 max-w-6xl py-10 sm:py-14">

        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-3 text-white/35 text-xs leading-relaxed max-w-[200px]">
              Independent UK casino comparisons. Editorial picks only. UKGC-verified.
            </p>
          </div>

          <div>
            <h5
              className="font-black mb-3 text-[10px] uppercase tracking-[0.18em]"
              style={{ color: 'rgba(244,185,66,0.55)' }}
            >
              Navigate
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/40 text-sm transition-colors"
                    style={{ ['--tw-hover-color' as string]: '#f4b942' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f4b942')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5
              className="font-black mb-3 text-[10px] uppercase tracking-[0.18em]"
              style={{ color: 'rgba(244,185,66,0.55)' }}
            >
              Legal
            </h5>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/40 text-sm transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f4b942')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5
              className="font-black mb-3 text-[10px] uppercase tracking-[0.18em]"
              style={{ color: 'rgba(244,185,66,0.55)' }}
            >
              Get Help
            </h5>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-0.5 group"
                  >
                    <span
                      className="text-white/40 text-sm group-hover:text-amber-400 transition-colors"
                    >
                      {l.label}
                    </span>
                    <span className="text-white/20 text-[11px]">{l.note}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-white/25 text-[11px]">Helpline: 0808 8020 133</p>
          </div>
        </div>

        <div className="section-rule mb-8" />

        {/* Responsible gambling badges */}
        <div className="mb-8">
          <p
            className="text-center text-[10px] uppercase tracking-[0.35em] font-black mb-4"
            style={{ color: 'rgba(244,185,66,0.40)' }}
          >
            Safer Gambling
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
            <Image
              src="/18plus.png"
              alt="18+ only"
              width={40}
              height={40}
              className="h-9 w-auto opacity-50 hover:opacity-90 transition-opacity"
              priority
            />
            <a href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer" aria-label="GambleAware">
              <Image
                src="/gambleaware.png"
                alt="GambleAware"
                width={200}
                height={50}
                className="h-8 w-auto opacity-50 hover:opacity-90 transition-opacity"
              />
            </a>
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" aria-label="GamCare">
              <Image
                src="/gamcare.png"
                alt="GamCare"
                width={180}
                height={50}
                className="h-8 w-auto opacity-50 hover:opacity-90 transition-opacity"
              />
            </a>
            <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" aria-label="GAMSTOP">
              <Image
                src="/gamestop.png"
                alt="GAMSTOP"
                width={190}
                height={50}
                className="h-8 w-auto opacity-50 hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>

        <div className="section-rule mb-6" />

        {/* Disclaimer + copyright */}
        <div className="text-center space-y-2">
          <p className="text-white/25 text-xs leading-relaxed max-w-2xl mx-auto">
            SweetSlots UK is an independent editorial comparison service. We may earn a commission
            when you register via our links—this does not influence our rankings or reviews. Always
            verify UKGC licensing before depositing. Gambling can be addictive; only stake what
            you can afford to lose.
          </p>
          <p className="text-white/15 text-xs">
            &copy; 2026 sweetslotsuk.com &nbsp;&middot;&nbsp; 18+ only &nbsp;&middot;&nbsp; For informational purposes only
          </p>
        </div>
      </div>
    </footer>
  );
}
