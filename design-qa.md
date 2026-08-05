# Design QA — continuous homepage and full-screen map workspace

- Source visual truth: `/var/folders/0p/54xxdchs59x4m72kldrw_x1c0000gn/T/codex-clipboard-634898e8-c745-43e0-90e6-411466fa3bd0.png`
- Desktop homepage implementation: `/tmp/asset-divergence-home-continuous-1440x900.png`
- Desktop map workspace: `/tmp/asset-divergence-map-workspace-desktop-1440x900.png`
- Mobile district workspace: `/tmp/asset-divergence-map-workspace-mobile-390x844-v2.png`
- Mobile community workspace: `/tmp/asset-divergence-community-map-mobile-390x844.png`
- Same-input comparison: `/tmp/asset-divergence-design-comparison.png`
- Prototype: `http://127.0.0.1:5173/?preview=fullscreen-map#top`
- Desktop CSS viewport and screenshot: `1440 × 900`, browser density `1x`
- Mobile CSS viewport and screenshot: `390 × 844`, browser density `1x`
- Source pixels: `2564 × 1724`; browser chrome was removed before proportional normalization into the `720 × 450` left comparison frame.
- State: Beijing homepage overview, full-screen Xicheng district, mobile district points, and selected-community OpenStreetMap context.

## Findings

- No actionable P0, P1, or P2 issues remain for the requested background continuity and map-page transition.
- The map workspace intentionally extends beyond the source screenshot because the selected source documents the homepage problem state; its interaction target is defined by the user's requirement to dedicate the complete viewport to the map after a click.

## Required fidelity surfaces

- Fonts and typography: passed. Existing Manrope / Noto Sans SC hierarchy and weights remain unchanged on the homepage. Full-screen controls reuse the established compact interface typography and do not introduce a competing display style.
- Spacing and layout rhythm: passed. The comparison image confirms that the marked empty blocks at the bottom of the reference no longer create separate visual surfaces. The homepage remains a single `100svh` composition. The full-screen map measures exactly `1440 × 900` and `390 × 844`; desktop and mobile controls stay inside the viewport without horizontal overflow.
- Colors and visual tokens: passed. One body-level blush gradient now continues behind the hero and later sections. Sections are transparent instead of restarting their own backgrounds. Map controls reuse the aubergine, translucent paper, green, amber and rose tokens already present in the product.
- Image quality and asset fidelity: passed. The existing Beijing WebGL/raster map remains the only city map asset and keeps its proportions. Community context uses the existing OpenStreetMap iframe. No replacement illustration, CSS drawing or placeholder imagery was introduced.
- Copy and content: passed. The new persistent control says “返回首页”; the existing “北京全图” control continues to mean reset from district to city overview, so the two navigation levels remain distinct.
- Icons and accessibility: passed. All controls use the existing Phosphor icon family. The full-screen workspace exposes a dialog role, locks background scrolling, provides a visible 44px mobile return target, supports Escape unwinding from community to district to overview to homepage, and restores the prior scroll position.

## Full-view comparison evidence

- `/tmp/asset-divergence-design-comparison.png` places the normalized source on the left and the revised homepage on the right.
- The headline, map asset, district labels, navigation and primary CTA retain their original hierarchy.
- The revised view removes the boxed-looking lower gaps and lets one background treatment continue through the complete first screen.

## Focused region evidence

- Separate focused crops were unnecessary for the homepage because the requested change is a full-view surface and state transition, not a small typography or icon fidelity adjustment.
- Full-screen evidence covers the relevant focused interaction surfaces: desktop map controls and detail panel, mobile return/reset controls, the mobile district detail sheet, and the selected-community location map.
- Browser geometry confirms a `0,0,1440,900` desktop map and `0,0,390,844` mobile map, with `0px` horizontal overflow.

## Comparison history

1. Initial mobile workspace capture found a P1 stacking defect: the calculator heading remained visible above the fixed map because the map was still inside the hero stacking context.
2. The map host is now temporarily mounted directly under `body` while the workspace is open, then restored to its original DOM position on exit. The post-fix mobile capture shows only the map workspace and its own controls.
3. The first post-fix mobile capture left the return control too quiet against the pale map background (P2). Its mobile state now uses the established aubergine fill and white icon; computed size is `44 × 44px`.
4. Post-fix desktop and mobile checks found no remaining P0/P1/P2 issue. District entry, community navigation, real-coordinate map loading, Escape navigation, explicit return, scroll restoration and console checks pass.

## Implementation checklist

- [x] Single continuous page-level background
- [x] Click district to enter a true full-viewport map workspace
- [x] Click the map background or press Enter/Space to open the Beijing overview workspace
- [x] Separate “北京全图” and “返回首页” navigation levels
- [x] Desktop and mobile viewport coverage without background bleed-through
- [x] Community OpenStreetMap mode remains full-screen
- [x] Keyboard Escape and restored page scroll position
- [x] Automated tests, TypeScript build, responsive browser checks and console review

final result: passed
