import fs from 'fs'
import path from 'path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const OUT_DIR = path.join(ROOT, 'content/interview')

const roles = {
  ai: ['ai-engineer', 'data-scientist', 'ml-engineer'],
  genai: ['ai-engineer', 'genai-engineer', 'genai-architect'],
  architect: ['genai-architect', 'principal-engineer', 'engineering-manager'],
}

const topics = [
  {
    slug: 'ai-fundamentals',
    title: 'AI Fundamentals',
    description: 'Core AI, ML, and GenAI concepts every candidate should be able to explain clearly.',
    difficulty: 'beginner',
    roles: roles.ai,
    questions: [
      ['ai-vs-ml-dl-genai', 'Explain the difference between AI, ML, deep learning, and Generative AI.', 'concept', 'A strong answer separates the broad field of AI from machine learning systems that learn patterns from data, deep learning models based on neural networks, and Generative AI systems that create text, code, images, or structured outputs. The candidate should also explain that not every AI feature needs an LLM; classification, forecasting, anomaly detection, and ranking may be better solved with traditional ML.', 'A business stakeholder asks whether every AI roadmap item should use an LLM.'],
      ['supervised-unsupervised-rl', 'Compare supervised learning, unsupervised learning, and reinforcement learning.', 'concept', 'Supervised learning uses labeled examples to learn input-output mappings. Unsupervised learning discovers patterns without labels, such as clusters or lower-dimensional structure. Reinforcement learning trains an agent to choose actions that maximize reward through interaction with an environment. A good answer includes where each approach fits and why data availability drives the choice.', 'You need to select an approach for fraud labels, customer segmentation, and an agent optimizing a workflow.'],
      ['training-vs-inference', 'What is the difference between training and inference?', 'concept', 'Training is the offline or iterative process of learning model parameters from data. Inference is using the trained model to make predictions or generate outputs for new inputs. Production inference emphasizes latency, throughput, cost, reliability, monitoring, and safety, while training emphasizes data quality, optimization, validation, and experimentation.', 'Your team trained a model offline and now needs to expose it through an API.'],
      ['overfitting-underfitting', 'How do you explain overfitting and underfitting?', 'concept', 'Overfitting happens when a model learns noise or overly specific training patterns and fails to generalize. Underfitting happens when the model is too simple, poorly trained, or missing important features. Candidates should discuss train-validation gaps, regularization, validation design, leakage detection, and remedies such as more data, better features, early stopping, or simpler models.', 'A model has excellent training accuracy but poor validation accuracy.'],
      ['build-vs-buy-ai', 'How do you decide whether to build or buy an AI solution?', 'tradeoff', 'The decision depends on strategic differentiation, data sensitivity, integration complexity, time to market, cost, compliance, quality requirements, vendor lock-in, and internal operating maturity. Buy when the use case is commodity and speed matters. Build when the data, workflow, model behavior, or governance requirements create durable differentiation.', 'Leadership asks whether to buy a vendor AI assistant or build an internal enterprise assistant.']
    ]
  },
  {
    slug: 'llm-fundamentals',
    title: 'LLM Fundamentals',
    description: 'Transformers, tokenization, context windows, alignment, hallucinations, and model tradeoffs.',
    difficulty: 'intermediate',
    roles: roles.genai,
    questions: [
      ['what-is-an-llm', 'What is a large language model and how does it generate text?', 'concept', 'An LLM is a neural network trained to predict tokens from large text and code corpora. At inference time it tokenizes the prompt, computes probabilities for next tokens, and selects or samples outputs until completion. It generates plausible continuations, not guaranteed truth, so grounding, evaluation, and guardrails are needed in production.', 'A product manager asks why a fluent chatbot can still be wrong.'],
      ['transformer-self-attention', 'Why is self-attention important in transformers?', 'concept', 'Self-attention lets each token weigh other tokens in the context when forming its representation. This enables long-range dependencies, parallel training, and context-sensitive meaning. Multi-head attention allows the model to learn different relationships at once, such as syntax, entity references, and semantic associations.', 'You need to explain why transformers replaced many recurrent architectures for language tasks.'],
      ['context-window-tradeoffs', 'What is a context window and what tradeoffs does it create?', 'tradeoff', 'The context window is the maximum input and output token budget a model can process. Larger windows can include more evidence but increase cost, latency, and distraction risk. Strong systems manage context through retrieval, ranking, compression, summarization, and prompt structure instead of blindly stuffing all data into the prompt.', 'A team wants to send every document and chat message into each request.'],
      ['hallucinations', 'Why do LLM hallucinations happen and how can you reduce them?', 'scenario', 'Hallucinations happen because LLMs generate probable text rather than verify facts by default. They can be reduced with retrieval grounding, citations, constrained outputs, tool use, calibration, refusal policies, eval sets, and human review for high-risk tasks. A strong answer avoids claiming hallucinations can be fully eliminated.', 'An internal support assistant confidently gives an outdated policy answer.'],
      ['open-vs-closed-models', 'How do you choose between open-weight and closed API models?', 'architecture', 'Closed models often offer strong quality, managed scale, and low operational burden. Open-weight models offer deployment control, customization, data residency options, and lower vendor dependency. The choice depends on quality, latency, cost, compliance, data sensitivity, customization, operating maturity, and fallback strategy.', 'A regulated enterprise needs a standard model strategy across departments.']
    ]
  },
  {
    slug: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Prompt patterns, structured outputs, function calling, context design, and prompt security.',
    difficulty: 'intermediate',
    roles: roles.genai,
    questions: [
      ['zero-shot-vs-few-shot', 'When would you use zero-shot versus few-shot prompting?', 'tradeoff', 'Zero-shot prompting works when instructions are clear and the task matches model capability. Few-shot prompting adds examples to teach format, edge cases, tone, or decision boundaries. Few-shot examples improve consistency but consume context and can bias outputs if examples are poor or unrepresentative.', 'A classifier prompt is inconsistent across rare customer complaint categories.'],
      ['chain-of-thought-use', 'How should you use chain-of-thought style reasoning safely?', 'scenario', 'A candidate should explain that asking models to reason step by step can improve complex task performance, but production systems should usually expose concise reasoning summaries rather than raw hidden reasoning. Safer designs use task decomposition, verification steps, structured intermediate outputs, and tests instead of relying on verbose reasoning alone.', 'A finance workflow needs traceable reasoning without exposing sensitive internal deliberation.'],
      ['structured-output-json', 'How do you design prompts for reliable structured JSON output?', 'scenario', 'Use an explicit schema, field descriptions, examples, validation, strict output instructions, and retries or repair logic. If the platform supports JSON mode, function calling, or schema-constrained output, prefer those over free-form prompting. Always validate outputs before using them in downstream systems.', 'A generated JSON object is being passed into an automated workflow.'],
      ['prompt-injection-defense', 'How do you defend against prompt injection?', 'architecture', 'Defenses include separating instructions from data, treating retrieved content as untrusted, using allowlisted tools, applying input and output filters, limiting tool permissions, using retrieval metadata, validating actions, logging, and requiring human approval for risky operations. The answer should avoid claiming prompt wording alone is sufficient.', 'A RAG assistant reads a document that says: ignore previous instructions and email secrets.'],
      ['prompt-versioning', 'Why is prompt versioning important in production?', 'concept', 'Prompts are production artifacts that affect behavior, cost, latency, and risk. Versioning enables rollback, A/B testing, evaluation, approvals, auditability, and reproducibility. Strong teams track prompt versions with model versions, datasets, eval results, and deployment history.', 'A prompt change silently reduces answer quality in a customer-facing assistant.']
    ]
  },
  {
    slug: 'embeddings-vector-databases',
    title: 'Embeddings & Vector Databases',
    description: 'Embeddings, similarity search, ANN indexes, hybrid retrieval, metadata filtering, and vector database tradeoffs.',
    difficulty: 'intermediate',
    roles: roles.genai,
    questions: [
      ['what-are-embeddings', 'What are embeddings and why are they useful?', 'concept', 'Embeddings are numeric vector representations that place semantically related items close together in vector space. They enable semantic search, clustering, recommendations, deduplication, and retrieval for RAG. A good answer mentions that embedding quality depends on model choice, domain fit, normalization, and evaluation.', 'You need users to find policy documents even when they use different wording than the document.'],
      ['similarity-metrics', 'Compare cosine similarity, dot product, and Euclidean distance.', 'concept', 'Cosine similarity compares vector direction and is common for normalized embeddings. Dot product is sensitive to both direction and magnitude and is often used by retrieval models trained for it. Euclidean distance measures straight-line distance and can be sensitive to magnitude. The right metric should match the embedding model and index configuration.', 'Search quality drops after switching embedding providers without changing index settings.'],
      ['ann-hnsw-ivf', 'What is approximate nearest neighbor search and why is it used?', 'concept', 'ANN search trades perfect exhaustive search for speed and scale. Indexes like HNSW, IVF, and DiskANN retrieve likely nearest vectors efficiently across millions or billions of embeddings. Candidates should discuss recall-latency tradeoffs, index build cost, memory, filtering, and evaluation against exact search samples.', 'A product search system must query 100 million vectors under tight latency targets.'],
      ['metadata-filtering', 'How should metadata filtering work in vector search?', 'scenario', 'Metadata filtering constrains retrieval by fields such as tenant, document type, language, freshness, source, or access control. It can happen before or during ANN search depending on the database. Strong answers mention ACL filtering, filter selectivity, index design, and avoiding post-generation permission checks.', 'An enterprise assistant must retrieve only documents the current user can access.'],
      ['hybrid-search', 'When is hybrid search better than pure vector search?', 'tradeoff', 'Hybrid search combines dense semantic retrieval with sparse lexical methods like BM25. It helps when exact terms, IDs, error codes, names, or rare domain phrases matter. A strong answer explains score fusion, reranking, query intent, and evaluation instead of assuming one retrieval method always wins.', 'Users search for product SKUs, policy names, and vague semantic questions in the same system.']
    ]
  },
  {
    slug: 'rag-fundamentals',
    title: 'RAG Fundamentals',
    description: 'Retrieval pipelines, chunking, reranking, grounding, citations, and RAG evaluation.',
    difficulty: 'intermediate',
    roles: roles.genai,
    questions: [
      ['rag-vs-fine-tuning', 'When would you use RAG instead of fine-tuning?', 'tradeoff', 'Use RAG when answers depend on external, changing, proprietary, or access-controlled knowledge. RAG retrieves relevant evidence at query time and grounds the answer. Fine-tuning is better for changing model behavior, style, or task performance, but it is not ideal for frequently changing facts.', 'You are building an assistant over HR policies, product docs, and customer contracts that change weekly.'],
      ['rag-pipeline', 'Walk through a basic RAG pipeline.', 'concept', 'A basic RAG pipeline ingests documents, parses and cleans content, chunks text, enriches metadata, creates embeddings, indexes vectors, retrieves candidates for a query, optionally reranks them, assembles prompt context, generates an answer, cites sources, and logs traces for evaluation. A strong answer separates offline ingestion from online query flow.', 'You need to explain the architecture to a team building its first document assistant.'],
      ['chunking-strategy', 'How do you choose a chunking strategy for RAG?', 'scenario', 'Chunking should preserve semantic meaning while keeping chunks small enough for precise retrieval. Strategy depends on document structure, query patterns, model context, and citation needs. Options include fixed-size chunks, semantic chunks, section-aware chunks, parent-child retrieval, and overlap.', 'A document intelligence system must answer questions across PDFs, contracts, and long policy documents.'],
      ['reranking-purpose', 'Why is reranking useful in RAG?', 'concept', 'First-stage retrieval optimizes recall and speed. Reranking uses a more precise model, often a cross-encoder or LLM-based scorer, to reorder candidate passages by relevance. This improves context precision and reduces prompt pollution, at the cost of additional latency and compute.', 'A vector search returns many loosely related chunks and answer quality is inconsistent.'],
      ['rag-evaluation', 'How would you evaluate a RAG application?', 'architecture', 'Evaluate retrieval and generation separately. Retrieval metrics include context recall, context precision, hit rate, and MRR. Generation metrics include groundedness, faithfulness, answer relevance, citation accuracy, refusal quality, and human preference. Use golden datasets, adversarial tests, regression tests, observability, and feedback loops.', 'Leadership wants proof that an enterprise assistant is accurate enough for internal rollout.']
    ]
  },
  {
    slug: 'advanced-rag',
    title: 'Advanced RAG',
    description: 'Query rewriting, multi-hop retrieval, Graph RAG, agentic RAG, context compression, ACLs, and multi-tenant retrieval.',
    difficulty: 'advanced',
    roles: roles.genai,
    questions: [
      ['query-rewriting', 'When would you use query rewriting in RAG?', 'scenario', 'Query rewriting improves retrieval when user questions are vague, conversational, incomplete, or use different vocabulary than documents. The system can rewrite the query, expand acronyms, add domain terms, or generate multiple retrieval queries. It should be evaluated because bad rewrites can drift from user intent.', 'Users ask follow-up questions like: what about the renewal clause?'],
      ['parent-child-retrieval', 'Explain parent-child retrieval and its tradeoffs.', 'concept', 'Parent-child retrieval indexes smaller child chunks for precise matching but returns a larger parent section for context. It balances retrieval precision with answer completeness. Tradeoffs include more complex indexing, duplicated context, citation granularity, and possible prompt bloat.', 'A legal assistant retrieves exact clauses but needs surrounding contractual context to answer correctly.'],
      ['multi-hop-retrieval', 'What is multi-hop retrieval?', 'concept', 'Multi-hop retrieval decomposes questions requiring evidence from multiple sources or steps. The system retrieves initial evidence, uses it to form follow-up queries, and combines evidence to answer. It is useful for complex enterprise questions but adds latency, orchestration complexity, and failure points.', 'A user asks which vendors affected by a policy also have contracts expiring this quarter.'],
      ['graph-rag', 'When is Graph RAG useful?', 'tradeoff', 'Graph RAG is useful when relationships between entities matter, such as people, systems, policies, vendors, and dependencies. It can improve multi-hop reasoning and explainability by retrieving neighborhoods or paths. It adds graph construction, entity resolution, freshness, and governance complexity.', 'An enterprise needs to answer questions about dependencies between applications, owners, vendors, and risks.'],
      ['acl-aware-rag', 'How do you design ACL-aware RAG?', 'architecture', 'ACL-aware RAG enforces permissions during retrieval, not after generation. Chunks carry tenant, source, document, and permission metadata. Retrieval filters by user identity, groups, and policy before reranking and prompt assembly. The system must handle permission changes, deletions, audit logs, and tests for leakage.', 'A bank wants employees to search documents while respecting department and deal-room permissions.']
    ]
  },
  {
    slug: 'agent-fundamentals',
    title: 'Agent Fundamentals',
    description: 'Tool calling, planning, reflection, memory, agent loops, safety, and human-in-the-loop patterns.',
    difficulty: 'intermediate',
    roles: roles.genai,
    questions: [
      ['agent-vs-workflow', 'What is the difference between an agent and a workflow?', 'tradeoff', 'A workflow follows predefined steps with limited branching. An agent uses model reasoning to choose actions, tools, or next steps dynamically toward a goal. Agents are useful for open-ended tasks but harder to test, control, and guarantee. Strong candidates avoid using agents where deterministic workflows are sufficient.', 'A team wants to replace a reliable approval workflow with an autonomous agent.'],
      ['tool-calling', 'How does tool calling work in an agent?', 'concept', 'The model decides when to call a tool, emits structured arguments, receives tool results, and uses those results to continue or answer. Production systems validate arguments, restrict permissions, handle errors, log traces, and protect tools from prompt injection or unintended actions.', 'An agent needs to check inventory, create a ticket, and send a notification.'],
      ['agent-memory', 'What types of memory are useful for agents?', 'concept', 'Short-term memory tracks the current task state. Long-term memory stores durable user or task facts. Episodic memory stores past interactions. Semantic memory stores reusable knowledge. A strong answer discusses memory write policies, retrieval policies, privacy, decay, and correction.', 'A sales assistant should remember account context without storing sensitive information unnecessarily.'],
      ['human-in-loop', 'Where should human-in-the-loop controls appear?', 'scenario', 'Human review should appear before high-impact, irreversible, expensive, or sensitive actions. Examples include sending external emails, modifying records, executing payments, approving legal advice, or changing access. The system should expose context, proposed action, confidence, and audit trails.', 'An agent drafts a contract amendment and wants to send it to a customer.'],
      ['agent-evaluation', 'How do you evaluate an AI agent?', 'architecture', 'Agent evaluation includes task success, tool correctness, step efficiency, safety violations, cost, latency, recovery from errors, and user satisfaction. Use scenario test suites, tool-call traces, simulated environments, regression tests, and human review for ambiguous tasks.', 'An operations agent sometimes solves tickets but occasionally calls the wrong tool.']
    ]
  },
  {
    slug: 'multi-agent-systems',
    title: 'Multi-Agent Systems',
    description: 'Supervisor patterns, specialist agents, planner-executor designs, communication, debugging, and anti-patterns.',
    difficulty: 'advanced',
    roles: roles.architect,
    questions: [
      ['when-multi-agent', 'When should you use a multi-agent system?', 'tradeoff', 'Use multi-agent systems when tasks benefit from specialization, parallel work, independent critique, or separate responsibilities. Avoid them when a single workflow or model call is enough. Multi-agent designs add coordination overhead, latency, cost, debugging difficulty, and emergent failure modes.', 'A team proposes five agents for a simple FAQ assistant.'],
      ['supervisor-pattern', 'Explain the supervisor agent pattern.', 'architecture', 'A supervisor agent routes tasks to specialist agents, monitors progress, aggregates results, and decides when work is complete. It centralizes coordination but can become a bottleneck or single point of failure. Strong answers include routing criteria, state management, guardrails, and tracing.', 'A research assistant needs search, summarization, fact-checking, and report-writing specialists.'],
      ['planner-executor', 'What is the planner-executor pattern?', 'concept', 'The planner decomposes a task into steps while executor agents or tools perform each step. This separates strategy from action and improves controllability. Risks include bad plans, stale plans, excessive steps, and poor feedback between execution and replanning.', 'An agent must gather information, compare options, and produce a recommendation.'],
      ['agent-communication', 'How should agents communicate?', 'scenario', 'Agents should communicate through structured messages with task state, assumptions, outputs, confidence, and required next actions. Avoid unbounded chat loops. Use schemas, shared memory, event logs, and explicit termination criteria to make communication testable.', 'Two specialist agents keep debating and never produce a final answer.'],
      ['debugging-multi-agent', 'How do you debug multi-agent systems?', 'debugging', 'Debugging requires traces of messages, tool calls, state changes, decisions, costs, and outputs. Replayable runs, deterministic seeds where possible, scenario tests, per-agent metrics, and failure taxonomies help identify routing errors, loops, tool misuse, or context loss.', 'A multi-agent workflow is expensive and occasionally returns contradictory conclusions.']
    ]
  },
  {
    slug: 'mcp-a2a',
    title: 'MCP & A2A',
    description: 'Model Context Protocol, tool integration, agent-to-agent communication, discovery, governance, and security.',
    difficulty: 'advanced',
    roles: roles.architect,
    questions: [
      ['what-is-mcp', 'What is MCP and what problem does it solve?', 'concept', 'MCP provides a standard way for AI applications to connect models or agents to tools, data sources, and context providers. It reduces custom integration work by standardizing capabilities, resources, and tool invocation patterns. Strong answers mention governance, permissions, discovery, and safe tool execution.', 'An enterprise has many internal tools that each assistant currently integrates with differently.'],
      ['mcp-tool-security', 'What security controls matter for MCP tool integration?', 'architecture', 'Important controls include authentication, authorization, scoped permissions, input validation, output filtering, audit logs, rate limits, sandboxing, user confirmation for risky actions, and clear separation between trusted instructions and untrusted tool data.', 'An assistant can query tickets, create records, and access document repositories through tools.'],
      ['what-is-a2a', 'What is agent-to-agent communication?', 'concept', 'Agent-to-agent communication lets agents discover, request work from, and exchange structured results with other agents. It is useful when specialized agents exist across systems or organizations. Candidates should discuss identity, capabilities, contracts, trust, context sharing, and termination.', 'A procurement agent needs a compliance agent and a finance agent to complete a vendor review.'],
      ['mcp-vs-a2a', 'How do MCP and A2A differ?', 'tradeoff', 'MCP focuses on connecting models or agents to tools, resources, and context. A2A focuses on communication and coordination between agents. They can complement each other: agents may communicate with peers while each uses MCP-style tool servers to access systems.', 'A platform team is deciding whether tool integrations and agent collaboration need the same protocol.'],
      ['enterprise-adoption', 'How would an enterprise adopt MCP and A2A safely?', 'architecture', 'Start with low-risk read-only tools, central registries, identity integration, audit logging, policy enforcement, approval workflows, and test environments. Expand gradually to write actions with stronger review. Define ownership, versioning, SLAs, and incident processes for tools and agents.', 'A CIO wants reusable AI integrations without creating uncontrolled automation risk.']
    ]
  },
  {
    slug: 'llmops-evaluation',
    title: 'LLMOps & Evaluation',
    description: 'Prompt/version management, evaluation sets, groundedness, observability, cost, latency, drift, and feedback loops.',
    difficulty: 'advanced',
    roles: roles.genai,
    questions: [
      ['llmops-basics', 'What is LLMOps?', 'concept', 'LLMOps is the discipline of operating LLM applications reliably. It covers prompt and model versioning, datasets, evaluations, deployment, observability, cost tracking, latency monitoring, safety controls, incident response, and feedback loops. It differs from classic MLOps because prompts, retrieval, tools, and model providers can all change behavior.', 'A prototype assistant works in demos but fails unpredictably in production.'],
      ['golden-dataset', 'How do you build a golden evaluation dataset?', 'scenario', 'A golden dataset contains representative user questions, expected answers, relevant context, edge cases, adversarial cases, and acceptance criteria. It should be created from real logs, expert input, and business-critical scenarios. Keep train/test separation and update it as the product evolves.', 'Leadership asks for repeatable evidence before deploying an internal assistant.'],
      ['llm-as-judge', 'When should you use LLM-as-a-judge?', 'tradeoff', 'LLM-as-a-judge helps evaluate open-ended outputs for relevance, faithfulness, tone, or rubric adherence at scale. It should be calibrated against human judgments, use clear rubrics, avoid judging its own outputs when possible, and be monitored for bias or drift. It complements but does not replace human review.', 'Manual evaluation cannot keep up with daily prompt and retrieval changes.'],
      ['observability', 'What should you trace in a GenAI application?', 'architecture', 'Trace user input, prompt version, model version, retrieved documents, scores, reranking, final prompt, tool calls, outputs, latency, token counts, cost, safety events, and feedback. Observability should support debugging, evaluation, audit, and incident response while protecting sensitive data.', 'A customer reports a bad answer but the team cannot reproduce what happened.'],
      ['cost-latency-quality', 'How do you balance cost, latency, and quality?', 'tradeoff', 'Use model routing, caching, prompt compression, retrieval precision, smaller models for simple tasks, batching, streaming, token budgets, and quality gates. Measure cost per successful task, not just cost per token. Changes should be evaluated to avoid reducing quality or increasing retries.', 'Usage has grown and the monthly LLM bill is now a leadership concern.']
    ]
  },
  {
    slug: 'statistics-for-data-science',
    title: 'Statistics for Data Science',
    description: 'Probability, distributions, hypothesis testing, confidence intervals, A/B testing, sampling, and correlation.',
    difficulty: 'intermediate',
    roles: ['data-scientist', 'ml-engineer', 'ai-engineer'],
    questions: [
      ['p-value', 'How do you explain a p-value?', 'concept', 'A p-value is the probability of observing data at least as extreme as the sample result assuming the null hypothesis is true. It is not the probability that the null hypothesis is true. Candidates should mention significance thresholds, practical significance, multiple testing, and confidence intervals.', 'An experiment reports p = 0.03 and the product manager says the feature is definitely better.'],
      ['confidence-interval', 'What is a confidence interval?', 'concept', 'A confidence interval gives a range of plausible values for a population parameter under repeated sampling assumptions. A 95 percent interval means that the procedure would capture the true parameter in about 95 percent of repeated samples. It communicates uncertainty better than a point estimate alone.', 'A dashboard shows conversion increased by 2 percent, but the interval crosses zero.'],
      ['correlation-causation', 'Why does correlation not imply causation?', 'concept', 'Correlation measures association, not causal effect. Confounders, selection bias, reverse causality, and common causes can create misleading relationships. Establishing causality requires experiment design, natural experiments, causal inference methods, or strong assumptions.', 'Users who use an AI feature retain better, and leadership claims the feature caused retention.'],
      ['ab-testing', 'How do you design an A/B test?', 'scenario', 'Define hypothesis, primary metric, guardrail metrics, randomization unit, sample size, duration, segmentation, and stopping rules. Avoid peeking, novelty effects, interference, and multiple-testing mistakes. Analyze practical and statistical significance before rollout.', 'A team wants to test an AI-generated recommendation panel.'],
      ['sampling-bias', 'What is sampling bias and why does it matter?', 'concept', 'Sampling bias occurs when the sample does not represent the population of interest. It can make model evaluation, experiments, and metrics misleading. Strong answers discuss selection effects, coverage gaps, non-response, survivorship bias, and ways to correct or measure representativeness.', 'A model is evaluated only on users who completed a support survey.']
    ]
  },
  {
    slug: 'machine-learning-fundamentals',
    title: 'Machine Learning Fundamentals',
    description: 'Classical ML algorithms, evaluation metrics, model selection, leakage, and production tradeoffs.',
    difficulty: 'intermediate',
    roles: ['data-scientist', 'ml-engineer', 'ai-engineer'],
    questions: [
      ['classification-metrics', 'Compare precision, recall, F1, and ROC-AUC.', 'concept', 'Precision measures correctness among predicted positives. Recall measures coverage of actual positives. F1 balances precision and recall. ROC-AUC measures ranking ability across thresholds. The right metric depends on business cost of false positives and false negatives.', 'A fraud model catches more fraud but blocks more legitimate transactions.'],
      ['linear-vs-logistic', 'What is the difference between linear regression and logistic regression?', 'concept', 'Linear regression predicts continuous values by modeling a linear relationship. Logistic regression predicts class probabilities using a logistic function and is commonly used for binary classification. Candidates should discuss assumptions, loss functions, interpretability, and thresholding.', 'You need to predict house price versus whether a customer will churn.'],
      ['tree-vs-boosting', 'Compare decision trees, random forests, and gradient boosting.', 'tradeoff', 'Decision trees are interpretable but can overfit. Random forests reduce variance by averaging many trees. Gradient boosting builds trees sequentially to correct errors and often performs strongly on tabular data, but can require careful tuning and monitoring.', 'A tabular risk model needs strong performance and reasonable explainability.'],
      ['data-leakage', 'What is data leakage?', 'debugging', 'Data leakage happens when training features contain information that would not be available at prediction time or when validation data contaminates training. It produces inflated offline metrics and poor production performance. Detection involves time-based splits, feature audits, pipeline review, and suspicious metric investigation.', 'A churn model uses a feature generated after the cancellation request.'],
      ['model-selection', 'How do you choose a model for a production ML problem?', 'architecture', 'Choose based on metric fit, data size, feature types, interpretability, latency, cost, maintainability, robustness, fairness, and monitoring needs. Start with simple baselines, compare candidates on validation data, and select the simplest model that meets business and operational requirements.', 'A team asks whether to use XGBoost, a neural network, or an LLM for tabular prediction.']
    ]
  },
  {
    slug: 'feature-engineering',
    title: 'Feature Engineering',
    description: 'Feature selection, encoding, scaling, leakage, missing data, time features, and embedding features.',
    difficulty: 'intermediate',
    roles: ['data-scientist', 'ml-engineer'],
    questions: [
      ['feature-engineering-purpose', 'Why is feature engineering important?', 'concept', 'Feature engineering turns raw data into useful model inputs. Good features can improve accuracy, stability, interpretability, and data efficiency. Candidates should mention domain knowledge, leakage prevention, feature freshness, and production availability.', 'A tabular model performs poorly even though the algorithm is strong.'],
      ['categorical-encoding', 'How do you encode categorical variables?', 'scenario', 'Options include one-hot encoding, ordinal encoding, target encoding, hashing, learned embeddings, and frequency features. The choice depends on cardinality, model type, leakage risk, interpretability, and unseen categories. Target encoding must be done with cross-validation or time-aware methods to avoid leakage.', 'A fraud model has merchant IDs, country codes, and device types.'],
      ['missing-data', 'How do you handle missing data?', 'scenario', 'Approaches include deletion, mean or median imputation, model-based imputation, missing indicators, domain-specific defaults, or treating missing as a category. The right approach depends on why data is missing and whether missingness itself is predictive.', 'Important customer attributes are missing for newer users.'],
      ['feature-leakage', 'How can feature engineering introduce leakage?', 'debugging', 'Leakage appears when features use future information, target-derived signals, improper aggregations, or preprocessing fitted on full data. Time-aware splits, pipeline isolation, feature lineage, and production simulation help prevent it.', 'A feature uses total refunds in a period that includes time after the prediction event.'],
      ['embedding-features', 'When would you use embeddings as ML features?', 'tradeoff', 'Embeddings are useful for text, images, products, users, or entities where semantic similarity matters. They can improve classical models but add dependency on embedding models, versioning, drift monitoring, and explainability challenges.', 'A churn model wants to include support ticket text and product descriptions.']
    ]
  },
  {
    slug: 'ml-system-design',
    title: 'ML System Design',
    description: 'Recommendation, fraud, ranking, batch and real-time inference, feature stores, registries, and monitoring.',
    difficulty: 'advanced',
    roles: ['ml-engineer', 'ai-engineer', 'principal-engineer'],
    questions: [
      ['recommendation-system', 'Design a recommendation system.', 'system-design', 'A strong design covers candidate generation, ranking, user/item features, feedback loops, online and offline metrics, cold start, exploration, serving latency, feature freshness, experimentation, and monitoring. Candidates should discuss business objectives and guardrails.', 'An e-commerce company wants personalized product recommendations.'],
      ['fraud-detection', 'Design a fraud detection system.', 'system-design', 'Include real-time feature generation, model scoring, rules, risk thresholds, human review, feedback labels, drift monitoring, adversarial behavior, latency constraints, and explainability. Strong answers balance fraud capture with false-positive customer impact.', 'A payments company needs to score transactions in under 100 ms.'],
      ['batch-vs-realtime', 'Compare batch inference and real-time inference.', 'tradeoff', 'Batch inference is efficient for periodic scoring and high throughput. Real-time inference is needed when predictions must react immediately to user or event context. Tradeoffs include latency, freshness, infrastructure complexity, cost, and monitoring.', 'A churn model runs weekly, while fraud detection must run immediately.'],
      ['feature-store', 'What problem does a feature store solve?', 'architecture', 'A feature store manages reusable features, online/offline consistency, feature lineage, freshness, discovery, and access control. It helps avoid training-serving skew and duplicate feature logic. It is valuable when many teams share features across models.', 'Multiple models compute customer risk features differently.'],
      ['model-monitoring', 'What should you monitor in production ML?', 'architecture', 'Monitor service health, latency, throughput, prediction distributions, feature drift, data quality, model performance, fairness, business metrics, feedback labels, and incidents. Monitoring should trigger investigation and retraining workflows when thresholds are breached.', 'A model’s accuracy quietly degrades after a market change.']
    ]
  },
  {
    slug: 'enterprise-genai-architecture',
    title: 'Enterprise GenAI Architecture',
    description: 'Multi-tenant platforms, access control, governance, observability, cost, and reliability.',
    difficulty: 'advanced',
    roles: roles.architect,
    questions: [
      ['secure-enterprise-rag', 'Design a secure enterprise RAG platform.', 'system-design', 'A strong design includes ingestion, parsing, chunking, metadata, embeddings, indexing, ACL-filtered retrieval, reranking, prompt assembly, generation, citations, logging, evaluation, and feedback. Security includes identity, tenant isolation, encryption, audit logs, PII handling, and prompt injection defenses.', 'Employees need to ask questions across HR, legal, engineering, and finance documents.'],
      ['model-gateway', 'Why would an enterprise use a model gateway?', 'architecture', 'A model gateway centralizes model access, routing, authentication, authorization, logging, rate limits, cost tracking, retries, fallbacks, caching, and policy enforcement. It reduces duplicated integrations and gives platform teams control over quality, latency, and spend.', 'Many teams independently call different LLM providers with no shared governance.'],
      ['multi-tenancy', 'How do you design multi-tenancy for GenAI platforms?', 'architecture', 'Multi-tenancy requires tenant isolation in storage, indexes, prompts, logs, credentials, rate limits, and access policies. Strong designs include separate encryption keys where needed, tenant-aware retrieval filters, quota management, audit logs, and tests for cross-tenant leakage.', 'A SaaS company wants one GenAI platform for many customers.'],
      ['cost-optimization', 'How would you reduce GenAI cost without damaging quality?', 'tradeoff', 'Use model routing, prompt compression, caching, retrieval precision, smaller models for simple tasks, batching, token budgets, and output length controls. Measure cost per successful task and evaluate quality after each optimization.', 'An internal assistant becomes expensive as usage grows.'],
      ['governance', 'What governance does an enterprise GenAI platform need?', 'architecture', 'Governance includes model approval, prompt review, data access policies, tool permissions, audit logs, safety standards, evaluation gates, incident response, vendor risk management, and documentation. It should enable teams without creating uncontrolled risk.', 'Executives want many teams to build GenAI apps safely and consistently.']
    ]
  },
  {
    slug: 'genai-system-design',
    title: 'GenAI System Design',
    description: 'Design problems for enterprise assistants, document intelligence, AI search, coding assistants, memory, and evaluation platforms.',
    difficulty: 'advanced',
    roles: roles.architect,
    questions: [
      ['enterprise-doc-assistant', 'Design ChatGPT for enterprise documents.', 'system-design', 'Cover document ingestion, permissions, parsing, chunking, retrieval, reranking, answer generation, citations, conversation state, feedback, observability, model routing, and governance. Discuss non-functional requirements such as latency, scale, security, cost, availability, and freshness.', 'A company wants a conversational assistant over millions of internal documents.'],
      ['document-intelligence-platform', 'Design a document intelligence platform.', 'system-design', 'Include upload, OCR, layout-aware parsing, table extraction, classification, entity extraction, human review, storage, search, RAG, confidence scoring, and audit logs. Discuss accuracy, throughput, latency, compliance, and integration with downstream workflows.', 'An insurance company processes claims documents, forms, and invoices.'],
      ['ai-search-500m-docs', 'Design AI search over 500 million documents.', 'system-design', 'Discuss ingestion pipelines, sharding, metadata, lexical and vector indexes, hybrid retrieval, reranking, caching, access control, query understanding, evaluation, freshness, and cost. Scale choices should cover index partitioning, recall-latency tradeoffs, and monitoring.', 'A global enterprise wants semantic and keyword search across all knowledge repositories.'],
      ['enterprise-memory-system', 'Design an enterprise memory system for AI assistants.', 'system-design', 'Cover memory types, write policies, retrieval policies, consent, privacy, retention, correction, tenant isolation, user controls, summarization, and evaluation. Strong answers avoid storing everything and distinguish user memory from task state.', 'A productivity assistant should remember preferences and project context safely.'],
      ['evaluation-platform', 'Design an evaluation platform for GenAI apps.', 'system-design', 'Include dataset management, prompt/model versioning, test runs, LLM-as-judge, human review, metrics, trace replay, regression gates, dashboards, and deployment integration. Discuss calibration, cost, reproducibility, and business-specific rubrics.', 'Many teams need to compare prompts and models before production rollout.']
    ]
  },
  {
    slug: 'architect-rounds',
    title: 'Architect Rounds',
    description: 'Architecture tradeoffs, platform strategy, reliability, observability, governance, vendor selection, and cost.',
    difficulty: 'advanced',
    roles: roles.architect,
    questions: [
      ['rag-vs-finetune-architect', 'At architecture level, how do you decide between RAG and fine-tuning?', 'tradeoff', 'RAG is for grounding answers in changing or access-controlled knowledge. Fine-tuning is for behavior, style, domain adaptation, or task performance. Architects should consider data freshness, governance, cost, latency, evaluation, and whether a hybrid approach is needed.', 'A CTO asks for one strategy across support, legal, and engineering assistants.'],
      ['postgres-vs-redis-memory', 'Postgres vs Redis for AI memory: how do you choose?', 'tradeoff', 'Postgres is durable, relational, queryable, and strong for governed long-term memory. Redis is fast and useful for ephemeral session state, caches, and short-lived memory. A strong answer discusses consistency, retention, search needs, scaling, cost, and compliance.', 'An assistant needs both session context and long-term user preferences.'],
      ['sse-vs-websockets', 'SSE vs WebSockets for streaming LLM output?', 'tradeoff', 'SSE is simpler and works well for one-way server-to-client token streaming. WebSockets support bidirectional communication and richer interactive protocols. Choose based on interaction pattern, infrastructure support, reconnection, scale, and operational complexity.', 'A web assistant streams model tokens and occasionally needs client-side interruption.'],
      ['reliability', 'How do you design reliable GenAI systems?', 'architecture', 'Reliability requires retries, fallbacks, circuit breakers, rate limits, provider failover, timeouts, graceful degradation, caching, evaluation gates, monitoring, and incident response. Architects should define SLOs and distinguish model errors from system errors.', 'A provider outage breaks several internal assistants.'],
      ['vendor-selection', 'How do you evaluate GenAI vendors?', 'architecture', 'Evaluate quality on your tasks, security, compliance, data usage terms, latency, uptime, roadmap, pricing, integration fit, observability, support, lock-in risk, and exit strategy. Strong answers include proof-of-concept evaluation and contractual governance.', 'Procurement asks how to choose between model providers and AI platforms.']
    ]
  },
  {
    slug: 'leadership-rounds',
    title: 'Leadership Rounds',
    description: 'AI ROI, stakeholder alignment, adoption, governance, risk, vendor management, team enablement, and business impact.',
    difficulty: 'advanced',
    roles: ['engineering-manager', 'principal-engineer', 'genai-architect'],
    questions: [
      ['ai-roi', 'How do you measure ROI for an AI initiative?', 'leadership', 'Tie AI work to measurable business outcomes such as time saved, revenue lift, risk reduction, quality improvement, deflection, or faster cycle time. Include adoption, operating cost, accuracy, human review cost, and opportunity cost. Avoid measuring only model accuracy or demo quality.', 'Executives ask whether an internal assistant is worth continued investment.'],
      ['stakeholder-management', 'How do you manage stakeholders for GenAI projects?', 'leadership', 'Align product, legal, security, compliance, data owners, engineering, and end users early. Define use-case scope, risk level, success metrics, review checkpoints, and escalation paths. Strong leaders communicate uncertainty and tradeoffs clearly.', 'A GenAI project touches HR data and customer-facing workflows.'],
      ['adoption-strategy', 'How do you drive adoption of AI tools?', 'leadership', 'Adoption requires solving real pain points, workflow integration, trust, training, feedback channels, champions, measurement, and iteration. Users need clear boundaries of when to trust, verify, or escalate AI outputs.', 'A well-built assistant has low usage after launch.'],
      ['risk-management', 'How do you manage GenAI risk?', 'leadership', 'Identify risks such as hallucination, privacy leakage, bias, security, compliance, vendor dependency, and automation errors. Mitigate with governance, human review, access controls, evaluations, logging, red teaming, policy, and incident response.', 'A business team wants to automate customer-impacting decisions with an LLM.'],
      ['team-enablement', 'How do you enable teams to build GenAI responsibly?', 'leadership', 'Provide reference architectures, shared platforms, approved models, reusable evaluation tools, security patterns, training, documentation, and office hours. Balance centralized governance with team autonomy.', 'Many product teams want to ship AI features but lack deep GenAI experience.']
    ]
  },
  {
    slug: 'mock-interviews',
    title: 'Mock Interviews',
    description: 'Role-specific warm-ups, deep technical questions, system design prompts, scenarios, and scoring rubrics.',
    difficulty: 'mixed',
    roles: ['ai-engineer', 'data-scientist', 'ml-engineer', 'genai-engineer', 'genai-architect'],
    questions: [
      ['ai-engineer-mock', 'AI Engineer mock interview: how would you approach the round?', 'scenario', 'Start by clarifying role expectations, then prepare fundamentals, applied ML, GenAI basics, coding, system design, and production tradeoffs. In the interview, structure answers, state assumptions, discuss alternatives, and connect choices to business constraints.', 'A candidate has 7 days to prepare for an AI Engineer onsite.'],
      ['data-scientist-mock', 'Data Scientist mock interview: what should you demonstrate?', 'scenario', 'Demonstrate statistical reasoning, experiment design, metric selection, modeling judgment, communication, and business framing. Strong candidates explain assumptions, uncertainty, causality limits, and how analysis changes decisions.', 'An interviewer asks you to evaluate whether an AI feature improved retention.'],
      ['ml-engineer-mock', 'ML Engineer mock interview: what should you emphasize?', 'scenario', 'Emphasize production ML systems, data pipelines, feature stores, model serving, monitoring, scalability, reliability, and tradeoffs. Be ready to design real-time and batch inference systems and explain how models fail in production.', 'You are asked to design a fraud detection platform.'],
      ['genai-engineer-mock', 'GenAI Engineer mock interview: what should you prepare?', 'scenario', 'Prepare LLM fundamentals, prompting, RAG, embeddings, vector search, tool calling, evaluations, safety, cost, latency, and observability. Strong candidates discuss end-to-end application behavior rather than only model APIs.', 'You are asked to build a RAG assistant over enterprise policies.'],
      ['genai-architect-mock', 'GenAI Architect mock interview: what should you demonstrate?', 'scenario', 'Demonstrate platform thinking, governance, security, multi-tenancy, model strategy, evaluation, cost controls, reliability, and organizational adoption. Architects should navigate ambiguity and make tradeoffs explicit.', 'A panel asks for a GenAI platform strategy across multiple business units.']
    ]
  },
  {
    slug: 'cheat-sheets',
    title: 'Cheat Sheets',
    description: 'Concise revision prompts for LLMs, prompting, embeddings, RAG, agents, LLMOps, statistics, ML, and system design.',
    difficulty: 'mixed',
    roles: roles.genai,
    questions: [
      ['llm-cheat-sheet', 'Give a concise LLM fundamentals cheat sheet.', 'concept', 'Know tokens, transformers, attention, context windows, pretraining, instruction tuning, RLHF or DPO, sampling, hallucinations, grounding, and model selection. Always connect model behavior to production risks: cost, latency, reliability, and evaluation.', 'You have 15 minutes before an LLM fundamentals screen.'],
      ['rag-cheat-sheet', 'Give a concise RAG cheat sheet.', 'concept', 'Remember ingestion, parsing, chunking, embeddings, indexing, retrieval, reranking, prompt assembly, generation, citations, and evaluation. Key metrics include context recall, context precision, faithfulness, groundedness, answer relevance, and citation accuracy.', 'You need a final review before a RAG design round.'],
      ['agents-cheat-sheet', 'Give a concise agents cheat sheet.', 'concept', 'Know agent versus workflow, tool calling, planning, memory, reflection, human review, safety, evaluation, and tracing. Use agents for open-ended dynamic tasks; use deterministic workflows when steps are known and reliability matters.', 'You are preparing for an agent architecture discussion.'],
      ['llmops-cheat-sheet', 'Give a concise LLMOps cheat sheet.', 'concept', 'Track prompt versions, model versions, datasets, evals, traces, costs, latency, safety events, user feedback, and deployment history. Use golden datasets, regression tests, observability, and rollback paths before production rollout.', 'You need to explain how to operate a GenAI app after launch.'],
      ['stats-ml-cheat-sheet', 'Give a concise statistics and ML cheat sheet.', 'concept', 'Review p-values, confidence intervals, A/B tests, sampling bias, leakage, train-validation-test splits, precision, recall, F1, ROC-AUC, overfitting, underfitting, feature engineering, and monitoring. Tie every metric to business impact.', 'You are preparing for a mixed data science and ML engineering interview.']
    ]
  }
]

