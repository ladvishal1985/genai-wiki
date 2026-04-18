---
term: Early Fusion
shortForm: ~
category: retrieval
tags: [hybrid-search, fusion, multimodal, retrieval]
relatedTerms: [late-fusion, hybrid-search, multimodal-embedding]
---
Early fusion combines signals from multiple modalities or retrieval sources before or during the encoding step, rather than merging result lists afterward. For example, concatenating image and text features before the ranking model, or jointly encoding query metadata with the query text. Early fusion allows the model to attend to interactions between signals but is more complex to train and deploy than late fusion.
