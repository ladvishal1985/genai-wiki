---
term: Groundedness
shortForm: ~
category: eval
tags: [evaluation, rag, faithfulness]
relatedTerms: [hallucination, hallucination-detection, ragas, rag, llm-as-judge]
---
Groundedness measures whether each claim in a model's response is supported by and attributable to the provided source documents or retrieved context, rather than generated from the model's parametric memory. A grounded response makes only statements that can be directly traced to the input context; an ungrounded one introduces facts, opinions, or details the context does not support. Groundedness is a core metric in RAG evaluation (corresponding to RAGAS "faithfulness") and citation-based systems. It is assessed automatically by NLI models, LLM judges, or atomic claim decomposition followed by per-claim entailment checking against source passages.
