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
