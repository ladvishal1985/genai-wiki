---
term: Parameters
shortForm: ~
category: model
tags: [weights, architecture, scale, llm]
relatedTerms: [scaling-laws, chinchilla-scaling, pretraining, lora]
---
Parameters are the learnable weights of a neural network—the numerical values adjusted during training via gradient descent. In LLMs, parameter count is the primary measure of model size (e.g., "7B" = 7 billion parameters). Parameters encode the model's "compressed knowledge" of the training data. More parameters generally enable more capable models, but increase inference memory, latency, and cost. PEFT methods like LoRA fine-tune a tiny fraction of parameters to reduce training costs.
