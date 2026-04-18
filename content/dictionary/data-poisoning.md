---
term: Data Poisoning
shortForm: ~
category: safety
tags: [security, training, attack, adversarial, supply-chain]
relatedTerms: [adversarial-prompts, prompt-injection, synthetic-data, pretraining]
---
Data poisoning is a training-time attack where malicious examples are injected into a model's training dataset to cause the trained model to exhibit targeted misbehavior—producing specific outputs for trigger phrases, performing backdoor actions, or degrading performance on specific inputs. For LLMs, data poisoning attacks on public pretraining corpora (web data, open-source code) or fine-tuning datasets are a supply chain security concern. Defense includes dataset curation, anomaly detection, and instruction following evaluation.
