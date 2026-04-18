---
term: Guardrails
shortForm: ~
category: safety
tags: [safety, filtering, validation, production]
relatedTerms: [pii-filtering, jailbreaking, prompt-injection, schema-validation, constitutional-ai]
---
Guardrails are input/output validation layers around an LLM that enforce safety, quality, and policy constraints. Input guardrails filter or block harmful queries before they reach the model; output guardrails check generated responses for policy violations, PII, toxic content, or hallucination markers before serving them to users. Guardrails can be rule-based (regex, blocklists), model-based (separate classifier), or LLM-based (ask another model to evaluate). Libraries like Guardrails AI, NeMo Guardrails, and LlamaGuard implement this pattern.
