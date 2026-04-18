---
term: Instruction Tuning
shortForm: ~
category: training
tags: [fine-tuning, alignment, sft, instruction-following]
relatedTerms: [sft, rlhf, few-shot-prompting, in-context-learning]
---
Instruction tuning is the process of fine-tuning a pretrained language model on a large collection of (instruction, response) pairs to improve its ability to follow natural language instructions. Models like FLAN, InstructGPT, and Alpaca were trained this way. Instruction tuning bridges the gap between next-token-prediction pretraining (which doesn't teach instruction following) and real user interactions. It dramatically improves zero-shot task performance and is typically the first SFT stage.
