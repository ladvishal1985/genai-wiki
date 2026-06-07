import { useCallback, useEffect, useState } from 'react'

interface InterviewProgress {
  completed: string[]
  bookmarked: string[]
  needsReview: string[]
  mockHistory: Array<{
    id: string
    title: string
    score: number
    total: number
    completedAt: string
  }>
}

const STORAGE_KEY = 'genai-wiki-interview-progress'

const emptyProgress: InterviewProgress = {
  completed: [],
  bookmarked: [],
  needsReview: [],
  mockHistory: [],
}

function readProgress(): InterviewProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? { ...emptyProgress, ...JSON.parse(raw) } : emptyProgress
  } catch {
    return emptyProgress
  }
}

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value]
}

export function useInterviewProgress() {
  const [progress, setProgress] = useState<InterviewProgress>(emptyProgress)

  useEffect(() => {
    setProgress(readProgress())
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const toggleCompleted = useCallback((id: string) => {
    setProgress((current) => ({ ...current, completed: toggleValue(current.completed, id) }))
  }, [])

  const toggleBookmarked = useCallback((id: string) => {
    setProgress((current) => ({ ...current, bookmarked: toggleValue(current.bookmarked, id) }))
  }, [])

  const toggleNeedsReview = useCallback((id: string) => {
    setProgress((current) => ({ ...current, needsReview: toggleValue(current.needsReview, id) }))
  }, [])

  const addMockResult = useCallback((result: InterviewProgress['mockHistory'][number]) => {
    setProgress((current) => ({
      ...current,
      mockHistory: [result, ...current.mockHistory].slice(0, 10),
    }))
  }, [])

  return {
    progress,
    toggleCompleted,
    toggleBookmarked,
    toggleNeedsReview,
    addMockResult,
  }
}
