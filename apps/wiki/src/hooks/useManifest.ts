import { useState, useEffect } from 'react'
import type { ContentManifest } from '../types'

export function useManifest() {
  const [manifest, setManifest] = useState<ContentManifest | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch('/content/manifest.json')
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to fetch manifest: ${r.status}`)
        return r.json()
      })
      .then(setManifest)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { manifest, loading, error }
}
