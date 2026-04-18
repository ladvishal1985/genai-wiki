---
term: Long-Term Memory
shortForm: ~
category: agent
tags: [memory, agent, persistence, retrieval]
relatedTerms: [short-term-memory, episodic-memory, semantic-memory, vector-memory, memory-retrieval-policy]
---
Long-term memory in LLM agents is information persisted outside the context window—in databases, vector stores, or structured files—that can be retrieved and loaded into context when relevant. Unlike short-term memory (the active window), long-term memory survives across sessions and can grow unboundedly. Effective long-term memory requires policies for writing (what to store), retrieval (what to load when), and decay (what to evict or expire). Vector memory is the most common implementation.
