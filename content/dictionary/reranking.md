---
term: Reranking
shortForm: ~
category: retrieval
tags: [retrieval, rag, cross-encoder]
relatedTerms: [hybrid-search, rag, semantic-search, dense-retrieval]
---
Reranking is a second-stage retrieval step where an initial set of candidate documents (retrieved by fast ANN search) is reordered by a more accurate but slower cross-encoder model that jointly reads the query and each candidate together. Cross-encoders score relevance more accurately than embedding similarity because they can model fine-grained interactions between query and document tokens. A typical pipeline retrieves top-50 candidates then reranks to top-5 before passing context to the LLM. Models like Cohere Rerank, bge-reranker, and ms-marco cross-encoders are commonly used; the latency cost is offset by significantly improved answer quality.
