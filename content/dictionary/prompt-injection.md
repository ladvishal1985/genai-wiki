---
term: Prompt Injection
shortForm: ~
category: safety
tags: [security, attack, prompt, adversarial]
relatedTerms: [indirect-prompt-injection, jailbreaking, adversarial-prompts, guardrails]
---
Prompt injection is an attack where malicious text injected into an LLM's input overrides or subverts the original system instructions. A direct injection modifies the user's own prompt; an indirect injection embeds instructions in data the LLM processes (web pages, documents, emails). Prompt injection is the LLM equivalent of SQL injection—untrusted user input is interpreted as instructions rather than data. Mitigations include input sanitization, instruction hierarchies, and sandboxing agentic capabilities.
