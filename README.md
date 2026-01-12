# UK Casino Comparison Site

A Next.js-based online casino comparison website for UK users, featuring compact card designs and Google policy-compliant content.

## Features

- ✅ **Modern UI**: Clean, responsive design with Tailwind CSS
- ✅ **Compact Card Design**: Logo, star ratings (9.9 decreasing), bonus text, and CTA button
- ✅ **Mock Data**: 10 casino brands with realistic bonus offers
- ✅ **Google Policy Compliant**: 
  - 18+ age restrictions
  - Responsible gambling disclaimers
  - Links to gambling support organizations (BeGambleAware, GamCare)
  - UK Gambling Commission licensing emphasis
  - No deceptive or misleading claims
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Performance**: Built with Next.js 14+ and Turbopack

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
casino-comparison/
├── app/
│   ├── components/
│   │   └── CasinoCard.tsx      # Compact card component
│   ├── data/
│   │   └── casinos.ts          # Mock casino data
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main comparison page
│   └── globals.css             # Global styles
├── public/                     # Static assets
└── README.md
```

## Casino Card Design

Each casino card includes:
- **Logo**: Brand image on the left
- **Badge** (optional): "Best Bonus", "Trending Now", etc.
- **Bonus Text**: Promotional offer details
- **Star Rating**: 5-star display (yellow)
- **Score**: Numeric rating (9.9 to 8.5)
- **CTA Button**: "GET BONUS" call-to-action

## Google Policy Compliance

This site follows Google's gambling and games policies:

1. **Age Restrictions**: Clear 18+ messaging
2. **Responsible Gambling**: 
   - BeGambleAware.org links
   - GamCare helpline information
   - Gambling support resources
3. **Licensing**: Emphasis on UK Gambling Commission licensing
4. **Disclaimers**: Terms and conditions, new customers only
5. **No Deceptive Claims**: Honest, transparent information
6. **Educational Purpose**: Information-based comparison

## Customization

### Adding More Casinos

Edit `app/data/casinos.ts`:

```typescript
export const casinos: Casino[] = [
  {
    id: 1,
    name: "Casino Name",
    logo: "https://example.com/logo.png", // Or use local image in /public
    rating: 9.5,
    bonus: "100% Bonus up to £100",
    url: "#", // Add actual URL
    badge: "Featured" // Optional
  },
  // ... more casinos
];
```

### Changing Colors

Update Tailwind classes in components or modify `tailwind.config.ts` for theme changes.

### Using Real Images

1. Add images to `/public/logos/`
2. Update logo paths in `casinos.ts`: `logo: "/logos/casino-name.png"`

## Important Notes

- **Mock Data**: This uses placeholder data. Replace with real casino information.
- **URLs**: Update URLs with actual casino/affiliate links.
- **Images**: Replace placeholder images with real casino logos.
- **Legal Review**: Ensure all content complies with UK gambling advertising regulations.
- **Affiliate Disclosure**: Add proper disclosure if using affiliate links.

## Technologies Used

- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **Turbopack**: Fast development builds

## License

For educational purposes only. Ensure compliance with local gambling advertising laws.

## Disclaimer

This is a demonstration project. All casino information is mock data. Real implementation should:
- Verify all casino licenses with UK Gambling Commission
- Include proper affiliate disclosures
- Follow all UK gambling advertising regulations
- Implement proper age verification
- Include comprehensive responsible gambling tools

**18+ only. Please gamble responsibly. BeGambleAware.org**