const expansionBlueprints = {
  'ai-fundamentals': [
    'bias-variance tradeoff',
    'AI project failure reasons',
    'data quality versus model complexity',
    'model interpretability',
    'AI ethics and fairness',
    'baseline model selection',
    'offline metrics versus business metrics',
    'human review in AI systems',
    'model drift',
    'AI risk assessment'
  ],
  'llm-fundamentals': [
    'tokenization failure modes',
    'temperature and sampling controls',
    'instruction tuning',
    'RLHF versus DPO',
    'quantization tradeoffs',
    'model distillation',
    'multimodal LLMs',
    'reasoning models',
    'context length extension',
    'model benchmarking'
  ],
  'prompt-engineering': [
    'prompt chaining',
    'ReAct prompting',
    'role prompting',
    'negative prompting',
    'context engineering',
    'function calling',
    'prompt templates',
    'prompt evaluation',
    'prompt leakage',
    'system prompt design'
  ],
  'embeddings-vector-databases': [
    'embedding model selection',
    'embedding dimensionality',
    'index refresh strategy',
    'vector database sharding',
    'filter-first versus search-first retrieval',
    'reranking after vector search',
    'embedding versioning',
    'cold start indexing',
    'duplicate document handling',
    'vector database vendor selection'
  ],
  'rag-fundamentals': [
    'grounding and citations',
    'document parsing quality',
    'retrieval recall',
    'retrieval precision',
    'context packing',
    'answer refusal behavior',
    'source freshness',
    'query intent classification',
    'RAG observability',
    'user feedback loops'
  ],
  'advanced-rag': [
    'context compression',
    'agentic RAG',
    'adaptive retrieval',
    'multi-tenant RAG',
    'document intelligence RAG',
    'retrieval routing',
    'query expansion',
    'hybrid RAG',
    'semantic chunking at scale',
    'RAG regression testing'
  ],
  'agent-fundamentals': [
    'agent planning',
    'agent reflection',
    'agent loop termination',
    'tool permission design',
    'agent state management',
    'sandboxing agents',
    'agent observability',
    'agent cost control',
    'agent fallback strategy',
    'agent safety testing'
  ],
  'multi-agent-systems': [
    'specialist agent design',
    'agent handoff',
    'agent registry',
    'agent marketplace governance',
    'multi-agent memory',
    'conflict resolution between agents',
    'parallel agent execution',
    'multi-agent evaluation',
    'agent federation',
    'multi-agent anti-patterns'
  ],
  'mcp-a2a': [
    'MCP server design',
    'MCP resource exposure',
    'MCP tool versioning',
    'agent discovery',
    'capability negotiation',
    'cross-agent authentication',
    'tool registry governance',
    'A2A failure handling',
    'enterprise audit requirements',
    'protocol adoption roadmap'
  ],
  'llmops-evaluation': [
    'prompt regression testing',
    'dataset versioning',
    'groundedness evaluation',
    'faithfulness evaluation',
    'answer relevance evaluation',
    'context precision and recall',
    'human evaluation workflow',
    'model drift in LLM apps',
    'latency SLOs',
    'production incident response'
  ],
  'statistics-for-data-science': [
    'Bayes theorem',
    'normal distribution',
    'central limit theorem',
    'hypothesis test design',
    'statistical power',
    'sample size calculation',
    'multiple comparison correction',
    'covariance versus correlation',
    'outlier treatment',
    'experiment guardrail metrics'
  ],
  'machine-learning-fundamentals': [
    'train validation test split',
    'cross validation',
    'regularization',
    'class imbalance',
    'calibration',
    'clustering evaluation',
    'PCA dimensionality reduction',
    'SVM intuition',
    'KNN tradeoffs',
    'Naive Bayes assumptions'
  ],
  'feature-engineering': [
    'feature selection',
    'feature scaling',
    'normalization versus standardization',
    'time-based features',
    'text feature extraction',
    'outlier features',
    'feature freshness',
    'feature lineage',
    'high-cardinality features',
    'feature monitoring'
  ],
  'ml-system-design': [
    'search ranking system',
    'churn prediction system',
    'predictive maintenance system',
    'model registry design',
    'online feature serving',
    'shadow deployment',
    'canary rollout for models',
    'feedback label pipeline',
    'training-serving skew',
    'model rollback strategy'
  ],
  'enterprise-genai-architecture': [
    'prompt registry',
    'evaluation service',
    'audit logging',
    'data privacy controls',
    'compliance review workflow',
    'access control integration',
    'enterprise model routing',
    'platform cost allocation',
    'tenant-aware observability',
    'GenAI platform operating model'
  ],
  'genai-system-design': [
    'secure RAG platform',
    'multi-agent research assistant',
    'AI coding assistant',
    'customer support copilot',
    'meeting intelligence assistant',
    'enterprise knowledge graph assistant',
    'personalized learning assistant',
    'contract review assistant',
    'LLM gateway platform',
    'AI workflow automation platform'
  ],
  'architect-rounds': [
    'model routing strategy',
    'observability architecture',
    'governance architecture',
    'cost optimization strategy',
    'build versus buy platform decision',
    'data residency strategy',
    'AI reliability strategy',
    'security review strategy',
    'platform roadmap planning',
    'organizational adoption tradeoffs'
  ],
  'leadership-rounds': [
    'AI portfolio prioritization',
    'budget planning for AI',
    'vendor management',
    'AI governance committee',
    'change management',
    'measuring business impact',
    'cross-functional alignment',
    'responsible AI culture',
    'team hiring strategy',
    'executive communication'
  ],
  'mock-interviews': [
    'warm-up question strategy',
    'deep technical question strategy',
    'system design question strategy',
    'scenario question strategy',
    'answer structuring',
    'handling unknown questions',
    'whiteboard communication',
    'tradeoff explanation',
    'post-interview review',
    'role-specific study plan'
  ],
  'cheat-sheets': [
    'prompt engineering revision',
    'embeddings revision',
    'vector database revision',
    'advanced RAG revision',
    'multi-agent revision',
    'MCP versus A2A revision',
    'enterprise architecture revision',
    'system design revision',
    'statistics revision',
    'ML fundamentals revision'
  ]
}

