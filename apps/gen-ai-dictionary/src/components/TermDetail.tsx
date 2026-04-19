import type { Term } from '../types'
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../types'

interface Props {
  term: Term
  onSelectRelated: (id: string) => void
}

export default function TermDetail({ term, onSelectRelated }: Props) {
  const color = CATEGORY_COLORS[term.category] ?? '#6b7280'
  const label = CATEGORY_LABELS[term.category] ?? term.category

  return (
    <div className="p-6 max-w-3xl">
      {/* Term header */}
      <div className="flex items-start gap-3 mb-5">
        <div
          className="w-1 self-stretch rounded-full flex-shrink-0"
          style={{ background: color, minHeight: '2.5rem' }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-2xl font-bold" style={{ color: '#e5e5e5' }}>
              {term.term}
            </h2>
            {term.shortForm && (
              <span className="text-sm font-mono" style={{ color: '#404040' }}>
                {term.shortForm}
              </span>
            )}
          </div>
          <span
            className="inline-block mt-1.5 text-[10px] font-mono px-2 py-0.5 rounded tracking-wider"
            style={{
              background: `${color}18`,
              border: `1px solid ${color}44`,
              color: color,
            }}
          >
            {label.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Definition */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: '#a3a3a3', lineHeight: '1.75' }}>
        {term.definition}
      </p>

      {/* Example */}
      {term.example && (
        <div
          className="rounded-md p-4 mb-6"
          style={{ background: '#141414', border: '1px solid #1e1e1e' }}
        >
          <p className="text-[10px] font-mono tracking-widest uppercase mb-2" style={{ color: '#828282' }}>
            Example
          </p>
          <p className="text-sm" style={{ color: '#7a7a7a' }}>
            {term.example}
          </p>
        </div>
      )}

      {/* Tags */}
      {term.tags.length > 0 && (
        <div className="mb-6">
          <p className="text-[10px] font-mono tracking-widest uppercase mb-2" style={{ color: '#828282' }}>
            Tags
          </p>
          <div className="flex flex-wrap gap-1.5">
            {term.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded font-mono"
                style={{
                  background: '#161616',
                  border: '1px solid #2a2a2a',
                  color: '#9ca3af',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Related Terms */}
      {term.relatedTerms && term.relatedTerms.length > 0 && (
        <div>
          <p className="text-[10px] font-mono tracking-widest uppercase mb-2" style={{ color: '#828282' }}>
            Related Terms
          </p>
          <div className="flex flex-wrap gap-1.5">
            {term.relatedTerms.map((id) => (
              <button
                key={id}
                onClick={() => onSelectRelated(id)}
                className="text-[11px] px-2.5 py-1 rounded-full font-mono transition-colors"
                style={{ background: '#161616', border: '1px solid #2a2a2a', color: '#9ca3af' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}66`
                  e.currentTarget.style.color = color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2a2a2a'
                  e.currentTarget.style.color = '#555'
                }}
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
