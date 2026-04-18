# GenAI Wiki

A fast, searchable blog for long-form posts about Generative AI — RAG pipelines, LLM architecture, prompt engineering, evaluation, and production deployment.

Content lives in `../../content/blog/` as plain Markdown files. A build script generates a JSON manifest at build time; the app fetches it at runtime with no backend required.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 + Typography plugin |
| Routing | React Router DOM v7 |
| Markdown | marked v18 |
| Deployment | Vercel (static) |

---

## Local development

From the **repo root**:

```bash
pnpm install
pnpm build:manifest   # generate content manifest from ../../content/blog/
pnpm dev:wiki         # → http://localhost:5173
```

After adding or editing a post in `content/blog/`, re-run `pnpm build:manifest` — the dev server hot-reloads automatically.

---

## Adding a post

Drop a Markdown file in `content/blog/`:

```markdown
---
title: "Your Post Title"
description: "One sentence preview shown in the post list."
publishedAt: "2025-06-15"
author: "Your Name"
tags: [rag, production]
difficulty: intermediate
readTime: 6
---

Post body in standard Markdown.
```

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for the full frontmatter schema.

---

## Building for production

```bash
# From repo root
pnpm build:manifest
pnpm --filter wiki build
# Output: apps/wiki/dist/
```

---

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Fork this repository.
2. Create a new Vercel project pointed at this repo.
3. Set **Root Directory** to `apps/wiki`.
4. Set **Build Command** to:
   ```
   cd ../.. && pnpm install && pnpm build:manifest && cd apps/wiki && pnpm build
   ```
5. Set **Output Directory** to `dist`.
6. Deploy.

`vercel.json` in this directory handles SPA routing rewrites automatically.
