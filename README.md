# Abdiel Marcano - Portfolio

Personal portfolio site: **UCF B.S. Computer Engineering graduate — full-stack/backend, embedded systems, and hardware integration.**  
Target roles: Software + Embedded/Firmware.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS**
- **Framer Motion** (subtle animations), **lucide-react** icons
- Content in `/content/*.ts` (no backend)
- Deployable to **Vercel** (static/SSG)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

Build must complete with no errors (`npm run build`).

## Deploy to Vercel

1. Push the repo to GitHub (or connect your Git provider in Vercel).
2. In [Vercel](https://vercel.com), click **Add New** → **Project** and import this repository.
3. Leave **Build Command** as `npm run build` and **Output Directory** as default.
4. Ensure **Root Directory** is the folder that contains `package.json` (this repo root).
5. Deploy. No environment variables or backend required.

## Project structure

- **`/content`** - Typed content: `profile.ts`, `projects.ts`
- **`/src/app`** - App Router pages: Home, Projects, Project Detail, About, Contact
- **`/src/components`** - Navbar, Footer, ProjectCard, MediaGallery, HomePageClient
- **`/public/media`** - Images and PDFs (headshot, project media, resumes)

## Resumes

- Software: `/media/resume-software.pdf`
- Embedded: `/media/resume-embedded.pdf`
- Hardware: `/media/resume-hardware.pdf`

Links are in the profile and home CTAs.
