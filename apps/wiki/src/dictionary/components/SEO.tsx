import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'GenAI Dictionary'
const SITE_URL = 'https://genai.wiki'

interface Props {
  title?: string
  description?: string
  path?: string
  jsonLd?: object
}

export default function SEO({ title, description, path = '/', jsonLd }: Props) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — 289 AI & LLM concepts explained`
  const canonical = `${SITE_URL}${path}`
  const desc = description ?? 'A reference dictionary for AI, LLMs, RAG, agents, and machine learning concepts. Clear definitions with examples and related terms.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={title ? 'article' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
