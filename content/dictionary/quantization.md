---
term: Quantization
shortForm: ~
category: model
tags: [compression, inference, efficiency]
relatedTerms: [llm, lora, latency, throughput]
---
Quantization reduces model size and inference cost by representing weights and activations with lower-precision data types — from 32-bit or 16-bit floats down to 8-bit integers (INT8) or even 4-bit (INT4, NF4). This shrinks memory footprint (a 70B model in FP16 needs ~140 GB; in 4-bit it drops to ~35 GB), enabling larger models to run on consumer hardware. Post-training quantization (PTQ) applies after training with minimal accuracy loss using calibration data; quantization-aware training (QAT) bakes lower-precision arithmetic into the training loop for better quality. Libraries like GPTQ, AWQ, llama.cpp, and bitsandbytes are standard tools for quantizing open-weight models.
