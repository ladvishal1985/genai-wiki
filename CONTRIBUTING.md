# Contributing

This monorepo contains two apps built from Markdown content:

| App | Source content | Live URL |
|-----|---------------|----------|
| `apps/wiki` | `content/blog/*.md` | — |
| `apps/gen-ai-dictionary` | `content/dictionary/*.md` | — |

A build script (`scripts/build-manifest.ts`) scans both content directories and writes pre-built JSON manifests that the apps load at runtime. You never edit JSON directly — edit Markdown, run the script, commit.

---

## Adding a blog post

1. Create a new file in `content/blog/`:

```
content/blog/my-post-title.md
```

Optional leading number prefix for ordering (stripped from the slug):

```
content/blog/04-my-post-title.md  →  slug: my-post-title
```

2. Add frontmatter at the top of the file:

```markdown
---
title: "My Post Title"
description: "One sentence that appears in the post list card."
publishedAt: "2025-06-15"
author: "Your Name"
tags: [rag, embeddings, production]
difficulty: intermediate
readTime: 8
---

Your post content in Markdown starts here.
```

**Frontmatter fields:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | yes | |
| `description` | string | yes | Shown in post list |
| `publishedAt` | `YYYY-MM-DD` | yes | Used for sort order |
| `author` | string | yes | |
| `tags` | string[] | yes | Used for filtering |
| `difficulty` | `beginner` \| `intermediate` \| `advanced` | yes | |
| `readTime` | number | yes | Minutes |

3. Rebuild the manifest:

```bash
pnpm build:manifest
```

4. Preview locally:

```bash
pnpm dev:wiki
```

---

## Adding a dictionary term

1. Create a new file in `content/dictionary/`:

```
content/dictionary/my-term.md
```

The filename becomes the term `id` (slug). Use lowercase kebab-case.

2. Add frontmatter:

```markdown
---
term: My Term
shortForm: MT
category: core
tags: [tag1, tag2]
relatedTerms: [other-term-id, another-term-id]
example: "Use ~ to omit this field."
---

The definition goes here as the Markdown body. No `definition:` frontmatter
field is needed — the script reads the body text automatically.
```

**Frontmatter fields:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `term` | string | yes | Display name, may include spaces and capitals |
| `shortForm` | string \| `~` | no | Abbreviation (e.g. `RAG`). Use `~` to omit. |
| `category` | see below | yes | |
| `tags` | string[] | yes | Lowercase kebab-case |
| `relatedTerms` | string[] | yes | Other term IDs (filenames without `.md`) |
| `example` | string \| `~` | no | Short usage example. Use `~` to omit. |

**Valid categories:**

| Value | Color | Meaning |
|-------|-------|---------|
| `core` | purple | Foundational LLM concepts |
| `retrieval` | green | Search, indexing, RAG retrieval |
| `model` | blue | Architecture, training, scaling |
| `agent` | amber | Agents, orchestration, memory |
| `infra` | red | Serving, ops, deployment |
| `eval` | cyan | Evaluation, metrics, benchmarks |
| `safety` | rose | Security, alignment, adversarial |
| `training` | orange | Fine-tuning, RLHF, SFT paradigms |

3. Rebuild the manifest:

```bash
pnpm build:manifest
```

4. Preview locally:

```bash
pnpm dev:dictionary
```

---

## Running apps locally

**Prerequisites:** Node 20+, pnpm 9+

```bash
# Install all dependencies from the repo root
pnpm install

# Rebuild manifests (required after any content change)
pnpm build:manifest

# Start the wiki dev server  →  http://localhost:5173
pnpm dev:wiki

# Start the dictionary dev server  →  http://localhost:5174
pnpm dev:dictionary
```

Both dev servers support hot-reload. After changing content files, re-run `pnpm build:manifest` and the browser will refresh automatically.

---

## Build for production

```bash
# Rebuilds manifests then builds both apps
pnpm build:manifest
pnpm --filter wiki build
pnpm --filter gen-ai-dictionary build
```

Output goes to `apps/wiki/dist/` and `apps/gen-ai-dictionary/dist/`.

---

## How the manifest script works

`scripts/build-manifest.ts` does two things:

1. **Blog manifest** — reads `content/blog/*.md`, extracts frontmatter, sorts posts newest-first, writes `apps/wiki/public/content/manifest.json`, and copies each `.md` file to `apps/wiki/public/content/blog/` so Vite serves them as static assets.

2. **Dictionary manifest** — reads `content/dictionary/*.md`, extracts frontmatter + body text as the definition, sorts alphabetically, writes `apps/gen-ai-dictionary/public/terms.json`.

The apps never import the script — they fetch the generated JSON at runtime via `fetch()`.
