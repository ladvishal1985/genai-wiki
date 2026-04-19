import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import * as d3 from 'd3'
import type { Term } from '../types'
import { CATEGORY_COLORS } from '../types'
import TermDetail from './TermDetail'

interface Props {
  terms: Term[]
  startTerm?: Term | null
}

interface GNode extends d3.SimulationNodeDatum {
  id: string
  term: Term
  role: 'center' | 'related' | 'visited' | 'history'
}

interface RawLink {
  source: string
  target: string
}

const ROLE_RADIUS: Record<GNode['role'], number> = {
  center: 32,
  related: 20,
  visited: 18,
  history: 15,
}

const ROLE_OPACITY: Record<GNode['role'], number> = {
  center: 1,
  related: 0.85,
  visited: 0.45,
  history: 0.5,
}

export default function KnowledgeGraph({ terms, startTerm }: Props) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const navigateRef = useRef<(term: Term) => void>(() => {})
  const navigateBackRef = useRef<(term: Term) => void>(() => {})

  const [currentTerm, setCurrentTerm] = useState<Term | null>(startTerm ?? null)
  const [path, setPath] = useState<Term[]>([])
  const [panelTerm, setPanelTerm] = useState<Term | null>(startTerm ?? null)

  // When user picks a term in list view then switches to graph tab
  useEffect(() => {
    if (startTerm && path.length === 0) {
      setCurrentTerm(startTerm)
      setPanelTerm(startTerm)
    }
  }, [startTerm]) // eslint-disable-line react-hooks/exhaustive-deps

  const termMap = useMemo(() => {
    const m = new Map<string, Term>()
    terms.forEach(t => m.set(t.id, t))
    return m
  }, [terms])

  const pathIds = useMemo(() => new Set(path.map(t => t.id)), [path])

  const { nodes, links } = useMemo((): { nodes: GNode[]; links: RawLink[] } => {
    if (!currentTerm) return { nodes: [], links: [] }

    const nodesMap = new Map<string, GNode>()
    const linkList: RawLink[] = []

    // History chain
    path.forEach((t, i) => {
      nodesMap.set(t.id, { id: t.id, term: t, role: 'history' })
      if (i > 0) linkList.push({ source: path[i - 1].id, target: t.id })
    })
    if (path.length > 0) {
      linkList.push({ source: path[path.length - 1].id, target: currentTerm.id })
    }

    // Center
    nodesMap.set(currentTerm.id, { id: currentTerm.id, term: currentTerm, role: 'center' })

    // Related
    ;(currentTerm.relatedTerms ?? []).forEach(relId => {
      const t = termMap.get(relId)
      if (!t || relId === currentTerm.id) return
      const role: GNode['role'] = pathIds.has(relId) ? 'visited' : 'related'
      if (!nodesMap.has(relId)) {
        nodesMap.set(relId, { id: relId, term: t, role })
      }
      linkList.push({ source: currentTerm.id, target: relId })
    })

    return { nodes: Array.from(nodesMap.values()), links: linkList }
  }, [currentTerm, path, pathIds, termMap])

  const isDeadEnd = useMemo(() => {
    if (!currentTerm) return false
    const related = currentTerm.relatedTerms ?? []
    return (
      related.length === 0 ||
      related.every(id => pathIds.has(id) || id === currentTerm.id || !termMap.has(id))
    )
  }, [currentTerm, pathIds, termMap])

  const navigate = useCallback(
    (term: Term) => {
      setPath(prev => (currentTerm ? [...prev, currentTerm] : prev))
      setCurrentTerm(term)
      setPanelTerm(term)
    },
    [currentTerm]
  )

  const navigateById = useCallback(
    (id: string) => {
      const t = termMap.get(id)
      if (t) navigate(t)
    },
    [termMap, navigate]
  )

  const navigateBack = useCallback(
    (term: Term) => {
      const idx = path.findIndex(t => t.id === term.id)
      if (idx === -1) return
      setPath(path.slice(0, idx))
      setCurrentTerm(term)
      setPanelTerm(term)
    },
    [path]
  )

  const reset = useCallback(() => {
    setCurrentTerm(startTerm ?? null)
    setPanelTerm(startTerm ?? null)
    setPath([])
  }, [startTerm])

  // Keep refs fresh so D3 handlers always call latest version
  useEffect(() => { navigateRef.current = navigate }, [navigate])
  useEffect(() => { navigateBackRef.current = navigateBack }, [navigateBack])

  // D3 rendering — re-runs whenever graph topology changes
  useEffect(() => {
    if (!svgRef.current || !containerRef.current || nodes.length === 0) return

    const el = containerRef.current
    const width = el.clientWidth
    const height = el.clientHeight

    const svg = d3.select(svgRef.current)
    svg.attr('width', width).attr('height', height)
    svg.selectAll('*').remove()

    const g = svg.append('g')

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.15, 4])
      .on('zoom', e => g.attr('transform', e.transform))
    svg.call(zoom)

    // Seed initial positions so nodes don't all explode from (0,0)
    const cx = width / 2
    const cy = height / 2
    const related = nodes.filter(n => n.role === 'related' || n.role === 'visited')
    const history = nodes.filter(n => n.role === 'history')

    nodes.forEach(n => {
      if (n.role === 'center') { n.x = cx; n.y = cy; n.fx = cx; n.fy = cy }
    })
    related.forEach((n, i) => {
      const angle = (i / related.length) * 2 * Math.PI - Math.PI / 2
      n.x = cx + 160 * Math.cos(angle)
      n.y = cy + 160 * Math.sin(angle)
    })
    history.forEach((n, i) => {
      n.x = cx - 280 - i * 55
      n.y = cy - 60 + (i % 2 === 0 ? -20 : 20)
    })

    const sim = d3.forceSimulation<GNode>(nodes)
      .force(
        'link',
        d3.forceLink<GNode, RawLink>(links)
          .id(d => d.id)
          .distance(d => {
            const src = (d as unknown as { source: GNode }).source
            const tgt = (d as unknown as { target: GNode }).target
            if (src?.role === 'center' || tgt?.role === 'center') return 150
            return 70
          })
      )
      .force('charge', d3.forceManyBody().strength(d => {
        const role = (d as GNode).role
        if (role === 'center') return -500
        if (role === 'related') return -300
        return -150
      }))
      .force('collision', d3.forceCollide<GNode>(d => ROLE_RADIUS[d.role] + 10))
      .alphaDecay(0.025)

    // Links
    const linkSel = g.append('g')
      .selectAll<SVGLineElement, RawLink>('line')
      .data(links)
      .join('line')
      .attr('stroke', '#252525')
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.8)

    // Node groups
    const nodeSel = g.append('g')
      .selectAll<SVGGElement, GNode>('g')
      .data(nodes, d => d.id)
      .join('g')
      .attr('cursor', d => d.role === 'center' ? 'default' : 'pointer')  // history nodes are also clickable (go back)

    // Drag
    nodeSel.call(
      d3.drag<SVGGElement, GNode>()
        .on('start', (ev, d) => {
          if (!ev.active) sim.alphaTarget(0.3).restart()
          if (d.role !== 'center') { d.fx = d.x; d.fy = d.y }
        })
        .on('drag', (ev, d) => {
          if (d.role !== 'center') { d.fx = ev.x; d.fy = ev.y }
        })
        .on('end', (ev, d) => {
          if (!ev.active) sim.alphaTarget(0)
          if (d.role !== 'center') { d.fx = null; d.fy = null }
        })
    )

    // Circles
    nodeSel.append('circle')
      .attr('r', d => ROLE_RADIUS[d.role])
      .attr('fill', d => CATEGORY_COLORS[d.term.category] ?? '#6b7280')
      .attr('fill-opacity', d => ROLE_OPACITY[d.role])
      .attr('stroke', d => d.role === 'center' ? 'rgba(255,255,255,0.25)' : 'none')
      .attr('stroke-width', 2)

    // Labels
    nodeSel.append('text')
      .text(d => {
        const lbl = d.term.shortForm ?? d.term.term
        return lbl.length > 15 ? lbl.slice(0, 14) + '…' : lbl
      })
      .attr('text-anchor', 'middle')
      .attr('dy', d => ROLE_RADIUS[d.role] + (d.role === 'center' ? 18 : 14))
      .attr('fill', d => {
        if (d.role === 'center') return '#d1d5db'
        if (d.role === 'related') return '#6b7280'
        if (d.role === 'visited') return '#4b5563'
        return '#4b5563'
      })
      .attr('font-size', d => d.role === 'center' ? 11 : 9)
      .attr('font-weight', d => d.role === 'center' ? '700' : '400')
      .attr('pointer-events', 'none')
      .style('font-family', 'ui-monospace, monospace')

    // Hover ring
    nodeSel
      .on('mouseenter', function (_, d) {
        if (d.role === 'center') return
        d3.select(this).select('circle').attr('stroke', 'rgba(255,255,255,0.5)').attr('stroke-width', 2)
      })
      .on('mouseleave', function (_, d) {
        if (d.role === 'center') return
        d3.select(this).select('circle')
          .attr('stroke', 'none')
      })

    // Click — history nodes navigate *back* to that point in the path
    nodeSel.on('click', (_, d) => {
      if (d.role === 'related' || d.role === 'visited') navigateRef.current(d.term)
      else if (d.role === 'history') navigateBackRef.current(d.term)
    })

    sim.on('tick', () => {
      linkSel
        .attr('x1', (d: any) => (d.source as GNode).x ?? 0)
        .attr('y1', (d: any) => (d.source as GNode).y ?? 0)
        .attr('x2', (d: any) => (d.target as GNode).x ?? 0)
        .attr('y2', (d: any) => (d.target as GNode).y ?? 0)
      nodeSel.attr('transform', d => `translate(${d.x ?? 0},${d.y ?? 0})`)
    })

    return () => sim.stop()
  }, [nodes, links])

  // --- Picker shown when no starting term ---
  if (!currentTerm) {
    const suggestions = [...terms]
      .sort((a, b) => (b.relatedTerms?.length ?? 0) - (a.relatedTerms?.length ?? 0))
      .slice(0, 10)

    return (
      <div className="flex flex-col items-center justify-center flex-1 gap-6">
        <div>
          <p className="text-xs font-mono text-center mb-1" style={{ color: '#3a3a3a' }}>
            KNOWLEDGE GRAPH
          </p>
          <p className="text-sm font-mono text-center" style={{ color: '#2a2a2a' }}>
            pick a term to start exploring
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-lg px-4">
          {suggestions.map(t => (
            <button
              key={t.id}
              onClick={() => { setCurrentTerm(t); setPanelTerm(t) }}
              className="text-[11px] font-mono px-3 py-1.5 rounded-full transition-all"
              style={{
                background: `${CATEGORY_COLORS[t.category]}10`,
                border: `1px solid ${CATEGORY_COLORS[t.category]}33`,
                color: CATEGORY_COLORS[t.category],
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${CATEGORY_COLORS[t.category]}22`
                e.currentTarget.style.borderColor = `${CATEGORY_COLORS[t.category]}66`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${CATEGORY_COLORS[t.category]}10`
                e.currentTarget.style.borderColor = `${CATEGORY_COLORS[t.category]}33`
              }}
            >
              {t.term}
            </button>
          ))}
        </div>
        <p className="text-[10px] font-mono" style={{ color: '#1f1f1f' }}>
          or select a term in the List tab first
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Graph area */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Breadcrumb bar */}
        <div
          className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 overflow-x-auto"
          style={{ borderBottom: '1px solid #141414', background: '#080808', minHeight: '36px' }}
        >
          <button
            onClick={reset}
            className="text-[10px] font-mono px-2 py-0.5 rounded flex-shrink-0 transition-colors"
            style={{ background: '#141414', color: '#444', border: '1px solid #222' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#888' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#444' }}
          >
            reset
          </button>

          <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {path.map(t => (
              <span key={t.id} className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => setPanelTerm(t)}
                  className="text-[10px] font-mono px-2 py-0.5 rounded"
                  style={{
                    background: '#111',
                    color: CATEGORY_COLORS[t.category] + '99',
                    border: `1px solid ${CATEGORY_COLORS[t.category]}22`,
                  }}
                >
                  {t.term}
                </button>
                <span style={{ color: '#1f1f1f', fontSize: 10 }}>›</span>
              </span>
            ))}
            <span
              className="text-[10px] font-mono px-2 py-0.5 rounded flex-shrink-0"
              style={{
                background: '#181818',
                color: CATEGORY_COLORS[currentTerm.category],
                border: `1px solid ${CATEGORY_COLORS[currentTerm.category]}44`,
              }}
            >
              {currentTerm.term}
            </span>
          </div>

          {path.length > 0 && (
            <span className="text-[10px] font-mono flex-shrink-0" style={{ color: '#1f1f1f' }}>
              {path.length + 1} steps
            </span>
          )}

          {isDeadEnd && (
            <span className="text-[10px] font-mono flex-shrink-0 ml-1" style={{ color: '#333' }}>
              · dead end
            </span>
          )}
        </div>

        {/* D3 canvas */}
        <div ref={containerRef} className="flex-1 relative">
          <svg ref={svgRef} className="w-full h-full" style={{ background: '#090909' }} />

          {isDeadEnd && (
            <div className="absolute inset-0 flex items-end justify-center pb-16 pointer-events-none">
              <div className="text-center">
                <p className="text-[10px] font-mono" style={{ color: '#2a2a2a' }}>
                  no more unique connections — hit reset to explore again
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div
          className="flex-shrink-0 flex items-center gap-5 px-4 py-2"
          style={{ borderTop: '1px solid #111', background: '#080808' }}
        >
          {(
            [
              { role: 'center', label: 'current' },
              { role: 'related', label: 'clickable' },
              { role: 'visited', label: 'visited' },
              { role: 'history', label: 'path (click to go back)' },
            ] as const
          ).map(({ role, label }) => (
            <div key={role} className="flex items-center gap-1.5">
              <div
                className="rounded-full flex-shrink-0"
                style={{
                  width: role === 'center' ? 10 : role === 'related' ? 8 : role === 'visited' ? 7 : 5,
                  height: role === 'center' ? 10 : role === 'related' ? 8 : role === 'visited' ? 7 : 5,
                  background: '#6b7280',
                  opacity: ROLE_OPACITY[role],
                }}
              />
              <span className="text-[9px] font-mono" style={{ color: '#252525' }}>
                {label}
              </span>
            </div>
          ))}
          <span className="ml-auto text-[9px] font-mono" style={{ color: '#1a1a1a' }}>
            drag · scroll to zoom · click nodes to traverse
          </span>
        </div>
      </div>

      {/* Side panel — term detail */}
      <div
        className="flex-shrink-0 overflow-y-auto"
        style={{ width: '320px', borderLeft: '1px solid #141414', background: '#070707' }}
      >
        {panelTerm && (
          <TermDetail term={panelTerm} onSelectRelated={navigateById} />
        )}
      </div>
    </div>
  )
}
