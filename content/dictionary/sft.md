---
term: Supervised Fine-Tuning
shortForm: SFT
category: training
tags: [fine-tuning, training, alignment, instruction-following]
relatedTerms: [pretraining, rlhf, dpo, instruction-tuning, lora, qlora]
---
Supervised Fine-Tuning (SFT) trains a pretrained base model on a curated dataset of (input, desired output) pairs using standard cross-entropy loss. SFT teaches the model to follow instructions, adopt a desired response format, and align behavior with human preferences before RLHF. The quality of the SFT dataset is critical—a small, high-quality dataset often outperforms a large noisy one. SFT is the second stage of the pretrain → SFT → RLHF pipeline.
