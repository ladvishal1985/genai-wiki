---
term: Shadow Mode
shortForm: ~
category: eval
tags: [evaluation, deployment, testing, production, safety]
relatedTerms: [ab-testing, regression-testing, tracing-observability, llmops]
---
Shadow mode is a deployment strategy where a new model or pipeline processes all production requests in parallel with the current system, but its outputs are not served to users—only logged for analysis. This allows evaluation of the new system on real traffic without any user impact. Shadow mode is lower-risk than A/B testing (no live exposure to potentially worse outputs) and is particularly valuable for catching safety or quality regressions before they reach production.
