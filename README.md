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

To use the short GitHub Pages URL:

`https://lanreken.github.io/`

the repository must be named exactly:

`lanreken.github.io`

The Vite production base path is set to:

`/`

### Deployment flow

1. Create a repository named `lanreken.github.io` under your GitHub account
2. Push this portfolio code to that repository's `main` branch
3. Open the repository on GitHub
4. Go to `Settings > Pages`
5. Under `Build and deployment`, choose `GitHub Actions`
6. GitHub will run `.github/workflows/deploy.yml`
7. After the workflow succeeds, the site will be live at:

`https://lanreken.github.io/`

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
