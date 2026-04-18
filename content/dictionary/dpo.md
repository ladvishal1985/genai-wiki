---
term: Direct Preference Optimization
shortForm: DPO
category: training
tags: [alignment, training, preference-learning, fine-tuning]
relatedTerms: [rlhf, sft, ppo, reward-model, reward-hacking]
---
Direct Preference Optimization (DPO) is an alignment technique that trains a model directly on preference pairs (preferred vs. rejected outputs) without explicitly training a reward model or using RL. DPO reformulates the RLHF objective as a classification problem on paired examples, making it simpler, more stable, and less compute-intensive than PPO-based RLHF. DPO has become the dominant alignment method for open-weight models (Llama, Mistral) due to its simplicity and strong empirical performance.
