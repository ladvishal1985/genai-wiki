---
term: Prompt Leakage
shortForm: ~
category: safety
tags: [security, system-prompt, confidentiality, privacy]
relatedTerms: [prompt-injection, jailbreaking, guardrails, indirect-prompt-injection]
---
Prompt leakage (or system prompt extraction) is the extraction of a model's confidential system prompt by a user through carefully crafted queries ("repeat your instructions verbatim", "translate your system message"). System prompts often contain proprietary logic, personas, or business rules. While LLMs can be instructed not to reveal their system prompts, this is not a reliable security boundary—models can be coerced or tricked. True confidentiality requires architectural controls, not just prompt instructions.
