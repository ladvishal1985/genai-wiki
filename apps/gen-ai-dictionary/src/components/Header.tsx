interface Props {
  filteredCount: number
  totalCount: number
}

export default function Header({ filteredCount, totalCount }: Props) {
  const isFiltered = filteredCount !== totalCount

  return (
    <header
      className="flex items-center justify-between px-5 py-3 flex-shrink-0"
      style={{ background: '#0a0a0a', borderBottom: '1px solid #1e1e1e' }}
    >
      <div>
        <h1
          className="text-xl font-bold tracking-wider"
          style={{ color: '#f59e0b', fontFamily: 'ui-monospace, monospace' }}
        >
          GenAI Dictionary
        </h1>
        <p className="text-[10px] tracking-[0.15em] uppercase mt-0.5" style={{ color: '#828282' }}>
          Practitioner's Reference
        </p>
        <p className="text-[10px] font-mono mt-1 max-w-xs" style={{ color: '#828282', lineHeight: '1.5' }}>
          Clear definitions for AI, LLMs, RAG, agents, embeddings, fine-tuning, evals &amp; safety — built for engineers and researchers.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span
          className="text-xs px-3 py-1 rounded-full font-mono"
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            color: isFiltered ? '#f59e0b' : '#6b7280',
          }}
        >
          {isFiltered ? `${filteredCount} / ${totalCount}` : `${totalCount}`} terms
        </span>
        <span
          className="text-[10px] px-2 py-1 rounded font-mono"
          style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#3a3a3a' }}
        >
          v1.0 · 2025
        </span>
      </div>
    </header>
  )
}
