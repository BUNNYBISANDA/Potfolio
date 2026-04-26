# Bisanda Jayathilaka - Developer Portfolio

Modern single-page portfolio for Bisanda Jayathilaka, positioned for internship and early-career roles in cloud, DevOps, backend, and full-stack development.

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Highlights

- Dark, premium recruiter-focused visual design
- Clear single-page story: hero, about, skills, featured projects, journey, certifications, contact
- Case-study project cards with problem, solution, stack, features, and proof-oriented notes
- Responsive layout for mobile, tablet, and desktop
- SEO metadata, Open Graph tags, and JSON-LD person schema
- GitHub Pages-safe static build

## Install and Run

```bash
npm ci
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Editing Content

Most text, links, project case studies, skills, and certifications live in `src/data/content.ts`.

## Deployment

The project keeps the Vite static build flow, so GitHub Pages deployment remains straightforward:

```bash
npm run build
```

Publish the generated `dist/` output with your existing GitHub Pages workflow or branch setup.
