---
term: Naive RAG
shortForm: ~
category: retrieval
tags: [rag, baseline, pipeline, simple]
relatedTerms: [advanced-rag, rag, chunking, embedding]
---
Naive RAG is the simplest RAG architecture: chunk documents → embed chunks → embed query → retrieve top-k by cosine similarity → stuff into prompt → generate. It has no query rewriting, no reranking, no iterative retrieval, and no post-generation verification. Naive RAG is a useful baseline and works well for simple factual queries over clean, well-structured corpora. Its limitations—chunk boundary sensitivity, keyword mismatch, no reasoning—motivate advanced RAG techniques.
