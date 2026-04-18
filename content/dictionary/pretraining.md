---
term: Pretraining
shortForm: ~
category: training
tags: [training, llm, self-supervised, next-token-prediction]
relatedTerms: [sft, rlhf, scaling-laws, chinchilla-scaling, continual-learning]
---
Pretraining is the first phase of LLM development, where the model is trained on a massive, broad corpus (web text, books, code) using a self-supervised objective—typically next-token prediction. This phase teaches the model language structure, world knowledge, and reasoning patterns from raw data without human labels. Pretraining is compute-intensive (weeks to months on thousands of GPUs) and produces the base model that is subsequently fine-tuned and aligned.
