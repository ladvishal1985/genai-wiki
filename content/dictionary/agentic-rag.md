---
term: Agentic RAG
shortForm: ~
category: agent
tags: [rag, agent, multi-step-retrieval]
relatedTerms: [rag, ai-agent, tool-use, react-pattern, orchestration]
---
Agentic RAG extends basic RAG by giving the LLM agency over the retrieval process itself — deciding when to retrieve, what to query, how many times to retrieve, and whether to refine queries based on intermediate results. Rather than a fixed retrieve-then-generate pipeline, the model can issue multiple retrieval calls, check whether the retrieved context is sufficient, and reformulate queries if the initial results are inadequate. Patterns include iterative retrieval (retrieve, read, retrieve again), self-ask decomposition, and corrective RAG (detect irrelevant results and trigger a web search fallback). Agentic RAG significantly improves handling of complex, multi-hop questions that cannot be answered from a single retrieval pass.
