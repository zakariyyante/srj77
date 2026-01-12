import { LogoKey } from '../components/CasinoLogos';

export interface Casino {
  id: number;
  name: string;
  logo: LogoKey;
  rating: number;
  bonus: string;
  url: string;
  badge?: string;
  isMobile?: boolean;
}

export const casinos: Casino[] = [
  {
    id: 1,
    name: "Lizaro",
    logo: "voodooDreams",
    rating: 9.9,
    bonus: "100% Bonus up to £50 + 50 Real Money Free Spins",
    url: "#",
    badge: "Best Bonus",
    isMobile: true
  },
  {
    id: 2,
    name: "Voodoo Dreams",
    logo: "voodooDreams",
    rating: 9.9,
    bonus: "100% Bonus up to £50 + 50 Real Money Free Spins",
    url: "#",
    badge: "Best Bonus",
    isMobile: true
  },
  {
    id: 3,
    name: "Voodoo Dreams",
    logo: "voodooDreams",
    rating: 9.9,
    bonus: "100% Bonus up to £50 + 50 Real Money Free Spins",
    url: "#",
    badge: "Best Bonus",
    isMobile: true
  },
  {
    id: 4,
    name: "Voodoo Dreams",
    logo: "voodooDreams",
    rating: 9.9,
    bonus: "100% Bonus up to £50 + 50 Real Money Free Spins",
    url: "#",
    badge: "Best Bonus",
    isMobile: true
  },
  {
    id: 5,
    name: "Voodoo Dreams",
    logo: "voodooDreams",
    rating: 9.9,
    bonus: "100% Bonus up to £50 + 50 Real Money Free Spins",
    url: "#",
    badge: "Best Bonus",
    isMobile: true
  },
  {
    id: 6,
    name: "Voodoo Dreams",
    logo: "voodooDreams",
    rating: 9.9,
    bonus: "100% Bonus up to £50 + 50 Real Money Free Spins",
    url: "#",
    badge: "Best Bonus",
    isMobile: true
  },



  {
    id: 1,
    name: "Voodoo Dreams",
    logo: "voodooDreams",
    rating: 9.9,
    bonus: "100% Bonus up to £50 + 50 Real Money Free Spins",
    url: "#",
    badge: "Best Bonus"
  },
  {
    id: 2,
    name: "Pub Casino",
    logo: "pubCasino",
    rating: 9.8,
    bonus: "Welcome Bonus Get 100% Up To £100",
    url: "#"
  },
  {
    id: 3,
    name: "Ladbrokes",
    logo: "ladbrokes",
    rating: 9.6,
    bonus: "Play £10 Get 200 Free Spins",
    url: "#",
    badge: "Trending Now"
  },
  {
    id: 4,
    name: "Midnite",
    logo: "midnite",
    rating: 9.4,
    bonus: "Bet £20 Get 100 Free Spins",
    url: "#",
    badge: "Casino Premium"
  },
  {
    id: 5,
    name: "Spinland",
    logo: "spinland",
    rating: 9.2,
    bonus: "200% Bonus up to £3,000 + 50 Free Spins",
    url: "#"
  },
  {
    id: 6,
    name: "Karamba",
    logo: "karamba",
    rating: 9.0,
    bonus: "100% Bonus up to £200 + 20 Free Spins",
    url: "#"
  },
  {
    id: 7,
    name: "Coral Casino",
    logo: "coral",
    rating: 8.9,
    bonus: "Play £10 Get 200 Free Spins",
    url: "#"
  },
  {
    id: 8,
    name: "LottoGo Casino",
    logo: "lottogo",
    rating: 8.8,
    bonus: "100% Bonus Up to £200 + 300 Bonus Spins",
    url: "#"
  },
  {
    id: 9,
    name: "MrQ Casino",
    logo: "mrq",
    rating: 8.6,
    bonus: "Spend £10 Get 60 Spins No Wagering On Winnings",
    url: "#"
  },
  {
    id: 10,
    name: "NetBet",
    logo: "netbet",
    rating: 8.5,
    bonus: "Up to 500 Free Spins On First Deposit",
    url: "#"
  }
];
