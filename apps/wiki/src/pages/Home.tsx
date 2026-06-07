import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

const competencies = [
  ['Agentic AI & LLM', 'Multi-agent orchestration, LangGraph, LangChain, RAG, hybrid retrieval, re-ranking, grounding, prompt engineering, tool/function calling, memory-aware agents.'],
  ['AI Safety & Governance', 'Prompt-injection defense, guardrails, content filtering, PII handling, auditability, responsible AI governance, LangSmith, PromptFlow.'],
  ['Architecture Patterns', 'Micro-frontends, distributed systems, microservices, event-driven streaming, Kafka, REST, GraphQL, service mesh, reference architectures.'],
  ['Cloud & Data Platforms', 'Azure, Google Cloud Platform, AWS concepts, Milvus, vector stores, embeddings, OSDU data models, structured and unstructured ingestion.'],
  ['Engineering Stack', 'Angular, React, TypeScript, Node.js, NestJS, Java Spring Boot, Python, Docker, Webpack, Dataiku, Sentry, CI/CD.'],
]

const highlights = [
  {
    title: 'Tela for Data Workspace',
    role: 'Technical Lead / Software Architect — Agentic AI Platform | SLB | 2022 - Present',
    body: 'Production-scale agentic AI and conversational intelligence platform enabling natural-language access to subsurface and geoscience data inside enterprise Data Workspace.',
    bullets: [
      'Architected LangGraph-based multi-step autonomous reasoning pipelines across heterogeneous enterprise data sources.',
      'Built multi-agent frameworks with explicit tool-calling, memory-aware context management, dynamic routing, fallback strategies, and loop detection.',
      'Designed Milvus vectorization pipelines, hybrid retrieval, re-ranking, RAG-enabled structured search over OSDU data models, and explicit grounding techniques.',
      'Implemented prompt-injection defenses, content filtering, output validation, auditability, tool invocation traces, retrieval provenance, and responsible AI governance patterns.',
      'Drove latency optimization, SLI/SLO strategy, observability, fail-safe mechanisms, feedback loops, and anomaly detection for agent behavior monitoring.',
      'Impact: accelerated data discovery by 60% by reducing dashboard navigation overhead for expert users.',
    ],
    stack: 'LangChain, LangGraph, GPT-4, Claude, Milvus, Python, NestJS, Angular, Azure, Kafka, Java, Dataiku',
  },
  {
    title: 'Lumi Data Workspace',
    role: 'Technical Architect — Enterprise Data Platform | SLB | Jan 2020 - Present',
    body: 'OSDU-aligned subsurface data platform with AI-driven discovery and semantic search capabilities.',
    bullets: [
      'Designed Discover workflows and RAG-based semantic search for contextual, intent-aware exploration across the OSDU ecosystem.',
      'Defined micro-frontend architecture for independently shipping distributed teams.',
      'Authored ADRs, coding standards, architecture documents, test practices, and review baselines adopted across teams.',
    ],
    stack: 'Angular, TypeScript, Micro-frontends, Spring Boot, NestJS, OSDU APIs',
  },
]

const earlierWork = [
  ['Accenture Solutions', 'Front-End Technical Architect', '2018 - 2019', 'Modernized large-scale web and kiosk systems, standardized Redux/Webpack architecture, coding practices, and CI/CD workflows.'],
  ['Accenture Solutions', 'Front-End Lead Architect', '2018', 'Designed UI architecture for high-volume streaming datasets and improved dashboard responsiveness for oil and gas workflows.'],
  ['Accenture Solutions', 'Front-End Offshore Technical Architect', '2017 - 2018', 'Led front-end architecture for a large car rental digital platform, including accessibility and SEO standards.'],
]

const experience = [
  'Software Architect — SLB Pune Technology Center (Oct 2025 - Present)',
  'Technical Lead — SLB Pune Technology Center (2022 - Sept 2025)',
  'Front-End Architect — Accenture Solutions Pvt Ltd, Pune (Aug 2016 - 2019)',
  'Senior Technical Lead — Tieto Technologies Services, Pune (Oct 2014 - Aug 2016)',
  'Team Lead — Accenture Services Pvt Ltd, Pune (May 2010 - Sept 2014)',
  'Software Engineer roles — Idhasoft, ThoughtFX, V2Solutions (2007 - 2010)',
]

