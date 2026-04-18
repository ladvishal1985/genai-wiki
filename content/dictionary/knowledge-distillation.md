---
term: Knowledge Distillation
shortForm: KD
category: training
tags: [distillation, compression, training, teacher-student]
relatedTerms: [sft, synthetic-data, peft, parameters]
---
Knowledge distillation is a training technique where a smaller "student" model is trained to mimic the outputs (soft probability distributions or intermediate representations) of a larger "teacher" model. The student learns a compressed representation of the teacher's knowledge. In LLMs, distillation is used to create smaller, faster models that approximate the quality of much larger ones. Synthetic data generation from a large model for training a smaller model is a form of distillation.
