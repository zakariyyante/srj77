'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Casinos', href: '/#casinos' },
    { name: 'Guide', href: '/#guide' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#050414]/90 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3.5">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white/70 hover:text-white transition-colors font-semibold tracking-wide text-sm px-4 py-2 rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#casinos"
              className="ml-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-extrabold text-[#050414] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-300 hover:opacity-90 transition-opacity"
            >
              Top picks
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-5 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/75 hover:text-white transition-colors font-semibold py-2.5 px-3 rounded-xl hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#casinos"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-extrabold text-[#050414] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-300"
              >
                See top picks
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
