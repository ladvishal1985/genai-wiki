---
term: Short-Term Memory
shortForm: ~
category: agent
tags: [memory, context-window, conversation, agent]
relatedTerms: [long-term-memory, working-memory, conversation-summarisation, sliding-window-context]
---
In LLM agent systems, short-term memory refers to the information held in the active context window—the current conversation history, tool call results, and injected context. Short-term memory is fast to access (already in-context) but limited by the token budget and lost when the context window is cleared. Managing short-term memory effectively (what to keep, what to compress, what to evict) is a core concern in long-running agentic applications.
