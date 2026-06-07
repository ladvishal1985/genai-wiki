import type { Category } from '../types'
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../types'

const CATEGORIES: Array<Category | 'all'> = [
  'all', 'core', 'retrieval', 'model', 'agent', 'infra', 'eval', 'safety', 'training',
]

interface Props {
  active: Category | 'all'
  onChange: (c: Category | 'all') => void
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat
        const color = cat === 'all' ? '#f59e0b' : (CATEGORY_COLORS[cat] ?? '#6b7280')
        const label = cat === 'all' ? 'ALL' : CATEGORY_LABELS[cat]?.toUpperCase() ?? cat.toUpperCase()

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="text-[10px] px-2.5 py-1 rounded-full font-mono tracking-wider transition-all"
            style={{
              background: isActive ? `${color}18` : 'transparent',
              border: `1px solid ${isActive ? color : '#383838'}`,
              color: isActive ? color : '#828282',
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
