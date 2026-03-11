# Skill: clean-landing-page
# When to use: building or editing the home page, hero section, or any primary landing page

## Goal

Create a landing page that prioritizes **clarity and conversion**.
A visitor must understand — within 5 seconds — what the product/business is,
who it is for, and why it matters. Design serves the message. Never the reverse.

---

## Core Principles

1. **Clarity beats visual tricks** — if a design element doesn't help the visitor understand faster, remove it.
2. **Message first, design second** — write the copy before designing. The layout exists to deliver the message.
3. **Minimal distractions** — every element on the page competes for attention. Be ruthless about what earns its place.

---

## Above the Fold — Required Elements

The viewport on load (before any scrolling) must contain ALL of these:

- [ ] **Company logo** — visible, legible, top-left or centered
- [ ] **Clear H1** — one sentence explaining what the business/product does (not clever, just clear)
- [ ] **Subheadline** — one sentence explaining the value: who it helps and how
- [ ] **Primary CTA** — one button, one action. Visible without scrolling.

If any of these four are missing or require scrolling to see, fix it before proceeding.

---

## Forbidden Patterns

Never implement these — they are the signature of lazy AI-generated pages:

| Pattern                          | Why it's wrong                                              |
|----------------------------------|-------------------------------------------------------------|
| Purple gradient defaults         | Generic, unbranded, signals low effort                      |
| Scroll hijacking                 | Removes user control, disorients, kills accessibility       |
| Cursor-following effects         | Distracting, adds no information, breaks on mobile          |
| Unnecessary fade-in animations   | Delays content visibility, punishes fast readers            |
| Decorative particles / meteors   | Pure noise — communicates nothing, hurts performance        |
| Fake dashboards with metric cards| Misleading, adds visual complexity without meaning          |
| Hover effects that hide info     | Hover should surface more — never conceal or move content   |
| Moving / bouncing buttons        | Creates anxiety, makes the UI feel unstable                 |
| Auto-playing carousels           | Users can't read at carousel speed, causes disorientation   |
| Infinite scroll loaders on load  | Page should feel complete, not perpetually loading          |

---

## Design Rules

### Hover behavior
- Hover must **increase visibility** — show more detail, deepen color, reveal a label
- Hover must **never reduce** opacity, move content away, or hide information
- Hover states are for: confirming interactivity, surfacing detail, mild emphasis

### Animations
- Animate **only** to explain product behavior or guide the eye to the CTA
- One entrance animation maximum (a single `fadeUp` on the hero is acceptable)
- No looping animations that aren't user-triggered
- No animations on text that the user needs to read

### Color
- Use the project design system palette (`--honey`, `--bark`, `--ivory`, etc.)
- One primary action color per page
- No random gradient introductions — stick to the defined palette

### Typography hierarchy
- H1 → H2 → body — three levels maximum
- H1 is the largest element on the page (except the logo)
- Body text is never smaller than 0.9rem / 14px
- Line height for body: 1.7–1.8
- Never use more than two font families (Cormorant Garamond + Jost for this project)

---

## The 5-Second Test

After building, read the above-the-fold section and ask:

1. **What is it?** → Can a stranger name the business/product in one sentence?
2. **Who is it for?** → Is the target audience implied or stated?
3. **Why does it matter?** → Is there a clear reason to stay on the page?

If you cannot answer all three in under 5 seconds from the hero alone — rewrite the H1 and subheadline before touching the design.

---

## Pre-Ship Checklist

Run through this before considering any landing page complete:

### Functionality
- [ ] All buttons are clickable (no z-index stacking, no pointer-events issues)
- [ ] All links go somewhere (no `href="#"` placeholders in final version)
- [ ] No broken layout at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Nav CTA is visible and works on all viewports
- [ ] Contact information (address, phone, email) is selectable / tappable

### Content
- [ ] H1 is clear, not clever — passes the 5-second test
- [ ] No placeholder text (`Lorem ipsum`, `[à renseigner]`) in shipped version
- [ ] All product names and prices are accurate
- [ ] Hours of operation are correct

### Performance
- [ ] Images are WebP with JPEG fallback
- [ ] No images over 300KB (use `astro:assets` Image component)
- [ ] Google Fonts loaded with `display=swap`
- [ ] No render-blocking scripts in `<head>`

### Accessibility
- [ ] All images have meaningful `alt` text
- [ ] Color contrast meets WCAG AA (especially `--honey` on white)
- [ ] Interactive elements are keyboard-navigable
- [ ] No content that only appears on hover (inaccessible on touch)

### Visual
- [ ] No emojis anywhere in the UI
- [ ] Consistent use of design system colors (no stray hex values)
- [ ] Spacing is consistent (use the defined padding/gap scale)
- [ ] Mobile layout is single column, readable, no overflow

---

## Self-Review Protocol

After generating any landing page, Claude must:

1. **List every element** in the above-the-fold area
2. **Check each against the Forbidden Patterns list** — flag any violations
3. **Run the 5-second test** — state the answers to all three questions
4. **Run the Pre-Ship Checklist** — report any failing items
5. **Fix all violations** before presenting the final code

Do not skip this review. Do not present code that has unresolved violations.
State the review results explicitly so the developer can verify.

---

## Application to Santé Tonique

For this specific project, apply these rules alongside the `design-system.md` skill.

**The hero H1 should communicate**:
> Santé Tonique sells natural health products (dietary supplements, organic food, natural cosmetics)
> in Fort-de-France, Martinique — a trusted family business since 2001.

The H1 doesn't need to say all of this — but the hero section (H1 + subheadline + visual context) must convey it.

**The primary CTA** on the home page is:
> "Nous trouver" or "Voir nos produits" — pointing to the contact section or products section.

There is **no purchase CTA** — this is an informational site. Do not add cart, buy, or order buttons.
