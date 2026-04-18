# GenAI Dictionary

A dark-themed, instantly searchable reference for 240+ Generative AI terms — from foundational concepts to production operations. Covers RAG, embeddings, agents, training paradigms, safety, evaluation, and LLMOps.

Terms live in `../../content/dictionary/` as plain Markdown files. A build script compiles them into a single JSON file; the app fetches and renders it with no backend required.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Search | Fuse.js (fuzzy, client-side) |
| Deployment | Vercel (static) |

---

## Features

- **240+ terms** across 8 categories: Core, Retrieval, Model, Agent, Infra, Eval, Safety, Training
- Fuzzy full-text search across term name, definition, and tags
- Alphabet navigation with scroll-to-letter
- Category filter pills with per-category color coding
- Two-column split: alphabetical term list + detail panel
- Clickable related-term links for cross-navigation

---

## Local development

From the **repo root**:

```bash
pnpm install
pnpm build:manifest   # compile ../../content/dictionary/ → public/terms.json
pnpm dev:dictionary   # → http://localhost:5174
```

After adding or editing a term in `content/dictionary/`, re-run `pnpm build:manifest`.

---

## Adding a term

Create `content/dictionary/my-term.md`:

```markdown
---
term: My Term
shortForm: MT
category: core
tags: [concept, llm]
relatedTerms: [other-term-id]
---

Definition text goes here as the Markdown body.
```

Valid categories: `core` · `retrieval` · `model` · `agent` · `infra` · `eval` · `safety` · `training`

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for the full schema.

---

## Building for production

```bash
# From repo root
pnpm build:manifest
pnpm --filter gen-ai-dictionary build
# Output: apps/gen-ai-dictionary/dist/
```

---

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Fork this repository.
2. Create a new Vercel project pointed at this repo.
3. Set **Root Directory** to `apps/gen-ai-dictionary`.
4. Set **Build Command** to:
   ```
   cd ../.. && pnpm install && pnpm build:manifest && cd apps/gen-ai-dictionary && pnpm build
   ```
5. Set **Output Directory** to `dist`.
6. Deploy.

`vercel.json` in this directory handles SPA routing rewrites automatically.
