import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import type { PostMeta, Difficulty } from '../types'

const difficultyStyle: Record<Difficulty, string> = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700',
}

interface Props {
  post: PostMeta
}

export default function PostCard({ post }: Props) {
  const navigate = useNavigate()
  const rawDate = post.publishedAt ?? post.date ?? ''
  const formattedDate = rawDate ? format(new Date(rawDate), 'MMM d, yyyy') : ''

  return (
    <article
      onClick={() => navigate(`/blog/${post.slug}`)}
      className="group cursor-pointer rounded-xl border border-slate-200/80 bg-white/85 p-4 shadow-sm transition-all hover:border-cyan-300 hover:bg-cyan-50/40 sm:p-5"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h2 className="text-lg font-bold text-slate-950 group-hover:text-cyan-800 transition-colors leading-snug">
          {post.title}
        </h2>
        <span
          className={`flex-none text-xs px-2 py-0.5 rounded-full font-semibold ${difficultyStyle[post.difficulty]}`}
        >
          {post.difficulty}
        </span>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
        {post.description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 flex-none">
          {formattedDate && <span>{formattedDate}</span>}
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </article>
  )
}
