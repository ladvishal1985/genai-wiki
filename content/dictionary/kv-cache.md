---
term: KV Cache
shortForm: ~
category: model
tags: [inference, efficiency, memory, attention, transformer]
relatedTerms: [multi-head-attention, grouped-query-attention, flash-attention, vllm-paged-attention, prompt-caching]
---
The KV (key-value) cache stores the attention keys and values computed for all tokens in the context, so they do not need to be recomputed when generating each new token. Without KV caching, autoregressive generation would require O(n²) compute per token. With caching, each new token only attends to pre-cached KVs plus its own new projections, reducing generation to O(n) per step. KV cache size grows with sequence length and batch size, often becoming the dominant memory bottleneck at inference time.
