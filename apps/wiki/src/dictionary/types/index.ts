export type Category =
  | 'core'
  | 'retrieval'
  | 'model'
  | 'agent'
  | 'infra'
  | 'eval'
  | 'safety'
  | 'training'

export interface Term {
  id: string
  term: string
  shortForm?: string
  definition: string
  category: Category
  tags: string[]
  relatedTerms?: string[]
  example?: string
}

export interface TermsData {
  terms: Term[]
  generatedAt: string
}

export const CATEGORY_COLORS: Record<string, string> = {
  core:      '#8b5cf6',
  retrieval: '#10b981',
  model:     '#3b82f6',
  agent:     '#f59e0b',
  infra:     '#ef4444',
  eval:      '#06b6d4',
  safety:    '#f43f5e',
  training:  '#f97316',
}

export const CATEGORY_LABELS: Record<string, string> = {
  core:      'Core',
  retrieval: 'Retrieval',
  model:     'Model',
  agent:     'Agent',
  infra:     'Infra',
  eval:      'Eval',
  safety:    'Safety',
  training:  'Training',
}
