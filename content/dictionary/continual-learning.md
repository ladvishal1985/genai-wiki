---
term: Continual Learning
shortForm: ~
category: training
tags: [training, catastrophic-forgetting, adaptation, online-learning]
relatedTerms: [catastrophic-forgetting, sft, pretraining, synthetic-data]
---
Continual learning is the ability of a model to learn from new data over time without forgetting previously learned knowledge (avoiding catastrophic forgetting). For LLMs, it involves techniques like replay buffers (mixing old and new data), elastic weight consolidation (penalizing updates to important weights), and parameter-isolated approaches (new adapter per task). Continual learning is essential for production models that need to incorporate new knowledge without full retraining.
