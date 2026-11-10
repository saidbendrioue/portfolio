# DESIGN.md — Said Bendrioue portfolio (UI UX Pro Max)

**World:** Sealed Trust Register × Banking Swiss  
**Source:** UI UX Pro Max (`design-system/said-bendrioue/MASTER.md`)  
**Dials:** variance 7 · motion 5 · density 4  
**Rollback (pre Pro Max):** `f8066d28ae23fa5d604d7344351e9155d869646f`

Full rationale: store doc `pro-max-design.md`.

## Style
Minimalism & Swiss Style + Accessible & Ethical. Pattern: Trust & Authority. IA: Hero → About → Projects → Skills (groups + production combinations with tech icons) → Contact.

## Colors (Banking / Traditional Finance)
| Role | Hex |
|---|---|
| Primary | `#0F172A` |
| Secondary | `#1E3A8A` |
| Accent/CTA | `#A16207` (CTA only) |
| Background | `#F8FAFC` |
| Foreground | `#020617` |
| Muted FG | `#475569` |
| Border | `#E2E8F0` |

Rejected: Fintech/Crypto purple `#8B5CF6`.

## Typography
**Financial Trust:** IBM Plex Sans (heading + body) · IBM Plex Mono (meta). Radius `0`.

## Motion
CSS hero settle + ledger draw + staggered project reveals. No GSAP overshoot on ledger rows. Honor `prefers-reduced-motion`.
