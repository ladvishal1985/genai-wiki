---
term: Sandboxing
shortForm: ~
category: agent
tags: [agent, security, isolation, code-execution]
relatedTerms: [human-in-the-loop, guardrails, agentic-loop, prompt-injection]
---
Sandboxing in agentic AI systems is the practice of running agent actions—particularly code execution, file system access, and network requests—in an isolated environment that limits their blast radius. A sandboxed agent can read/write only designated files, cannot access production databases, and has no persistent side effects beyond the sandbox. Sandboxing is critical for code-executing agents and any agent that can take irreversible actions, protecting against both accidental and malicious operations.
