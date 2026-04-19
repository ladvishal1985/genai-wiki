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
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: '#0f0f0f' }}>
      {/* Tab bar sits above everything */}
      <div
        className="flex-shrink-0 flex items-center"
        style={{ borderBottom: '1px solid #1a1a1a', background: '#0a0a0a', zIndex: 10 }}
      >
        {(['list', 'graph'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
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

      {/* List tab — renders the routed DictionaryPage */}
      <div className={`flex flex-col flex-1 overflow-hidden ${activeTab === 'list' ? '' : 'hidden'}`}>
        <Routes>
          <Route
            path="/"
            element={
              <DictionaryPage onTermSelect={t => { lastSelectedRef.current = t }} />
            }
          />
          <Route
            path="/terms/:id"
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
          © {new Date().getFullYear()} GenAI Dictionary · All definitions are educational and evolve with the field.
        </span>
        <span className="text-[10px] font-mono" style={{ color: '#828282' }}>
          Built for AI practitioners
        </span>
      </footer>
    </div>
  )
}

export default function App() {
  return <Shell />
}
