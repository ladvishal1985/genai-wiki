import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://genai.wiki'
const SITE_NAME = 'GenAI Wiki'
const DEFAULT_DESCRIPTION =
  'Practical guides, deep dives, and tutorials on LLMs, prompt engineering, RAG, and building AI-powered applications.'

interface Props {
  title?: string
  description?: string
  path?: string
  publishedAt?: string
  tags?: string[]
  jsonLd?: object
}

export default function SEO({ title, description, path = '/', publishedAt, tags, jsonLd }: Props) {
  const pageTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  const pageDescription = description ?? DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${path}`
  const ogImage = `${SITE_URL}/og-image.png`

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={publishedAt ? 'article' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Article-specific OG */}
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {tags?.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
