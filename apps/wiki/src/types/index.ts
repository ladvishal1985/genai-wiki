export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface PostMeta {
  slug: string
  title: string
  description: string
  author: string
  publishedAt: string
  /** legacy field — script normalises to publishedAt, kept for MD frontmatter compat */
  date?: string
  tags: string[]
  difficulty: Difficulty
  readTime: number
}

export interface Post {
  slug: string
  frontmatter: PostMeta
  content: string
}

export interface ContentManifest {
  posts: PostMeta[]
  generatedAt: string
}

export type InterviewDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'mixed'

export type InterviewQuestionType =
  | 'concept'
  | 'scenario'
  | 'debugging'
  | 'tradeoff'
  | 'system-design'
  | 'architecture'
  | 'leadership'

export interface InterviewTopicMeta {
  slug: string
  title: string
  description: string
  questionCount: number
  roles: string[]
  difficulty: InterviewDifficulty
}

export interface InterviewMockTestMeta {
  id: string
  title: string
  role: string
  durationMinutes: number
  questionCount: number
  topics: string[]
  difficulty: InterviewDifficulty
}

export interface InterviewManifest {
  title: string
  description: string
  topics: InterviewTopicMeta[]
  mockTests: InterviewMockTestMeta[]
}

export interface InterviewRubric {
  correctness: number
  depth: number
  tradeoffs: number
  practicality: number
  clarity: number
}

export interface InterviewQuestionLink {
  id: string
  title: string
  relation: 'previous' | 'next' | 'foundation' | 'application'
}

export interface InterviewAnswerFramework {
  scenarioResponse: string
  howToApply: string
  example: string
  tradeoffs: string
}

export interface InterviewQuestion {
  id: string
  title: string
  difficulty: Exclude<InterviewDifficulty, 'mixed'>
  type: InterviewQuestionType
  roles: string[]
  tags: string[]
  estimatedMinutes: number
  points: number
  scenario: string
  expectedAnswer: string
  commonMistakes: string[]
  followUpQuestions: string[]
  realWorldExample: string
  answerFramework?: InterviewAnswerFramework
  relatedQuestions?: InterviewQuestionLink[]
  interviewerNotes: string
  rubric: InterviewRubric
}

export interface InterviewTopic {
  slug: string
  title: string
  description: string
  questions: InterviewQuestion[]
}
