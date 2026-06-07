import fs from 'fs/promises'
import path from 'path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const INTERVIEW_DIR = path.join(ROOT, 'content/interview')
const MODEL = 'gpt-4o'
const QUESTION_DELAY_MS = 500
const FILE_DELAY_MS = 2000
const RATE_LIMIT_DELAY_MS = 60000
const MAX_RATE_LIMIT_RETRIES = 3

const SYSTEM_MESSAGE = 'You are a senior GenAI engineer and technical interviewer with 10+ years of experience building production RAG systems, LLM applications, and ML infrastructure. You write interview content that teaches real engineering judgment, not textbook definitions.'

function parseArgs(argv) {
  const args = {
    topic: null,
    dryRun: false,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--dry-run') {
      args.dryRun = true
    } else if (arg === '--topic') {
      const topic = argv[i + 1]
      if (!topic || topic.startsWith('--')) {
        throw new Error('Missing value for --topic')
      }
      args.topic = topic
      i += 1
    } else {
      throw new Error(`Unknown argument: ${arg}`)
    }
  }

  return args
}

function log(message) {
  console.error(message)
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function buildUserMessage(topic, question) {
  return `Enrich this interview question for a GenAI/ML engineer interview prep app.

Question title: ${question.title}
Topic: ${topic.title}
Type: ${question.type}
Difficulty: ${question.difficulty}

Current scenario (may be placeholder): ${question.scenario}

Rules for the content you write:
- NEVER use filler phrases like "I would apply this by...", "choosing the approach that fits", "making the question concrete", or any meta-commentary about answering
- Every field must contain ACTUAL technical content specific to this exact question
- Answers should teach real engineering knowledge — someone reading this should learn something
- Use concrete numbers, tool names, system behaviors, and failure modes where relevant
- The scenario should describe a real production situation with a specific constraint or failure

Return a JSON object with EXACTLY these fields populated:

{
  "scenario": "A specific real-world production situation that frames the question. 1-2 sentences with a concrete constraint, failure, or decision point. Example style: 'Your legal document search system returns the wrong clause 30% of the time because users say renewal but indexed docs use the term termination extension. Reranking hasn't helped.'",

  "expectedAnswer": "A thorough answer (200-350 words) covering: the core mechanic/concept, when and why to use it, concrete implementation steps, key tradeoffs, and how to validate it works. Written as if a senior engineer is explaining it to a mid-level peer. No bullet points — flowing prose.",

  "answerFramework": {
    "scenarioResponse": "How to directly address the scenario above (3-4 sentences). Name the specific technique, why it fits this exact situation, and the first concrete action to take.",
    "howToApply": "Step-by-step implementation guidance specific to this technique. Name actual tools, libraries, or system components where relevant. 3-5 sentences.",
    "example": "A concrete worked example. Show input → process → output or before/after with actual example data or pseudocode where helpful. Make it specific enough to use as a reference.",
    "tradeoffs": "Real tradeoffs for this specific technique: latency cost, accuracy vs recall, complexity vs benefit, when NOT to use it. 3-4 sentences with specific numbers or thresholds where possible."
  },

  "commonMistakes": [
    "Specific mistake 1 that candidates make on this exact question",
    "Specific mistake 2",
    "Specific mistake 3",
    "Specific mistake 4"
  ],

  "followUpQuestions": [
    "A probing follow-up that tests deeper understanding",
    "A follow-up about failure modes or edge cases",
    "A follow-up that connects this to a related concept"
  ],

  "realWorldExample": "A specific production scenario at a real company type (e.g. a fintech with 10M docs, a legal SaaS, an e-commerce search system) where this technique made a measurable difference. Include the problem, the approach taken, and the outcome metric. 3-5 sentences.",

  "interviewerNotes": "What a strong candidate demonstrates: specific signals to listen for, the level of depth expected, what separates a good answer from a great one. 2-3 sentences."
}

Return only valid JSON. No markdown code fences, no explanation outside the JSON.`
}

function parseModelJson(content) {
  try {
    return JSON.parse(content)
  } catch {
    const match = content.match(/\{[\s\S]*\}/)
    if (!match) throw new Error('Model response did not contain a JSON object')
    return JSON.parse(match[0])
  }
}

function validateEnrichment(value) {
  const requiredStringFields = [
    'scenario',
    'expectedAnswer',
    'realWorldExample',
    'interviewerNotes',
  ]

  for (const field of requiredStringFields) {
    if (typeof value[field] !== 'string' || value[field].trim() === '') {
      throw new Error(`Missing or invalid field: ${field}`)
    }
  }

  if (!value.answerFramework || typeof value.answerFramework !== 'object') {
    throw new Error('Missing or invalid field: answerFramework')
  }

  for (const field of ['scenarioResponse', 'howToApply', 'example', 'tradeoffs']) {
    if (typeof value.answerFramework[field] !== 'string' || value.answerFramework[field].trim() === '') {
      throw new Error(`Missing or invalid field: answerFramework.${field}`)
    }
  }

  if (!Array.isArray(value.commonMistakes) || value.commonMistakes.length !== 4 || value.commonMistakes.some((item) => typeof item !== 'string')) {
    throw new Error('Missing or invalid field: commonMistakes')
  }

  if (!Array.isArray(value.followUpQuestions) || value.followUpQuestions.length !== 3 || value.followUpQuestions.some((item) => typeof item !== 'string')) {
    throw new Error('Missing or invalid field: followUpQuestions')
  }
}

async function callOpenAI({ apiKey, topic, question }) {
  const body = {
    model: MODEL,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: SYSTEM_MESSAGE },
      { role: 'user', content: buildUserMessage(topic, question) },
    ],
  }

  for (let attempt = 0; attempt <= MAX_RATE_LIMIT_RETRIES; attempt += 1) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (response.status === 429) {
      if (attempt === MAX_RATE_LIMIT_RETRIES) {
        throw new Error(`Rate limited after ${MAX_RATE_LIMIT_RETRIES + 1} attempts`)
      }
      log(`    rate limited; waiting ${RATE_LIMIT_DELAY_MS / 1000}s before retry ${attempt + 2}/${MAX_RATE_LIMIT_RETRIES + 1}`)
      await delay(RATE_LIMIT_DELAY_MS)
      continue
    }

    if (!response.ok) {
      const text = await response.text()
      throw new Error(`OpenAI API error ${response.status}: ${text}`)
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content
    if (typeof content !== 'string' || content.trim() === '') {
      throw new Error('OpenAI API returned an empty message')
    }

    const enrichment = parseModelJson(content)
    validateEnrichment(enrichment)
    return enrichment
  }

  throw new Error('Unexpected retry loop exit')
}

