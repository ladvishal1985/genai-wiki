---
term: Self-RAG
shortForm: ~
category: retrieval
tags: [rag, self-reflection, retrieval, generation, agentic]
relatedTerms: [corrective-rag, iterative-retrieval, advanced-rag, self-reflection]
---
Self-RAG is a framework where a model learns to decide when to retrieve, which retrieved passages are relevant, and whether its generated output is supported by the retrieved context. It uses special reflection tokens (ISREL, ISSUP, ISUSE) to evaluate retrieval necessity and output quality during generation. Unlike fixed pipeline RAG, Self-RAG adapts its retrieval behavior per generation step, producing more faithful outputs at the cost of a specialized fine-tuned model.
