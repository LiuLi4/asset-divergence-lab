# Design QA — Expanded Beijing map and district drill-down

- Source visual truth: `/var/folders/0p/54xxdchs59x4m72kldrw_x1c0000gn/T/codex-clipboard-5328ae31-3931-4aa9-bf74-07cfc2ecd496.png`
- Normalized source frame: `/tmp/asset-divergence-map-source-normalized.png`
- Desktop overview implementation: `/tmp/asset-divergence-map-overview-final.png`
- Desktop district detail implementation: `/tmp/asset-divergence-map-detail-final.png`
- Mobile district detail implementation: `/tmp/asset-divergence-map-mobile-detail.png`
- Same-input comparison: `/tmp/asset-divergence-map-source-vs-final.jpg`
- Prototype: `http://127.0.0.1:5173/`
- Desktop CSS viewport: `1680 × 1002`; browser-rendered screenshot: `1665 × 993`
- Mobile CSS viewport: `390 × 844`
- Source pixels: `1680 × 1050`, including 48 px of browser chrome
- Density normalization: the source page region was cropped to `1665 × 993` to match the browser-rendered implementation before horizontal comparison; no scale or device-density conversion was applied
- State: homepage overview, selected Haidian detail, selected Fengtai detail, and mobile Haidian detail

## Findings

- No actionable P0, P1, or P2 differences remain for the requested map scale, district drill-down, or capability-row consistency.

## Full-view comparison evidence

- Spacing and layout rhythm: passed. At the reference viewport, the map figure measures `1010 × 680.16` CSS px with an aspect ratio of `1.48529`, matching the source asset's `1528 ÷ 1029` ratio. It occupies substantially more of the marked right-side area without colliding with the hero copy or capability row.
- Fonts and typography: passed. Existing display and UI families, weights, and hierarchy are preserved. All three capability titles now remain on one line with equal `240 × 66` desktop cells.
- Colors and visual tokens: passed. The existing lavender background, aubergine controls, green/rose scenario values, translucent map labels, and soft elevation are unchanged.
- Image quality and asset fidelity: passed. The supplied transparent Beijing map asset remains the sole map texture; it is enlarged with `object-fit: contain` and a fixed source aspect ratio rather than stretched or redrawn.
- Copy and content: passed. District detail copy is concise, uses the site's current scenario language, and labels its supporting signals as重点板块、核心优势、重点核验.

## Focused region comparison evidence

- The normalized source and final overview were opened together in `/tmp/asset-divergence-map-source-vs-final.jpg`.
- The final map is visibly larger than the source implementation while preserving its silhouette and label alignment.
- In `/tmp/asset-divergence-map-detail-final.png`, selecting Haidian focuses and enlarges the map, hides unrelated district labels, retains a clear selected label, and expands the single existing map-information surface with a 北京全图 return action and three district-level evidence fields.
- The detail surface ends at `830.07px`; the capability row starts at `894px`, so the two regions do not overlap.

## Interaction and responsive checks

- Haidian click passed: active district becomes `haidian`, unrelated labels hide, the selected map zooms, and the detail surface shows 中关村、上地、西二旗 plus the district's strength and verification focus.
- Fengtai click passed after returning to the Beijing overview: active district becomes `fengtai` and the content updates to 丽泽、总部基地、方庄.
- 北京全图 return passed: all seven labels restore, active state clears, detail metrics hide, and the original camera framing returns.
- Keyboard Escape passed from the Fengtai detail state and returned focus to the overview map.
- Mobile at `390 × 844` passed with zero horizontal overflow. The map retains its source ratio, the detail surface remains inside the 375 px content width, and all three capability titles stay on one line in equal-width cells.
- Browser console checked: no errors or warnings.

## Comparison history

1. Initial source comparison found a P1 hierarchy issue: the map used only the lower-middle portion of the user's marked right-side area and appeared subordinate to the empty space around it.
2. It found a P1 interaction gap: district clicks only changed a sentence and camera tilt, so the result did not read as entering a more detailed regional map.
3. It found a P2 consistency issue: the second and third capability titles wrapped while 数据驱动决策 stayed on one line.
4. First implementation enlarged the fixed-ratio map, added focused district-map states with a single expanded information surface, and normalized all three capability cells.
5. Mobile verification found a P2 clipping issue in the detail surface because its percentage inset was calculated from the oversized map figure. Increasing the mobile inset from 12% to 18% placed the surface fully inside the visible content width.
6. Post-fix evidence: desktop and mobile both report zero horizontal overflow; the district detail card and capability row do not overlap; the same-input comparison shows the map scale increase while retaining the existing visual system.

final result: passed
