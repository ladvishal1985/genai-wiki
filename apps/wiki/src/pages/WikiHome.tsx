import PostCard from '../components/PostCard'
import SEO from '../components/SEO'
import { useOutletContext } from 'react-router-dom'
import type { PostMeta } from '../types'

export default function WikiHome() {
  const { posts, loading } = useOutletContext<{ posts: PostMeta[], loading: boolean }>()

  return (
    <>
      <SEO title="GenAI Wiki" />
      <div>
        <div className="app-panel mb-8 grid gap-5 rounded-2xl p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-800 font-bold text-sm mb-4 bg-cyan-50 px-3 py-1.5 rounded-full ring-1 ring-cyan-100">
              <span>GenAI Wiki</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 leading-tight mb-3">
              Generative AI<br />
              <span className="text-cyan-700">Knowledge Base</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Practical guides, deep dives, and tutorials on LLMs, prompt engineering, RAG, and building AI-powered applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm sm:min-w-64">
            <div className="rounded-lg bg-slate-950 px-4 py-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Posts</p>
              <p className="mt-1 text-2xl font-bold">{loading ? '...' : posts.length}</p>
            </div>
            <div className="rounded-lg bg-emerald-50 px-4 py-3 ring-1 ring-emerald-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Format</p>
              <p className="mt-1 text-lg font-bold text-slate-950">Guides</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-950 mb-5">
            All Posts{' '}
            {!loading && (
              <span className="text-sm font-normal text-slate-400 ml-1">({posts.length})</span>
            )}
          </h2>

          {loading ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-xl border border-gray-200 p-6 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-gray-400 text-center py-16">No posts yet.</p>
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
