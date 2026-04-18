---
term: F1 Score
shortForm: F1
category: eval
tags: [evaluation, metric, precision, recall, nlp]
relatedTerms: [exact-match, context-precision, context-recall, hallucination-rate]
---
F1 score is the harmonic mean of precision and recall, balancing the cost of false positives (precision) and false negatives (recall). In NLP evaluation, token-level F1 computes overlap between predicted and reference answer tokens—useful for extractive QA where partial matches (correct entity, slightly different span) should earn partial credit. F1 is more lenient than exact match and is standard in datasets like SQuAD. Macro/micro averaging extends F1 to multi-class settings.
