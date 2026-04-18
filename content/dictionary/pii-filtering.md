---
term: PII Filtering
shortForm: ~
category: safety
tags: [privacy, pii, compliance, filtering, safety]
relatedTerms: [guardrails, data-poisoning, prompt-injection, llmops]
---
PII (Personally Identifiable Information) filtering detects and removes or masks sensitive personal data—names, emails, phone numbers, SSNs, credit card numbers—from both inputs to and outputs from LLMs. Input filtering prevents private data from being sent to external model APIs (compliance); output filtering prevents models from outputting PII they may have memorized from training data. Tools include regex patterns, NER models, and purpose-built PII detection services like Microsoft Presidio.
