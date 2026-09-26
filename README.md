# Portfolio Metoushela Walker (v2, React)

Portfolio one-page **React 19 + TypeScript + Vite + Tailwind CSS v4 + Motion**,
conçu selon les skills **Taste Skill v2** (`/home/user/skills/taste-skill`) et
**Impeccable v4.3.1** (`/home/user/skills/impeccable`, mode *Experience*).

Monde design : « signal sur charbon » (charbon `#0E0F11`, off-white `#EDEBE6`,
un seul accent orange `#FF4D0D`, angles droits rayon 0), typographies
Clash Display + Satoshi + JetBrains Mono (self-hosted dans `public/fonts`).

## Démarrer

```bash
cd portfolio-app
npm install
npm run dev        # développement (http://localhost:5173)
npm run build      # typecheck TS + build de production dans dist/
npm run preview    # sert dist/ sur http://localhost:4173 (host 0.0.0.0)
```

Déploiement : le contenu de `dist/` est 100 % statique (GitHub Pages, Netlify,
Vercel, Cloudflare Pages, n'importe quel hébergement statique).
`vite.config.ts` autorise déjà les hôte de preview `*.e2b.app`
(`server.allowedHosts` / `preview.allowedHosts`).

## Structure

```
src/
├── App.tsx                  orchestration + état (preloader, projet sélectionné)
├── data/projects.ts         les 4 projets (typés) + images
└── components/
    ├── Preloader.tsx        rideau d'intro (~1,7 s), passé au-dessus du hero
    ├── Header.tsx           nav sticky, burger mobile, barre de progression
    ├── Hero.tsx             nom lettre par lettre (blur + translation), parallaxe image
    ├── Marquee.tsx          défilement des produits (unique, pause au survol)
    ├── Work.tsx             bento 7/5 puis 5/7
    ├── ProjectCard.tsx      parallaxe pointeur + liseré spotlight, ouvre le détail
    ├── ProjectOverlay.tsx   détail projet (dialog accessible : Échap, focus, backdrop)
    ├── About.tsx            texte + domaines 2×2
    ├── Contact.tsx          gros CTA email
    ├── Footer.tsx
    └── Reveal.tsx           helper de révélation au scroll (once, reduced-motion)
```

## Animations (toutes motivées, toutes off sous `prefers-reduced-motion`)

- Préloader : transition d'état (chargement du bundle), le rideau se lève sur le hero
- Hero : entrée lettre par lettre (translation + flou) + parallaxe douce au pointeur
- Barre de progression de lecture sous la nav (useScroll + useSpring, zéro re-render)
- Cartes projet : révélation au scroll + parallaxe image + liseré spotlight au curseur
  (motion values, pas de state React dans la boucle de pointer)
- Overlay projet : entrée/sortie AnimatePresence, verrouillage du scroll, focus géré
- Marquee produits : CSS uniquement, pause au survol

## À remplacer avant publication (chercher « REMPLACE »)

1. **Email** : `contact@metoushela.dev` dans `src/components/Contact.tsx`
   et `src/components/ProjectOverlay.tsx`
2. **Ville** : `Bukavu, RDC` dans `src/components/Footer.tsx`
3. **Liens** (optionnel) : GitHub / LinkedIn dans `src/components/Header.tsx`
   (tableau `links`)
