# Portfolio — Design System Rules
*Drop this in `.cursor/rules/design-rules.md`*

---

## 0. The One Rule

If it looks like something you've seen before, change it.
This portfolio is a **designed object** — not assembled from components, not scaffolded from a template.
A senior designer built this. Every decision has a reason. Every pixel is accounted for.

---

## 1. Aesthetic Direction

**Editorial meets East African modernism.**

Think: a Lusaka architect's printed portfolio from 2019. Monograph-quality. Serious without being cold.
The Zambian reference is geological and atmospheric — copper ore, red laterite dust, the Zambezi at low water, the sky just before the rains come. It is **never** decorative or folksy.

The visual language is **typographic-first**. If the type isn't doing the work, something is wrong.
Images are sparse and deliberate. Icons are almost entirely absent.
White space (warm, not cold) carries as much weight as any element.

---

## 2. Colour

```css
:root {
  /* Ground */
  --bg:           #F5F1EB;   /* laterite warmth — aged, not stark */
  --bg-alt:       #EDEAE2;   /* slightly deeper surface */
  --ink:          #18160F;   /* deep warm black */
  --ink-2:        #5C5448;   /* secondary / muted text */
  --ink-3:        #9C9285;   /* captions, metadata */

  /* Copper vein — the one accent */
  --copper:       #A85C2C;   /* raw copper ore */
  --copper-light: #C4834E;   /* hover, active states */

  /* Dark inversion (footer, feature sections) */
  --dark-bg:      #110F0B;
  --dark-surface: #1C1912;
  --dark-ink:     #E8E3D8;

  /* Borders */
  --rule:         rgba(24, 22, 15, 0.12);
  --rule-strong:  rgba(24, 22, 15, 0.25);
}
```

**Laws:**
- One accent. `--copper` only. No second colour. No blue. No purple. No anything else.
- Never `#fff`. Never `#000`. Always the warm equivalents.
- No gradients. No colour-stop backgrounds. No tinted section bands.
- The dark sections exist to create **rhythm and contrast**, not to show off a dark mode.

---

## 3. Typography — The Architecture

This site is built on type. Get this right before touching anything else.

```css
/* Load via next/font — never CDN */
--font-head:  'Neue Haas Grotesk Display Pro', 'Helvetica Neue', sans-serif;
--font-body:  'Freight Text Pro', Georgia, serif;
--font-label: 'Suisse Int\'l Mono', 'Courier New', monospace;
```

> If those aren't accessible, the **only** acceptable substitutes are:
> - Heading: `'Aktiv Grotesk'` or `'ABC Whyte'`
> - Body: `'Garamond Premier Pro'` or `'EB Garamond'`
> - Label: `'iA Writer Mono'` or `'JetBrains Mono'`
> Never: Inter, DM Sans, Poppins, Plus Jakarta, Space Grotesk.

### Type Scale

```
--step--1:  0.694rem    /* fine print */
--step-0:   1rem        /* body */
--step-1:   1.333rem    /* large body / lead */
--step-2:   1.777rem    /* subhead */
--step-3:   2.369rem    /* section head */
--step-4:   3.157rem    /* display */
--step-5:   clamp(4rem, 9vw, 8rem)  /* hero */
```

Scale is **modular (major third, 1.333)**. No arbitrary sizes.

### Type Rules

- **Headlines**: Neue Haas Grotesk, weight 500. Tracking: `-0.03em`. No all-caps headlines.
- **Body**: Freight Text, regular. `1.8` line-height. This is a **serif body** — rare, distinctive, immediately non-generic.
- **Labels / metadata**: Mono font, uppercase, `0.1em` tracking, `--step--1`. Used for: dates, categories, sequence numbers, section labels. Nowhere else.
- **No bold body text** for emphasis — use italics (Freight Text italic is beautiful).
- Pull quotes: Neue Haas, light (300), very large, `--step-3` or `--step-4`, copper colour.
- Paragraph max-width: `62ch`. Never wider.

---

## 4. Layout — Uncommon Structures

### The Grid

```
Desktop: 12-column, 24px gutter, max-width 1440px
Tablet:  8-column, 20px gutter
Mobile:  4-column, 16px gutter, 20px outer margin
```

**Do not build conventional layouts.** Some patterns to use:

- **Offset text block**: Body text occupies columns 3–9. Columns 1–2 hold a hanging label. Columns 10–12 are empty.
- **Split asymmetric**: Left 7 columns content, right 5 columns image — or nothing.
- **Full-bleed text**: A single large typographic statement, edge to edge, with generous top/bottom padding. No image, no decoration.
- **Index layout**: A numbered list of projects as rows — date left, name centre, category right. No cards. No thumbnails unless you hover.

