---
term: Fine-tuning
shortForm: ~
category: core
tags: [training, adaptation, supervised]
relatedTerms: [lora, foundation-model, alignment, llm]
---
Fine-tuning is the process of continuing to train a pre-trained model on a smaller, task-specific dataset to adapt its weights for a particular use case or domain. Unlike prompting, fine-tuning permanently changes the model's parameters, allowing it to internalise new knowledge, adopt a specific tone, or follow particular formatting conventions reliably. Full fine-tuning updates all parameters and requires significant compute, while parameter-efficient methods like LoRA update only a small fraction of weights. Fine-tuning is commonly used for instruction-following, domain specialisation (e.g., medical or legal), and style alignment.
