---
term: Mode Collapse
shortForm: ~
category: training
tags: [fine-tuning, diversity, generation, training-failure]
relatedTerms: [catastrophic-forgetting, sft, rlhf, reward-hacking]
---
Mode collapse in generative models occurs when the model stops generating diverse outputs and converges to producing a narrow range of responses—often the "safest" or most reward-maximizing ones. In fine-tuning, it can result in a model that always responds in the same format or with the same phrases. In RLHF it is related to reward hacking. Mitigation includes diversity-promoting training objectives, KL-divergence penalties against the base model, and careful learning rate management.
