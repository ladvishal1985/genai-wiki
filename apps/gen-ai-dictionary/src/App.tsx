import { useState, useMemo, useRef, useCallback } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import AlphabetNav from './components/AlphabetNav'
import CategoryFilter from './components/CategoryFilter'
import TermList, { type TermListHandle } from './components/TermList'
import TermDetail from './components/TermDetail'
import KnowledgeGraph from './components/KnowledgeGraph'
import { useTerms } from './hooks/useTerms'
import { useSearch } from './hooks/useSearch'
import type { Category, Term } from './types'

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full" style={{ color: '#1e1e1e' }}>
      <div
        className="text-[8rem] font-black leading-none mb-4 select-none"
        style={{ color: '#151515', fontFamily: 'ui-monospace, monospace' }}
      >
        AI
      </div>
      <p className="text-xs font-mono" style={{ color: '#2a2a2a' }}>
        Select a term from the left to view its definition
      </p>
    </div>
  )
}

export default function App() {
  const { terms, loading, error } = useTerms()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all')
  const [activeLetter, setActiveLetter] = useState<string | null>(null)
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null)
  const [activeTab, setActiveTab] = useState<'list' | 'graph'>('list')
  const termListRef = useRef<TermListHandle>(null)

  const searched = useSearch(terms, query)

  const filtered = useMemo(() => {
    return searched.filter((t) => {
      return activeCategory === 'all' || t.category === activeCategory
    })
  }, [searched, activeCategory])

  const availableLetters = useMemo(() => {
    const set = new Set<string>()
    for (const t of filtered) set.add(t.term[0].toUpperCase())
    return set
  }, [filtered])

  const handleLetterClick = useCallback((letter: string) => {
    setActiveLetter(letter)
    termListRef.current?.scrollToLetter(letter)
  }, [])

  const handleSelect = useCallback((term: Term) => {
    setSelectedTerm(term)
  }, [])

  const handleSelectById = useCallback((id: string) => {
    const term = terms.find((t) => t.id === id) ?? null
    if (term) setSelectedTerm(term)
  }, [terms])

  const handleSearchChange = useCallback((v: string) => {
    setQuery(v)
    setActiveLetter(null)
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: '#0f0f0f' }}>
      {/* Header */}
      <Header filteredCount={filtered.length} totalCount={terms.length} />

      {/* Tab bar */}
      <div
        className="flex-shrink-0 flex items-center"
        style={{ borderBottom: '1px solid #1a1a1a', background: '#0a0a0a' }}
      >
        {(['list', 'graph'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-5 py-2.5 text-[10px] font-mono uppercase tracking-widest transition-colors"
            style={{
              color: activeTab === tab ? '#e5e7eb' : '#333',
              borderBottom: activeTab === tab ? '1px solid #e5e7eb' : '1px solid transparent',
              background: 'transparent',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Controls bar — list tab only */}
      {activeTab === 'list' && (
        <div
          className="flex-shrink-0 px-4 pt-3 pb-2 space-y-2.5"
          style={{ borderBottom: '1px solid #1a1a1a', background: '#0a0a0a' }}
        >
          <SearchBar value={query} onChange={handleSearchChange} />

          {!loading && !error && (
            <p className="text-[10px] font-mono" style={{ color: '#2a2a2a' }}>
              Type to search · Click a term to expand · Click tags to filter
            </p>
          )}

          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          <AlphabetNav
            availableLetters={availableLetters}
            activeLetter={activeLetter}
            onSelect={handleLetterClick}
          />
        </div>
      )}

      {/* Loading / Error state */}
      {loading && (
        <div className="flex items-center justify-center flex-1">
          <p className="text-xs font-mono animate-pulse" style={{ color: '#333' }}>
            loading terms…
          </p>
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center flex-1">
          <p className="text-xs font-mono" style={{ color: '#ef4444' }}>
            Failed to load terms: {error.message}
          </p>
        </div>
      )}

      {/* Main area */}
      {!loading && !error && (
        activeTab === 'list' ? (
          <div className="flex flex-1 overflow-hidden">
            {/* Left panel — term list */}
            <div
              className="flex-shrink-0 overflow-y-auto"
              style={{ width: '272px', borderRight: '1px solid #161616' }}
            >
              <TermList
                ref={termListRef}
                terms={filtered}
                selectedId={selectedTerm?.id ?? null}
                onSelect={handleSelect}
              />
            </div>

            {/* Right panel — term detail */}
            <div className="flex-1 overflow-y-auto">
              {selectedTerm ? (
                <TermDetail term={selectedTerm} onSelectRelated={handleSelectById} />
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        ) : (
          <KnowledgeGraph terms={terms} startTerm={selectedTerm} />
        )
      )}
    </div>
  )
}
