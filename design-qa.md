# Design QA — Full-screen hero, continuous background, and card hierarchy

- Source visual truth: `/tmp/asset-divergence-layout-before.png`
- Desktop implementation: `/tmp/asset-divergence-layout-desktop-1440-final.png`
- Compact desktop implementation: `/tmp/asset-divergence-layout-desktop-final.png`
- Mobile implementation: `/tmp/asset-divergence-layout-mobile-final.png`
- Prototype: `http://127.0.0.1:5173/`
- Desktop viewport: `1440 × 900` CSS px; screenshot `1440 × 900` px
- Compact desktop viewport: `1366 × 768` CSS px; screenshot `1366 × 768` px
- Mobile viewport: `390 × 844` CSS px; screenshot `390 × 844` px
- Density normalization: none; the before and after desktop frames were compared together at native size
- State: homepage default state at the top of the document

## Full-view comparison evidence

- Layout and hierarchy: passed. The hero now occupies exactly one viewport (`100svh`), and the calculator starts at the first pixel below the fold rather than covering the hero.
- Background continuity: passed. Hero, calculator, asset classification, selection framework, and methodology sections now share the same page background without alternating section slabs.
- Card hierarchy: passed. On desktop, the calculator heading, inputs, and results sit inside one shared workspace surface. On mobile, the necessary stacked surfaces retain positive spacing and never overlap.
- Spacing and rhythm: passed. Section flow uses positive padding instead of negative margins; desktop and mobile both report zero horizontal overflow.
- Visual language: passed. Existing typography, color tokens, map artwork, and controls are retained while the structural boundaries are simplified.

## Focused comparison evidence

- Before: the calculator began around `559px` in a `900px` viewport, visibly covering the lower portion of the hero.
- After at `1440 × 900`: hero bottom and calculator top both measure `900px`; no next-section content appears inside the first viewport.
- After at `1366 × 768`: hero bottom and calculator top both measure `768px`; the same one-screen boundary is preserved.
- After at `390 × 844`: hero bottom and calculator top both measure `844px`; the capability dock remains inside the viewport in three equal, non-overlapping columns.

## Interaction and responsive checks

- The “开始测算” action still scrolls from the hero to the calculator; after activation the calculator enters the viewport as expected.
- Desktop `1440 × 900`, compact desktop `1366 × 768`, and mobile `390 × 844` all passed with zero horizontal overflow.
- Programmatic bounding-box checks found zero overlaps among sibling cards in the tested desktop and mobile views.
- Browser console checked: no errors or warnings.

## Comparison history

1. Initial comparison found a P1 page-flow issue: the calculator surface overlapped the first-screen hero instead of starting below it.
2. It also found P2 continuity and hierarchy issues: section-specific backgrounds created visible seams, while nested calculator cards competed as separate surfaces.
3. Mobile review found a P2 capability-dock overflow caused by wide card content.
4. Fixes: locked the hero to `100svh`, removed the negative section overlap, unified page backgrounds, grouped the calculator into one desktop workspace, and constrained the mobile capability dock to three equal columns.

## Findings

- No actionable P0, P1, or P2 differences remain for the requested full-screen homepage, continuous background, and non-overlapping card hierarchy.

final result: passed
