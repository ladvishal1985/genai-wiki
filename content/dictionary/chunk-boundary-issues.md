---
term: Chunk Boundary Issues
shortForm: ~
category: eval
tags: [chunking, rag, failure-mode, retrieval]
relatedTerms: [chunking, chunk-overlap, retrieval-mismatch, semantic-chunking]
---
Chunk boundary issues occur when a fixed-size chunking strategy splits a single logical unit of information (a sentence, table, or argument) across two chunks, so neither chunk alone contains the complete answer. Retrieving only one chunk yields an incomplete or incoherent context. Chunk overlap, semantic chunking, and parent-child retrieval are the primary mitigations. Boundary issues are especially common in tables, code blocks, and multi-sentence entity definitions.