export default function Home() {
  return (
    <>
      <SEO title="Vishal Lad" description="Software Architect specializing in Agentic AI, enterprise platforms, RAG, multi-agent orchestration, and cloud-native systems." />
      <div className="space-y-8">
        <header className="app-panel overflow-hidden rounded-2xl">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="eyebrow">Software Architect | Agentic AI & Enterprise Platforms</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Vishal Lad</h1>
            </div>
          </div>
          <p className="mt-5 max-w-5xl text-base leading-7 text-slate-600 sm:text-lg">
            Software Architect with 18+ years of experience designing and delivering production-grade, cloud-native, and AI-enabled enterprise platforms. Deep hands-on expertise in Agentic AI systems, including multi-agent orchestration, autonomous reasoning pipelines, RAG architectures, and LangGraph-based agent frameworks. Proven track record leading architecture strategy from research and prototyping through production deployment, observability, governance, and continuous improvement.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Agentic AI', 'RAG', 'LangGraph', 'Enterprise Platforms', 'LLMOps', 'Cloud Native'].map((item) => (
              <span key={item} className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-bold text-cyan-800 ring-1 ring-cyan-100">{item}</span>
            ))}
          </div>
            </div>
            <aside className="bg-slate-950 p-6 text-slate-100 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Contact</p>
              <div className="mt-5 space-y-3 text-sm leading-6">
                <p><a className="font-semibold text-white hover:text-cyan-300" href="mailto:ladvishal1985@gmail.com">ladvishal1985@gmail.com</a></p>
                <p><a className="text-slate-300 hover:text-cyan-300" href="https://linkedin.com/in/ladvishal1985" target="_blank" rel="noopener noreferrer">linkedin.com/in/ladvishal1985</a></p>
                <p><a className="text-slate-300 hover:text-cyan-300" href="https://github.com/ladvishal1985" target="_blank" rel="noopener noreferrer">github.com/ladvishal1985</a></p>
              </div>
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">At a glance</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-2xl font-bold text-white">18+</p>
                  <p className="text-xs text-slate-300">years of architecture and engineering experience</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-2xl font-bold text-white">300</p>
                  <p className="text-xs text-slate-300">interview-prep Q&A entries in GenAI Hub</p>
                </div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Transparency</p>
                <p className="mt-2 text-xs leading-5 text-slate-300">
                  This website is vibe-coded and its learning/interview content was created with AI assistance, then structured and reviewed for portfolio use.
                </p>
              </div>
            </aside>
          </div>
        </header>

        <section className="app-panel rounded-xl p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="eyebrow">Portfolio Project</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">GenAI Hub</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link to="/wiki" className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-bold text-white hover:bg-cyan-700">Wiki</Link>
              <Link to="/dictionary" className="rounded-md bg-slate-950 px-3 py-2 text-sm font-bold text-white hover:bg-slate-800">Dictionary</Link>
              <Link to="/interview" className="rounded-md bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-800 hover:bg-emerald-200">Interview Prep</Link>
            </div>
          </div>
          <p className="mt-3 max-w-5xl text-sm leading-6 text-slate-600">
            A single deployable GenAI learning hub combining practical wiki articles, a searchable technical dictionary with 244 terms, and a structured interview-prep system with 300 JSON-driven Q&A entries across 20 topics.
          </p>
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800 ring-1 ring-amber-100">
            Disclaimer: this site is vibe-coded, and the educational content is generated with AI assistance. Treat examples and interview answers as study material, not authoritative professional advice.
          </p>
        </section>

        <section className="grid gap-8 border-b border-slate-200 pb-7 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Core Competencies</h2>
          </div>
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {competencies.map(([label, detail]) => (
              <div key={label} className="accent-rule rounded-lg bg-white/75 p-4 pl-5 ring-1 ring-slate-200/80">
                <h3 className="text-sm font-bold text-slate-950">{label}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-slate-200 pb-7 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Delivery</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Project Highlights</h2>
          </div>
          <div className="space-y-8">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-xl bg-white/80 p-5 ring-1 ring-slate-200/80 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{item.role}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 md:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="pl-4 [text-indent:-1rem]">- {bullet}</li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm font-semibold text-slate-800">Tech Stack: <span className="font-normal text-slate-600">{item.stack}</span></p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-slate-200 pb-7 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Career</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Earlier Architecture Work</h2>
          </div>
          <div className="space-y-5">
            {earlierWork.map(([company, role, years, detail]) => (
              <div key={`${company}-${role}`} className="rounded-lg bg-white/70 p-4 ring-1 ring-slate-200/80">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-950">{role}</h3>
                  <span className="text-sm font-semibold text-cyan-700">{years}</span>
                </div>
                <p className="text-sm font-semibold text-slate-700">{company}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-slate-200 pb-7 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Timeline</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Experience Summary</h2>
          </div>
          <ul className="grid gap-2 text-sm leading-6 text-slate-600 md:grid-cols-2">
            {experience.map((item) => (
              <li key={item} className="rounded-md bg-white/70 px-3 py-2 ring-1 ring-slate-200/80">{item}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Credentials</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Education, Certifications & Recognition</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white/75 p-4 ring-1 ring-slate-200/80">
              <h3 className="text-sm font-bold text-slate-950">Education & Certifications</h3>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                <li>B.E. Computer Science — G.H. Patel College of Engineering & Technology, 2007, First Class</li>
                <li>PGP in Cloud Computing — Great Lakes Institute of Management</li>
                <li>Executive PG Certification in Data Science & Artificial Intelligence — iHUB, IIT Roorkee</li>
                <li>Accenture Certified Technology Architect</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white/75 p-4 ring-1 ring-slate-200/80">
              <h3 className="text-sm font-bold text-slate-950">Recognition & Contributions</h3>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                <li>O2 Award — SLB, 2024 and 2022</li>
                <li>ACE Award — Accenture, 2019, 2017, 2013</li>
                <li>Explorer Award — V2 Solutions, 2008</li>
                <li>Conducted global webinar on Micro-Frontends at Accenture Center of Excellence</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
