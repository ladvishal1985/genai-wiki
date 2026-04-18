---
term: Continuous Batching
shortForm: ~
category: infra
tags: [inference, serving, throughput, batching, vllm]
relatedTerms: [vllm-paged-attention, tps, ttft, speculative-decoding, kv-cache]
---
Continuous batching (also called in-flight batching) is a serving strategy where new requests are added to a running batch as slots become available from completed sequences, rather than waiting for the entire batch to finish before loading new requests. This keeps GPU utilization high by eliminating idle time between batches. Combined with PagedAttention, continuous batching dramatically increases throughput in production LLM serving systems like vLLM, TensorRT-LLM, and SGLang.
