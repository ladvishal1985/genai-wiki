---
term: Context Stuffing
shortForm: ~
category: core
tags: [context-window, rag, retrieval, prompting]
relatedTerms: [context-engineering, token-budgeting, prompt-budget-overflow, naive-rag]
---
Context stuffing is the naive approach of inserting as much potentially relevant information as possible into the LLM's context window, hoping the model will find the answer within it. It contrasts with precision-focused approaches (reranking, compression) that carefully select the most relevant content. Context stuffing wastes tokens, can cause retrieval without reading (the model ignores buried relevant content), and degrades when context exceeds the model's effective attention range. It is the RAG equivalent of overfitting to coverage at the expense of precision.
