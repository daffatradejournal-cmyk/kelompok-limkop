---
name: design-taste-frontend
description: >-
  Anti-slop frontend framework and design-taste skill for landing pages, portfolios,
  and web UI. Enforces intentional art direction, brief inference, strict typography,
  anti-cliché rules, and rigorous pre-flight quality checks to eliminate generic AI templates.
---

# Design Taste Frontend (Taste Skill)

A high-agency, anti-slop frontend engineering framework for coding assistants. Prevents generic AI templates (centered heroes, purple gradients, 3-card features, arbitrary em-dashes) and enforces intentional art direction.

---

## Section 0: Brief Inference (Read the Room)

Before writing any code or modifying any markup, perform brief inference and state the **Design Read**:
1. **Page Kind**: Landing page, portfolio, agency showcase, product preview, etc.
2. **Vibe**: E.g., Minimalist editorial, Swiss brutalist, warm boutique, industrial utilitarian, dark cyber-indie.
3. **Target Audience**: Who is viewing this and what emotional reaction should it evoke?
4. **Design Read Output**: Emit a concise, one-line declaration:
   > `Design Read: [Page Kind] | Vibe: [Keywords] | Audience: [Target] | Direction: [Chosen Aesthetic]`

---

## Section 1: The Three Dials

Calibrate the following constraint dials (scale 1–10) based on the brief:

1. **`DESIGN_VARIANCE`** (Default: `8` | Range: `1`–`10`)
   - `1` = Strict corporate symmetry, conservative layout.
   - `10` = Asymmetric, editorial, experimental, high-agency custom layout.
2. **`MOTION_INTENSITY`** (Default: `6` | Range: `1`–`10`)
   - `1` = Completely static, zero motion.
   - `10` = Cinematic choreographies, spring transitions, interactive hover physics.
3. **`VISUAL_DENSITY`** (Default: `4` | Range: `1`–`10`)
   - `1` = Expansive whitespace, gallery pacing, airy margins (`py-24+`).
   - `10` = Dense dashboard cockpit, compact tabular data, high information density.

*Declare the active dial state at the start of generation.*

---

## Section 2: Design System & Honesty Rule

- If a specific design system matches the brief (e.g. `shadcn/ui`, `Polaris`, `Carbon`, `Fluent`), use the official packages and tokens honestly.
- If designing a bespoke layout, commit fully to a distinct visual character. Do not haphazardly blend incompatible aesthetic vocabularies.

---

## Section 3: Technical Constraints & Conventions

1. **Dependency Verification**: Inspect `package.json` before importing 3rd-party libraries. If dependencies are missing, state the exact installation command.
2. **Component Boundaries**: Keep static layout elements lightweight; isolate interactive components cleanly.
3. **Tailwind / CSS Guardrails**: Lock CSS variables and maintain consistent theme tokens. Avoid unsupported or mixed syntax versions.
4. **Anti-Emoji Policy**: Strictly ban emojis as icons or decorative filler. Use purposeful SVG icon sets (e.g., Lucide, Phosphor, Radix Icons, FontAwesome) or genuine typography glyphs.

---

## Section 4: Design Engineering & Anti-Slop Directives

1. **Deterministic Typography**:
   - Lead with high-impact scaling (`text-4xl md:text-6xl tracking-tight leading-none`).
   - Avoid generic fallback typography (e.g., plain Inter over slate-900) for creative or premium briefs. Choose purposeful typography pairings (e.g., Geist, Satoshi, Syne, Outfit, Plus Jakarta Sans, DM Sans).
2. **Layout Discipline & Mobile Viewport**:
   - Never use `h-screen` for mobile hero sections. Use `min-h-[100dvh]` or flexible containers to prevent mobile address-bar jumpiness.
   - Favor CSS Grid (`grid-cols-1 md:grid-cols-12`) over fragile manual percentage flex math (`w-[calc(33%-1rem)]`).
3. **Hero Section Discipline**:
   - The hero section must establish immediate visual clarity within the viewport.
   - Headlines should rarely exceed 2–3 lines on desktop. Key primary CTA actions must remain accessible without hunting.

---

## Section 5: Motion Skeletons & Accessibility

1. **Reduced Motion**: Respect `prefers-reduced-motion: reduce`. Motion states must gracefully collapse into clean, instant transitions.
2. **Reflow Performance**: Avoid attaching raw unthrottled `window.addEventListener('scroll')` to component state. Use CSS sticky/fixed positioning or optimized intersection observers.

---

## Section 6: Color & Shape Consistency Locks

1. **Palette Discipline**: Limit active palette to 1 primary canvas background, 1-2 surface levels, 1 dominant high-contrast text tone, 1 muted text tone, and at most 1 distinct brand accent.
2. **Consistency Lock**: Do not introduce new arbitrary colors or random corner-radii midway through a layout. If buttons use `rounded-lg` with `accent-amber`, retain that visual rhythm across all matching elements.

---

## Section 7: Dark Mode Protocol

- Ensure full dual-mode support or intentional deep-canvas styling.
- Avoid blinding pure black (`#000000`) on pure white (`#FFFFFF`). Use refined off-black surfaces (`#09090b`, `#0f172a`, `#121212`) and soft-white typography (`#f8fafc`, `#f4f4f5`).
- Ensure contrast ratios strictly meet WCAG AA standards (4.5:1 for body text, 3:1 for large headers).

---

## Section 8: The Big AI Anti-Slop Bans

- 🚫 **No Arbitrary Em-Dashes**: Ban excessive `—` used as pseudo-intellectual filler.
- 🚫 **No Generic Numbered Eyebrows**: Do not add pointless `"01 / INTRODUCTION"`, `"02 / ABOUT"` badges above standard headers unless explicitly demanded by an editorial brief.
- 🚫 **No 3-Equal-Card Monotony**: Avoid the cliché three identical rounded feature cards with centered icons and purple gradient borders. Vary density, scale, or layout rhythm.
- 🚫 **No Fake UI Mockup Slop**: Do not draw fake dashboard preview cards with arbitrary generic dummy progress bars. Use authentic representation or real photography/imagery.
- 🚫 **No Generic AI Purple/Indigo Gradients**: Prohibit default radial purple/blue glowing backdrop blobs.

---

## Section 9: Pre-Flight Checklist

Before final output delivery, verify every check passes:
- [ ] Brief inferred and one-line Design Read stated.
- [ ] Dials calibrated (`DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`).
- [ ] Anti-slop bans respected (no em-dash filler, no generic 3-card template, no emojis as icons).
- [ ] Mobile responsive layout verified (`100dvh`, robust grid wrapping).
- [ ] Color and radius consistency locked across sections.
- [ ] Full code output provided without missing placeholder chunks.
