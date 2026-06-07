import { useEffect, useMemo, useState } from 'react'
import type { InterviewManifest, InterviewTopic } from '../types'

const topicCache = new Map<string, InterviewTopic>()
let manifestCache: InterviewManifest | null = null

export function useInterviewManifest() {
  const [manifest, setManifest] = useState<InterviewManifest | null>(manifestCache)
  const [loading, setLoading] = useState(!manifestCache)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (manifestCache) return

    fetch('/interview/manifest.json')
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to fetch interview manifest: ${r.status}`)
        return r.json()
      })
      .then((data: InterviewManifest) => {
        manifestCache = data
        setManifest(data)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { manifest, loading, error }
}

export function useInterviewTopic(slug?: string) {
  const cached = slug ? topicCache.get(slug) ?? null : null
  const [topic, setTopic] = useState<InterviewTopic | null>(cached)
  const [loading, setLoading] = useState(Boolean(slug && !cached))
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!slug) {
      setTopic(null)
      setLoading(false)
      return
    }

    const existing = topicCache.get(slug)
    if (existing) {
      setTopic(existing)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    fetch(`/interview/${slug}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to fetch interview topic: ${r.status}`)
        return r.json()
      })
      .then((data: InterviewTopic) => {
        topicCache.set(slug, data)
        setTopic(data)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [slug])

  return { topic, loading, error }
}

export function useInterviewTopics(slugs: string[]) {
  const [topics, setTopics] = useState<InterviewTopic[]>([])
  const [loading, setLoading] = useState(slugs.length > 0)
  const [error, setError] = useState<Error | null>(null)

  const key = useMemo(() => slugs.join('|'), [slugs])

  useEffect(() => {
    let cancelled = false
    const uniqueSlugs = Array.from(new Set(slugs))

    if (uniqueSlugs.length === 0) {
      setTopics([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    Promise.all(
      uniqueSlugs.map(async (slug) => {
        const cached = topicCache.get(slug)
        if (cached) return cached

        const res = await fetch(`/interview/${slug}.json`)
        if (!res.ok) throw new Error(`Failed to fetch interview topic ${slug}: ${res.status}`)
        const data = await res.json() as InterviewTopic
        topicCache.set(slug, data)
        return data
      })
    )
      .then((data) => {
        if (!cancelled) setTopics(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [key])

  return { topics, loading, error }
}
