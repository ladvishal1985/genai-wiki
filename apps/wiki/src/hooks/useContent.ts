import { useState, useEffect } from 'react'
import { marked } from 'marked'

// Strip YAML frontmatter block so marked only sees the markdown body
function stripFrontmatter(raw: string): string {
  if (!raw.startsWith('---')) return raw
  const end = raw.indexOf('\n---', 3)
  return end === -1 ? raw : raw.slice(end + 4).trimStart()
}

export function useContent(slug: string) {
  const [html, setHtml] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    setHtml(null)
    setError(null)

    fetch(`/content/blog/${slug}.md`)
      .then((r) => {
        if (!r.ok) throw new Error(`Post not found: ${r.status}`)
        return r.text()
      })
      .then((raw) => {
        const body = stripFrontmatter(raw)
        const result = marked.parse(body, { gfm: true })
        // marked.parse returns string | Promise<string> — handle both
        return typeof result === 'string' ? result : result
      })
      .then((result) => setHtml(result as string))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [slug])

  return { html, loading, error }
}
