import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#040314] border-t border-white/10 py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Logo />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h5 className="text-white/80 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Quick Links</h5>
            <ul className="space-y-1 sm:space-y-2 text-white/55 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#casinos" className="hover:text-cyan-400 transition-colors">Casinos</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white/80 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Legal</h5>
            <ul className="space-y-1 sm:space-y-2 text-white/55 text-xs sm:text-sm">
              <li><a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-cyan-400 transition-colors">Terms</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="text-white/80 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Disclaimer</h5>
            <p className="text-white/55 text-xs sm:text-sm leading-relaxed">
              SweetSlots UK is an editorial comparison site. Always verify UKGC licensing and play
              responsibly—only spend what you can afford.
            </p>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-10">
          <p className="text-center text-white/70 text-xs sm:text-sm uppercase tracking-[0.3em] font-extrabold">
            Play responsibly
          </p>
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Image
                src="/18plus.png"
                alt="18+ only"
                width={44}
                height={44}
                className="h-10 w-auto sm:h-11"
                priority
              />
              <a href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer" aria-label="Visit GambleAware">
                <Image
                  src="/gambleaware.png"
                  alt="GambleAware"
                  width={220}
                  height={56}
                  className="h-9 w-auto sm:h-10"
                />
              </a>
              <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" aria-label="Visit GamCare">
                <Image
                  src="/gamcare.png"
                  alt="GamCare"
                  width={200}
                  height={56}
                  className="h-9 w-auto sm:h-10"
                />
              </a>
              <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" aria-label="Visit GAMSTOP">
                <Image
                  src="/gamestop.png"
                  alt="GAMSTOP"
                  width={210}
                  height={56}
                  className="h-9 w-auto sm:h-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 sm:pt-6 text-center mt-6">
          <p className="text-white/45 text-xs sm:text-sm">
            &copy; 2026 sweetslotsuk.com. For informational purposes only. 18+ only. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
