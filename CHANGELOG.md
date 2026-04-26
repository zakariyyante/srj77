# CHANGELOG — SweetSlots UK Redesign

## Date: 2026-04-26

---

## 🔒 Protected Mobile Modal Components — Detected & Untouched

The following files were identified as the mobile casino modal / mobile brand display
components and their direct dependencies. **None of these files were modified.**

| File | Role | Status |
|------|------|--------|
| `app/components/MobileCasinoModal.tsx` | Full-screen mobile brand display modal (triggered by `gclid` param) | **NOT MODIFIED** |
| `app/components/CasinoCard.tsx` | Individual casino/brand card rendered inside the modal | **NOT MODIFIED** |
| `app/components/CasinoLogos.tsx` | SVG logo registry imported by `CasinoCard` | **NOT MODIFIED** |
| `app/data/casinos.ts` | Casino data + `Casino` interface used by the modal | **NOT MODIFIED** |
| `app/components/Logo.tsx` | Site logo used by `Header` (rendered inside the modal) | **NOT MODIFIED** |

### Protected Behaviour Preserved

- Mobile modal layout: **unchanged** (fixed inset overlay, hero strip, 1–2 col card grid)
- Mobile modal styling: **unchanged** (all Tailwind classes, `felt-texture`, `casino-card-bg`, `casino-glow`, `gold-shimmer`, `gold-text` etc.)
- Mobile modal props/API: **unchanged** (`mobileCasinos: Casino[]`, `isOnline: boolean`, `gclidValue?: string`)
- Mobile modal trigger logic: **unchanged** (renders when `isOnline && mobileCasinos.length > 0`)
- `Casino` interface fields: **all preserved** (`id`, `name`, `logo`, `rating`, `votes`, `bonus`, `url`, `badge`, `isMobile`)
- No new fields were added to `Casino`; no fields renamed or removed

---

## ✏️ Files Redesigned (Non-Protected)

### `app/globals.css`
- Preserved **all** existing CSS variables (`--background`, `--foreground`, `--primary`, `--primary-2`, `--accent`, `--muted`, `--card-bg`, `--card-border`)
- Preserved **all** existing keyframes (`shimmer`, `float`, `cardFlip`, `glow`, `sparkle`)
- Preserved **all** existing utility classes (`.gold-shimmer`, `.casino-glow`, `.float-animation`, `.gold-text`, `.gold-border`, `.casino-card-bg`, `.felt-texture`)
- **Added** new utilities: `.fade-in-up`, `.pulse-subtle`, `.section-rule`, `.gradient-border-card`, `.faq-chevron`, `details[open] .faq-chevron` (FAQ accordion), and supporting keyframes

### `app/components/Header.tsx`
- Added slim announcement bar (hidden on mobile `< sm` so the mobile modal is unaffected)
- Cleaner nav link styling, reduced opacity hover system
- Refined CTA button with shadow treatment
- Improved mobile drawer with better spacing
- Same `navLinks` structure and `Logo` import preserved

### `app/components/Footer.tsx`
- 4-column grid: Logo + tagline | Navigate | Legal | Get Help
- Proper external links with `target="_blank"` for responsible gambling organisations
- Helpline number surfaced
- Safer Gambling badge strip with hover opacity transitions
- Improved disclaimer copy
- Same image asset paths (`/18plus.png`, `/gambleaware.png`, `/gamcare.png`, `/gamestop.png`)

### `app/page.tsx`
- Removed duplicate inline footer; now uses `<Footer />` component
- Hero: eyebrow badge, larger headline, trust chips row, two CTA buttons
- Casino cards section: editorial badge, refreshed subheadline, same `<CasinoCard>` calls with identical props
- New "Why Trust Us" section: 3 feature cards with `gradient-border-card`
- Redesigned "How We Rate" section: 4 scoring criteria boxes + responsible gambling links
- New FAQ section using native `<details>`/`<summary>` (no JS required)
- Removed unused `import Image` and `import Logo` (logo now via `Footer` component)
- `MobileCasinoModal` call: **identical** — same props, same position in render tree

### `app/terms/page.tsx`
- Applied main site theme (`bg-[#030b1a] felt-texture`, `casino-card-bg` card)
- Replaced inline footer with `<Footer />` component
- Updated link colours from `text-emerald-400` to `text-cyan-400` to match site palette
- All legal content preserved word-for-word

### `app/privacy/page.tsx`
- Same theme changes as `terms/page.tsx`
- Replaced inline footer with `<Footer />` component
- All legal content preserved word-for-word

### `app/layout.tsx`
- Improved `<title>` with primary keyword
- Expanded `description` meta tag
- Added `keywords` array
- Added `twitter` card metadata
- All other layout structure unchanged; `<Analytics />` preserved

---

## Build Verification

```
✓ Compiled successfully (Turbopack)
✓ TypeScript check passed
✓ All 5 pages generated without errors
Route (app): / (dynamic), /privacy (static), /terms (static), /_not-found (static)
```

---

## Summary

The `MobileCasinoModal` component and everything it directly depends on
(`CasinoCard`, `CasinoLogos`, `casinos.ts`, `Logo`) were **detected, listed, and
left completely untouched**. The mobile brand display will continue to render with
exactly the same layout, styling, props, and behaviour as before.
