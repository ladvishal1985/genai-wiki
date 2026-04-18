---
term: Retrieval-Augmented Generation
shortForm: RAG
category: retrieval
tags: [retrieval, grounding, production]
relatedTerms: [chunking, vector-database, semantic-search, reranking, embedding]
---
Retrieval-Augmented Generation (RAG) is an architecture that enhances LLM responses by retrieving relevant documents from an external knowledge base at inference time and injecting them into the prompt as context. This grounds the model's output in verifiable sources, reducing hallucination and enabling access to information beyond the model's training cutoff. The core pipeline involves embedding the user query, performing a nearest-neighbour search against a vector store of pre-embedded document chunks, and prepending the top results to the generation prompt. Advanced variants add reranking, query expansion, and iterative retrieval loops to improve relevance and factual accuracy.
