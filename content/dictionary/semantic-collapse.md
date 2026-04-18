---
term: Semantic Collapse
shortForm: ~
category: retrieval
tags: [embeddings, retrieval, failure-mode, anisotropy]
relatedTerms: [latent-space, dense-embedding, calibration]
---
Semantic collapse is a failure mode in embedding models where many semantically distinct texts are mapped to nearly identical or very nearby vectors in the latent space. This reduces the discriminative power of retrieval: diverse documents all look the same to the query. It often manifests as anisotropy (vectors clustering in a small cone of the space). Causes include poor training objectives, insufficient training data diversity, or heavy fine-tuning on narrow domains.
