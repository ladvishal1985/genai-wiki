---
term: Evaluation
shortForm: eval
category: eval
tags: [testing, quality, metrics]
relatedTerms: [benchmarking, llm-as-judge, ragas, hallucination-detection, groundedness]
---
Evaluation in LLM systems is the systematic measurement of model or pipeline quality across dimensions such as accuracy, faithfulness, relevance, safety, and latency. It ranges from automated benchmarks against labelled datasets (where ground truth is known) to human preference studies and LLM-as-judge approaches for open-ended generation. A key challenge is that many LLM outputs lack a single correct answer, requiring rubric-based or comparative assessment. Production eval frameworks run evaluations continuously against a regression suite to catch quality regressions before deployment, complementing unit tests that verify system behaviour rather than output quality.