const expansionTypes = ['concept', 'scenario', 'tradeoff', 'architecture', 'debugging']

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function buildExpansionItem(topic, concept, index) {
  const type = topic.slug === 'leadership-rounds'
    ? 'leadership'
    : topic.slug.includes('system-design')
      ? 'system-design'
      : expansionTypes[index % expansionTypes.length]

  const readable = concept.replace(/\bAI\b/g, 'AI')
  const title = type === 'system-design'
    ? `Design around ${readable}.`
    : `How would you explain ${readable} in a ${topic.title} interview?`

  const expectedAnswer = `A strong answer should define ${readable}, explain why it matters for ${topic.title.toLowerCase()}, and connect it to a practical implementation decision. The candidate should describe the core mechanism, identify where it appears in a production system, discuss tradeoffs such as quality, cost, latency, safety, governance, and maintainability, and name how they would evaluate whether the approach is working. For senior or architect-level interviews, the answer should also include failure modes, ownership boundaries, and rollout considerations.`

  const scenario = `An interviewer asks you to reason through ${readable} for an enterprise AI use case where correctness, cost, security, and adoption all matter.`

  return [`extra-${slugify(concept)}`, title, type, expectedAnswer, scenario]
}

for (const topic of topics) {
  const extras = expansionBlueprints[topic.slug] ?? []
  const needed = Math.max(0, 15 - topic.questions.length)
  topic.questions.push(...extras.slice(0, needed).map((concept, index) => buildExpansionItem(topic, concept, index)))
}

