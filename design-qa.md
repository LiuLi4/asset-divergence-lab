# Design QA — Beijing community purchase-value map

- Source visual truth: `/var/folders/0p/54xxdchs59x4m72kldrw_x1c0000gn/T/codex-clipboard-5328ae31-3931-4aa9-bf74-07cfc2ecd496.png`
- Normalized source frame: `/tmp/asset-divergence-map-source-normalized.png`
- Desktop implementation: `/tmp/asset-divergence-community-desktop-final.png`
- Mobile implementation: `/tmp/asset-divergence-community-mobile-final.png`
- Same-input comparison: `/tmp/asset-divergence-community-source-vs-final.jpg`
- Prototype: `http://127.0.0.1:4173/?preview=community-value#top`
- Desktop CSS viewport: `1280 × 720`; browser-rendered screenshot: `1265 × 712`
- Mobile CSS viewport: `390 × 844`; browser-rendered screenshot: `375 × 812`
- Source pixels: `1665 × 993` after removing browser chrome
- Density normalization: the source was width-normalized and center-cropped to `1280 × 720`; the desktop implementation was normalized to the same dimensions before horizontal comparison. Device scale factor remained at the browser default.
- States: Beijing overview, Fengtai community-value detail with selected community, score-band filtering, and mobile Haidian community-value detail.

## Findings

- No actionable P0, P1, or P2 differences remain for the requested community purchase-value layer.
- The new coloured value markers intentionally extend the source visual; the underlying map asset, hero composition, typography, background, capability row, and interaction language remain consistent with the selected design.

## Required fidelity surfaces

- Fonts and typography: passed. The existing Manrope / Noto Sans SC hierarchy is unchanged. Marker names use a compact UI weight, while the numerical score remains the first visual read. No desktop or mobile label wraps outside its marker.
- Spacing and layout rhythm: passed. At `1280 × 720`, the selected-community card ends at `642.88px` and the capability row begins at `648px`; they do not overlap. All four community markers are clear of the legend and detail card. At `390 × 844`, the legend, four markers, detail card, and capability row remain inside the visible page with no horizontal overflow or pairwise overlap.
- Colors and visual tokens: passed. Purchase value uses three explicit semantic bands: green `80–100`, amber `65–79`, and rose `0–64`. The colours are repeated in the legend, score circle, selected detail accent, and accessible button label, so meaning does not rely on colour alone.
- Image quality and asset fidelity: passed. The supplied transparent Beijing map remains the only map texture and keeps its source ratio. The value layer is normal interface chrome over the existing WebGL map; no substitute illustration or redrawn map asset was introduced.
- Copy and content: passed. The interface distinguishes “购买价值” from district price movement, exposes quality score, adjusted comparable discount, 180-day transactions, and comparable-sample count, and labels all bundled records as `示例模型 · 非实时成交`.

## Full-view comparison evidence

- `/tmp/asset-divergence-community-source-vs-final.jpg` places the normalized source and implementation in one comparison image.
- The implementation retains the source's left editorial statement, enlarged right-side Beijing map, aubergine navigation and CTA, and three equal capability cells.
- The new legend occupies unused map airspace, while the selected-community detail reuses the existing map information surface instead of adding an overlapping card stack.

## Focused region evidence

- Desktop Fengtai state shows four simultaneously visible scores across all three bands and a selected value card for 西府颐园: value `82`, quality `84`, adjusted discount `+10.2%`, and samples `8 / 12`.
- Mobile Haidian state shows all four markers and the full three-band legend. Geometry audit returned zero legend/marker overlaps, zero detail/marker overlaps, and no horizontal page overflow.
- Interaction checks passed: entering a district, selecting a community, filtering to `65–79` (two Fengtai results), returning to Beijing overview, and keyboard Escape reset.
- Final production-preview console check returned no errors or warnings.

## Comparison history

1. Initial mobile capture found a P1 interaction regression: the overview information card covered the horizontally scrollable district choices. The mobile bottom-position override was restricted to district-detail state; post-fix district selection succeeds and the overview choices are no longer occluded.
2. Initial `1280 × 720` desktop capture found a P1 overlap between the selected-community detail card and the capability row. A low-height desktop layout rule moved the capability row to the bottom edge; post-fix geometry reports `detailCapabilityOverlap: false`.
3. Post-fix desktop and mobile captures found no further P0/P1/P2 issues. The production preview has four visible community markers per selected district, working value-band filters, zero audited card/marker overlap, and no console errors.

## Implementation checklist

- [x] Community data contract and transparent score formula
- [x] Quality gate prevents discount from overriding weak fundamentals
- [x] Three colour-coded score bands and filter controls
- [x] District-to-community drill-down and click detail
- [x] Desktop and mobile non-overlap repairs
- [x] Unit tests, production build, interaction checks, and console check

final result: passed
