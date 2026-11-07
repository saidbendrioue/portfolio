# DESIGN.md — Said Bendrioue portfolio

**World name:** Sealed Trust Register  
**Mode:** Experience (portfolio) with Persuade CTAs  
**Taste knobs:** DESIGN_VARIANCE **7** · MOTION_INTENSITY **5** · VISUAL_DENSITY **4**  
**Influences:** Swiss International rigor (grid, flush-left) + Legal/institutional navy authority (xdx 24 / 37) + Müller-Brockmann mathematical structure — **not** glass SaaS, not purple AI, not cream+terracotta.

**Rollback SHA:** `0b46d690be2e41709ded996e7a96dab3e89eb9df`

---

## 1. Atmosphere

A sealed electoral / banking register: cool paper, deep navy ink, one institutional teal seal. Structure is the ornament. Photography is objective and full-bleed. Typography carries authority; decoration is banned unless it is a register mark (tick, hairline, rule).

Four-word brief: **sealed trust register**.

---

## 2. Color (oklch)

| Token | oklch | Role |
|---|---|---|
| `--paper` | `oklch(96.5% 0.008 250)` | Page ground — cool off-white |
| `--paper-deep` | `oklch(93.5% 0.012 250)` | Alternate bands / grain wash |
| `--surface` | `oklch(99% 0.004 250)` | Raised reading panels (About/Skills) |
| `--ink` | `oklch(28% 0.055 250)` | Primary navy ink / brand |
| `--ink-soft` | `oklch(38% 0.045 250)` | Secondary headings |
| `--muted` | `oklch(48% 0.028 250)` | Body secondary (≥4.5:1 on paper) |
| `--accent` | `oklch(45% 0.07 195)` | Sealed teal — links, focus, one CTA |
| `--accent-press` | `oklch(38% 0.065 195)` | Pressed / hover CTA |
| `--line` | `oklch(28% 0.055 250 / 0.16)` | Hairlines |
| `--fill` | `oklch(28% 0.055 250 / 0.05)` | Row hover wash |
| `--white` | `oklch(100% 0 0)` | On-ink / on-photo text |
| `--hero-shade` | navy overlays via `oklch(28% 0.055 250 / α)` | Readable text on photo |

**Rules:** Max one chromatic accent (teal). Never purple, never Apple `#0071e3`, never gold prestige. Selection background = accent at ~28% opacity.

---

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Display / brand | **Newsreader** (opsz 6–72, wght 500–700) | Institutional serif; brand H1 hero (Fraunces avoided — overused detector) |
| Body / UI | **IBM Plex Sans** (400–600) | Engineering clarity |
| Register / meta | **IBM Plex Mono** (400–500) | Periods, stacks, seal marks — data only |

**Scale**

| Step | Size | Weight | Tracking |
|---|---|---|---|
| Brand | `clamp(2.9rem, 10vw, 5.4rem)` | 600 | -0.03em |
| Headline | `clamp(1.25rem, 2.4vw, 1.7rem)` | 500 | -0.015em |
| Section H2 | `clamp(1.9rem, 3.5vw, 2.65rem)` | 600 | -0.02em |
| Project H3 | `clamp(1.2rem, 2vw, 1.5rem)` | 600 | -0.015em |
| Body | `1.0625rem` / lh 1.55 | 400 | 0 |
| Meta / nav | `0.8125rem` | 500 | 0–0.04em for uppercase labels |

Flush-left, ragged-right. Body measure ~60–70ch. No centered marketing blocks. **No kickers/eyebrows above headings.**

---

## 4. Spacing & layout

- Base unit: **8px**; section padding `clamp(4.75rem, 9vw, 7rem)` (density 4 = airy).
- Content max: **1200px**; equal left/right edges via `.wrap`.
- Signature: **2px ink ledger rule** along content column from About downward (desktop ≥860px).
- Grid: CSS Grid; About ~5/7 asymmetric; Contact ~6/6; Projects single column ledger.
- Radius: **2px** (near-sharp institutional). No pills (`999px`).
- Shadow: almost none; depth via hairlines and paper/surface contrast only.

Breakpoints: `720` (nav collapse), `860` (ledger + 2-col), `1200` (max).

---

## 5. Motion (intensity 5)

Three authored moments only:

1. **Hero settle** — content `opacity` + `translateY(12px→0)`, ~480ms ease-out, once.
2. **Ledger draw** — vertical rule `scaleY` from top on first enter viewport (~700ms).
3. **Row / link feedback** — project row background wash; CTA `scale(0.98)` on press; nav underline draw.

All compositor-friendly (`opacity`, `transform`). Honor `prefers-reduced-motion: reduce` → instant visible state, no animation.

---

## 6. Components

| Component | Spec |
|---|---|
| Chrome | Fixed solid ink bar → inverts to paper after hero; brand Fraunces; nav Plex; lang outlined square |
| Hero | Full-bleed photo; brand first; role under brand (mono/small); one headline; one lead; primary teal CTA + ghost CV |
| About | Asymmetric title/body; location in accent; no cards |
| Projects | Ordered ledger; hairline separators; client + role·period; stack in mono with middots; “Also” dashed rule |
| Skills | `dl` rows; uppercase accent labels; items as running text |
| Contact | Display-size email; LinkedIn line; outline CV button; short note |
| Buttons | Primary teal fill; ghost on photo; outline on paper; radius 2px; min-height 44px |
| Focus | `outline: 2px solid var(--accent); outline-offset: 3px` on `:focus-visible` |

**Banned:** glass/blur chrome, pill chips, soft SaaS cards, purple gradients, emoji, section `01` labels, Inter-only stacks.

---

## 7. Imagery

- Only real portrait: `src/assets/said-bendrioue.jpg` (original arms-crossed headshot).
- Full-bleed hero plane; dual navy gradients for type legibility; no floating badges/overlays.
- No stock collage, no inset hero card.

---

## 8. Content constraints

Preserve STAR facts, bilingual FR/EN, CV PDF, email + LinkedIn only, base `/portfolio/`, 8 years experience copy.