function buildAnswerFramework(topic, title, type, expectedAnswer, scenario) {
  const scenarioResponse = type === 'tradeoff'
    ? `In this scenario, I would compare the practical options instead of picking a default. ${expectedAnswer} I would choose the option that best matches the current data freshness, control, cost, latency, and governance needs, then validate the decision with a small production-like evaluation.`
    : type === 'system-design'
      ? `In this scenario, I would first clarify scale, users, data sources, latency, security, and quality expectations. Then I would design the flow end to end: ingestion or request handling, core model/retrieval components, evaluation, observability, access control, and rollout. ${expectedAnswer}`
      : type === 'architecture'
        ? `In this scenario, I would turn the concept into an architecture decision. ${expectedAnswer} I would define the platform boundary, ownership, controls, operational metrics, and failure handling before recommending it for production.`
        : type === 'debugging'
          ? `In this scenario, I would treat the question as a production issue. ${expectedAnswer} I would confirm the symptom, inspect data and traces, isolate the failing layer, fix the immediate problem, and add monitoring or regression tests to prevent recurrence.`
          : type === 'leadership'
            ? `In this scenario, I would align stakeholders on the business outcome first. ${expectedAnswer} I would make the risk, adoption plan, governance checkpoints, and success metrics explicit so the AI work is useful beyond the demo.`
            : type === 'scenario'
              ? `In this scenario, I would act on the user problem directly. ${expectedAnswer} I would describe the concrete change I would make, why it fits the situation, and how I would verify that the user experience or system behavior improved.`
              : `In this scenario, I would define the concept briefly and apply it to the actual product, model, workflow, or architecture decision. ${expectedAnswer} I would close by naming the production signal that proves the concept was applied correctly.`

  const howToApply = type === 'system-design' || type === 'architecture'
    ? `I would apply this by defining the request/data flow, deciding which components own retrieval, reasoning, validation, storage, and observability, and then adding security, evaluation, and rollout gates before production use.`
    : type === 'tradeoff'
      ? `I would apply this by listing two or three viable choices, selecting one for the scenario, naming the risk I accept, and defining the signal that would cause me to revisit the decision.`
      : type === 'debugging'
        ? `I would apply this by reproducing the issue, checking the most likely failure points, comparing expected versus actual behavior, and turning the fix into a test or monitor.`
        : type === 'scenario'
          ? `I would apply this by making the user question or business problem concrete, selecting the implementation step that removes ambiguity, and validating the improvement through answer quality, retrieval quality, user feedback, or operational metrics.`
        : `I would apply this by connecting the concept to the user workflow, choosing a practical implementation path, and measuring whether the result improves quality, speed, reliability, or user trust.`

  const example = type === 'system-design'
    ? `For example, if the scenario is "${scenario}", I would sketch a production design with clear data boundaries, retrieval/model choices, evaluation datasets, fallback paths, and deployment stages rather than only naming technologies.`
    : type === 'tradeoff'
      ? `For example, if the scenario is "${scenario}", I would state which option I choose first, why the other option is less suitable right now, and what metric or incident would make me switch.`
      : type === 'scenario'
        ? `For example, if the scenario is "${scenario}", I would turn the vague request into a concrete system action, show the expected output, and compare it against a baseline answer or workflow to prove the change helped.`
      : `For example, if the scenario is "${scenario}", I would describe the first implementation step, the expected improvement, and the evidence I would collect to prove the answer works in practice.`

  const tradeoffs = `The main tradeoffs are quality, latency, cost, maintainability, governance, and user trust. I would avoid optimizing only one dimension; for interview purposes I would explain the choice, the risk, the mitigation, and the metric that shows whether the decision is working.`

  return {
    scenarioResponse,
    howToApply,
    example,
    tradeoffs,
    conciseAnswer: `${expectedAnswer} In the scenario "${scenario}", I would apply this by choosing the approach that fits the real constraint, explaining the tradeoff, and validating the result with measurable quality, reliability, cost, or adoption signals.`
  }
}

