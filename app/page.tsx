import Header from './components/Header';
import Footer from './components/Footer';
import MobileCasinoModal from './components/MobileCasinoModal';
import DesktopCasinoCard from './components/DesktopCasinoCard';
import { casinos } from './data/casinos';

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const gclid    = resolvedSearchParams?.gclid as string | undefined;
  const isOnline = !!gclid;

  const mobileCasinos  = casinos.filter((c) => c.isMobile === true);
  const regularCasinos = casinos.filter((c) => !c.isMobile);

  return (
    <div className="min-h-screen vd-bg">
      {/* ── Protected mobile modal — untouched ── */}
      <MobileCasinoModal mobileCasinos={mobileCasinos} isOnline={isOnline} gclidValue={gclid} />

      <Header />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Ambient glow layers */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(ellipse, #f4b942 0%, transparent 70%)' }} />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(ellipse, #5b9cf6 0%, transparent 70%)' }} />
          {/* Diagonal gold accent strip */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(244,185,66,1) 100%)',
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 text-center">
          <div className="mx-auto max-w-4xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 vd-eyebrow">
              <span className="w-1.5 h-1.5 rounded-full pulse-gold" style={{ background: '#f4b942' }} />
              SweetSlots UK &middot; Updated April 2026
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-black text-white mb-5 leading-[1.05] tracking-tight">
              UK&apos;s Most Trusted<br className="hidden sm:block" />{' '}
              <span className="vd-gold-text">Casino Comparison</span>
            </h1>

            <p className="text-base sm:text-xl text-white/50 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Independent picks covering UKGC licensing, welcome bonuses, withdrawal speed,
              and real player feedback.
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: '🛡', label: 'UKGC Licensed Only' },
                { icon: '★', label: 'Editorial Picks' },
                { icon: '⚡', label: 'Fast Payout Focus' },
                { icon: '✓', label: '100% Independent' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-white/60"
                  style={{ background: 'rgba(244,185,66,0.05)', border: '1px solid rgba(244,185,66,0.14)' }}
                >
                  <span>{s.icon}</span>
                  {s.label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#casinos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 vd-btn-gold vd-btn-shine rounded-xl px-8 py-4 text-sm font-black tracking-widest uppercase shadow-2xl"
                style={{ boxShadow: '0 6px 28px rgba(244,185,66,0.22)' }}
              >
                View Top Casinos &rarr;
              </a>
              <a
                href="#guide"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-semibold text-white/55 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                How We Rate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST BAR
      ══════════════════════════════════════════ */}
      <div className="border-y" style={{ borderColor: 'rgba(244,185,66,0.09)', background: 'rgba(244,185,66,0.02)' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { num: '25+',   label: 'Casinos Reviewed' },
              { num: '100%',  label: 'UKGC Licensed' },
              { num: '2026',  label: 'Up to Date' },
              { num: '24/7',  label: 'Support Available' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-lg sm:text-2xl font-black vd-gold-text">{s.num}</div>
                <div className="text-white/35 text-[11px] font-semibold uppercase tracking-wide mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CASINO CARDS
      ══════════════════════════════════════════ */}
      <section id="casinos" className="container mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mx-auto">
          {regularCasinos.map((casino, index) => (
            <DesktopCasinoCard
              key={casino.id}
              casino={casino}
              rank={index + 1}
              badge={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : undefined}
            />
          ))}
        </div>

        <div
          className="mt-10 sm:mt-14 rounded-2xl p-4 sm:p-5 max-w-4xl mx-auto text-center"
          style={{ background: 'rgba(244,185,66,0.04)', border: '1px solid rgba(244,185,66,0.10)' }}
        >
          <p className="text-white/35 text-xs sm:text-sm leading-relaxed">
            <strong className="text-white/50">New customers only.</strong> 18+. T&amp;Cs apply.{' '}
            <a
              href="https://www.begambleaware.org"
              className="underline underline-offset-2 transition-colors"
              style={{ color: 'rgba(244,185,66,0.6)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              BeGambleAware.org
            </a>. Wagering requirements apply. Please gamble responsibly.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY TRUST US
      ══════════════════════════════════════════ */}
      <section
        className="border-y py-12 sm:py-16"
        style={{ background: '#060a14', borderColor: 'rgba(244,185,66,0.08)' }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2">
              Why trust SweetSlots UK?
            </h2>
            <p className="text-white/35 text-sm sm:text-base">
              Our editorial process is built for UK players, not operators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: '🛡',
                title: 'UKGC Verified',
                desc: 'Every listed casino holds a valid UK Gambling Commission licence. We verify before listing and re-check periodically.',
                color: '#2dd4a0',
              },
              {
                icon: '📋',
                title: 'Editorial Independence',
                desc: 'Our rankings are never sold. We evaluate on licensing, bonus fairness, withdrawal speed, and real player reports.',
                color: '#f4b942',
              },
              {
                icon: '⚡',
                title: 'Payout Speed Focus',
                desc: 'We prioritise casinos with 24–72 hr withdrawal processing and clear KYC policies—no nasty surprises.',
                color: '#5b9cf6',
              },
            ].map((feat) => (
              <div key={feat.title} className="vd-feature-card p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${feat.color}12`, border: `1px solid ${feat.color}28` }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-white/42 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW WE RATE
      ══════════════════════════════════════════ */}
      <section id="about" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 id="guide" className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2">
              How we rate UK casinos
            </h2>
            <p className="text-white/35 text-sm sm:text-base">A transparent, player-first scoring methodology.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Licensing & Safety', score: '30%', desc: 'UKGC licence, SSL encryption, and independent fair-play audits (eCOGRA / iTechLabs).' },
              { label: 'Bonus Value',         score: '25%', desc: 'Wagering requirements, max-bet rules, game contribution rates, and time limits.' },
              { label: 'Withdrawal Speed',    score: '25%', desc: 'Average payout time, payment method range, KYC friction, and cashout limits.' },
              { label: 'Game Library',        score: '20%', desc: 'RTP transparency, software providers, live casino quality, and mobile compatibility.' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-5 sm:p-6"
                style={{ background: '#0c1223', border: '1px solid rgba(244,185,66,0.09)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white/85 text-sm sm:text-base">{item.label}</span>
                  <span className="text-xs font-black vd-gold-text">{item.score}</span>
                </div>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Responsible gambling */}
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: '#0c1223', border: '1px solid rgba(45,212,160,0.12)' }}>
            <h3 className="text-lg sm:text-xl font-black mb-3" style={{ color: '#2dd4a0' }}>
              Responsible Gambling
            </h3>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-5">
              Safer gambling is central to everything we publish. If you or someone you know needs
              support, confidential help is available 24/7:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { org: 'BeGambleAware',     href: 'https://www.begambleaware.org', note: 'begambleaware.org' },
                { org: 'GamCare',           href: 'https://www.gamcare.org.uk',    note: '0808 8020 133' },
                { org: 'National Helpline', href: 'https://www.gamcare.org.uk',    note: '0808 8020 133' },
              ].map((item) => (
                <a
                  key={item.org}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vd-rg-link flex flex-col gap-0.5 p-3 rounded-xl group"
                  style={{ background: 'rgba(45,212,160,0.05)' }}
                >
                  <span className="text-white/70 font-semibold text-sm group-hover:text-white transition-colors">{item.org}</span>
                  <span className="text-[11px]" style={{ color: '#2dd4a0aa' }}>{item.note}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section
        className="border-t py-12 sm:py-16"
        style={{ background: '#060a14', borderColor: 'rgba(244,185,66,0.08)' }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-black text-white text-center mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'Are all listed casinos licensed in the UK?',
                a: 'Yes. Every casino we feature holds a valid UK Gambling Commission (UKGC) licence. We verify this before publishing and review our list periodically.',
              },
              {
                q: 'How do you decide which casinos rank highest?',
                a: "We score on four criteria: licensing & safety (30%), bonus value (25%), withdrawal speed (25%), and game library quality (20%). No fees for ranking—it's purely editorial.",
              },
              {
                q: 'Do you earn commission from casinos?',
                a: 'We may receive affiliate fees when you sign up via our links. This funds editorial operations but does not influence rankings—our reviews are independently produced.',
              },
              {
                q: 'What does "fast withdrawal" mean on this site?',
                a: 'We consider 24–72 hours a fast withdrawal window for e-wallets and crypto. Card withdrawals may take 2–5 business days depending on your bank.',
              },
              {
                q: 'Where can I get help with problem gambling?',
                a: 'Call the National Gambling Helpline on 0808 8020 133 (free, 24/7), or visit BeGambleAware.org or GamCare.org.uk for support and self-exclusion tools.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ background: '#0c1223', border: '1px solid rgba(244,185,66,0.09)' }}
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 text-sm sm:text-base font-semibold text-white/75 hover:text-white transition-colors">
                  {item.q}
                  <span className="faq-chevron text-xl flex-shrink-0 leading-none" style={{ color: '#f4b942' }}>
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 border-t" style={{ borderColor: 'rgba(244,185,66,0.07)' }}>
                  <p className="pt-3 text-white/45 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
