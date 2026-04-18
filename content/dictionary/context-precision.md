---
term: Context Precision
shortForm: ~
category: eval
tags: [evaluation, rag, ragas, retrieval-quality]
relatedTerms: [context-recall, faithfulness, answer-relevance, ragas]
---
Context precision measures what fraction of the retrieved context chunks are actually relevant to answering the question. High precision means most of what was retrieved was useful; low precision means irrelevant chunks dominated the context window, wasting tokens and potentially confusing the model. In RAGAS, it is computed as the average precision across ranked positions of relevant chunks in the retrieved set.