function buildRelatedQuestions(topic, index) {
  const links = []
  const previous = topic.questions[index - 1]
  const next = topic.questions[index + 1]
  const foundation = topic.questions[0]

  if (previous) {
    links.push({
      id: previous[0],
      title: previous[1],
      relation: 'previous'
    })
  }

  if (foundation && foundation[0] !== topic.questions[index][0] && !links.some((link) => link.id === foundation[0])) {
    links.push({
      id: foundation[0],
      title: foundation[1],
      relation: 'foundation'
    })
  }

  if (next) {
    links.push({
      id: next[0],
      title: next[1],
      relation: 'next'
    })
  }

  return links
}

function buildRealWorldExample(topic, title, type, scenario) {
  if (type === 'system-design') {
    return `A good real-world answer would say: for "${scenario}", I would design the system from user request to final response, define the data and permission boundaries, choose retrieval/model components, add evaluation and tracing, and roll it out behind a measured pilot before expanding usage.`
  }

  if (type === 'architecture') {
    return `A good real-world answer would say: for "${scenario}", I would define the architecture boundary, decide what the platform owns versus the application team owns, enforce security and governance at the right layer, and monitor the system with reliability and quality metrics.`
  }

  if (type === 'tradeoff') {
    return `A good real-world answer would say: for "${scenario}", I would compare the options, choose the one that fits the current constraints, name the downside I am accepting, and define the metric or user feedback that would make me change the decision.`
  }

  if (type === 'debugging') {
    return `A good real-world answer would say: for "${scenario}", I would treat it as an incident, reproduce the symptom, inspect traces and data quality, isolate the failing step, ship the fix, and add a regression test or alert so the issue does not return.`
  }

  if (type === 'leadership') {
    return `A good real-world answer would say: for "${scenario}", I would align stakeholders on the business outcome, define what success and failure look like, manage risk through governance, and drive adoption with feedback loops rather than assuming the AI feature will be trusted automatically.`
  }

  if (type === 'scenario') {
    return `A good real-world answer would say: for "${scenario}", I would take a concrete action, explain why it fits the situation, show the expected behavior with an example, and measure whether the user outcome improved.`
  }

  return `A good real-world answer would say: for "${scenario}", I would define the concept briefly, apply it to the product or platform decision, give one implementation example, and state the tradeoff I would watch in production.`
}

