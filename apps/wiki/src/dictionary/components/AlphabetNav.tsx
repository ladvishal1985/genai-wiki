const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

interface Props {
  availableLetters: Set<string>
  activeLetter: string | null
  onSelect: (letter: string) => void
}

export default function AlphabetNav({ availableLetters, activeLetter, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-0.5">
      {LETTERS.map((letter) => {
        const available = availableLetters.has(letter)
        const active = activeLetter === letter

        return (
          <button
            key={letter}
            disabled={!available}
            onClick={() => available && onSelect(letter)}
            className="w-6 h-6 text-[11px] font-mono rounded transition-colors"
            style={{
              background: active ? '#f59e0b22' : 'transparent',
              color: active ? '#f59e0b' : available ? '#828282' : '#383838',
              border: active ? '1px solid #f59e0b55' : '1px solid transparent',
              cursor: available ? 'pointer' : 'default',
              fontWeight: active ? '700' : '400',
            }}
          >
            {letter}
          </button>
        )
      })}
    </div>
  )
}
