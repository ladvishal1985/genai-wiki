---
term: A/B Testing
shortForm: ~
category: eval
tags: [evaluation, experimentation, production, deployment]
relatedTerms: [shadow-mode, regression-testing, tracing-observability, hallucination-rate]
---
A/B testing for LLM applications routes a fraction of live traffic to a new model version, prompt, or pipeline (variant B) while keeping the remainder on the current system (variant A), then compares metrics between the two groups. Online A/B testing provides real-user signal that offline golden datasets can't replicate—capturing actual query distributions, user engagement, and downstream task success rates. Statistical significance testing ensures measured differences are real, not noise.
