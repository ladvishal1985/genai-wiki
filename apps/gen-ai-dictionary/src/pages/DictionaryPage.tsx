import { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import AlphabetNav from '../components/AlphabetNav'
import CategoryFilter from '../components/CategoryFilter'
import TermList, { type TermListHandle } from '../components/TermList'
import TermDetail from '../components/TermDetail'
import SEO from '../components/SEO'
import { useTerms } from '../hooks/useTerms'
import { useSearch } from '../hooks/useSearch'
import type { Category, Term } from '../types'
import { CATEGORY_LABELS } from '../types'

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

interface Props {
  onTermSelect?: (term: Term) => void
}

export default function DictionaryPage({ onTermSelect }: Props) {
  const { id } = useParams<{ id?: string }>()
  const navigate = useNavigate()

  const { terms, loading, error } = useTerms()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all')
  const [activeLetter, setActiveLetter] = useState<string | null>(null)
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null)
  const termListRef = useRef<TermListHandle>(null)

  // Initialise selection from URL param (direct link or page refresh)
  useEffect(() => {
    if (!id || terms.length === 0) return
    const match = terms.find(t => t.id === id)
    if (match) setSelectedTerm(match)
  }, [id, terms])

  const searched = useSearch(terms, query)

  const filtered = useMemo(
    () => searched.filter(t => activeCategory === 'all' || t.category === activeCategory),
    [searched, activeCategory]
  )

  const availableLetters = useMemo(() => {
    const set = new Set<string>()
    for (const t of filtered) set.add(t.term[0].toUpperCase())
    return set
  }, [filtered])

  const handleLetterClick = useCallback((letter: string) => {
    setActiveLetter(letter)
    termListRef.current?.scrollToLetter(letter)
  }, [])

  const handleSelect = useCallback(
    (term: Term) => {
      setSelectedTerm(term)
      onTermSelect?.(term)
      navigate(`/terms/${term.id}`, { replace: false })
    },
    [navigate, onTermSelect]
  )

  const handleSelectById = useCallback(
    (relId: string) => {
      const term = terms.find(t => t.id === relId) ?? null
      if (term) {
        setSelectedTerm(term)
        onTermSelect?.(term)
        navigate(`/terms/${term.id}`, { replace: false })
      }
    },
    [terms, navigate, onTermSelect]
  )

  const handleSearchChange = useCallback((v: string) => {
    setQuery(v)
    setActiveLetter(null)
  }, [])

  const seoDescription = selectedTerm
    ? selectedTerm.definition.slice(0, 155) + (selectedTerm.definition.length > 155 ? '…' : '')
    : undefined

  const jsonLd = selectedTerm
    ? {
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        name: selectedTerm.term,
        description: selectedTerm.definition,
        ...(selectedTerm.shortForm ? { alternateName: selectedTerm.shortForm } : {}),
        inDefinedTermSet: {
          '@type': 'DefinedTermSet',
          name: 'GenAI Dictionary',
          url: 'https://genai.wiki',
        },
        keywords: selectedTerm.tags.join(', '),
        about: CATEGORY_LABELS[selectedTerm.category],
      }
    : undefined

  return (
    <>
      <SEO
        title={selectedTerm?.term}
        description={seoDescription}
        path={selectedTerm ? `/terms/${selectedTerm.id}` : '/'}
        jsonLd={jsonLd}
      />

      <div className="flex flex-col h-full overflow-hidden" style={{ background: '#0f0f0f' }}>
        <Header filteredCount={filtered.length} totalCount={terms.length} />

        <div
          className="flex-shrink-0 px-4 pt-3 pb-2 space-y-2.5"
          style={{ borderBottom: '1px solid #1a1a1a', background: '#0a0a0a' }}
        >
          <SearchBar value={query} onChange={handleSearchChange} />

          {!loading && !error && (
            <p className="text-[10px] font-mono" style={{ color: '#828282' }}>
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

        {!loading && !error && (
          <div className="flex flex-1 overflow-hidden">
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

            <div className="flex-1 overflow-y-auto">
              {selectedTerm ? (
                <TermDetail term={selectedTerm} onSelectRelated={handleSelectById} />
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
