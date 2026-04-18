---
term: Namespace Isolation
shortForm: ~
category: retrieval
tags: [vector-database, multi-tenancy, partitioning]
relatedTerms: [metadata-filtering, vector-database, rag]
---
Namespace isolation is a partitioning strategy in vector databases where each tenant, user, or data segment has its own logical namespace with independent indexes. Searches are scoped to a namespace, preventing data leakage across tenants. Namespaces are cheaper than separate collections since they share infrastructure but maintain strict data boundaries. Critical for multi-tenant RAG applications where different customers must not see each other's documents.
