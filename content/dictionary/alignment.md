---
term: Alignment
shortForm: ~
category: core
tags: [safety, rlhf, values]
relatedTerms: [fine-tuning, hallucination, llm, evaluation]
---
Alignment refers to the process of training AI systems to behave in accordance with human intentions, values, and safety requirements — ensuring the model is helpful, harmless, and honest. The dominant technique is Reinforcement Learning from Human Feedback (RLHF), in which human raters compare model outputs and a reward model is trained on their preferences to guide further fine-tuning via PPO. Direct Preference Optimisation (DPO) offers a simpler alternative that avoids the separate reward model by treating alignment as a classification problem directly on preference pairs. Misalignment can manifest as sycophancy, jailbreaking, refusal of legitimate requests, or generating harmful content.
