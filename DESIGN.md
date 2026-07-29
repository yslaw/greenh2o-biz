# Design System: GreenH2O Technology — Vitality Industrial

## 1. Visual Theme & Atmosphere
Evidence-led B2B site for a hydrogen-on-demand retrofit product. Industrial precision + ecological responsibility: a light slate-blue canvas with deep ocean-navy panels for header/hero/footer/dark sections, emerald-green as the primary accent (CTAs, evidence figures, links), hydrogen-blue reserved for interactive/focus moments (form focus rings, hero gradient). Density: Daily App Balanced. Motion: fluid CSS (scroll-reveal fades, 3D flip cards), no cinematic choreography. Mood: a technical brief from an institution that also ships consumer-grade software — data-forward, not sales-forward.

Grids are not avoided outright, but they're reserved for two specific flip-interaction moments (certifications, applications); everything else — products, benefits, comparisons, world-test evidence — reads as a row-list or table, keeping the page from turning into a wall of identical SaaS cards.

## 2. Color Palette & Roles
- `--navy: #0A1628` — header/footer, dark panels (hero, benefits, contact), cert flip-card backs
- `--navy2: #102036` / `--navy3: #213145` — navy panel gradients, evidence-bar background
- `--green: #006948` (primary) — CTAs, evidence figures, links, table highlight column, focus accents
- `--emerald-deep: #064E3B` — primary button hover/active state
- `--green2: #68dba9` — on-navy highlights (hero tag, evidence labels, contact icon boxes, benefit numerals)
- `--green-light: #85f8c4` — light tinted badge fill (product tier badge)
- `--green-pale: #e7f5ee` — featured product row tint, FAQ contact-note panel, table row hover
- `--hydro: #1E5FD4` (hydrogen-blue) — input focus rings, checkbox-pill selected state, hero gradient
- `--white: #ffffff` — card surfaces, text on dark panels
- `--off-white: #eff4ff` — recessed sections (trust bar, world-tests bg, form inputs), app-card back face
- `--bg: #f8f9ff` — page base background
- `--gray: #535f74` — body/secondary text; also the shadow-tint source
- `--gray2: #6d7a72` — secondary borders/dividers, uppercase micro-labels
- `--border: #bccac0` / `--border2: #6d7a72` — hairlines, card/divider borders
- `--text: #0b1c30` — primary text

Two-accent system: emerald carries weight (CTAs, evidence), hydrogen-blue is reserved for focus/interactive water-adjacent moments only. All neutrals tinted toward the navy hue — no pure black anywhere in the palette.

## 3. Typography
- **Display:** Manrope (600–800) — headings, evidence figures, product model numbers
- **Body:** Hanken Grotesk (300–800) — paragraphs, nav links, form labels, ~65ch max
- **Logo wordmark:** IBM Plex Sans Condensed (700) — `--logo-font`, used only for the "GreenH2O Technology" text next to the icon mark (nav + dark contact section). Scoped deliberately separate from `--heading` so a global heading-font change never touches the wordmark, and vice versa.
- **Banned:** Inter, generic serifs

The logo itself is an icon-only mark (no baked-in wordmark), so every placement pairs `<img>` + a text span rather than expecting one image to carry the brand name.

## 4. Shape & Elevation
Radius scale:
- `--r-sm: 0.25rem` — small badge accents (cert badge fallback)
- `--r: 0.5rem` — buttons, nav links, inputs, contact-detail icon boxes, flip-card faces
- `--r-md: 0.75rem` — contact-block panel, FAQ contact-note
- `--r-lg: 1rem` — product-row cards, cert-panel, table-wrap, about-stats grid, app-card
- `--r-xl: 1.5rem` — form panel (largest container on the page)
- `--r-full: 9999px` — pills: hero tag, trust certs, product tier badges, featured badge

Shadows are soft/diffused, tinted with `--gray` at 4–14% opacity rather than black:
- `--shadow-sm: 0 1px 3px rgba(83,95,116,.08), 0 1px 2px rgba(83,95,116,.04)`
- `--shadow: 0 4px 16px rgba(83,95,116,.10), 0 2px 6px rgba(83,95,116,.05)`
- `--shadow-lg: 0 16px 40px rgba(83,95,116,.14), 0 4px 14px rgba(83,95,116,.06)`

