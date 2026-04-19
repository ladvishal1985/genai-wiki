import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useContent } from '../hooks/useContent'
import { useManifest } from '../hooks/useManifest'
import SEO from './SEO'
import type { Difficulty } from '../types'

const difficultyStyle: Record<Difficulty, string> = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700',
}

function Skeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="flex gap-3 mt-2">
        <div className="h-4 bg-gray-200 rounded w-20" />
        <div className="h-4 bg-gray-200 rounded w-16" />
        <div className="h-4 bg-gray-200 rounded w-24" />
      </div>
      <div className="mt-8 space-y-3">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`h-4 bg-gray-200 rounded ${i % 3 === 2 ? 'w-2/3' : 'w-full'}`} />
        ))}
      </div>
    </div>
  )
}

export default function ContentPage() {
  const { slug = '' } = useParams()
  const { html, loading, error } = useContent(slug)
  const { manifest } = useManifest()

  // metadata comes from the manifest — no frontmatter parsing needed in browser
  const meta = manifest?.posts.find((p) => p.slug === slug)

  if (loading) return <Skeleton />

  if (error || html === null) {
    return (
      <div className="text-center py-20">
        <p className="text-5xl mb-4">📄</p>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Post not found</h1>
        <p className="text-gray-500">
          The post <code className="text-sm bg-gray-100 px-1 rounded">{slug}</code> doesn't exist
          or failed to load.
        </p>
      </div>
    )
  }

  const rawDate = meta?.publishedAt ?? meta?.date ?? ''
  const formattedDate = rawDate ? format(new Date(rawDate), 'MMM d, yyyy') : ''

  const jsonLd = meta
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: meta.title,
        description: meta.description,
        author: { '@type': 'Person', name: meta.author },
        datePublished: rawDate,
        keywords: meta.tags.join(', '),
        publisher: {
          '@type': 'Organization',
          name: 'GenAI Wiki',
          url: 'https://genai.wiki',
        },
      }
    : undefined

  return (
    <>
      <SEO
        title={meta?.title}
        description={meta?.description}
        path={`/blog/${slug}`}
        publishedAt={rawDate || undefined}
        tags={meta?.tags}
        jsonLd={jsonLd}
      />
    <article>
      {/* Page header */}
      <header className="mb-10 pb-8 border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
          {meta?.title ?? slug}
        </h1>
        {meta?.description && (
          <p className="text-lg text-gray-500 leading-relaxed mb-5">{meta.description}</p>
        )}

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-5">
          {meta?.author && (
            <span className="font-medium text-gray-700">{meta.author}</span>
          )}
          {formattedDate && (
            <>
              <span className="text-gray-300">·</span>
              <span>{formattedDate}</span>
            </>
          )}
          {meta?.readTime && (
            <>
              <span className="text-gray-300">·</span>
              <span>{meta.readTime} min read</span>
            </>
          )}
          {meta?.difficulty && (
            <>
              <span className="text-gray-300">·</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${difficultyStyle[meta.difficulty]}`}
              >
                {meta.difficulty}
              </span>
            </>
          )}
        </div>

        {/* Tags */}
        {meta?.tags && meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Markdown content */}
      <div
        className="prose prose-gray prose-lg max-w-none
          prose-headings:font-semibold prose-headings:text-gray-900
          prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
          prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-gray-900 prose-pre:text-gray-100
          prose-blockquote:border-indigo-300 prose-blockquote:bg-indigo-50 prose-blockquote:py-1 prose-blockquote:rounded-r
          prose-table:text-sm prose-th:bg-gray-50
          prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
    </>
  )
}
