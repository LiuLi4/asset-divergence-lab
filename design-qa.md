# Design QA — Lucrhome interaction and type study

- Reference: `https://www.lucrhome.it/`
- Prototype: `http://127.0.0.1:5173/`
- Desktop comparison: `1440 × 900`
- Mobile comparison: `390 × 844`

## Comparison inputs

- Desktop hero: `/tmp/lucrhome-desktop-01-clean.png` ↔ `/tmp/asset-divergence-lucrhome-desktop-final.png`
- Desktop chapter/cards: `/tmp/lucrhome-desktop-02-services.png` ↔ `/tmp/asset-divergence-lucrhome-taxonomy-desktop.png`
- Mobile hero: `/tmp/lucrhome-mobile-01-top.png` ↔ `/tmp/asset-divergence-lucrhome-mobile.png`
- Mobile drawer: `/tmp/lucrhome-mobile-02-menu-open.png` ↔ `/tmp/asset-divergence-lucrhome-mobile-menu.png`
- Mobile expanded card: `/tmp/lucrhome-mobile-04-service-card-open.png` ↔ `/tmp/asset-divergence-lucrhome-mobile-card-open.png`

## Visual findings

- Composition: passed — fixed navigation, a spacious centered hero, two CTAs, and a large real Beijing map asset match the reference hierarchy.
- Typography: passed — Rethink Sans/Quicksand-inspired display rhythm, tight large headings, compact navigation, and readable Chinese fallbacks are consistent across breakpoints.
- Color and depth: passed — pale lavender field, aubergine ink, pink interaction accent, restrained borders, and soft card shadows match the reference language.
- Scroll chapters: passed — oversized chapter typography, staggered content reveals, map parallax, and active navigation reproduce the reference's scroll-led pacing.
- Responsive layout: passed — mobile retains the 44px display title, stacked 165px CTAs, full-height right drawer, vertical cards, and a vertical five-step method line without horizontal overflow.

## Interaction checks

- Primary “开始测算” CTA scrolls into the model and highlights “决策模型”.
- Navigation updates the active item as each section crosses the viewport.
- Mobile menu opens as a full-height right drawer with scrim, locks page scroll, closes by link, scrim, X, or Escape, and restores scrolling.
- Asset cards expand/collapse with correct `aria-expanded`/`aria-hidden`; “套用此情景” updates the financial assumptions and returns to the model.
- Finance inputs still update results live; report export and property scoring remain intact.
- Browser console check on a fresh tab returned no warnings or errors.
- `npm run check` and `git diff --check` pass.

## Accepted differences

- The reference house render is replaced by the project's Beijing miniature map so the visual metaphor remains specific to the product.
- Reference service cards use decorative 3D icons; this implementation uses the project's Phosphor icon library to avoid copying source artwork.
- Chinese headings wrap differently from Italian while preserving the same scale, weight, whitespace, and scroll cadence.

final result: passed
