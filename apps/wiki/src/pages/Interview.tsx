import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { useInterviewManifest, useInterviewTopic, useInterviewTopics } from '../hooks/useInterview'
import { useInterviewProgress } from '../hooks/useInterviewProgress'
import type { InterviewQuestion, InterviewQuestionType, InterviewTopicMeta } from '../types'

const difficultyStyle = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700',
  mixed: 'bg-slate-100 text-slate-700',
}

const typeLabels: Record<InterviewQuestionType, string> = {
  concept: 'Concept',
  scenario: 'Scenario',
  debugging: 'Debugging',
  tradeoff: 'Tradeoff',
  'system-design': 'System Design',
  architecture: 'Architecture',
  leadership: 'Leadership',
}

const relationLabels = {
  previous: 'Previous',
  next: 'Next',
  foundation: 'Foundation',
  application: 'Application',
}

function formatLabel(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function BackLink({ to, label }: { to: string, label: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-md bg-white/80 px-3 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-200 hover:bg-cyan-50 hover:text-cyan-800"
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  )
}

function Stat({ label, value }: { label: string, value: string | number }) {
  return (
    <div className="app-panel rounded-lg px-3 py-2.5 sm:px-4 sm:py-3">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">{label}</p>
      <p className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">{value}</p>
    </div>
  )
}

function TopicCard({ topic }: { topic: InterviewTopicMeta }) {
  return (
    <Link
      to={`/interview/${topic.slug}`}
      className="block rounded-xl border border-slate-200/80 bg-white/85 p-4 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50/40 sm:p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-950">{topic.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{topic.description}</p>
        </div>
        <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-semibold ${difficultyStyle[topic.difficulty]}`}>
          {topic.difficulty}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="rounded bg-cyan-50 px-2 py-1 font-semibold text-cyan-800">{topic.questionCount} questions</span>
        {topic.roles.slice(0, 2).map((role) => (
          <span key={role} className="rounded bg-slate-100 px-2 py-1">{formatLabel(role)}</span>
        ))}
      </div>
    </Link>
  )
}

function QuestionList({
  questions,
  selectedId,
  onSelect,
}: {
  questions: InterviewQuestion[]
  selectedId?: string
  onSelect: (id: string) => void
}) {
  if (questions.length === 0) {
    return <p className="rounded-lg bg-white/75 p-6 text-sm text-slate-500 ring-1 ring-slate-200">No questions match the current filters.</p>
  }

  return (
    <div className="space-y-2">
      {questions.map((question, index) => (
        <button
          key={question.id}
          onClick={() => onSelect(question.id)}
          className={`w-full rounded-lg border px-3 py-3 text-left transition sm:px-4 ${
            selectedId === question.id
              ? 'border-cyan-300 bg-cyan-50 shadow-sm'
              : 'border-slate-200 bg-white/85 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-xs font-bold text-cyan-700">Q{index + 1}</span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-5 text-slate-950 lg:line-clamp-3">{question.title}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${difficultyStyle[question.difficulty]}`}>
                  {question.difficulty}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                  {typeLabels[question.type]}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                  {question.points} pts
                </span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

function QuestionDetail({
  question,
  mode,
  topicSlug,
}: {
  question: InterviewQuestion
  mode: 'study' | 'practice'
  topicSlug: string
}) {
  const [revealed, setRevealed] = useState(mode === 'study')
  const { progress, toggleCompleted, toggleBookmarked, toggleNeedsReview } = useInterviewProgress()
  const completed = progress.completed.includes(question.id)
  const bookmarked = progress.bookmarked.includes(question.id)
  const needsReview = progress.needsReview.includes(question.id)

  return (
    <article className="app-panel rounded-xl p-4 sm:p-5 xl:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <BackLink to={`/interview/${topicSlug}`} label="Back to questions" />
        <Link
          to="/interview"
          className="text-sm font-bold text-cyan-700 hover:text-cyan-900"
        >
          All topics
        </Link>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-1.5">
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${difficultyStyle[question.difficulty]}`}>
              {question.difficulty}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
              {typeLabels[question.type]}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
              {question.estimatedMinutes} min
            </span>
          </div>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl xl:max-w-4xl">
            {question.title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <button
            onClick={() => toggleCompleted(question.id)}
            className={`rounded-md px-3 py-2 text-xs font-bold ${completed ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {completed ? 'Completed' : 'Mark done'}
          </button>
          <button
            onClick={() => toggleBookmarked(question.id)}
            className={`rounded-md px-3 py-2 text-xs font-bold ${bookmarked ? 'bg-cyan-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {bookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
          <button
            onClick={() => toggleNeedsReview(question.id)}
            className={`rounded-md px-3 py-2 text-xs font-bold ${needsReview ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {needsReview ? 'Reviewing' : 'Needs review'}
          </button>
        </div>
      </div>

      <section className="mt-5 rounded-lg bg-cyan-50/70 p-4 ring-1 ring-cyan-100">
        <h3 className="text-sm font-bold text-slate-950">Scenario</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{question.scenario}</p>
      </section>

      {question.relatedQuestions && question.relatedQuestions.length > 0 && (
        <section className="mt-4 rounded-lg bg-white/80 p-4 ring-1 ring-slate-200">
          <h3 className="text-sm font-bold text-slate-950">Question Flow</h3>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            {question.relatedQuestions.map((related) => (
              <Link
                key={`${related.relation}-${related.id}`}
                to={`/interview/${topicSlug}/${related.id}`}
                className="rounded-md bg-slate-50 p-3 text-sm leading-5 text-slate-700 ring-1 ring-slate-200 hover:bg-cyan-50 hover:text-cyan-900"
              >
                <span className="block text-xs font-bold uppercase tracking-wider text-cyan-700">
                  {relationLabels[related.relation]}
                </span>
                <span className="mt-1 block font-semibold">{related.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {mode === 'practice' && (
        <section className="mt-4">
          <label className="text-sm font-semibold text-gray-900" htmlFor="practice-answer">
            Your answer
          </label>
          <textarea
            id="practice-answer"
            className="mt-2 min-h-32 w-full rounded-lg border border-gray-200 bg-white p-3 text-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 lg:min-h-40"
            placeholder="Write your answer before revealing the expected answer..."
          />
        </section>
      )}

      {mode === 'practice' && !revealed && (
        <button
          onClick={() => setRevealed(true)}
          className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Reveal expected answer
        </button>
      )}

      {revealed && (
        <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-4">
            <section>
              <h3 className="text-sm font-semibold text-slate-950">Expected Answer</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{question.expectedAnswer}</p>
            </section>

            {question.answerFramework && (
              <section className="rounded-lg bg-white/80 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-bold text-slate-950">Scenario-Based Answer</h3>
                <div className="mt-3 grid gap-3">
                  <div className="rounded-md bg-cyan-50/70 p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-800">Scenario Response</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{question.answerFramework.scenarioResponse}</p>
                  </div>
                  <div className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600">How To Apply</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{question.answerFramework.howToApply}</p>
                  </div>
                  <div className="rounded-md bg-emerald-50/80 p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Example</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{question.answerFramework.example}</p>
                  </div>
                  <div className="rounded-md bg-amber-50/80 p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Tradeoffs</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{question.answerFramework.tradeoffs}</p>
                  </div>
                </div>
              </section>
            )}

            <section>
              <h3 className="text-sm font-semibold text-slate-950">Real-world Example</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{question.realWorldExample}</p>
            </section>
          </div>

          <aside className="space-y-3 xl:sticky xl:top-4 xl:self-start">
            <details className="rounded-lg bg-white/85 p-3 ring-1 ring-slate-200" open>
              <summary className="cursor-pointer text-sm font-bold text-slate-950">Question Flow</summary>
              {question.relatedQuestions && question.relatedQuestions.length > 0 ? (
                <div className="mt-3 grid gap-2">
                  {question.relatedQuestions.map((related) => (
                    <Link
                      key={`${related.relation}-${related.id}`}
                      to={`/interview/${topicSlug}/${related.id}`}
                      className="rounded-md bg-slate-50 p-3 text-sm leading-5 text-slate-700 ring-1 ring-slate-200 hover:bg-cyan-50 hover:text-cyan-900"
                    >
                      <span className="block text-xs font-bold uppercase tracking-wider text-cyan-700">
                        {relationLabels[related.relation]}
                      </span>
                      <span className="mt-1 block font-semibold">{related.title}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm leading-6 text-slate-500">This is the first question in the topic flow.</p>
              )}
            </details>

            <details className="rounded-lg bg-white/85 p-3 ring-1 ring-slate-200">
              <summary className="cursor-pointer text-sm font-bold text-slate-950">Common Mistakes</summary>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {question.commonMistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}
              </ul>
            </details>

            <details className="rounded-lg bg-white/85 p-3 ring-1 ring-slate-200">
              <summary className="cursor-pointer text-sm font-bold text-slate-950">Follow-up Questions</summary>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {question.followUpQuestions.map((followUp) => <li key={followUp}>{followUp}</li>)}
              </ul>
            </details>

            <details className="rounded-lg bg-white/85 p-3 ring-1 ring-slate-200">
              <summary className="cursor-pointer text-sm font-bold text-slate-950">Rubric</summary>
              <div className="mt-3 grid gap-2">
                {Object.entries(question.rubric).map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                    <p className="text-xs capitalize text-slate-500">{label}</p>
                    <p className="text-sm font-bold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{question.interviewerNotes}</p>
            </details>
          </aside>
        </div>
      )}
    </article>
  )
}

function InterviewDashboard({ topics }: { topics: InterviewTopicMeta[] }) {
  const { progress } = useInterviewProgress()
  const totalQuestions = topics.reduce((sum, topic) => sum + topic.questionCount, 0)

  return (
    <div className="space-y-6">
      <section className="app-panel grid gap-5 rounded-2xl p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
        <BackLink to="/" label="Back to portfolio" />
        <p className="mt-4 eyebrow">Interview Prep</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Practice GenAI interviews with structured Q&A</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          Study concepts, rehearse scenarios, and run timed mock tests using structured JSON-rendered questions.
        </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link to={`/interview/${topics[0]?.slug ?? ''}`} className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-bold text-white hover:bg-cyan-700">
            Start studying
          </Link>
          <Link to="/interview/mock-test" className="rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800">
            Timed mock test
          </Link>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="Topics" value={topics.length} />
        <Stat label="Questions" value={totalQuestions} />
        <Stat label="Completed" value={progress.completed.length} />
        <Stat label="Needs Review" value={progress.needsReview.length} />
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-bold text-slate-950">Topics</h2>
          <span className="text-sm text-slate-500">Study mode and practice mode are available per topic</span>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {topics.map((topic) => <TopicCard key={topic.slug} topic={topic} />)}
        </div>
      </section>
    </div>
  )
}

function TopicView({ topicSlug, questionId }: { topicSlug: string, questionId?: string }) {
  const navigate = useNavigate()
  const { topic, loading, error } = useInterviewTopic(topicSlug)
  const [mode, setMode] = useState<'study' | 'practice'>('study')
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState('all')
  const [type, setType] = useState('all')

  const filteredQuestions = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return (topic?.questions ?? []).filter((question) => {
      const matchesQuery = !normalized
        || question.title.toLowerCase().includes(normalized)
        || question.tags.some((tag) => tag.toLowerCase().includes(normalized))
        || question.expectedAnswer.toLowerCase().includes(normalized)
      const matchesDifficulty = difficulty === 'all' || question.difficulty === difficulty
      const matchesType = type === 'all' || question.type === type
      return matchesQuery && matchesDifficulty && matchesType
    })
  }, [topic, query, difficulty, type])

  const selected = useMemo(() => {
    if (!topic) return null
    return topic.questions.find((question) => question.id === questionId)
      ?? filteredQuestions[0]
      ?? topic.questions[0]
      ?? null
  }, [topic, questionId, filteredQuestions])

  if (loading) return <p className="text-sm text-gray-500">Loading interview topic...</p>
  if (error || !topic) return <p className="text-sm text-red-600">Failed to load interview topic.</p>

  return (
    <div className="space-y-4 lg:space-y-5">
      <div className="app-panel grid gap-4 rounded-2xl p-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="min-w-0">
          <BackLink to="/interview" label="Back to interview prep" />
          <h1 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">{topic.title}</h1>
          <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base">{topic.description}</p>
        </div>
        <div className="flex w-full rounded-lg border border-slate-200 bg-white/80 p-1 shadow-sm sm:w-auto">
          {(['study', 'practice'] as const).map((option) => (
            <button
              key={option}
              onClick={() => setMode(option)}
              className={`flex-1 rounded-md px-3 py-1.5 text-sm font-semibold capitalize sm:flex-none ${
                mode === option ? 'bg-cyan-700 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[360px_minmax(0,1fr)] 2xl:grid-cols-[400px_minmax(0,1fr)]">
        <aside className="space-y-3 xl:sticky xl:top-4 xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto xl:pr-1">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-md border border-slate-200 bg-white/90 px-3 py-2 text-sm focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-100"
          />
          <div className="grid grid-cols-2 gap-2">
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              className="rounded-md border border-slate-200 bg-white/90 px-2 py-2 text-sm"
            >
              <option value="all">All levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="rounded-md border border-slate-200 bg-white/90 px-2 py-2 text-sm"
            >
              <option value="all">All types</option>
              {Object.entries(typeLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <QuestionList
            questions={filteredQuestions}
            selectedId={selected?.id}
            onSelect={(id) => navigate(`/interview/${topic.slug}/${id}`)}
          />
        </aside>

        <main className="min-w-0">
          {selected ? (
            <QuestionDetail key={`${selected.id}-${mode}`} question={selected} mode={mode} topicSlug={topic.slug} />
          ) : (
            <p className="rounded-lg bg-white/75 p-6 text-sm text-slate-500 ring-1 ring-slate-200">Select a question to begin.</p>
          )}
        </main>
      </div>
    </div>
  )
}

function MockTestView() {
  const { manifest } = useInterviewManifest()
  const defaultMock = manifest?.mockTests[0]
  const [mockId, setMockId] = useState(defaultMock?.id ?? '')
  const selectedMock = manifest?.mockTests.find((mock) => mock.id === mockId) ?? defaultMock
  const topicSlugs = selectedMock?.topics ?? []
  const { topics, loading } = useInterviewTopics(topicSlugs)
  const { addMockResult } = useInterviewProgress()
  const [started, setStarted] = useState(false)
  const [scores, setScores] = useState<Record<string, number>>({})

  const questions = useMemo(() => {
    const all = topics.flatMap((topic) => topic.questions.map((question) => ({ ...question, topicTitle: topic.title })))
    return all.slice(0, selectedMock?.questionCount ?? 0)
  }, [topics, selectedMock])

  const total = questions.reduce((sum, question) => sum + question.points, 0)
  const score = Object.values(scores).reduce((sum, value) => sum + value, 0)

  function submitMock() {
    if (!selectedMock) return
    addMockResult({
      id: selectedMock.id,
      title: selectedMock.title,
      score,
      total,
      completedAt: new Date().toISOString(),
    })
    setStarted(false)
  }

  return (
    <div className="space-y-6">
      <div className="app-panel rounded-2xl p-6">
        <BackLink to="/interview" label="Back to interview prep" />
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Timed Mock Test</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Run a structured mock interview and score yourself with each question rubric.
        </p>
      </div>

      <section className="app-panel rounded-xl p-5">
        <label className="text-sm font-bold text-slate-950" htmlFor="mock-template">Mock template</label>
        <select
          id="mock-template"
          value={selectedMock?.id ?? mockId}
          onChange={(event) => setMockId(event.target.value)}
          className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
        >
          {manifest?.mockTests.map((mock) => (
            <option key={mock.id} value={mock.id}>{mock.title}</option>
          ))}
        </select>

        {selectedMock && (
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <Stat label="Role" value={formatLabel(selectedMock.role)} />
            <Stat label="Duration" value={`${selectedMock.durationMinutes}m`} />
            <Stat label="Questions" value={questions.length || selectedMock.questionCount} />
            <Stat label="Difficulty" value={formatLabel(selectedMock.difficulty)} />
          </div>
        )}

        <button
          onClick={() => setStarted(true)}
          className="mt-5 rounded-md bg-cyan-600 px-4 py-2 text-sm font-bold text-white hover:bg-cyan-700"
        >
          Start mock test
        </button>
      </section>

      {loading && <p className="text-sm text-gray-500">Loading mock questions...</p>}

      {started && (
        <section className="space-y-4">
          <div className="sticky top-0 z-10 rounded-lg border border-slate-200 bg-white/95 p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-slate-950">{selectedMock?.title}</p>
                <p className="text-xs text-slate-500">Target time: {selectedMock?.durationMinutes} minutes</p>
              </div>
              <div className="text-sm font-bold text-slate-950">Score: {score} / {total}</div>
            </div>
          </div>

          {questions.map((question, index) => (
            <div key={question.id} className="app-panel rounded-xl p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">Question {index + 1}</p>
                  <h2 className="mt-2 text-lg font-bold text-slate-950">{question.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{question.scenario}</p>
                </div>
                <span className="shrink-0 rounded-full bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-800">{question.points} pts</span>
              </div>
              <textarea
                className="mt-4 min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-100"
                placeholder="Answer as if you are speaking in the interview..."
              />
              <details className="mt-4 rounded-lg bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-bold text-slate-950">Review answer and rubric</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{question.expectedAnswer}</p>
                {question.answerFramework && (
                  <div className="mt-3 grid gap-2 md:grid-cols-2">
                    <div className="rounded-md bg-white p-3 ring-1 ring-slate-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">Apply it</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{question.answerFramework.howToApply}</p>
                    </div>
                    <div className="rounded-md bg-white p-3 ring-1 ring-slate-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Example</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{question.answerFramework.example}</p>
                    </div>
                  </div>
                )}
                <div className="mt-3 grid gap-2 sm:grid-cols-5">
                  {Object.entries(question.rubric).map(([label, value]) => (
                    <label key={label} className="rounded-md bg-white p-2 text-xs text-slate-600">
                      <span className="block capitalize">{label}</span>
                      <input
                        type="number"
                        min="0"
                        max={value}
                        value={scores[`${question.id}:${label}`] ?? ''}
                        onChange={(event) => {
                          const next = Math.min(value, Math.max(0, Number(event.target.value)))
                          setScores((current) => ({ ...current, [`${question.id}:${label}`]: next }))
                        }}
                        className="mt-1 w-full rounded border border-slate-200 px-2 py-1"
                        placeholder={`0-${value}`}
                      />
                    </label>
                  ))}
                </div>
              </details>
            </div>
          ))}

          <button
            onClick={submitMock}
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
          >
            Submit mock test
          </button>
        </section>
      )}
    </div>
  )
}

export default function Interview() {
  const { topicSlug, questionId } = useParams()
  const { manifest, loading, error } = useInterviewManifest()

  if (loading) return <p className="text-sm text-gray-500">Loading interview prep...</p>
  if (error || !manifest) return <p className="text-sm text-red-600">Failed to load interview prep.</p>

  if (topicSlug === 'mock-test') {
    return (
      <>
        <SEO title="Timed Mock Test" description={manifest.description} path="/interview/mock-test" />
        <MockTestView />
      </>
    )
  }

  return (
    <>
      <SEO
        title={topicSlug ? manifest.topics.find((topic) => topic.slug === topicSlug)?.title : manifest.title}
        description={manifest.description}
        path={topicSlug ? `/interview/${topicSlug}` : '/interview'}
      />
      {topicSlug ? (
        <TopicView topicSlug={topicSlug} questionId={questionId} />
      ) : (
        <InterviewDashboard topics={manifest.topics} />
      )}
    </>
  )
}
