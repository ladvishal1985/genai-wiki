---
term: Meta-Prompting
shortForm: ~
category: core
tags: [prompting, orchestration, reasoning, self-generated]
relatedTerms: [prompt-chaining, decomposed-prompting, role-prompting, chain-of-thought]
---
Meta-prompting is a prompting strategy where the model is first asked to generate or refine a prompt for its own subsequent use, rather than being given a static prompt. The model acts as both the prompt engineer and the task solver. This allows the model to adapt the problem framing to its own "preferences," and has been shown to outperform fixed few-shot prompts on diverse tasks. Meta-prompting is also used in prompt optimization frameworks that auto-generate better prompts.
