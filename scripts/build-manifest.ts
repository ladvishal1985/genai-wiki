import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { globSync } from 'glob'

const ROOT = path.resolve(__dirname, '..')

// ── helpers ──────────────────────────────────────────────────────────────────

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true })
}

function copyDir(src: string, dest: string) {
  ensureDir(dest)

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

function slugFromFile(file: string): string {
  const base = path.basename(file, '.md')
  // strip optional leading number prefix, e.g. "01-what-is-rag" → "what-is-rag"
  return base.replace(/^\d+-/, '')
}

function readMd(file: string) {
  const raw = fs.readFileSync(file, 'utf8')
  return matter(raw)
}

// ── blog manifest ─────────────────────────────────────────────────────────────

interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  tags: string[]
  difficulty: string
  readTime: number
  author: string
}

function buildBlogManifest() {
  const srcDir = path.join(ROOT, 'content/blog')
  const destBlogDir = path.join(ROOT, 'apps/wiki/public/content/blog')
  const manifestPath = path.join(ROOT, 'apps/wiki/public/content/manifest.json')

  ensureDir(destBlogDir)

  const files = globSync(path.join(srcDir, '*.md'))

  if (files.length === 0) {
    console.log('  blog: no .md files found in content/blog/')
  }

  const posts: BlogPost[] = []

  for (const file of files) {
    const { data } = readMd(file)
    const slug = slugFromFile(file)

    const post: BlogPost = {
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      // support both `publishedAt` and legacy `date` field
      publishedAt: data.publishedAt ?? data.date ?? '',
      tags: data.tags ?? [],
      difficulty: data.difficulty ?? 'beginner',
      readTime: data.readTime ?? data.readtime ?? 5,
      author: data.author ?? '',
    }

    posts.push(post)

    // copy .md file to public so Vite serves it as a static asset
    const dest = path.join(destBlogDir, path.basename(file))
    fs.copyFileSync(file, dest)
    console.log(`  blog: copied  ${path.basename(file)}`)
  }

  // sort newest first
  posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))

  const manifest = {
    posts,
    generatedAt: new Date().toISOString(),
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`  blog: wrote   apps/wiki/public/content/manifest.json  (${posts.length} posts)`)
}

// ── dictionary manifest ───────────────────────────────────────────────────────

interface DictionaryTerm {
  id: string
  term: string
  shortForm?: string
  definition: string
  category: string
  tags: string[]
  relatedTerms: string[]
  example?: string
}

function buildDictionaryManifest() {
  const srcDir = path.join(ROOT, 'content/dictionary')
  const destPath = path.join(ROOT, 'apps/gen-ai-dictionary/public/terms.json')
  const wikiDestPath = path.join(ROOT, 'apps/wiki/public/dictionary/terms.json')

  ensureDir(path.dirname(destPath))
  ensureDir(path.dirname(wikiDestPath))

  const files = globSync(path.join(srcDir, '*.md'))

  if (files.length === 0) {
    console.log('  dict: no .md files found in content/dictionary/')
  }

  const terms: DictionaryTerm[] = []

  for (const file of files) {
    const { data, content } = readMd(file)
    const id = data.slug ?? slugFromFile(file)

    // definition: prefer explicit frontmatter field, fall back to markdown body
    const bodyDefinition = content.trim().replace(/\s+/g, ' ')
    const definition = (data.definition && data.definition !== '~')
      ? data.definition
      : bodyDefinition

    const term: DictionaryTerm = {
      id,
      term: data.term ?? id,
      definition,
      category: data.category ?? 'core',
      tags: data.tags ?? [],
      relatedTerms: data.relatedTerms ?? [],
    }
    if (data.shortForm && data.shortForm !== '~') term.shortForm = data.shortForm
    if (data.example && data.example !== '~') term.example = data.example

    terms.push(term)
    console.log(`  dict: scanned ${path.basename(file)}`)
  }

  // sort alphabetically by term
  terms.sort((a, b) => a.term.localeCompare(b.term))

  const output = {
    terms,
    generatedAt: new Date().toISOString(),
  }

  fs.writeFileSync(destPath, JSON.stringify(output, null, 2))
  fs.writeFileSync(wikiDestPath, JSON.stringify(output, null, 2))
  console.log(`  dict: wrote   apps/gen-ai-dictionary/public/terms.json  (${terms.length} terms)`)
  console.log(`  dict: wrote   apps/wiki/public/dictionary/terms.json  (${terms.length} terms)`)
}

// ── interview prep content ───────────────────────────────────────────────────

function buildInterviewContent() {
  const srcDir = path.join(ROOT, 'content/interview')
  const destDir = path.join(ROOT, 'apps/wiki/public/interview')

  if (!fs.existsSync(srcDir)) {
    console.log('  interview: no content/interview/ directory found')
    return
  }

  copyDir(srcDir, destDir)
  const files = globSync(path.join(srcDir, '*.json'))
  console.log(`  interview: copied ${files.length} json files to apps/wiki/public/interview/`)
}

// ── main ──────────────────────────────────────────────────────────────────────

console.log('\n🔨 build-manifest')
console.log('─'.repeat(50))

buildBlogManifest()
console.log()
buildInterviewContent()
console.log()
buildDictionaryManifest()

console.log('\n✅ done\n')
