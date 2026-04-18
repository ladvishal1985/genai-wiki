---
term: Parameter-Efficient Fine-Tuning
shortForm: PEFT
category: training
tags: [fine-tuning, lora, efficiency, adapters]
relatedTerms: [lora, qlora, sft, catastrophic-forgetting, instruction-tuning]
---
Parameter-Efficient Fine-Tuning (PEFT) refers to a family of techniques that adapt a pretrained LLM to new tasks by updating only a small fraction of parameters, rather than full fine-tuning. Methods include LoRA (low-rank adapter matrices), prefix tuning (learnable tokens prepended to each layer's input), prompt tuning, and adapter layers. PEFT dramatically reduces training compute, memory, and storage while achieving performance comparable to full fine-tuning on most tasks.
