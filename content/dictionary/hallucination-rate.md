---
term: Hallucination Rate
shortForm: ~
category: eval
tags: [evaluation, hallucination, metric, faithfulness]
relatedTerms: [hallucination, faithfulness, groundedness, golden-dataset, ragas]
---
Hallucination rate is an aggregate metric measuring the fraction of model responses that contain factual errors or claims unsupported by the provided context, over a test set. It is computed by running a hallucination detection method (NLI model, LLM judge, or human annotation) on each response and averaging. Hallucination rate is the primary production quality metric for RAG and QA systems, tracked over time to detect degradation from model updates, prompt changes, or knowledge base drift.
