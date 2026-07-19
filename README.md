# steve1316.github.io

My personal portfolio - a static single-page site built with **Vite + React + TypeScript**, deployed to **GitHub Pages**.

Live at **https://steve1316.github.io**

## Development

```bash
npm install
npm run dev        # start the dev server
npm run build      # typecheck + production build to dist/
npm run preview    # preview the production build
```

## Structure

- `src/data/` - typed content (profile, projects, skills, experience, hobbies)
- `src/hooks/` - `useGitHubStats` (live repo stars/forks) and `useActiveSection`
- `src/components/` - one folder per section, each with its `.tsx` + `.module.css`
- `src/styles/` - design tokens and global styles
- `.github/workflows/deploy.yml` - builds and deploys to GitHub Pages on push
