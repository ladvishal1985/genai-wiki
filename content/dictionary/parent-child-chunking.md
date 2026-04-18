---
term: Parent-Child Chunking
shortForm: ~
category: retrieval
tags: [chunking, rag, retrieval, context-window]
relatedTerms: [chunking, semantic-chunking, contextual-retrieval, chunk-overlap]
---
Parent-child chunking (also called small-to-big retrieval) stores documents at two granularities: small child chunks for precise retrieval and larger parent chunks for richer context injection. Retrieval happens on the small child chunks (more discriminative), but the surrounding parent chunk is passed to the LLM (more context). This balances retrieval precision with generation quality and is a standard technique in LangChain and LlamaIndex pipelines.
