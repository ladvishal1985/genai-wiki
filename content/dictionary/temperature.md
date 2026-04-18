---
term: Temperature
shortForm: ~
category: core
tags: [sampling, decoding, generation]
relatedTerms: [top-p, llm, prompt, few-shot]
---
Temperature is a scalar hyperparameter applied to the model's logits before sampling that controls the randomness of text generation. A temperature of 1.0 samples from the unmodified probability distribution; values below 1.0 sharpen the distribution, making the model more deterministic and likely to pick high-probability tokens; values above 1.0 flatten it, increasing diversity and creativity at the cost of coherence. Temperature of 0 (or near 0) is effectively greedy decoding, always picking the most probable next token. In practice, temperatures between 0.2 and 0.7 are used for factual tasks, while 0.8–1.2 suit creative applications.
