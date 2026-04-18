---
term: Chunk Overlap
shortForm: ~
category: retrieval
tags: [chunking, rag, sliding-window, context]
relatedTerms: [chunking, semantic-chunking, parent-child-chunking, context-engineering]
---
Chunk overlap is the number of tokens shared between consecutive chunks during fixed-size chunking. Overlap ensures that information spanning a chunk boundary is captured in at least one chunk. Typical overlap values range from 10–20% of chunk size. Too little overlap causes information to fall between chunks; too much increases index size and retrieval redundancy. Overlap is a hyperparameter tuned alongside chunk size for optimal recall.
