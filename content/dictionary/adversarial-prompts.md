---
term: Adversarial Prompts
shortForm: ~
category: safety
tags: [security, attack, adversarial, robustness]
relatedTerms: [jailbreaking, prompt-injection, guardrails, data-poisoning]
---
Adversarial prompts are specially crafted inputs designed to cause an LLM to fail in a targeted way—bypassing safety filters, extracting system information, producing incorrect outputs, or taking unintended actions. They can be manually crafted (jailbreaks) or algorithmically generated (e.g., GCG—Greedy Coordinate Gradient attacks that find token-level suffixes causing specific misbehavior). Robustness to adversarial prompts is a core safety evaluation criterion for production LLM deployments.
