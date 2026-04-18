---
term: Speculative Decoding
shortForm: ~
category: infra
tags: [inference, latency, decoding, draft-model, efficiency]
relatedTerms: [continuous-batching, vllm-paged-attention, ttft, tps, kv-cache]
---
Speculative decoding uses a small, fast draft model to propose K candidate tokens in parallel, then verifies them in a single forward pass of the large target model. If the target model accepts a draft token, it is used; otherwise, the first rejected token is resampled. This yields an identical output distribution to regular decoding while reducing the number of expensive target model forward passes. Speculative decoding achieves 2-3x latency improvements for long generation sequences.
