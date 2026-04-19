import { forwardRef, useImperativeHandle, useRef, useMemo } from 'react'
import type { Term } from '../types'
import { CATEGORY_COLORS } from '../types'

export interface TermListHandle {
  scrollToLetter: (letter: string) => void
}

interface Props {
  terms: Term[]
  selectedId: string | null
  onSelect: (term: Term) => void
}

const TermList = forwardRef<TermListHandle, Props>(({ terms, selectedId, onSelect }, ref) => {
  const letterRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  useImperativeHandle(ref, () => ({
    scrollToLetter: (letter) => {
      const el = letterRefs.current.get(letter)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  }))

  const grouped = useMemo(() => {
    const map = new Map<string, Term[]>()
    for (const term of terms) {
      const letter = term.term[0].toUpperCase()
      if (!map.has(letter)) map.set(letter, [])
      map.get(letter)!.push(term)
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b))
  }, [terms])

  if (grouped.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16" style={{ color: '#828282' }}>
        <span className="text-3xl mb-2">∅</span>
        <p className="text-xs font-mono">no terms match</p>
      </div>
    )
  }

  return (
    <>
      {grouped.map(([letter, letterTerms]) => (
        <div
          key={letter}
          ref={(el) => { if (el) letterRefs.current.set(letter, el) }}
        >
          <div
            className="px-3 py-1 text-[10px] font-mono font-bold tracking-[0.2em] sticky top-0 z-10"
            style={{ background: '#0d0d0d', borderBottom: '1px solid #1a1a1a', color: '#828282' }}
          >
            {letter}
          </div>

          {letterTerms.map((term) => {
            const isSelected = term.id === selectedId
            const color = CATEGORY_COLORS[term.category] ?? '#6b7280'
            return (
              <button
                key={term.id}
                onClick={() => onSelect(term)}
                className="w-full text-left flex items-center gap-2 px-3 py-2 transition-colors"
                style={{
                  background: isSelected ? '#171717' : 'transparent',
                  borderLeft: `2px solid ${isSelected ? color : 'transparent'}`,
                }}
                onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = '#131313' }}
                onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = 'transparent' }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                <span className="text-sm flex-1 truncate" style={{ color: isSelected ? '#e5e5e5' : '#8a8a8a' }}>
                  {term.term}
                </span>
                {term.shortForm && (
                  <span className="text-[10px] font-mono flex-shrink-0" style={{ color: '#828282' }}>
                    {term.shortForm}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      ))}
    </>
  )
})

TermList.displayName = 'TermList'
export default TermList
