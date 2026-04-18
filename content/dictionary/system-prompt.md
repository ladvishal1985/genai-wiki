---
term: System Prompt
shortForm: ~
category: model
tags: [prompting, instruction, llm-api]
relatedTerms: [prompt, few-shot, alignment, llm]
---
A system prompt is a special instruction block processed before the user message that sets the model's persona, behaviour, capabilities, and constraints for the entire conversation. Unlike user messages, system prompts are typically invisible to the end user and are more resistant to override by subsequent user instructions, making them the preferred place for safety guardrails and role definitions. They can establish tone ("you are a concise technical writer"), restrict topics ("only answer questions about cooking"), specify output format, or provide persistent context like today's date or the user's name. In most APIs (OpenAI, Anthropic), the system prompt occupies a dedicated role field separate from the conversation history.
