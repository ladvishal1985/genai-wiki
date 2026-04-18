---
term: Faithfulness
shortForm: ~
category: eval
tags: [evaluation, rag, groundedness, ragas]
relatedTerms: [groundedness, answer-relevance, context-precision, context-recall, ragas]
---
Faithfulness (also called groundedness) measures the extent to which an LLM-generated answer is factually consistent with and supported by the provided context. A faithful response does not contain claims that contradict or go beyond the retrieved passages. In RAGAS, faithfulness is computed by decomposing the answer into atomic statements and checking what fraction are entailed by the context. It is the primary metric for RAG hallucination detection.
