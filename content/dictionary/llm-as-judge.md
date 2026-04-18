---
term: LLM-as-Judge
shortForm: ~
category: eval
tags: [evaluation, automated, scoring]
relatedTerms: [evaluation, benchmarking, ragas, hallucination-detection, groundedness]
---
LLM-as-Judge is an evaluation technique that uses a capable language model (often GPT-4 or Claude) to assess the quality of outputs from another model, acting as an automated human evaluator. The judge is prompted with a rubric — scoring criteria for dimensions like correctness, helpfulness, coherence, and safety — and produces structured scores or pairwise preferences. This scales evaluation to thousands of examples without requiring human annotators and correlates reasonably well with human judgement on many tasks. Key limitations include positional bias (favouring the first option in pairwise comparisons), verbosity bias (preferring longer responses), and self-preferencing (models scoring their own outputs higher).
