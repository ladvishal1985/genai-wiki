# ⚡ GenAI Wiki & Dictionary

Welcome to the **Generative AI Wiki & Dictionary** repository! This project serves as a living, comprehensive knowledge base for practitioners navigating the fast-paced world of Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Prompt Engineering, and AI application development.

## 🌟 The Aspiration

The field of Generative AI is evolving at breakneck speed. Between countless new academic papers, competing frameworks, and changing terminology, it can be incredibly difficult for engineers and researchers to separate the signal from the noise.

**My goal with this project is to create an authoritative, living reference for the GenAI community.** 

I wanted to build a platform that:
- **Cuts through the hype** to provide practical, implementation-focused knowledge.
- **Maintains clear definitions** for an ever-growing list of technical terminology.
- **Decouples content from code**, allowing community members to contribute their knowledge using standard Markdown files without needing to understand the underlying web framework.

This project is built by developers, for developers, to serve as the ultimate companion while building in the AI space.

---

## 🏗️ Project Architecture

This repository is structured as a **PNPM Monorepo** and contains two distinct applications that are decoupled from their underlying content:

1. **`apps/wiki/`**: A React/Vite web application that serves long-form tutorials, deep dives, and practical implementation guides.
2. **`apps/gen-ai-dictionary/`**: A React/Vite glossary application offering quick, search-friendly definitions for hundreds of AI terms.

### The Content Hub (`/content`)

All textual content lives outside the web apps in the root `content/` directory. 
- `/content/blog/` contains Markdown posts for the Wiki.
- `/content/dictionary/` contains Markdown definition files for the Dictionary.

During the build process, our `scripts/build-manifest.ts` script automatically parses the extensive frontmatter of these markdown files, translates them into easily digestible JSON metadata arrays, and bundles them into the public directories of their respective Vite apps. 

---

## 🚀 Quick Start

To run this project locally, you will need **Node.js** (v20+) and **pnpm** installed.

### 1. Install Dependencies
```bash
# Clone the repository
git clone https://github.com/ladvishal1985/genai-wiki.git
cd genai-wiki

# Install workspace dependencies
pnpm install
```

### 2. Run the Development Servers
We've set up simple scripts in the root `package.json` to help you run the apps:

```bash
# Run the Wiki app (Blog/Tutorials)
pnpm run dev:wiki

# Run the Dictionary app (Glossary)
pnpm run dev:dictionary
```

*(Note: The `prebuild` scripts will automatically regenerate the content-manifest JSON files before running the apps or building them.)*

### 3. Build for Production
To build both applications into static assets:
```bash
pnpm run build:all
```

---

## 🤝 Contributing

We strongly believe that a knowledge base like this is best built together! 

Are you familiar with a new Retrieval strategy? Do you know a better definition for a specific AI term? **Contributions to the `content/` directory are highly encouraged!** 

Since content is written in Markdown with simple YAML frontmatter, you can contribute knowledge without writing a single line of application code. Check out the [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines on how to format new blog posts or dictionary terms.

## ☁️ Deployment

Both the Wiki and Dictionary apps are configured for zero-downtime automated deployments using **Vercel** and **GitHub Actions**.

Whenever changes are merged into the `main` branch, the workflows located in `.github/workflows/` automatically trigger:
1. Compiling the latest markdown content into JSON manifests.
2. Building both Vite applications.
3. Deploying the builds directly to Vercel production environments.
