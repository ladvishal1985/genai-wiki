---
term: HyDE
shortForm: HyDE
category: retrieval
tags: [query-expansion, rag, hypothetical-document, retrieval]
relatedTerms: [query-rewriting, multi-query-retrieval, advanced-rag, step-back-prompting]
---
Hypothetical Document Embeddings (HyDE) is a query expansion technique where an LLM generates a hypothetical document that would answer the query, then that document is embedded and used as the retrieval query instead of the original question. Because the hypothetical document resembles the style and vocabulary of real answer documents, it often retrieves more relevant chunks than embedding the short question directly. HyDE is especially effective for questions phrased very differently from the source corpus.
