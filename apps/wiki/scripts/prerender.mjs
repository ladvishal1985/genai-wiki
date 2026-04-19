/**
 * Post-build prerender script.
 * For each blog post in content/blog/manifest.json, writes a static
 * dist/blog/{slug}/index.html with baked-in meta tags so crawlers
 * get real content without executing JavaScript.
 * Also generates dist/sitemap.xml and dist/robots.txt.
 *
 * Usage:  node scripts/prerender.mjs [--site-url https://your-domain.com]
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const manifestPath = path.join(root, 'public', 'content', 'blog', 'manifest.json')
// Fallback: check if content was copied directly into public/content
const altManifestPath = path.join(root, 'public', 'content', 'manifest.json')

// Allow overriding the site URL via CLI flag
const siteUrlArg = process.argv.indexOf('--site-url')
const SITE_URL =
  siteUrlArg !== -1 ? process.argv[siteUrlArg + 1] : 'https://genai.wiki'

const SITE_NAME = 'GenAI Wiki'
const DEFAULT_DESCRIPTION =
  'Practical guides, deep dives, and tutorials on LLMs, prompt engineering, RAG, and building AI-powered applications.'

// Read base HTML produced by vite build
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// Strip tags that will be replaced per-page
function stripBaseMeta(html) {
  return html
    .replace(/<title>[^<]*<\/title>/i, '')
    .replace(/<meta name="description"[^>]*>/gi, '')
    .replace(/<meta property="og:[^"]*"[^>]*>/gi, '')
    .replace(/<meta name="twitter:[^"]*"[^>]*>/gi, '')
    .replace(/<link rel="canonical"[^>]*>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '')
}

function injectMeta(html, { title, description, path: pagePath, publishedAt, tags, jsonLd }) {
  const pageTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  const pageDesc = description ?? DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${pagePath}`
  const ogType = publishedAt ? 'article' : 'website'

  const articleMeta = publishedAt
    ? `  <meta property="article:published_time" content="${publishedAt}" />\n` +
      (tags ?? []).map(t => `  <meta property="article:tag" content="${t}" />\n`).join('')
    : ''

  const jsonLdTag = jsonLd
    ? `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n`
    : ''

  const metaTags = `
  <title>${pageTitle}</title>
  <meta name="description" content="${pageDesc}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:title" content="${pageTitle}" />
  <meta property="og:description" content="${pageDesc}" />
  <meta property="og:url" content="${canonical}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageTitle}" />
  <meta name="twitter:description" content="${pageDesc}" />
${articleMeta}${jsonLdTag}`

  return html.replace('</head>', metaTags + '</head>')
}

// Load manifest — prefer blog-level, fall back to top-level
const resolvedManifest = fs.existsSync(manifestPath) ? manifestPath : altManifestPath
const manifest = JSON.parse(fs.readFileSync(resolvedManifest, 'utf-8'))
const posts = manifest.posts ?? []

const stripped = stripBaseMeta(baseHtml)
const urls = [`${SITE_URL}/`]

console.log(`Prerendering ${posts.length} posts…`)

for (const post of posts) {
  const slug = post.slug
  const rawDate = post.publishedAt ?? post.date ?? ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Person', name: post.author },
    datePublished: rawDate,
    keywords: (post.tags ?? []).join(', '),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  const html = injectMeta(stripped, {
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    publishedAt: rawDate || undefined,
    tags: post.tags,
    jsonLd,
  })

  const outDir = path.join(distDir, 'blog', slug)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  urls.push(`${SITE_URL}/blog/${slug}`)
  console.log(`  ✓ /blog/${slug}`)
}

// Sitemap
const today = new Date().toISOString().split('T')[0]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `  <url><loc>${url}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>`

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
console.log(`✓ sitemap.xml (${urls.length} URLs)`)

// robots.txt
const robots = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots)
console.log('✓ robots.txt')

console.log('\nPrerender complete.')
