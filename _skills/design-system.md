# Skill: design-system
# When to use: any UI work — components, pages, layouts, styling

## Identity

**Project**: Santé Tonique — Fort-de-France, Martinique
**Aesthetic**: Warm & artisanal. Like walking into a trusted family shop.
Think: local Martinique market, golden afternoon light, handwritten labels, natural textures.
**NOT**: clinical, generic, cold, pharmaceutical, purple-gradient AI defaults.

---

## Color Palette

```css
:root {
  --honey:      #C8732A;  /* Primary CTA, accents, logo accent */
  --terra:      #A0522D;  /* Hover on primary, italic text */
  --gold:       #D4A852;  /* Accents on dark backgrounds */
  --cream:      #F5EDD9;  /* Secondary section backgrounds */
  --ivory:      #FBF6EC;  /* Main page background */
  --bark:       #3D2B1F;  /* Primary text, dark sections, footer */
  --sage:       #7A8C5E;  /* Eyebrow labels, badges, secondary accents */
  --sage-lt:    #A8BA88;  /* Chips/tags on dark backgrounds */
  --warm-white: #FEFAF2;  /* Products section bg */
}
```

**Color usage rules**
- `--honey` is the single dominant action color. Do not introduce other CTA colors.
- Dark sections (About, Footer) use `--bark` as background, `--gold` as accent.
- Never use pure black (`#000`) or pure white (`#fff`) — always use the palette.
- Background gradient for hero sections: `linear-gradient(135deg, #F5E6C8, #E8D09A)`

---

## Typography

### Font Stack

| Role                  | Family               | Weight(s)    | Notes                         |
|-----------------------|----------------------|--------------|-------------------------------|
| H1, H2 display titles | Cormorant Garamond   | 400, 600     | Serif, editorial               |
| H1/H2 italic accents  | Cormorant Garamond   | 400 italic   | Used for emotional emphasis    |
| Logo, eyebrow labels  | Caveat               | 500, 700     | Handwritten, artisanal warmth  |
| Body, UI, nav, buttons| Jost                 | 300, 400, 500| Clean, contemporary            |
| Taglines, blockquotes | Cormorant Garamond   | 400 italic   | `color: --terra`              |

### Type Scale

```css
/* Display */
h1 { font-size: clamp(3rem, 5.5vw, 5rem); line-height: 1.05; }
h2 { font-size: clamp(2rem, 3.5vw, 2.8rem); line-height: 1.2; }

/* Eyebrow label (Caveat) */
.eyebrow { font-family: 'Caveat', cursive; font-size: 1.1rem; color: var(--sage); }

/* Body */
body { font-size: 0.95rem; font-weight: 300; line-height: 1.8; }

/* Nav / Buttons / Labels */
.label { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; }

/* Tagline */
.tagline { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.2rem; color: var(--terra); }
```

### Rules
- Italic colored text (`--honey` or `--terra`) is used for emotional/spiritual emphasis in headings.
- Eyebrow labels use a `::before` line: `content:''; width:32px; height:1.5px; background:var(--sage-lt)`
- Never use Arial, Inter, Roboto, or system fonts — always load and use the three defined families.

---

## Iconography

**Rule: Never use emojis.** They render inconsistently and look cheap.

### Lucide Icons
Use Lucide SVG icons for all functional icons.
Recommended icons for this project:
- Navigation / UI: `ChevronRight`, `Menu`, `X`
- Contact: `Phone`, `MapPin`, `Mail`, `Clock`
- Products: `Leaf`, `Package`, `Heart`, `Shield`, `Sparkles`
- Values: `Users`, `Star`, `CheckCircle`

### Decorative accent
Use the `✦` character (U+2726) as a decorative dot/star accent.
Style it with `color: var(--honey)` or `color: var(--gold)` depending on background.

### Product photos
- Size: 1200×1200px square
- Background: warm artisanal template (ivory/cream/honey palette, grain texture, corner brackets)
- Format: WebP (JPEG fallback)
- No stock photos — real shop/product/family images only

---

## Layout System

### Grid Patterns
```css
/* Hero */
.hero { display: grid; grid-template-columns: 1fr 1fr; }

/* About (dark section) */
.about { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; }

/* Product categories */
.categories { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

/* Contact */
.contact { display: grid; grid-template-columns: 1.2fr 1fr; gap: 5rem; }

/* Responsive — all collapse to single column */
@media (max-width: 900px) {
  .hero, .about, .categories, .contact { grid-template-columns: 1fr; }
}
```

### Spacing
- Section padding: `6rem 5rem` (desktop) → `3rem 1.5rem` (mobile)
- Nav padding: `1.2rem 4rem`
- Gap between grid items: `1.5rem` (cards), `5rem` (content blocks)

### Structural shapes
- Hero card border-radius: `4px 60px 4px 60px` (organic asymmetry)
- Hero background shape: organic blob, `border-radius: 60% 0 0 50% / 50% 0 0 60%`, opacity 0.18
- Category cards: `border-radius: 3px`, no rounded corners — clean edges
- Buttons: `border-radius: 2px` — almost sharp, intentional

