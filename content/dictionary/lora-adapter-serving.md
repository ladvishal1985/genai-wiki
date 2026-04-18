---
term: LoRA Adapter Serving
shortForm: ~
category: infra
tags: [lora, serving, fine-tuning, multi-tenant, efficiency]
relatedTerms: [lora, qlora, peft, continuous-batching, model-routing]
---
LoRA adapter serving is the infrastructure pattern of hosting a single base model with multiple LoRA adapter weights swapped in per request (or per tenant), rather than deploying separate fine-tuned model replicas. Systems like S-LoRA manage a pool of adapters in CPU/GPU memory, loading the appropriate adapter per request with minimal overhead. This dramatically reduces the cost of serving many custom fine-tuned model variants on shared infrastructure.
