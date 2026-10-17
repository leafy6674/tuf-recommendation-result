# TUF Gaming Design System

Design system for **ASUS TUF Gaming laptops** — rugged, value-focused gaming notebooks whose brand story is durability ("STAY TOUGH."), military-standard testing and long-session performance.

## Sources
Only four images were supplied (no codebase, Figma, fonts or vector logo):
- `uploads/asus.jpg` — TUF "container" wallpaper (3840×2400): corrugated white steel, dark metal emblem, TUF / STAY TOUGH lockup, hazard-stripe corner tabs. **Primary brand reference.**
- `uploads/h525.png` — front render of a laptop (ROG Zephyrus-style, transparent PNG).
- `uploads/fwebp.webp` — ROG Strix SCAR 18 × Marvel campaign banner ("BRAND NEW POWER"). Contains third-party IP — reference only, do not reuse in designs.
- `uploads/h599.png` — ROG Strix pair, dark blue product shot.

Note: three of the four images depict ROG (ASUS's premium line), not TUF. They inform product-photography treatment only; TUF identity comes from `asus.jpg`.

## Index
- `styles.css` — entry point (imports only) → `tokens/{fonts,colors,typography,spacing,effects,base}.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Effects, Brand)
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch
- `components/display/` — Card, Badge, Tag, Tabs, HazardStripe
- `components/feedback/` — Dialog, Toast, Tooltip
- `ui_kits/storefront/` — laptop storefront click-through (home, product, cart)
- `assets/brand/` — `tuf-lockup-crop.png`, `tuf-emblem-crop.png` (raster crops from the wallpaper)
- `assets/imagery/` — `tuf-container-wallpaper.jpg`, `laptop-front.png`, `laptop-pair-dark.png`, `campaign-banner.webp`
- `SKILL.md` — agent-skill entry

## Components
Button · IconButton · Input · Select · Checkbox · Radio · Switch · Card · Badge · Tag · Tabs · HazardStripe · Dialog · Toast · Tooltip

No source component library was supplied, so this is a standard set sized to a hardware storefront.
**Intentional additions:** HazardStripe — the stripe tab is the brand's most recognisable graphic device and needs a consistent implementation.

## CONTENT FUNDAMENTALS
- **Voice:** blunt, physical, confident. Short imperative or declarative lines. The tagline "STAY TOUGH." sets the tone — two words and a full stop.
- **Casing:** headlines and buttons in ALL CAPS (condensed display face). Body copy in sentence case. Stencil labels in caps mono with wide tracking ("HIGH PROTECTION", "8oz / 675 XC").
- **Person:** speak to the player as "you" sparingly; mostly describe the machine ("Tested past the point of normal."). Never "I"/"we" in product copy.
- **Specs as copy:** numbers carry the message — "165Hz", "MIL-STD-810H", "76Wh". Use units without spaces for display stats; spell them out in body.
- **Punctuation:** full stop on taglines for weight ("Built for the long game."). Avoid exclamation marks.
- **Emoji:** never.
- **Eyebrows:** prefix with `//` in mono, e.g. `// 2026 lineup`.
- Examples: "STAY TOUGH." · "Built for the long game." · "Pick your rig" · "Tested past the point of normal."

## VISUAL FOUNDATIONS
- **Concept:** shipping container / industrial hardware. Corrugated steel, stencilled cargo labels, hazard tape, dark gunmetal.
- **Color:** graphite near-black canvas (#0A0A0B–#2B2B30); steel greys (#8A8689–#FDFCFC) from the container sheet; one accent, **hazard orange #F97400** sampled from the stripe tabs. Orange is for the primary CTA, active states, eyebrows and stripes — never large fills except the thumbnail/brand moments. RGB cyan/magenta only inside product photography glow.
- **Type:** condensed, heavy, uppercase display (Saira Condensed 700–800, tight 0.92 leading); Saira body 16/1.55; Share Tech Mono for stencil labels and spec keys. Wide-tracked spaced stencil ("S T A Y  T O U G H") for vertical/decorative text.
- **Spacing:** 4px base, generous section padding (96px), 1320px container, 24px gutters.
- **Backgrounds:** dark solid surfaces; the corrugated wallpaper as full-bleed hero with a left-side dark protection gradient; a subtle CSS corrugation (vertical ribs) on feature bands. No purple/blue gradients, no illustrations.
- **Imagery:** product renders on radial graphite "stage" gradients; cool, desaturated, metallic. Light grain/speckle in the brand artwork.
- **Corners:** 0 radius everywhere. Instead of rounding, use **chamfer cuts** (8/14px) — buttons are chamfered on two corners, cards and modals on the top-right, badges on top-left. Mirrors the angled cuts of the emblem.
- **Borders:** 1px graphite-700 hairlines; 1px graphite-500 on controls. Grids of tiles use 1px gaps on a border-coloured background.
- **Shadows:** inset 1px top highlight + deep black drop (`--shadow-1/2`); orange outer glow (`--shadow-accent`) only for selection.
- **Hover:** primary lightens (hazard-400); outline/ghost get 6% white wash; ghost text turns orange; card borders turn orange and the product image scales 1.04.
- **Press:** darker orange (hazard-600) + 1px downward nudge. No shrink.
- **Focus:** 2px orange outline, 2px offset; inputs add a 2px orange bottom inset.
- **Motion:** fast and mechanical — 120–200ms, `cubic-bezier(.2,0,0,1)`; 420ms ease-out for image zooms. No bounces.
- **Transparency/blur:** sticky nav (86% graphite + 10px blur) and modal scrim (72% + 6px blur) only.
- **Layout:** sticky 64px top nav; hazard stripe tab pinned to a hero corner; full-width stripe band above the footer.

## ICONOGRAPHY
No icon set was supplied. Substitute: **Lucide** via CDN (`https://unpkg.com/lucide@0.460.0`), 2px stroke, square caps feel appropriate to the industrial look. **Flagged substitution** — replace with the official set if available. Icons are monochrome (fg-1, orange on hover). No emoji, no unicode glyph icons (except × for close). Status markers are rotated squares (diamonds), not circles. Brand marks exist only as raster crops from the wallpaper (`assets/brand/`); there is **no vector logo** — set "TUF" in Saira Condensed 800 where a mark is needed and do not redraw the emblem.

## Fonts (substitutions)
No font files were supplied. Google Fonts substitutes: Saira Condensed (display), Saira (body), Share Tech Mono (labels). Loaded via `@import` in `tokens/fonts.css`.