## 5. Component Patterns

**Nav** — sticky, white, 68px bar. Icon mark (48px) + `--logo-font` wordmark, flex-paired. Links get a `--green-pale` hover fill; CTA is a solid green pill that darkens to `--emerald-deep` on hover. Mobile collapses to a hamburger driving a full-screen navy-on-white overlay with staggered link fade-in (50ms step).

**Hero** — full-bleed `--navy`, layered: faint 48px grid-line texture, an optional video background, a dual radial-gradient (emerald at top-right, hydrogen-blue at bottom-left — literally the hydrogen+water duality of the brand), a flat 50%-opacity navy scrim on top for text contrast, and a 4px left accent line fading in/out vertically.

**Evidence bar** — full-width `--navy2` strip directly under the hero. 4-column grid, each cell a qualifier / big figure / label stack. Deliberately replaces the generic "hero metric card" template with a plain data strip.

**Trust bar** — `--off-white` strip, single row of `--r-full` pill badges naming certifying bodies.

**Products** — NOT a row list: a 3-column CSS grid using `grid-template-rows: subgrid` so every row's tier badge / model number / spec list / notes align across all three product cards regardless of content length. Tier badge has three color variants (`tier-blue`, `tier-navy`, `tier-gold`, all on-brand, no red/yellow). The featured (middle) tier gets a `--green-pale` tint and `--green` border instead of a "Most Popular" ribbon.

**About** — 2-column split: prose + a 2×2 stat grid (hairline dividers via a 1px `--border` background peeking through a grid gap, not individual borders) sitting above a `.cert-panel` containing a **5-column 3D flip-card grid** (300px tall, `perspective`, `rotateY(180deg)` on hover/click/tap — front shows cert logo, back shows issuing body + result copy, scrollable if long).

**Applications** — a **2-column 3D flip-card grid**, same `rotateY` mechanic as certifications: front face is a photo with a numbered overlay (`01 Logistics Fleet`), back face flips to a plain-language description on `--off-white`. This is the site's one deliberate repeated card-grid pattern, reused twice (certifications, applications) specifically because the flip interaction is the payoff — everywhere else avoids grids in favor of lists/tables.

**Benefits** — 2-column list on a `--navy` panel, border-top dividers, large `--green2` numerals instead of icons.

**Comparison / World Tests** — both share `.table-wrap`: navy header row, hairline row dividers, last column (the Nucleus result) bolded green, row hover tints `--green-pale`.

**FAQ** — sidebar (320px) + accordion list split. Each item's `+` icon rotates 45° and fills green when open; answer panel animates via `max-height` transition. A `--green-pale` callout panel closes out the sidebar.

**Contact** — 2-column: info column (logo lockup, heading, three `contact-detail` rows — HQ address, company name, email — each with a small `--green2`-on-navy icon-box, no phone number, no emoji) + a white `form-panel` (largest radius on the page). Model-selection uses checkbox-styled pills driven by the `:has(input:checked)` CSS selector rather than JS class-toggling. Inputs focus to a hydrogen-blue ring.

**Footer** — simple flex row: brand mark, link list, copyright, all in low-opacity white-on-navy.

**Motion** — two systems only:
1. Scroll-reveal: `IntersectionObserver` toggles a `.visible` class that fades + translateY(20px→0) over 0.7s cubic-bezier, applied broadly via a `.reveal` class.
2. 3D flip: `rotateY(180deg)` over 0.55s cubic-bezier, used only on certification and application cards; respects `prefers-reduced-motion` (transition removed) on the application cards.
No other animation vocabulary — hover states are flat 0.2s color/transform transitions.

## 6. Anti-Patterns (avoided)
- No hero-metric-card template — a plain evidence-bar strip instead.
- No gradient text, no glassmorphism/backdrop-filter, no side-stripe borders anywhere in the stylesheet.
- No emojis — contact icons are short text labels (HQ / Co. / @) in a fixed 32px box.
- No pure black — shadows tinted with `--gray`, hero gradients capped at 18–22% opacity.
- No generic "3 identical cards" feature row for products/benefits/comparisons — those use subgrid-aligned rows, lists, or tables. The only true card grids on the page (certifications, applications) exist specifically to carry a 3D flip interaction, not as a default layout choice.
