---
term: Catastrophic Forgetting
shortForm: ~
category: training
tags: [fine-tuning, continual-learning, alignment, training]
relatedTerms: [continual-learning, sft, qlora, lora, knowledge-distillation]
---
Catastrophic forgetting is the tendency of neural networks to lose previously learned abilities when trained on new data. In LLMs, fine-tuning on a narrow task or domain can degrade general capabilities like instruction following, reasoning, or knowledge from pretraining. Mitigations include PEFT methods (LoRA, QLoRA) that freeze most model weights, replay-based continual learning (mixing old data into fine-tuning), and regularization techniques like EWC.
