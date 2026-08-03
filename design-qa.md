# Design QA — Reference 01

- Reference: `1-照片-1.jpg`
- Prototype: `http://127.0.0.1:5173/`
- Comparison viewport: `1280 × 853`
- Mobile viewport: `375 × 812`

## Visual comparison

- Composition: passed — left message block, right Beijing asset map, capability row, and calculator reveal align with the reference hierarchy.
- Typography: passed — compact navigation, heavy two-line Chinese display title, readable body copy, and pill controls retain the reference rhythm.
- Color and depth: passed — blush/lilac field, deep aubergine ink, translucent district tags, soft map shadow, and white calculator surface are consistent.
- Responsive behavior: passed — mobile keeps the headline, primary CTA, map subject, and horizontally browsable capability cards without clipping the core path.

## Functional checks

- Primary “开始测算” CTA scrolls to the calculator.
- Finance input updates the calculated result and reset restores defaults.
- Navigation, scenario presets, scoring workflow, and report export remain available.
- Automated tests and production build pass.

## Accepted differences

- The generated Beijing miniature uses a more detailed ring-road city texture than the reference landmark composition.
- The live calculator exposes the existing cash-flow model rather than replacing it with a decorative regional chart mock.

final result: passed
