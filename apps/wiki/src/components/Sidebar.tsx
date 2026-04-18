import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import type { PostMeta, Difficulty } from '../types'

const difficultyStyle: Record<Difficulty, string> = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700',
}

interface Props {
  posts: PostMeta[]
  currentSlug: string
}

export default function Sidebar({ posts, currentSlug }: Props) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState('ALL')

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    posts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return ['ALL', ...Array.from(tags).sort()]
  }, [posts])

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesTag = activeTag === 'ALL' || p.tags.includes(activeTag)
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase())
      return matchesTag && matchesSearch
    })
  }, [posts, activeTag, search])

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Search */}
      <div className="px-4 py-3">
        <input
          type="search"
          placeholder="Search posts…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-sm px-3 py-2 rounded-md border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
        />
      </div>

      {/* Tag pills */}
      <div className="px-4 pb-3 flex flex-wrap gap-1.5">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors cursor-pointer ${
              activeTag === tag
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Section header */}
      <div className="px-4 pb-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Blog & Tutorials
        </p>
      </div>

      {/* Post list */}
      <nav className="flex-1 overflow-y-auto px-2 pb-4 space-y-0.5">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-400 px-2 py-4 text-center">No posts found</p>
        ) : (
          filtered.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`flex flex-col gap-1 px-3 py-2.5 rounded-lg transition-colors ${
                currentSlug === post.slug
                  ? 'bg-indigo-50 text-indigo-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-sm font-medium leading-snug">{post.title}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-1.5 py-0.5 rounded font-medium ${difficultyStyle[post.difficulty]}`}
                >
                  {post.difficulty}
                </span>
                <span className="text-xs text-gray-400">{post.readTime} min</span>
              </div>
            </Link>
          ))
        )}
      </nav>
    </div>
  )
}