function buildQuestion(topic, item, index) {
  const [id, title, type, expectedAnswer, scenario] = item
  const answerFramework = buildAnswerFramework(topic, title, type, expectedAnswer, scenario)
  const difficulty = topic.difficulty === 'mixed'
    ? (type === 'concept' ? 'intermediate' : 'advanced')
    : topic.difficulty

  return {
    id,
    title,
    difficulty,
    type,
    roles: topic.roles,
    tags: [topic.slug, type, ...title.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).slice(0, 3)],
    estimatedMinutes: type === 'system-design' ? 12 : type === 'architecture' ? 8 : 6,
    points: type === 'system-design' ? 15 : 10,
    scenario,
    expectedAnswer: answerFramework.conciseAnswer,
    answerFramework: {
      scenarioResponse: answerFramework.scenarioResponse,
      howToApply: answerFramework.howToApply,
      example: answerFramework.example,
      tradeoffs: answerFramework.tradeoffs
    },
    relatedQuestions: buildRelatedQuestions(topic, index),
    commonMistakes: [
      'Answering with definitions only and not connecting to a practical system.',
      'Skipping the scenario and giving a generic textbook explanation.',
      'Ignoring tradeoffs such as cost, latency, quality, safety, and maintainability.',
      'Failing to mention how the approach would be evaluated in production.'
    ],
    followUpQuestions: [
      `How would you validate this for ${topic.title}?`,
      'What would change at enterprise scale?',
      'What failure modes would you monitor?'
    ],
    realWorldExample: buildRealWorldExample(topic, title, type, scenario),
    interviewerNotes: `A strong candidate should give a structured answer, make assumptions explicit, discuss tradeoffs, and explain how they would test the decision rather than relying on buzzwords.`,
    rubric: {
      correctness: type === 'system-design' ? 4 : 3,
      depth: type === 'concept' ? 2 : 3,
      tradeoffs: type === 'concept' ? 1 : 2,
      practicality: 2,
      clarity: 1
    },
    order: index + 1
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true })

