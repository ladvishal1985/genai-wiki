import { useState, useRef, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import DictionaryPage from './pages/DictionaryPage'
import KnowledgeGraph from './components/KnowledgeGraph'
import { useTerms } from './hooks/useTerms'
import type { Term } from './types'

// Tab-aware shell so the graph tab persists across term navigation
function Shell() {
  const { terms, loading } = useTerms()
  const [activeTab, setActiveTab] = useState<'list' | 'graph'>('list')
  const [graphStartTerm, setGraphStartTerm] = useState<Term | null>(null)
  const lastSelectedRef = useRef<Term | null>(null)

  const handleTabChange = useCallback(
    (tab: 'list' | 'graph') => {
      if (tab === 'graph' && lastSelectedRef.current) {
        setGraphStartTerm(lastSelectedRef.current)
      }
      setActiveTab(tab)
    },
    []
  )

  return (
    <div className="flex flex-col h-full min-h-[calc(100vh-4rem)] overflow-hidden" style={{ background: '#0f172a' }}>
      {/* Tab bar sits above everything */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-3"
        style={{ borderBottom: '1px solid rgba(148,163,184,0.18)', background: '#0f172a', zIndex: 10 }}
      >
        <div className="flex items-center gap-1">
          {(['list', 'graph'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className="rounded-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors"
              style={{
                color: activeTab === tab ? '#cffafe' : '#94a3b8',
                background: activeTab === tab ? 'rgba(8,145,178,0.22)' : 'transparent',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest" style={{ color: '#67e8f9' }}>
          GenAI Dictionary
        </span>
      </div>

      {/* List tab — renders the routed DictionaryPage */}
      <div className={`flex flex-col flex-1 overflow-hidden ${activeTab === 'list' ? '' : 'hidden'}`}>
        <Routes>
          <Route
            path=""
            element={
              <DictionaryPage onTermSelect={t => { lastSelectedRef.current = t }} />
            }
          />
          <Route
            path="terms/:id"
            element={
              <DictionaryPage onTermSelect={t => { lastSelectedRef.current = t }} />
            }
          />
        </Routes>
      </div>

      {/* Graph tab */}
      {activeTab === 'graph' && !loading && (
        <KnowledgeGraph terms={terms} startTerm={graphStartTerm} />
      )}

      {/* Footer — always visible */}
      <footer
        className="flex-shrink-0 flex items-center justify-between px-5 py-2"
        style={{ borderTop: '1px solid #141414', background: '#080808' }}
      >
        <span className="text-[10px] font-mono" style={{ color: '#828282' }}>
          <span className="hidden sm:inline">
            © {new Date().getFullYear()} GenAI Dictionary · All definitions are educational and evolve with the field.
          </span>
          <span className="sm:hidden">© {new Date().getFullYear()} GenAI Dictionary</span>
        </span>
        <span className="hidden sm:inline text-[10px] font-mono" style={{ color: '#828282' }}>
          Built for AI practitioners
        </span>
      </footer>
    </div>
  )
}

export default function App() {
  return <Shell />
}
