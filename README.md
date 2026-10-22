# Mohammad Haghpanah — Engineering Portfolio

Personal portfolio website for recruiters and engineering managers in Germany and Europe.

**Stack:** React, TypeScript, Vite, Tailwind CSS, Lucide icons

## Live site

After GitHub Pages deploy:

**https://mohammadhaghpanah.github.io/portfolio/**

Use that URL on LinkedIn (Website / Featured).

## Run locally

Requires Node.js 20+ (or 18+).

```bash
# If Node is installed under ~/.local/node (this machine):
export PATH="$HOME/.local/node/bin:$PATH"

cd /home/wms/Desktop/mohammad-haghpanah-portfolio
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173/portfolio/`).

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Edit your content

All profile data lives in typed config files — no backend required:

| File | What to edit |
|------|----------------|
| `src/config/profile.ts` | Name, about text, email, LinkedIn URL, GitHub |
| `src/config/education.ts` | Degree status (`In Progress` / `Completed`), start/graduation years |
| `src/config/experience.ts` | Job title, employer, dates — set `isConfigured: true` when ready |
| `src/config/projects.ts` | Project 3 repository URL, notes, screenshots |
| `src/config/skills.ts` | Skill categories |

## Assets

| Asset | Path | Source |
|-------|------|--------|
| Profile photo | `public/assets/profile.jpg` | Provided by owner |
| KNTU logo | `public/assets/kntu-logo.png` | Official asset from `https://my.kntu.ac.ir/logo.png` |
| Project screenshots | `public/assets/*.png` | Public GitHub repository docs |

## Fields still to complete

- LinkedIn URL (`profile.linkedinUrl`)
- Education status / years (`education.ts`)
- Detailed experience entry (`experience.ts` → `isConfigured: true`)
- Public repository URL for Qt Signal Analysis project (`projects.ts`)
