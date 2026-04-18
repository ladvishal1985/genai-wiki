---
term: QLoRA
shortForm: QLoRA
category: training
tags: [fine-tuning, quantization, lora, memory-efficient]
relatedTerms: [lora, peft, sft, quantization, catastrophic-forgetting]
---
QLoRA (Quantized LoRA) is a memory-efficient fine-tuning technique that quantizes the base model weights to 4-bit precision using NF4 quantization, then trains only the LoRA adapter weights in full (BFloat16) precision. This allows fine-tuning of 65B+ parameter models on a single consumer GPU. QLoRA introduced 4-bit NormalFloat (NF4), double quantization, and paged optimizers to manage memory spikes. It democratized LLM fine-tuning by dramatically reducing hardware requirements.
