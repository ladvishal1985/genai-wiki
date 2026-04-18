---
term: Context Window
shortForm: ~
category: core
tags: [tokens, memory, architecture]
relatedTerms: [tokenization, tokens, context-length, llm]
---
The context window is the maximum number of tokens a language model can process in a single forward pass, encompassing both the input prompt and the generated output. Everything outside this window is invisible to the model — it has no access to earlier conversation turns or documents once they fall out of the window. Context lengths have grown dramatically from GPT-2's 1,024 tokens to millions of tokens in recent models, but longer contexts increase computational cost quadratically under standard attention. Effective use of the context window — through summarisation, retrieval, or selective inclusion — is a key design challenge in production LLM applications.
