---
term: Exact Match
shortForm: EM
category: eval
tags: [evaluation, metric, classification, qa]
relatedTerms: [f1-score, golden-dataset, mmlu, hallucination-rate]
---
Exact Match (EM) is the simplest evaluation metric: 1 if the model's output exactly matches the reference answer, 0 otherwise. It is used for tasks with discrete, deterministic correct answers—multiple-choice benchmarks (MMLU), short-form QA (Natural Questions), code generation (HumanEval). EM is easy to compute and requires no human judgment, but is brittle to paraphrase and formatting differences. F1 score and semantic similarity metrics are used to supplement EM for less constrained outputs.
