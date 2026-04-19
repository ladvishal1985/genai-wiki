import PostCard from '../components/PostCard'
import SEO from '../components/SEO'
import { useOutletContext } from 'react-router-dom'
import type { PostMeta } from '../types'

export default function Home() {
  const { posts, loading } = useOutletContext<{ posts: PostMeta[], loading: boolean }>()

  return (
    <>
    <SEO />
    <div>
      {/* Hero */}
      <div className="mb-12 pb-10 border-b border-gray-200">
        <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-4 bg-indigo-50 px-3 py-1.5 rounded-full">
          <span>⚡</span> GenAI Wiki
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Generative AI<br />
          <span className="text-indigo-600">Knowledge Base</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
          Practical guides, deep dives, and tutorials on LLMs, prompt engineering, RAG, and building AI-powered applications.
        </p>
      </div>

      {/* Posts grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-5">
          All Posts{' '}
          {!loading && (
            <span className="text-sm font-normal text-gray-400 ml-1">({posts.length})</span>
          )}
        </h2>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-1">
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
          <div className="grid gap-4">
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
