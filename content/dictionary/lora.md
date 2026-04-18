---
term: Low-Rank Adaptation
shortForm: LoRA
category: model
tags: [fine-tuning, peft, efficiency]
relatedTerms: [fine-tuning, quantization, foundation-model, llm]
---
Low-Rank Adaptation (LoRA) is a parameter-efficient fine-tuning technique that freezes the original model weights and injects small trainable rank-decomposition matrices into the attention layers. Instead of updating all billions of parameters, LoRA trains only a fraction of them — typically less than 1% — dramatically reducing GPU memory requirements and training time. At inference, the LoRA weights can be merged back into the base model with zero added latency, or kept separate to allow hot-swapping multiple adapters on the same base. QLoRA combines LoRA with 4-bit quantization, enabling fine-tuning of 65B+ models on a single consumer GPU.
