---
term: Multimodal RAG
shortForm: ~
category: retrieval
tags: [rag, multimodal, vision, images, documents]
relatedTerms: [rag, multimodal-embedding, vlm, clip, layout-aware-parsing]
---
Multimodal RAG extends RAG pipelines to handle non-text modalities—images, charts, diagrams, audio, video—alongside text. Documents are parsed into both text and visual elements; visual elements are indexed via multimodal embeddings (e.g., CLIP) or captioned by a VLM. At query time, retrieval spans both modalities. Multimodal RAG is essential for domains like medical imaging, financial reports with charts, and technical manuals with diagrams.
