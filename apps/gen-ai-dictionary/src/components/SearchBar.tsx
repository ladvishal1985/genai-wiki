interface Props {
  value: string
  onChange: (v: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
        style={{ color: '#404040' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search terms, definitions, tags…"
        className="w-full pl-8 pr-4 py-2 rounded-md text-sm focus:outline-none transition-colors"
        style={{
          background: '#141414',
          border: '1px solid #222',
          color: '#d4d4d4',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#f59e0b44')}
        onBlur={(e) => (e.currentTarget.style.borderColor = '#222')}
      />
    </div>
  )
}
