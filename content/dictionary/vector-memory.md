---
term: Vector Memory
shortForm: ~
category: agent
tags: [memory, vector-database, agent, retrieval]
relatedTerms: [long-term-memory, semantic-memory, episodic-memory, vector-database]
---
Vector memory is a long-term memory implementation that stores memories as embedding vectors in a vector database, enabling semantic similarity-based retrieval. When the agent needs to recall relevant memories, it embeds the current query and retrieves the nearest memory vectors. Vector memory is the dominant long-term memory mechanism for LLM agents because it handles fuzzy, semantic recall naturally—unlike key-value stores that require exact key matches.
