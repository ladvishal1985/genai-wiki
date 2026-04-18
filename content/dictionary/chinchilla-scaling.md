---
term: Chinchilla Scaling
shortForm: ~
category: model
tags: [scaling, compute-optimal, training, parameters, data]
relatedTerms: [scaling-laws, parameters, pretraining]
---
Chinchilla scaling refers to the compute-optimal training findings from the DeepMind Chinchilla paper (Hoffmann et al., 2022). The paper showed that for a given compute budget, models should be trained with roughly 20 tokens per parameter (e.g., a 70B model on ~1.4T tokens). Prior models like GPT-3 were significantly undertrained. Chinchilla scaling shifted the field toward training smaller, better-trained models rather than simply maximizing parameter count.
