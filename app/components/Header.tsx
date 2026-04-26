'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home',       href: '/' },
    { name: 'Casinos',    href: '/#casinos' },
    { name: 'Guide',      href: '/#guide' },
    { name: 'About',      href: '/#about' },
    { name: 'Contact',    href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Announcement bar — hidden on mobile */}
      <div className="hidden sm:block border-b border-amber-400/[0.10] bg-[#06090f]">
        <p className="text-center py-1 text-[10px] tracking-wide text-amber-400/45">
          <span className="text-emerald-400/60">✓</span>&nbsp; UKGC-licensed only
          &nbsp;·&nbsp;
          <span className="text-amber-400/60">★</span>&nbsp; 100% independent
          &nbsp;·&nbsp;
          <span className="text-amber-400/60">⚡</span>&nbsp; Updated April 2026
        </p>
      </div>

      {/* Main bar */}
      <div className="bg-[#04060c]/96 backdrop-blur-xl border-b border-white/[0.07]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">

            <a href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <Logo />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/45 hover:text-white transition-colors text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/[0.04] tracking-wide group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-px bg-amber-400/60 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Gold CTA */}
            <a
              href="/#casinos"
              className="hidden lg:inline-flex items-center justify-center gap-1.5 vd-btn-gold vd-btn-shine rounded-lg px-4 py-2 text-xs font-black tracking-wide shadow-lg shadow-amber-500/20"
            >
              Top Picks &rarr;
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.06]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/[0.06] bg-[#04060c]/98">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/55 hover:text-white transition-colors font-medium py-2.5 px-3 rounded-xl hover:bg-white/[0.05] text-sm"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/#casinos"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-3 flex items-center justify-center rounded-xl px-4 py-3 text-sm font-black vd-btn-gold"
                >
                  See Top Picks &rarr;
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