Section vertical rhythm: `clamp(96px, 14vw, 192px)` between sections. Breathe.

### Spatial Rules
- Asymmetry is the default. Centred layouts are used once — the hero only, or never.
- Hanging elements: labels and index numbers can hang into the left margin (`negative left margin`).
- One column of deliberate emptiness is worth more than a filler image.

---

## 5. No-Icon Policy

**Do not use icon libraries.** Not Heroicons, not Lucide, not FontAwesome. Not anything.

Icons are filler. They make sites look assembled. This site communicates with **text and shape only**.

**Allowed replacements:**
- Navigation arrows: `→` `←` Unicode. Set in the display font. They are beautiful.
- External links: no icon. Underline + a subtle `↗` character if truly needed — set in mono font.
- Social links: text only. `GitHub`, `LinkedIn`, `Twitter` — written out as words.
- Bullet points: em dash `—` or a small `2×2px` copper square (`▪` at tiny size) if a list is unavoidable.
- Decorative: a single `1px` horizontal rule. A sequence number in mono. Nothing more.

If you find yourself reaching for an icon, ask: *can a word do this job better?* Almost always yes.

---

## 6. Imagery

- **Sparse by design.** The site should function beautifully with zero images.
- When images are used: full-bleed or deliberately oversized. Never floated inside text.
- Treatment: `grayscale(15%) contrast(1.05) saturate(0.9)` — slight desaturation, slight punch.
- No rounded corners on images. Hard edges only.
- No image hover overlays with icons or text.
- Project images appear on hover of the index row (CSS only, `position: absolute` reveal) — not as permanent grid items.

**Texture:**
- One grain overlay on the hero, SVG `feTurbulence`, `opacity: 0.035`. Maximum.
- No other textures, no patterns, no backgrounds.

---

## 7. Components — Designed, Not Assembled

### Navigation

```
[Name / Initials]                    [Work]  [About]  [Contact]
```

- Fixed. `background: transparent` until 80px scroll, then `background: var(--bg)` with `0.4s ease`.
- No border on nav. No shadow. No backdrop blur.
- Links in mono label style — uppercase, small, tracked. On hover: colour shifts to `--copper`. No underline, no background, no bold.
- No mobile hamburger icon. On mobile: a simple `Menu` text button that reveals a full-page overlay — text only, large type, nothing else.

### Hero

Two options — pick one, don't mix:

**Option A — Typographic:**
A single enormous name, `--step-5`. Beneath it, a single line of serif body text describing the practice. Nothing else. The whitespace does the work.

**Option B — Split:**
Left column: name + descriptor in large type. Right column: a single portrait or still image, hard-cropped. No overlap, no effects, no badges.

**Never:** animated type, particle effects, gradient mesh, video backgrounds, rotating words, typewriter effects.

### Work / Project Index

```
01   Project Name         Brand Identity       2024   →
02   Project Name         Web Design           2023   →
03   ...
```

