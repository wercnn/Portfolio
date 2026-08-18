# Portfolio Website

Personal portfolio site for Yigit Eren Dogan, built with React, TypeScript, and Tailwind CSS.

**Live at [wercnn.github.io/Portfolio](https://wercnn.github.io/Portfolio/)**

## Tech stack

- **React 18** + **TypeScript**
- **Vite** for build and dev server
- **Tailwind CSS v4** for styling
- **motion/react** (Framer Motion) for scroll and load animations
- **lucide-react** for icons
- **GitHub Actions** → **GitHub Pages** for deployment

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173/Portfolio/`. The `/Portfolio/`
path matters — the Vite `base` is set for GitHub Pages project hosting, so the
bare root will not load.

```bash
npm run build    # production build into dist/
```

## Project structure

```
src/
  app/
    App.tsx              section order for the whole page
    components/
      Navbar.tsx         fixed nav, mobile menu, scroll-aware styling
      Hero.tsx           landing section
      About.tsx          intro cards and "My Journey"
      Experience.tsx     work history
      Projects.tsx       project cards
      Skills.tsx         grouped tech stack
      Contact.tsx        contact details and form
      Footer.tsx
      ui/                shadcn/ui primitives
  styles/
    theme.css            design tokens, base layer, smooth scrolling
    tailwind.css         Tailwind entry
public/
  favicon.svg
  YigitErenDoganResume.pdf
```

## Editing content

Most sections read from a plain array at the top of their component file, so
adding an entry means appending an object — no JSX changes needed:

| To change | Edit |
| --- | --- |
| Work history | `experiences` in `Experience.tsx` |
| Projects | `projects` in `Projects.tsx` |
| Skills | `skillCategories` in `Skills.tsx` |
| Nav links | `navItems` in `Navbar.tsx` |

## Styling notes

- The accent palette is **blue → cyan**, applied as Tailwind utility classes
  (`blue-500 → cyan-500` gradients, `blue-50 → cyan-50` card fills,
  `blue-100` borders). There are no color CSS variables, so changing the
  palette means a find-and-replace across `src/app/components/`, plus the
  gradient stops in `public/favicon.svg`, which are hardcoded hex.
- Smooth scrolling and the `scroll-margin-top` offset that keeps section
  headings clear of the fixed navbar live in the base layer of
  `src/styles/theme.css`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to the `gh-pages` branch. No manual step is needed.

If the repository is ever renamed, the new name must be updated in three
places or the published assets will 404: `base` in `vite.config.ts`,
`homepage` in `package.json`, and the favicon href in `index.html`.

## Credits

Originally scaffolded from a Figma Make export. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md).
