# Santé Tonique — Claude Code Instructions

## Project Overview

Santé Tonique est une boutique familiale de produits diététiques et de santé naturelle, située à
Fort-de-France, Martinique. Fondée en 1995. Famille adventiste — la spiritualité est présente
mais subtile (valeurs, formulations, jamais de texte religieux explicite).

Le site est **uniquement informatif** — pas d'e-commerce, pas de panier, pas de bouton d'achat.
Objectif : être trouvé par les clients locaux, communiquer la confiance, présenter les produits,
fournir les coordonnées et l'emplacement.

**Langue : Tout le contenu du site est en français. Sans exception.**
Cela inclut les labels, boutons, messages d'erreur, placeholders, et métadonnées.

Le logo se trouve sous deux formes : svg et png, dans le dossier src/assets/logos

---

## Tech Stack

- **Framework**: Astro
- **Styling**: CSS (custom properties — pas de Tailwind sauf si déjà configuré)
- **Icons**: Lucide Icons (SVG) — voir règles icônes ci-dessous
- **Fonts**: Google Fonts (chargées dans le layout)
- **Images**: WebP de préférence, fallback JPEG
- **Blog**: Astro Content Collections (Markdown / MDX)
- **Deployment**: [hôte à préciser — Netlify / Vercel / etc.]
- **Animations**: GSAP (GreenSock) — transitions de page et animations d'entrée

---

## Commands

```bash
npm run dev       # serveur de développement local
npm run build     # build de production
npm run preview   # prévisualisation du build de production
```

---

## Project Structure

```
src/
  components/        # Composants Astro réutilisables
  layouts/           # Layouts de page (BaseLayout.astro)
  pages/             # Routage basé sur les fichiers
    index.astro          → /
    a-propos.astro       → /a-propos
    nos-produits.astro   → /nos-produits
    contact.astro        → /contact
    blog/
      index.astro        → /blog
      [slug].astro       → /blog/[slug]
  content/
    blog/              # Articles Markdown/MDX
  styles/            # CSS global, design tokens
  assets/
    products/          # Photos produits (Un seul pour l'instant)
      image_de_fond.png  # Image placeholder (utilisée jusqu'à réception des vraies photos)
public/              # Fichiers statiques servis tels quels
_skills/             # Fichiers de skill Claude (ne pas modifier sans raison)
```

---

## Pages du site

### Navigation principale
```
Accueil | À propos | Nos produits | Contact | Blog
```

| Page          | Route           | Fichier Astro              |
|---------------|-----------------|----------------------------|
| Accueil       | `/`             | `pages/index.astro`        |
| À propos      | `/a-propos`     | `pages/a-propos.astro`     |
| Nos produits  | `/nos-produits` | `pages/nos-produits.astro` |
| Contact       | `/contact`      | `pages/contact.astro`      |
| Blog          | `/blog`         | `pages/blog/index.astro`   |
| Article blog  | `/blog/[slug]`  | `pages/blog/[slug].astro`  |

---

## Contenu par page

### Accueil (`/`) (image de png de référence : /accueil_ref.png)
Sections dans l'ordre :
1. Nav fixe avec backdrop-blur
2. Hero — 2 colonnes, titre + carte catégories produits
3. À propos strip — section sombre, histoire familiale depuis 1995
4. Nos produits — 3 colonnes, cartes catégories
5. Philosophie — gradient chaud, citation/blockquote
6. Contact rapide — adresse, téléphone, email, lien vers page contact
7. Footer — logo, copyright, valeurs

