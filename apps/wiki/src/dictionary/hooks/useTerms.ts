import { useState, useEffect } from 'react'
import { fetchTerms } from '../data/terms'
import type { Term } from '../types'

export function useTerms() {
  const [terms, setTerms] = useState<Term[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchTerms()
      .then((data) => setTerms(data.terms))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { terms, loading, error }
}
