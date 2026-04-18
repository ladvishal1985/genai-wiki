---
term: Contextual Retrieval
shortForm: ~
category: retrieval
tags: [rag, chunking, context-prepending, anthropic]
relatedTerms: [chunking, parent-child-chunking, rag, hyde]
---
Contextual retrieval is a technique (popularized by Anthropic) where each chunk is prepended with a brief LLM-generated summary of its broader document context before being embedded and indexed. This gives the embedding model richer information about where the chunk fits, dramatically improving retrieval recall for chunks that are only intelligible in context. The trade-off is the additional LLM cost to generate context summaries at index time.
