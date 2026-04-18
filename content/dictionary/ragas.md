---
term: RAGAS
shortForm: RAGAS
category: eval
tags: [rag, evaluation, metrics]
relatedTerms: [rag, evaluation, groundedness, hallucination-detection, llm-as-judge]
---
RAGAS (Retrieval-Augmented Generation Assessment) is an evaluation framework specifically designed for measuring the quality of RAG pipelines across four key metrics: context precision (are retrieved chunks relevant?), context recall (are all relevant chunks retrieved?), faithfulness (does the answer stay grounded in retrieved context?), and answer relevancy (does the answer address the question?). Each metric is computed using an LLM judge against the question, retrieved context, and generated answer. RAGAS provides both dataset-level aggregate scores and per-example breakdowns, making it practical for identifying which pipeline component — retrieval or generation — is the primary source of quality issues.
