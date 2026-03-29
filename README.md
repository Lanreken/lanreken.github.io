# Olanrewaju Portfolio

Personal portfolio site for `Olanrewaju Adeniji Adelugba`, built with React, TypeScript, and Vite.

## Stack

- React
- TypeScript
- Vite
- CSS
- GitHub Pages for static hosting

## Local Development

```bash
npm install
npm run dev
```

Local preview:

`http://localhost:5173`

## Production Build

```bash
npm run build
```

## GitHub Pages Hosting

This repo is configured for GitHub Pages deployment from:

`https://github.com/Lanreken/Olanrewaju-Portfolio`

The Vite production base path is already set to:

`/Olanrewaju-Portfolio/`

### Deployment flow

1. Push your latest code to the `main` branch
2. Open the repository on GitHub
3. Go to `Settings > Pages`
4. Under `Build and deployment`, choose `GitHub Actions`
5. GitHub will run `.github/workflows/deploy.yml`
6. After the workflow succeeds, the site will be live at:

`https://lanreken.github.io/Olanrewaju-Portfolio/`

## Important Note About Chat

GitHub Pages is a static host, so the `/api/chat` backend will not run there.

Because of that:

- the portfolio frontend will work on GitHub Pages
- the chat widget will show a graceful fallback message instead of trying to call a missing backend

If you want the AI chat to work publicly, deploy the backend-capable version on a platform like Vercel or Render.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint
