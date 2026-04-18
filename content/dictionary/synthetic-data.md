---
term: Synthetic Data
shortForm: ~
category: training
tags: [data, fine-tuning, generation, alignment]
relatedTerms: [instruction-tuning, sft, knowledge-distillation, hard-negatives]
---
Synthetic data for LLM training is machine-generated training examples—typically produced by a capable teacher LLM (e.g., GPT-4)—used to fine-tune smaller models. Synthetic data bypasses the cost of human annotation at scale, enables coverage of rare or sensitive scenarios, and can be quality-filtered automatically. Risks include amplifying the teacher model's biases and hallucinations, and "model collapse" if synthetic data dominates pretraining corpora across generations.
