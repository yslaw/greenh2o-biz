# Design System: GreenH2O / NUCLEUS — Vitality Industrial

## 1. Visual Theme & Atmosphere
Evidence-led B2B site for a hydrogen-on-demand retrofit product, re-skinned to the **Vitality Industrial** system: industrial precision + ecological responsibility. Light slate-blue canvas (`--bg`/`--off-white`) with deep ocean-navy header/footer/dark panels, emerald-green primary accent for growth/CTAs and hydrogen-blue secondary accent for water/fluid interactions. Density: Daily App Balanced. Variance: Offset Asymmetric — row lists with numbering/dividers, no symmetric card grids. Mood: a technical brief from an institution that also ships consumer-grade software.

## 2. Color Palette & Roles
- `--navy: #0A1628` (ocean-dark) — header/footer, dark panels (hero, benefits, contact), navy product tier
- `--navy2: #102036` / `--navy3: #213145` — navy panel gradients
- `--green: #006948` (primary) — CTAs, evidence figures, links, table highlight column, focus accents
- `--emerald-deep: #064E3B` — primary button hover/active state
- `--green2: #68dba9` (inverse-primary / primary-fixed-dim) — on-navy highlights (H₂ mark, tier text, contact icon boxes)
- `--green-light: #85f8c4` (primary-fixed) — light tinted badge fills
- `--green-pale: #e7f5ee` — featured product row tint (N2)
- `--hydro: #1E5FD4` (hydrogen-blue / tertiary) — input focus rings, secondary interactive accent (water/fluid), hero gradient
- `--white: #ffffff` — card surfaces, text on dark panels
- `--off-white: #eff4ff` (surface-container-low) — alternate/recessed sections, featured backgrounds
- `--bg: #f8f9ff` (background/surface) — page base background
- `--gray: #535f74` (secondary) — body/secondary text; also the shadow tint source
- `--gray2: #6d7a72` (outline) — secondary borders/dividers
- `--border: #bccac0` (outline-variant) — card/divider hairlines
- `--text: #0b1c30` (on-background) — primary text

Two-accent system (emerald + hydrogen-blue), per Vitality Industrial's primary/tertiary split — emerald carries weight (~CTAs, evidence), hydrogen-blue is reserved for focus/interactive water-adjacent moments. All neutrals tinted toward the ocean-navy hue — no pure black.

## 3. Typography
- **Display:** Manrope (600–800) — headings, evidence figures, model numbers (N1/N2/N3)
- **Body:** Hanken Grotesk (300–800) — paragraphs, nav, form labels, max ~65ch
- **Banned:** Inter, generic serifs

## 4. Shape & Elevation
Radius scale (Vitality Industrial 0.5–1.5rem rounded language):
- `--r-sm: 0.25rem` — small chip/icon accents
- `--r: 0.5rem` — buttons, nav links, inputs, contact-detail icons (base radius)
- `--r-md: 0.75rem` — contact block, FAQ contact note
- `--r-lg: 1rem` — cards: about-stats, cert-panel, table-wrap, featured product row
- `--r-xl: 1.5rem` — form panel (largest container)
- `--r-full: 9999px` — pills: hero tag, trust certs, product tier badges, featured badge

Shadows are soft/diffused, tinted with `--gray` (#535f74) at 4–10% opacity rather than black:
- `--shadow-sm: 0 1px 3px rgba(83,95,116,.08), 0 1px 2px rgba(83,95,116,.04)`
- `--shadow: 0 4px 16px rgba(83,95,116,.10), 0 2px 6px rgba(83,95,116,.05)`
- `--shadow-lg: 0 16px 40px rgba(83,95,116,.14), 0 4px 14px rgba(83,95,116,.06)`

## 5. Component Patterns
- **Evidence bar:** full-width `--navy` strip below hero, 4 columns (qualifier / figure / label), replaces the hero-metric-card template.
- **Hero background:** dual radial-gradient — emerald (`rgba(0,105,72,.22)`) + hydrogen-blue (`rgba(30,95,212,.18)`), expressing the hydrogen+water duality of the brand.
- **Products:** vertical row list (`.products-list`/`.product-row`), border-top dividers, `180px / 1fr / 300px` columns. Featured row (N2) gets `--green-pale` background + `--r-lg` radius. Tier badges are `--r-full` pills. No card grid.
- **Applications:** numbered single-column index (`.apps-list`/`.app-row`), `48px / 1fr`, border-bottom dividers, `01`–`08` numerals instead of icons.
- **Benefits:** 2-column list (`.benefits-list`/`.benefit-item`), border-top dividers, on `--navy` dark panel.
- **World Tests / Comparison:** data table (`.table-wrap`, `--r-lg`) — Location | Test Type | Fuel Saving. Saving column inherits the `--green` `td:last-child` highlight.
- **About stats:** 2×2 evidence grid (`.about-stats`, `--r-lg`), 1px border-gap dividers, four short figures.
- **Certifications:** `.cert-panel` (`--r-lg`) containing `.cert-item` tags (`--r`, `--border` hairline) with a `--green` ✓ — a tag cloud, not a card grid.
- **Contact details:** row items with a small icon box (`Tel` / `HQ` / `Co.`, `--r` radius) in `--green2` on `--navy` — no emoji.
- **FAQ:** accordion list, `--border` hairlines between items, `--green` icon circle on open state, `.faq-contact-note` panel at `--r-md`.
- **Form:** `.form-panel` at `--r-xl`; inputs/textarea at `--r`, `--off-white` fill, focus state switches border + ring to `--hydro`.

## 6. Anti-Patterns (avoided)
- No hero-metric template — evidence bar instead.
- No identical N-card grids — products/applications/benefits/tests use row lists, numbered indexes, or tables.
- No emojis (contact icons use text labels; ✓ checkmarks retained as standard UI ticks in tables/badges).
- No gradient text, no glassmorphism, no side-stripe borders.
- No pure black, no neon glow — shadows tinted with `--gray`, hero gradients capped at 18–22% opacity.
