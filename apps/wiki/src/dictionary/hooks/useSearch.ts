import { useMemo } from 'react'
import Fuse from 'fuse.js'
import type { Term } from '../types'

const FUSE_OPTIONS = {
  keys: ['term', 'shortForm', 'definition', 'tags'],
  threshold: 0.35,
  minMatchCharLength: 2,
}

export function useSearch(terms: Term[], query: string): Term[] {
  const fuse = useMemo(() => new Fuse(terms, FUSE_OPTIONS), [terms])

  return useMemo(() => {
    if (!query.trim()) return terms
    return fuse.search(query).map((r) => r.item)
  }, [fuse, query, terms])
}
