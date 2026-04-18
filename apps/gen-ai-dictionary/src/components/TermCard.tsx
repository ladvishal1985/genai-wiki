import type { Term } from '../types'

interface Props {
  term: Term
  onClick: (id: string) => void
}

export default function TermCard({ term, onClick }: Props) {
  return (
    <article
      onClick={() => onClick(term.id)}
      className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition-all bg-white"
    >
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="font-semibold text-gray-900">{term.term}</h3>
        {term.shortForm && (
          <span className="text-xs text-gray-400 font-mono">{term.shortForm}</span>
        )}
      </div>
      <p className="text-sm text-gray-500 line-clamp-2">{term.definition}</p>
    </article>
  )
}
