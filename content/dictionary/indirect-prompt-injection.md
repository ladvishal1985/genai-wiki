---
term: Indirect Prompt Injection
shortForm: ~
category: safety
tags: [security, attack, rag, agent, adversarial]
relatedTerms: [prompt-injection, jailbreaking, adversarial-prompts, sandboxing]
---
Indirect prompt injection occurs when an attacker embeds malicious instructions in external content that an LLM-powered agent will process—a webpage the agent browses, a document it reads, or an email it summarizes. The agent unknowingly executes the attacker's instructions as if they were legitimate. Indirect injection is especially dangerous in agentic systems with tool access (browsing, email, code execution) where injected instructions can trigger real-world actions. It is difficult to defend against without architectural isolation.
