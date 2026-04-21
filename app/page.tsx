import Image from 'next/image';
import CasinoCard from './components/CasinoCard';
import Header from './components/Header';
import Logo from './components/Logo';
import MobileCasinoModal from './components/MobileCasinoModal';
import ExclusiveOfferPopup from './components/ExclusiveOfferPopup';
import { casinos } from './data/casinos';
import { headers } from 'next/headers';

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const gclid = resolvedSearchParams?.gclid as string | undefined;
  const hasGclid = !!gclid;

  const isOnline= hasGclid;

  const mobileCasinos = casinos.filter(casino => casino.isMobile === true);
  const regularCasinos = casinos.filter(casino => !casino.isMobile);
  const exclusiveCasino = casinos.find(casino => casino.name === 'Basswin') || mobileCasinos[0];
  
  return (
    <div className="min-h-screen bg-[#030b1a] felt-texture">
      <MobileCasinoModal mobileCasinos={mobileCasinos} isOnline={isOnline} gclidValue={gclid} />
      
      {/*<ExclusiveOfferPopup casino={exclusiveCasino} isOnline={isOnline} gclidValue={gclid} countryCode={countryCode} />*/}
      
      <Header />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-6 pb-5 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-10 text-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl sm:text-8xl opacity-[0.045] text-rose-300 rotate-12 select-none">♠</div>
          <div className="absolute top-20 right-16 text-5xl sm:text-7xl opacity-[0.045] text-cyan-300 -rotate-12 select-none">♥</div>
          <div className="absolute bottom-10 left-1/4 text-5xl sm:text-7xl opacity-[0.045] text-fuchsia-300 rotate-6 select-none">♦</div>
          <div className="absolute bottom-5 right-1/4 text-6xl sm:text-8xl opacity-[0.045] text-cyan-300 -rotate-6 select-none">♣</div>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="inline-block mb-4 sm:mb-5 px-5 py-2 rounded-full bg-gradient-to-r from-rose-500/10 via-fuchsia-500/10 to-cyan-500/10 border border-white/10">
            <span className="text-xs sm:text-sm font-bold text-cyan-200 uppercase tracking-wider">
              SweetSlots UK • Updated for 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-5 leading-tight">
            Find the UK&apos;s <span className="gold-text">best-value</span> casino sites
          </h1>
          <p className="text-base sm:text-lg text-white/65 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Independent picks focused on UKGC licensing, strong welcome offers, quick withdrawals, and a great game mix.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <div className="flex items-center gap-2.5 bg-white/5 rounded-full px-4 sm:px-5 py-2.5 border border-white/10">
              <span className="text-cyan-300 text-lg">♠</span>
              <span className="text-white/75 text-sm font-semibold">UKGC licensed</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/5 rounded-full px-4 sm:px-5 py-2.5 border border-white/10">
              <span className="text-rose-300 text-lg">★</span>
              <span className="text-white/75 text-sm font-semibold">Editor picks</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/5 rounded-full px-4 sm:px-5 py-2.5 border border-white/10">
              <span className="text-fuchsia-300 text-lg">♦</span>
              <span className="text-white/75 text-sm font-semibold">Fast payouts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Cards Section */}
      <section id="casinos" className="container mx-auto px-4 pb-16">
        <div className="mb-3 sm:mb-5 lg:mb-8 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold gold-text mb-2 sm:mb-4 tracking-wide">
            Editors&apos; top selections
          </h3>
          <p className="text-sm sm:text-base text-white/55">
            Refreshed regularly and ranked by payout speed, bonus value, and player feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {regularCasinos.map((casino, index) => (
            <CasinoCard
              key={casino.id}
              casino={casino}
              rank={index + 1}
              badge={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : undefined}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 lg:p-6 max-w-6xl mx-auto">
          <p className="text-white/60 text-xs sm:text-sm text-center">
            <strong className="text-white/80">New customers only.</strong> 18+. T&Cs apply. BeGambleAware.org. Please play responsibly.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#06061b] py-8 sm:py-12 lg:py-16 border-y border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 sm:mb-6 lg:mb-8 text-center">
            How we rank UK casinos
          </h3>
          
          <div className="casino-card-bg rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-white/10">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white/90 mb-3 sm:mb-4">
              What makes our reviews different?
            </h4>
            <p className="text-white/65 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              Our team reviews each site with a simple goal: help UK players choose confidently. We
              score platforms on licensing, game range, bonus terms, banking options, and support.
            </p>
            <ul className="space-y-2.5 text-white/65 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-300 mt-0.5">♠</span>
                <span>Every listed brand is checked for UKGC licensing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-300 mt-0.5">♦</span>
                <span>We look at security signals and fairness standards</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-300 mt-0.5">♣</span>
                <span>Rankings are editorial-first, not pay-to-play</span>
              </li>
            </ul>
          </div>

          <div id="guide" className="bg-white/5 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-lg">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold gold-text mb-3 sm:mb-4">
              Responsible Gambling
            </h4>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Safer gambling matters. If you or someone you know needs support, confidential help is
              available any time:
            </p>
            <ul className="space-y-2 text-white/70 text-sm sm:text-base">
              <li>• <strong className="text-blue-200/80">BeGambleAware:</strong> Visit{' '}
                <a href="https://www.begambleaware.org" className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-300/30 underline-offset-2">
                  begambleaware.org
                </a>
              </li>
              <li>• <strong className="text-blue-200/80">GamCare:</strong> Call 0808 8020 133 or visit{' '}
                <a href="https://www.gamcare.org.uk" className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-300/30 underline-offset-2">
                  gamcare.org.uk
                </a>
              </li>
              <li>• <strong className="text-blue-200/80">National Gambling Helpline:</strong> 0808 8020 133</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                SweetSlots UK is an editorial comparison site. Always check that a brand is UKGC
                licensed. Gambling should be fun—only spend what you can afford.
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
    </div>
  );
}
