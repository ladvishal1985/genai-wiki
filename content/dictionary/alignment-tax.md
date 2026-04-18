---
term: Alignment Tax
shortForm: ~
category: training
tags: [alignment, rlhf, capability, trade-off]
relatedTerms: [rlhf, sft, reward-hacking, sycophancy, dpo]
---
The alignment tax refers to the potential reduction in raw capabilities (e.g., benchmarks, code generation, reasoning) that can result from alignment training (RLHF, RLAIF, DPO). Aligning a model to refuse harmful requests, follow instructions consistently, and behave safely may slightly degrade performance on purely capability-focused benchmarks. Recent evidence suggests the tax is modest for well-executed alignment, but it remains a consideration when trading off helpfulness against safety constraints.
