---
term: Beam Search
shortForm: ~
category: model
tags: [decoding, inference, sequence, search]
relatedTerms: [greedy-decoding, top-k-sampling, speculative-decoding]
---
Beam search maintains B candidate sequences (beams) at each decoding step, expanding each by all possible next tokens and keeping only the top-B sequences by cumulative probability. This explores a wider set of completions than greedy decoding without the full exponential search. Beam search produces higher-likelihood sequences but can still be repetitive and tends to generate shorter, more "safe" completions than sampling-based methods. It is standard in translation and summarization but less common in open-ended generation.