- Each project is a **full-width row**, separated by a `1px` rule.
- Columns: index number (mono) / project name (display) / category (mono, muted) / year (mono, muted) / arrow (unicode).
- On row hover: background shifts to `--bg-alt`, the project image fades in as an `absolute` positioned element (doesn't reflow the page).
- No cards. No thumbnails. No grid. The list format is the statement.

### About

- One column of text, offset left (columns 3–9 on the 12-col grid).
- Hanging section label in mono, column 1.
- One portrait — large, placed below or beside the text, never above.
- No skill bars. No tech stack icons. No "years of experience" counter.
- Just: who you are, how you think, what you do. In Freight Text. Beautiful.

### Contact

- One line: an email address. Large. Clickable `mailto:`.
- Beneath it: the three social links, written as words.
- No form. No "let's work together!" heading. The email is the call to action.

### Footer

```
[Name]                               [Year] — [Location]
```

- Dark background (`--dark-bg`). Minimal.
- Name left, year + location right. Both in mono label style.
- A single `1px` copper top rule.
- No links repeated. No logo repeated. No tagline.

---

## 8. Motion

Less is permanent. More is noise.

```css
:root {
  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:    cubic-bezier(0.5, 0, 0.75, 0);
  --ease-inout: cubic-bezier(0.85, 0, 0.15, 1);
  --dur-fast:   150ms;
  --dur-base:   300ms;
  --dur-slow:   600ms;
}
```

**Page load:** staggered fade-up. Name first (`opacity 0→1`, `translateY 12px → 0`). Then descriptor. Then nav links. Nothing else animates on load.

**Scroll reveals:** `IntersectionObserver`, `threshold: 0.15`. `opacity 0→1` + `translateY 20px → 0`. Duration `--dur-slow`. Once only — no repeat on scroll-up.

**Hover:**
- Row highlight: background colour, `--dur-fast`.
- Image reveal on project rows: `opacity 0→1`, `--dur-base`, `--ease-out`.
- Nav links: colour change, `--dur-fast`. No movement.
- Buttons: border colour + text colour, no movement.

**Forbidden:**
- Scroll-triggered parallax.
- Anything looping.
- Page transitions with full-screen overlays.
- Number counters / stat animations.
- Any animation that delays content access by more than `600ms`.

Always implement `@media (prefers-reduced-motion: reduce) { * { animation: none; transition: none; } }`.

---

## 9. Code Style — Not Standard Next.js

Write code that looks **authored**, not generated. Avoid the patterns every Next.js tutorial produces.

### File Structure
```
app/
  layout.tsx         ← root layout only, minimal
  page.tsx           ← home — composed of sections, not imported page components
  work/[slug]/
    page.tsx
components/
  Section.tsx        ← generic section wrapper with rhythm spacing
  ProjectRow.tsx     ← single work index row
  HoverImage.tsx     ← the image that reveals on project hover
lib/
  content.ts         ← all copy lives here, typed, not in JSX
  fonts.ts           ← font loading isolated
styles/
  globals.css        ← custom properties, reset, base type styles
  typography.css     ← the type system
```

- No `components/ui/` folder. No shadcn. No component library of any kind.
- No `cn()` / `clsx` for trivial class concatenation.
- CSS custom properties for **everything** — no Tailwind arbitrary values `[#hex]`.
- Tailwind is a utility layer, not the design system. The design system lives in `globals.css`.

### CSS Over Everything
Prefer CSS to JS for all visual behaviour:

```css
/* Hover image reveal — pure CSS */
.project-row {
  position: relative;
}
.project-row__image {
  position: fixed;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--dur-base) var(--ease-out);
}
.project-row:hover .project-row__image {
  opacity: 1;
}
```

Not a `useState` + `onMouseEnter` in sight.

### Named, Intentional Exports
```typescript
// not this
export default function Home() {}

// this — named, readable, intentional
export default function PortfolioHome() {}
export default function WorkIndex() {}
```

### Content Separation
```typescript
// lib/content.ts — all copy in one place
export const work: Project[] = [
  {
    id: '01',
    title: 'Project Name',
    category: 'Brand Identity',
    year: '2024',
    slug: 'project-name',
    image: '/work/project-name.jpg',
  },
]
```
No copy hardcoded in JSX. Ever.

### No Boilerplate Patterns
- No `const [isOpen, setIsOpen] = useState(false)` for a CSS-achievable toggle.
- No `useEffect` for something `IntersectionObserver` + CSS handles.
- No `useMediaQuery` hooks for responsive behaviour that CSS media queries handle.
- No `framer-motion` unless you cannot achieve the animation in pure CSS. Then: minimal usage, no `AnimatePresence` page wrappers.

---

## 10. The Zambian Grounding — Geological, Not Decorative

| Reference | Expression |
|---|---|
| Copper ore | `--copper` accent, used sparingly. The site's heartbeat. |
| Laterite earth | Warm background tone — `#F5F1EB`. The ground you stand on. |
| Luangwa at dusk | Dark section colour — `#110F0B`. Deep, not cold. |
| Pre-rain sky | Overcast warmth in the muted tones. |
| Chitenge geometry | If a pattern is used: one location, one colour, SVG, angular, 4% opacity. Never cute. |
| Zambian unhurriedness | Generous white space. Slow reveals. Nothing shouting for attention. |

The identity is in the **atmosphere**. Someone from Zambia will feel it. Someone who isn't won't be able to explain what makes it different — and that's exactly right.

---

## 11. The Hard No List

| Never | Because |
|---|---|
| Icon libraries | Icons make sites look assembled |
| `border-radius > 4px` on anything except a tag | Soft shapes read as templates |
| Pill buttons | Generic SaaS visual language |
| Gradient text | Designer red flag |
| Card grid with 3 equal columns | Default AI/template layout |
| `font-family: Inter` | It's the Times New Roman of the 2020s |
| Glassmorphism | Dead trend, wrong vibe |
| Hover effects that scale images up | Restless, unfocused |
| "Let's work together" as a heading | Cringe |
| Emojis in UI | No |
| Stats with animated count-up numbers | Noise |
| A "Tech Stack" section with icons | Show work, not tools |
| `className="flex items-center justify-between gap-4 p-6"` with no CSS variables | Tailwind soup |
| Any use of `bg-gradient-to-r` | See: gradient text |

---

*A designer made this. The code should read the same way.*