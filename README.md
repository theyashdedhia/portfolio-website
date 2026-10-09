# Yash Dedhia — Portfolio

**Live site: [theyashdedhia.github.io/portfolio-website](https://theyashdedhia.github.io/portfolio-website/)**

My personal portfolio — I'm a Founding AI Engineer based in Melbourne, building agentic
AI systems with LangGraph and RAG, and the founder of
[ShareMyVault](https://www.sharemyvault.com/) and [AgentLens](https://agentlens-git-main-agentlens-projects.vercel.app/).

## About the site

The site is designed as an *engineer's field notebook*: a graph-paper background, ink
and pine-green palette, sections numbered like figures in an engineering document, and
IBM Plex Mono annotations throughout. The hero is an animated schematic of a
production agentic workflow — router, retriever, vector store, agent loop, tools, and
guardrails — drawn in SVG with traveling pulses.

What's inside:

- **Experience** — AI Squared, Australian Red Cross Lifeblood, Arcon Techsolutions
- **Founded products** — ShareMyVault and AgentLens, with live links
- **Toolchain** — languages, AI systems, cloud, and frameworks I work with
- **Education** — RMIT University and Mumbai University
- **Field work** — wildlife rescue with RAWW and trek leading in the Western Ghats
- **Résumé** — downloadable PDF, always current

## Tech stack

- [Vite](https://vitejs.dev) + React 18 + TypeScript
- Tailwind CSS with a custom design-token system (+ shadcn/ui primitives)
- framer-motion for scroll reveals and the schematic draw-in animation
- Respects `prefers-reduced-motion`; fully responsive down to mobile

## Run locally

```sh
npm install
npm run dev        # http://localhost:8080
```

## Editing content

All copy lives in [`src/data.json`](src/data.json) — roles, products, skills, and links
can be updated there without touching components. To update the résumé, replace
[`public/resume.pdf`](public/resume.pdf); the download buttons pick it up automatically.

## Build & deploy

```sh
npm run build      # outputs to dist/ with relative paths
```

The site is served by GitHub Pages from the `gh-pages` branch — push the contents of
`dist/` to that branch to deploy.