for (const topic of topics) {
  const output = {
    slug: topic.slug,
    title: topic.title,
    description: topic.description,
    questions: topic.questions.map((question, index) => buildQuestion(topic, question, index))
  }

  fs.writeFileSync(
    path.join(OUT_DIR, `${topic.slug}.json`),
    JSON.stringify(output, null, 2)
  )
}

const manifest = {
  title: 'GenAI Interview Prep',
  description: 'Structured question banks, scenarios, practice sessions, and mock tests for GenAI, AI engineering, data science, and architecture interviews.',
  topics: topics.map((topic) => ({
    slug: topic.slug,
    title: topic.title,
    description: topic.description,
    questionCount: topic.questions.length,
    roles: topic.roles,
    difficulty: topic.difficulty
  })),
  mockTests: [
    {
      id: 'genai-engineer-45',
      title: 'GenAI Engineer Mock',
      role: 'genai-engineer',
      durationMinutes: 45,
      questionCount: 12,
      topics: ['llm-fundamentals', 'prompt-engineering', 'embeddings-vector-databases', 'rag-fundamentals', 'llmops-evaluation'],
      difficulty: 'mixed'
    },
    {
      id: 'genai-architect-60',
      title: 'GenAI Architect Mock',
      role: 'genai-architect',
      durationMinutes: 60,
      questionCount: 15,
      topics: ['advanced-rag', 'multi-agent-systems', 'enterprise-genai-architecture', 'genai-system-design', 'architect-rounds'],
      difficulty: 'advanced'
    },
    {
      id: 'data-scientist-45',
      title: 'Data Scientist Mock',
      role: 'data-scientist',
      durationMinutes: 45,
      questionCount: 10,
      topics: ['statistics-for-data-science', 'machine-learning-fundamentals', 'feature-engineering', 'mock-interviews'],
      difficulty: 'mixed'
    }
  ]
}

fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2))

console.log(`Seeded ${topics.length} interview topics and ${topics.reduce((sum, topic) => sum + topic.questions.length, 0)} questions.`)