### À propos (`/a-propos`)
- Histoire de la famille depuis 1995
- Valeurs (Intégrité · Bienveillance · Naturel · Ancrage local)
- La dimension spirituelle : formulée à travers les valeurs, jamais de versets ni de mentions religieuses explicites
- Photo de la boutique / famille (placeholder `image_de_fond.png` jusqu'à réception)

### Nos produits (`/nos-produits`)
Page présentant **5 produits**. Noms à définir — utiliser ces placeholders en attendant :

| # | Nom placeholder          | Catégorie                     |
|---|--------------------------|-------------------------------|
| 1 | Produit 1                | Compléments alimentaires      |
| 2 | Produit 2                | Compléments alimentaires      |
| 3 | Produit 3                | Alimentation bio & diététique |
| 4 | Produit 4                | Alimentation bio & diététique |
| 5 | Produit 5                | Cosmétiques naturels          |

Chaque carte produit contient :
- Image produit → utiliser `src/assets/image_de_fond.png` comme placeholder
- Nom du produit
- Catégorie (badge)
- Description courte (2-3 lignes)
- Pas de prix, pas de bouton d'achat

### Contact (`/contact`)
Éléments obligatoires sur cette page :
- [ ] Adresse complète + carte Google Maps intégrée
- [ ] Numéro de téléphone (cliquable sur mobile — `tel:`)
- [ ] Email (cliquable — `mailto:`)
- [ ] Formulaire de contact (Nom, Email, Message, bouton Envoyer)
- [ ] Horaires d'ouverture

Tous les champs sont en français. Structure du formulaire :
```
Nom complet *
Adresse email *
Votre message *
[Envoyer le message]
```

### Blog (`/blog`)
- Liste des articles (titre, date, extrait, lien "Lire la suite")
- Contenu : mélange d'articles santé/bien-être et d'actualités boutique
- Articles rédigés en **Markdown/MDX** via Astro Content Collections
- Schéma frontmatter à utiliser :
```yaml
---
title: "Titre de l'article"
date: 2024-01-15
excerpt: "Résumé court de l'article (1-2 phrases)"
category: "Santé & Bien-être" # ou "Actualités"
image: "../../assets/image_de_fond.png"
---
```
- Page article individuel : titre, date, catégorie, image hero, contenu Markdown

---

## Images — Règle placeholder

**Tant que les vraies photos ne sont pas disponibles :**
- Utiliser `src/assets/image_de_fond.png` pour les images produits
- Ne jamais utiliser d'images externes (Unsplash, Pexels, picsum, placeholder.com, etc.)
- Ne jamais inventer des URL d'images qui n'existent pas
- Importer correctement via Astro : `import imageDeFond from '../assets/image_de_fond.png'`
- Utiliser le composant `<Image />` d'`astro:assets`

Les vraies photos remplaceront les placeholders ultérieurement :
- Photos produits → `src/assets/products/`
- Photos boutique / famille → `src/assets/`

---

## Skills

Claude doit lire et appliquer le skill correspondant avant de commencer toute tâche.
Les skills se trouvent dans le répertoire `_skills/` à la racine du projet.

| Fichier skill                    | Quand l'utiliser                                    |
|----------------------------------|-----------------------------------------------------|
| `_skills/design-system.md`      | Tout travail UI — composants, pages, styles         |
| `_skills/clean-landing-page.md` | Construction ou édition de la page d'accueil / hero |

**Toujours lire le(s) skill(s) pertinent(s) avant d'écrire du code.**

---

## Animations & Transitions

### Stack
- **GSAP** (GreenSock Animation Platform) est la librairie d'animation de référence pour ce projet.
- Installation : `npm install gsap`
- Import dans les composants : `import { gsap } from 'gsap'`

### Navigation entre pages — transitions smooth
- Chaque changement de page doit faire l'objet d'une transition fluide : fade out de la page courante, fade in de la nouvelle.
- Utiliser l'API `astro:transitions` (View Transitions) d'Astro comme base, complétée par GSAP pour les animations d'entrée des éléments.
- Activer dans `BaseLayout.astro` : `<ViewTransitions />` (import depuis `astro:transitions`).
- Durée de transition de page : 300–400ms maximum. Discret, jamais spectaculaire.

### Philosophie des animations
- **Subtiles et professionnelles** — l'animation accompagne le contenu, elle ne le concurrence pas.
- **Une seule animation à la fois** — ne jamais animer plusieurs blocs simultanément sans relation visuelle entre eux.
- **Jamais de mouvement gratuit** — chaque animation doit avoir une raison : guider l'œil, confirmer une action, révéler du contenu.

### Patterns GSAP autorisés
- Fade in + légère translation Y (20–30px) pour les sections au scroll — `gsap.from(el, { opacity: 0, y: 24, duration: 0.6, ease: 'power2.out' })`
- Stagger sur les listes de cartes — `gsap.from(cards, { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 })`
- Transition de page : fade out `opacity: 0` sur `document.body`, fade in sur la nouvelle page
- ScrollTrigger pour les révélations au scroll (import séparé : `import { ScrollTrigger } from 'gsap/ScrollTrigger'`)

### Patterns GSAP interdits
- Pas de rotation, scale, ou skew sur des éléments de contenu
- Pas d'animations en boucle (loop) sauf éléments purement décoratifs
- Pas de timeline complexe sur la navigation — la page doit être lisible en moins de 500ms
- Pas d'animation sur le texte lettre par lettre (`SplitText`) — réservé à des cas très spécifiques validés au préalable

## Règles générales

### Langue
- **100% français** — tout le contenu visible : labels, boutons, placeholders, messages d'erreur, alt text, aria-labels, métadonnées SEO
- Les commentaires dans le code peuvent être en anglais ou français
- Les noms de variables, fichiers et classes CSS restent en anglais (convention technique)

### Icônes — PAS D'EMOJIS
- **Ne jamais utiliser d'emojis** dans l'UI. Rendu incohérent selon l'OS, aspect cheap.
- Utiliser **Lucide Icons** (SVG) pour toute iconographie fonctionnelle.
- Icônes utiles pour ce projet : `Leaf`, `Heart`, `Package`, `Phone`, `MapPin`, `Mail`,
  `Clock`, `ChevronRight`, `Star`, `Shield`, `Users`, `Sparkles`, `BookOpen`
- Pour les accents décoratifs, utiliser le caractère `✦` (U+2726) stylé en CSS.

### Pas d'e-commerce
- Aucun bouton "Acheter", "Ajouter au panier", "Commander"
- Aucun champ de prix affiché
- Aucun panier, aucun checkout
- Les produits sont présentés à titre informatif uniquement

### Responsiveness
- Mobile-first
- Breakpoint principal : `900px`
- Tester à : 375px, 768px, 1280px

---

## Design Tokens (référence rapide — système complet dans `_skills/design-system.md`)

```css
:root {
  --honey:      #C8732A;  /* CTA primaires, accents */
  --terra:      #A0522D;  /* Hover, textes italiques */
  --gold:       #D4A852;  /* Accents sur fonds sombres */
  --cream:      #F5EDD9;  /* Fonds de sections secondaires */
  --ivory:      #FBF6EC;  /* Fond principal de la page */
  --bark:       #3D2B1F;  /* Texte principal, sections sombres */
  --sage:       #7A8C5E;  /* Accents secondaires, badges */
  --sage-lt:    #A8BA88;  /* Chips sur fond sombre */
  --warm-white: #FEFAF2;  /* Fond section produits */
}
```

---

## Typographie (référence rapide)

| Rôle                | Police              | Graisse         |
|---------------------|---------------------|-----------------|
| H1, H2 titres       | Cormorant Garamond  | 400 / 600       |
| eyebrows      | Caveat              | 500 / 700       |
| Corps, UI, nav      | Jost                | 300 / 400 / 500 |
| Taglines, citations | Cormorant Garamond  | italic          |

Import Google Fonts (dans `<head>` de `BaseLayout.astro`) :
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Caveat:wght@500;700&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
```
