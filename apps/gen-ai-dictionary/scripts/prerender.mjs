/**
 * Post-build prerender script.
 * Runs after `vite build` to generate static HTML for every term page
 * with injected meta tags, Open Graph, JSON-LD, and a sitemap.
 *
 * Usage: node scripts/prerender.mjs [--site-url https://yourdomain.com]
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const SITE_URL = (() => {
  const idx = process.argv.indexOf('--site-url')
  return idx !== -1 ? process.argv[idx + 1] : 'https://genai.wiki'
})()

const SITE_NAME = 'GenAI Dictionary'

// ── helpers ──────────────────────────────────────────────────────────────────

function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function truncate(str, len = 155) {
  return str.length > len ? str.slice(0, len) + '…' : str
}

function buildMetaBlock(term) {
  const title = `${term.term} — ${SITE_NAME}`
  const desc = escape(truncate(term.definition))
  const canonical = `${SITE_URL}/terms/${term.id}`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.definition,
    ...(term.shortForm ? { alternateName: term.shortForm } : {}),
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: SITE_NAME,
      url: SITE_URL,
    },
    keywords: term.tags.join(', '),
  })

  return `
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <script type="application/ld+json">${jsonLd}</script>`
}

function injectMeta(html, term) {
  const meta = buildMetaBlock(term)
  // Strip all base meta/title tags that will be replaced per-term
  return html
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/g, '')
    .replace(/<meta property="og:[^"]*"[^>]*>/g, '')
    .replace(/<meta name="twitter:[^"]*"[^>]*>/g, '')
    .replace('</head>', `${meta}\n  </head>`)
}

// ── main ─────────────────────────────────────────────────────────────────────

const { terms } = JSON.parse(readFileSync(join(root, 'public/terms.json'), 'utf-8'))
const indexHtml = readFileSync(join(root, 'dist/index.html'), 'utf-8')

let count = 0

for (const term of terms) {
  const html = injectMeta(indexHtml, term)
  const dir = join(root, 'dist', 'terms', term.id)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  count++
}

// ── sitemap ───────────────────────────────────────────────────────────────────

const today = new Date().toISOString().split('T')[0]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${terms
  .map(
    t => `  <url>
    <loc>${SITE_URL}/terms/${t.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

writeFileSync(join(root, 'dist/sitemap.xml'), sitemap)

// ── robots.txt ────────────────────────────────────────────────────────────────

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`

writeFileSync(join(root, 'dist/robots.txt'), robots)

console.log(`✓ Pre-rendered ${count} term pages → dist/terms/`)
console.log(`✓ sitemap.xml  (${count + 1} URLs)`)
console.log(`✓ robots.txt`)
