---
term: Throughput
shortForm: ~
category: infra
tags: [performance, inference, scaling]
relatedTerms: [latency, batch-processing, tokens, rate-limiting]
---
Throughput measures how many tokens or requests an LLM inference system can process per unit of time, typically expressed as tokens per second (TPS) or requests per minute (RPM). It is the primary metric for batch processing workloads and server-side capacity planning. Throughput and latency are in fundamental tension: batching multiple requests together improves GPU utilisation and throughput but increases latency for individual requests. Optimising throughput involves continuous batching (dynamically combining in-flight requests), KV-cache reuse, tensor parallelism across multiple GPUs, and quantization to allow larger batch sizes within memory limits.
