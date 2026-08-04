# Design QA — Calculator density and wealth timeline

- Source visual truth: `/var/folders/0p/54xxdchs59x4m72kldrw_x1c0000gn/T/codex-clipboard-83ffad74-e88b-410c-b7f2-03873694c7ca.png`
- Implementation screenshot: `/tmp/asset-divergence-calculator-revised.png`
- Prototype: `http://127.0.0.1:5173/#model`
- Desktop viewport: `1440 × 1100` CSS px, implementation `1440 × 1100` px
- Mobile viewport: `390 × 844` CSS px
- Source dimensions: `1560 × 684` px; source is a focused chart reference rather than a full-page frame
- Density normalization: none; the reference chart and implementation calculator were compared together at their native pixel sizes, with the chart region used as the fidelity surface
- State: self-use comparison, default 10-year holding period, advanced inputs collapsed

## Full-view comparison evidence

- Layout and hierarchy: passed. The compact input rail and expanded result area now read as one calculator workspace. The chart is the largest result block and remains above the terminal result cards.
- Fonts and typography: passed. Existing Manrope/Noto Sans SC and DM Mono tokens are retained; chart title, legend, axes, and result figures follow the product's established hierarchy without truncation.
- Spacing and rhythm: passed. Desktop inputs fit in a dense two-column rail, result cards use the wider track, and the single shared outer surface removes the previous competing-card feel.
- Colors and tokens: passed. The reference's two clearly distinguished series are mapped into the site's aubergine/lilac and green palette with sufficient contrast on the dark output panel.
- Image and asset fidelity: passed. No source imagery was required for this calculator change; the visualization is data-driven canvas output rather than a replacement illustration or fabricated asset.
- Copy and content: passed. Labels distinguish `买房 · 房产净值` from `持有现金 · 理财账户（已计租金）`, and the note states the accounting boundary.

## Focused region comparison evidence

- The reference chart and the implementation chart were opened together in one comparison input.
- Both show two yearly asset paths, year labels, monetary y-axis labels, point markers, a legend, and a shared zero-based scale for positive-only data.
- The implementation intentionally uses the calculator's dark result surface and the selected 10-year holding period instead of copying the reference's white 30-year example.

## Interaction and responsive checks

- Changing the holding period from 10 to 15 years updated the result heading and produced 16 points including the current year.
- Canvas keyboard interaction passed: `End` and `ArrowLeft` exposed the selected year's two values and lead amount through the tooltip and accessible label.
- Reset restored the default 10-year example.
- Mobile at `390 × 844` passed with zero horizontal overflow; the chart remains readable at 272 CSS px wide and stacks the result cards below it.
- Browser console checked: no errors or warnings from the calculator or chart.

## Comparison history

1. Initial comparison found a P2 chart-readability issue: automatically padded bounds produced irregular labels such as `87.4万` and a negative bottom tick for an all-positive series. It also found P2 mobile horizontal overflow from the visually hidden data table and oversized hero content.
2. Fixes: switched to rounded 1/2/5 axis intervals with a zero floor for positive data, added yearly point markers, replaced the hidden table with compact accessible text, and clipped the mobile hero at its viewport boundary.
3. Post-fix evidence: `/tmp/asset-divergence-calculator-revised.png` shows rounded `0 / 100 / 200 / 300 / 400万` ticks and visible yearly markers; browser measurements report `scrollWidth === clientWidth` at 390 px.

## Findings

- No actionable P0, P1, or P2 differences remain for the requested calculator density and yearly total-asset comparison.

## Follow-up polish

- P3: future model versions could add optional provident-fund contribution inputs before labeling a separate provident-fund balance in the buy path.

final result: passed
