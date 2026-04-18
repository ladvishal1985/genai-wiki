---
term: Tokens Per Second
shortForm: TPS
category: infra
tags: [inference, performance, throughput, latency]
relatedTerms: [ttft, continuous-batching, speculative-decoding, vllm-paged-attention]
---
Tokens per second (TPS) is a throughput metric measuring how many output tokens a model generates per second, either for a single user (inter-token latency) or across a batch (aggregate throughput). TPS is the primary metric for comparing serving infrastructure efficiency. Higher TPS means lower cost per token at scale. TPS is influenced by model size, hardware (GPU memory bandwidth), batch size, quantization, KV cache management, and software optimizations like continuous batching.