function mergeQuestion(question, enrichment) {
  return {
    ...question,
    scenario: enrichment.scenario,
    expectedAnswer: enrichment.expectedAnswer,
    answerFramework: {
      scenarioResponse: enrichment.answerFramework.scenarioResponse,
      howToApply: enrichment.answerFramework.howToApply,
      example: enrichment.answerFramework.example,
      tradeoffs: enrichment.answerFramework.tradeoffs,
    },
    commonMistakes: enrichment.commonMistakes,
    followUpQuestions: enrichment.followUpQuestions,
    realWorldExample: enrichment.realWorldExample,
    interviewerNotes: enrichment.interviewerNotes,
  }
}

async function listTopicFiles(topicSlug) {
  if (topicSlug) {
    return [path.join(INTERVIEW_DIR, `${topicSlug}.json`)]
  }

  const entries = await fs.readdir(INTERVIEW_DIR)
  return entries
    .filter((entry) => entry.endsWith('.json') && entry !== 'manifest.json')
    .sort()
    .map((entry) => path.join(INTERVIEW_DIR, entry))
}

async function readTopicFile(filePath) {
  const raw = await fs.readFile(filePath, 'utf8')
  const topic = JSON.parse(raw)
  if (!topic.slug || !topic.title || !Array.isArray(topic.questions)) {
    throw new Error(`Not an interview topic JSON file: ${filePath}`)
  }
  return topic
}

async function writeTopicFileAtomically(filePath, topic) {
  const tmpPath = `${filePath}.tmp`
  await fs.writeFile(tmpPath, `${JSON.stringify(topic, null, 2)}\n`)
  await fs.rename(tmpPath, filePath)
}

async function enrichTopicFile({ apiKey, filePath, dryRun }) {
  const topic = await readTopicFile(filePath)
  log(`\n${topic.slug}: ${topic.questions.length} questions`)

  const nextTopic = {
    ...topic,
    questions: [],
  }

  for (let index = 0; index < topic.questions.length; index += 1) {
    const question = topic.questions[index]
    log(`  ${index + 1}/${topic.questions.length} ${question.id}`)

    try {
      const enrichment = await callOpenAI({ apiKey, topic, question })
      nextTopic.questions.push(mergeQuestion(question, enrichment))
      log('    enriched')
    } catch (error) {
      log(`    skipped: ${error instanceof Error ? error.message : String(error)}`)
      nextTopic.questions.push(question)
    }

    if (index < topic.questions.length - 1) {
      await delay(QUESTION_DELAY_MS)
    }
  }

  if (!dryRun) {
    await writeTopicFileAtomically(filePath, nextTopic)
    log(`  wrote ${path.relative(ROOT, filePath)}`)
  }

  return nextTopic
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is required')
  }

  const files = await listTopicFiles(args.topic)
  if (files.length === 0) {
    throw new Error('No interview topic files found')
  }

  const dryRunOutput = []

  for (let index = 0; index < files.length; index += 1) {
    const filePath = files[index]
    const topic = await enrichTopicFile({ apiKey, filePath, dryRun: args.dryRun })
    if (args.dryRun) dryRunOutput.push(topic)

    if (index < files.length - 1) {
      await delay(FILE_DELAY_MS)
    }
  }

  if (args.dryRun) {
    const output = args.topic ? dryRunOutput[0] : dryRunOutput
    process.stdout.write(`${JSON.stringify(output, null, 2)}\n`)
  }

  log('\nDone.')
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