---

## Component Patterns

### Buttons
```css
/* Primary */
.btn-primary {
  background: var(--honey); color: white;
  padding: 0.85rem 2rem;
  font-family: 'Jost', sans-serif; font-size: 0.85rem;
  font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
  border: none; border-radius: 2px;
  transition: background 0.3s, transform 0.2s;
}
.btn-primary:hover { background: var(--terra); transform: translateY(-1px); }

/* Secondary */
.btn-secondary {
  background: transparent; color: var(--bark);
  border: 1.5px solid rgba(61,43,31,0.25);
  /* same padding/font as primary */
}
.btn-secondary:hover { border-color: var(--honey); color: var(--honey); }

/* Nav CTA */
.nav-cta {
  color: var(--honey); border: 1.5px solid var(--honey);
  padding: 0.5rem 1.2rem;
}
.nav-cta:hover { background: var(--honey); color: white; }
```

### Section eyebrow label
```html
<div class="eyebrow">
  <!-- ::before line applied via CSS -->
  Notre histoire
</div>
```
```css
.eyebrow::before {
  content: '';
  display: inline-block;
  width: 32px; height: 1.5px;
  background: var(--sage-lt);
  margin-right: 0.6rem;
  vertical-align: middle;
}
```

### Value chips (on dark background)
```css
.value-chip {
  background: rgba(245,237,217,0.07);
  border: 1px solid rgba(245,237,217,0.12);
  padding: 0.5rem 1rem; border-radius: 2px;
  font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--sage-lt);
}
```

### Cards
- Hero product card: gradient bg `linear-gradient(145deg, #F9F0DC, #EFE0B8)`, corner-radius `4px 60px 4px 60px`
- Category card: white bg, `border: 1px solid rgba(200,115,42,0.1)`, hover `translateY(-6px)` + shadow
- Category banner area: gradient bg (honey tones), houses the Lucide icon

---

## Decorative Effects

### Noise texture overlay (grain)
Apply as a `::before` pseudo-element on `body` or section wrappers — fixed position:
```css
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,..."); /* fractalNoise SVG */
  pointer-events: none;
  z-index: 1000;
  opacity: 0.4;
}
```

### Corner bracket decoration
Used inside cards or frame elements to signal quality/craftsmanship:
```css
/* Four corner L-shapes drawn with box-shadow or ::before/::after pseudo elements */
/* Color: var(--honey), thickness: 2px, length: 28px */
```

### Section dark (About)
```css
.section-dark {
  background: var(--bark);
  position: relative; overflow: hidden;
}
/* Decorative radial glows via ::before / ::after pseudo-elements */
.section-dark::before {
  content: '';
  position: absolute; left: -100px; top: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(ellipse, rgba(212,168,82,0.15) 0%, transparent 70%);
}
```

---

## Animations

**Principle**: Only animate when it adds meaning. No animations for pure decoration.

| Animation         | Trigger      | Properties                                   | Duration |
|-------------------|--------------|----------------------------------------------|----------|
| `fadeUp`          | Page load    | `opacity 0→1` + `translateY(30px→0)`         | 1s ease  |
| Scroll reveal     | Scroll       | `.reveal` → `.reveal.visible` via IntersectionObserver | 0.7s ease |
| Button hover      | Hover        | `translateY(-1px)` + bg color change         | 0.3s     |
| Card hover        | Hover        | `translateY(-6px)` + box-shadow              | 0.3s     |
| Arrow link `→`   | Parent hover | `translateX(4px)` on `::after`               | 0.2s     |

**Scroll reveal setup**:
```js
const observer = new IntersectionObserver(
  entries => entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible') }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

---

## Content & Tone Guide

- **Language**: French (Martinique)
- **Voice**: Warm, honest, family-oriented. Like a knowledgeable friend recommending products.
- **Spiritual layer**: Present through *phrasing and values*, never scripture or explicit religion.
  - ✅ "Prendre soin de son corps, c'est un acte de gratitude."
  - ✅ Values: Intégrité · Bienveillance · Naturel
  - ❌ Bible verses, explicit "God" references, religious imagery
- **Avoid**: Marketing hyperbole, superlatives, fake urgency
- **Stats to highlight**: Founded 2001, Fort-de-France, family business, 100% natural products

---

## Pages & Sections

| Page / Section       | Route         | Status      |
|----------------------|---------------|-------------|
| Home                 | `/`           | In progress |
| Products             | `/produits`   | Planned     |
| About                | `/a-propos`   | Planned     |
| Contact              | `/contact`    | Planned     |

### Home page sections (in order)
1. **Nav** — fixed, backdrop-blur
2. **Hero** — 2-col, headline + product categories card
3. **About strip** — dark section, family story since 2001
4. **Products** — 3-col category cards
5. **Philosophy** — warm gradient, quote/blockquote
6. **Contact** — address, phone, email, hours, map placeholder
7. **Footer** — brand, copyright, values tagline
