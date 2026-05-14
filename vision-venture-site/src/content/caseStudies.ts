export type CaseStudySectionCard = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  context?: string;
  tags: string[];
  overview: string;
  problemCards: CaseStudySectionCard[];
  role: {
    headline: string;
    responsibilities: string[];
  };
  approach: {
    headline: string;
    steps: { title: string; body: string }[];
    strategicNotes: { title: string; body: string }[];
  };
  diagrams: { title: string; caption: string; src: string }[];
  technology: string[];
  outcomes: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ai-innovation-incubator",
    title: "AI Innovation Program & Product Incubator",
    subtitle:
      "Designing a scalable framework for evaluating, validating, and governing AI-enabled healthcare products.",
    context: "Breastcancer.org",
    tags: [
      "AI product strategy",
      "Governance",
      "Healthcare innovation",
      "Workflow design",
    ],
    overview:
      "Breastcancer.org needed a repeatable way to evaluate and pilot AI-enabled digital products while protecting medical trust. I built a structured innovation and incubation framework that aligned stakeholders, defined guardrails, and accelerated pilot readiness.",
    problemCards: [
      {
        title: "No repeatable evaluation process",
        body: "Innovation demand was rising, but there wasn’t a formal system to evaluate, prioritize, and pilot AI-enabled products.",
      },
      {
        title: "Fragmented ownership",
        body: "Efforts were spread across departments without clear governance, decision criteria, or shared language.",
      },
      {
        title: "Trust-sensitive constraints",
        body: "Healthcare content required explicit boundaries, sourcing transparency, escalation paths, and bias/hallucination risk controls.",
      },
    ],
    role: {
      headline: "Led product strategy + innovation planning across AI initiatives.",
      responsibilities: [
        "Product discovery",
        "Innovation governance design",
        "Stakeholder alignment",
        "AI workflow planning",
        "Pilot prioritization",
        "Product requirements development",
        "Risk and trust evaluation",
        "Cross-functional coordination (research, content, tech, leadership)",
      ],
    },
    approach: {
      headline: "Built an internal incubation system (not just ideas).",
      steps: [
        {
          title: "Innovation framework + intake",
          body: "Designed a repeatable process for proposing, evaluating, and incubating AI product concepts with clear gates and criteria.",
        },
        {
          title: "Discovery workflows",
          body: "Created structured discovery to identify patient pain points, workflow friction, and engagement gaps grounded in real usage signals.",
        },
        {
          title: "MVP definitions + validation criteria",
          body: "Produced product sheets, MVP scopes, and validation criteria for multiple AI-enabled concepts to reduce ambiguity and speed alignment.",
        },
        {
          title: "Governance guardrails",
          body: "Established boundaries for AI-generated medical content, sourcing transparency, escalation pathways, and review requirements.",
        },
        {
          title: "Pilot sequencing + metrics",
          body: "Defined success metrics and evaluation approaches so pilots could be compared, prioritized, and governed consistently.",
        },
      ],
      strategicNotes: [
        {
          title: "Tradeoffs",
          body: "Optimized for trust and governance first, even when it reduced speed — because the long-term cost of trust failures is higher than slower iteration.",
        },
        {
          title: "Risk model",
          body: "Explicitly evaluated hallucinations, recommendation bias, content staleness, and patient trust concerns before implementation planning.",
        },
        {
          title: "Systems thinking",
          body: "Designed frameworks that scale across multiple products: AI-assisted search, retrieval, guided journeys, conversational logging, and structured education.",
        },
      ],
    },
    diagrams: [
      {
        title: "Innovation Intake → Governance Gates",
        caption:
          "A repeatable pipeline for intake, evaluation, approval, pilot gating, and post-pilot decisions.",
        src: "/diagram-placeholder.svg",
      },
      {
        title: "AI Product Lifecycle (MVP → Pilot → Launch)",
        caption:
          "A phased experimentation model showing validation criteria and review points.",
        src: "/diagram-placeholder.svg",
      },
    ],
    technology: [
      "OpenAI APIs",
      "Claude",
      "AI agents",
      "Vector search / retrieval systems",
      "Supabase",
      "SQL",
      "Figma",
      "Next.js",
      "Analytics frameworks",
      "Workflow automation systems",
      "Product documentation systems",
    ],
    outcomes: [
      "Established a formal innovation + AI product evaluation framework",
      "Accelerated ideation and pilot planning across departments",
      "Improved stakeholder alignment around governance and implementation",
      "Reduced ambiguity in prioritization and experimentation",
      "Validated multiple product concepts for future pilot deployment",
    ],
  },
  {
    slug: "daily-log",
    title: "Breast Cancer Experience Daily Log",
    subtitle:
      "A conversational, low-burden logging experience that turns qualitative patient experiences into longitudinal insight.",
    context: "Breastcancer.org",
    tags: [
      "Conversational UX",
      "Longitudinal data",
      "AI workflow design",
      "Patient trust",
    ],
    overview:
      "Patients struggled to identify patterns across symptoms and treatment effects. I designed a conversational daily log that reduces manual burden and structures freeform entries into analyzable, trend-friendly data — without crossing into medical advice.",
    problemCards: [
      {
        title: "High-effort tracking",
        body: "Existing tools required manual entry and didn’t match patient capacity during fatigue and stress.",
      },
      {
        title: "Data without context",
        body: "Patients wanted clarity and patterns, not raw logging.",
      },
      {
        title: "Trust boundary",
        body: "The experience needed to support observation without diagnosis or treatment recommendations.",
      },
    ],
    role: {
      headline: "Led strategy, discovery, UX definition, and AI workflow design.",
      responsibilities: [
        "Product strategy + discovery",
        "User experience definition",
        "Conversational interaction planning",
        "AI workflow design",
        "Data structuring concepts",
        "Stakeholder communication",
        "Product positioning",
      ],
    },
    approach: {
      headline: "Designed for low-burden capture + high-signal structure.",
      steps: [
        {
          title: "Community signal discovery",
          body: "Identified recurring behavioral patterns and unmet needs in community discussions to ground the experience in real user context.",
        },
        {
          title: "Conversational log flow",
          body: "Defined natural-language logging rather than rigid forms to reduce friction during treatment and recovery periods.",
        },
        {
          title: "AI-assisted structuring",
          body: "Planned transformation of freeform entries into structured fields suitable for longitudinal analysis.",
        },
        {
          title: "Trend detection design",
          body: "Outlined how changes over time could be surfaced as patterns, summaries, and “what’s different this week” insights.",
        },
        {
          title: "Safety framing + guardrails",
          body: "Built language and boundaries that emphasize observation and understanding, not clinical interpretation.",
        },
      ],
      strategicNotes: [
        {
          title: "Decision model",
          body: "Prioritized user burden reduction first; structured outputs are only valuable if capture is sustainable.",
        },
        {
          title: "Governance",
          body: "Designed guardrails to prevent medical advice while still supporting reflective insight and self-advocacy conversations.",
        },
      ],
    },
    diagrams: [
      {
        title: "Conversational Logging Flow",
        caption:
          "A lightweight daily loop: capture → structure → summarize → trend surfaces.",
        src: "/diagram-placeholder.svg",
      },
    ],
    technology: [
      "Conversational AI systems",
      "AI-assisted data structuring",
      "Product workflow design",
      "Figma",
      "Product documentation",
      "Research synthesis",
      "Community insight analysis",
    ],
    outcomes: [
      "Created a scalable concept for longitudinal patient experience tracking",
      "Reduced friction vs traditional symptom logging tools",
      "Aligned product design to real patient behavioral needs",
      "Established a framework for structuring qualitative experiences without increasing burden",
    ],
  },
  {
    slug: "side-effects-story-finder",
    title: "Side Effects Story Finder",
    subtitle:
      "AI-assisted retrieval and summarization that helps patients find relatable peer experiences fast — without feeling diagnostic.",
    context: "Breastcancer.org",
    tags: [
      "Retrieval UX",
      "Summarization",
      "Information architecture",
      "Trust guardrails",
    ],
    overview:
      "Years of community discussions were difficult to navigate. I designed a symptom-and-treatment-based retrieval experience that surfaces relevant peer stories with summarized, digestible insights and explicit trust boundaries.",
    problemCards: [
      {
        title: "Long-form content overload",
        body: "Threads were valuable but hard to search and slow to skim.",
      },
      {
        title: "Discovery friction",
        body: "Users had to manually search large archives to find relevant stories.",
      },
      {
        title: "Support vs advice",
        body: "The product needed to emphasize relatability and reassurance, not recommendations.",
      },
    ],
    role: {
      headline: "Led discovery, retrieval strategy, UX definition, and product framing.",
      responsibilities: [
        "Product discovery",
        "Search experience strategy",
        "AI-assisted retrieval planning",
        "UX definition + IA",
        "Trust guardrails + language",
        "Stakeholder communication",
      ],
    },
    approach: {
      headline: "Designed a contextual retrieval system for peer support.",
      steps: [
        {
          title: "Friction mapping",
          body: "Identified key breakdowns in community discovery workflows and what “success” looked like for users under stress.",
        },
        {
          title: "Structured retrieval interaction",
          body: "Defined flows for selecting symptoms and treatment context to improve relevance and reduce false matches.",
        },
        {
          title: "Summarization workflow",
          body: "Planned AI summarization to condense long threads into digestible highlights and common themes.",
        },
        {
          title: "Trust language + boundaries",
          body: "Developed language and guardrails to avoid diagnostic framing while promoting emotional support and connection.",
        },
      ],
      strategicNotes: [
        {
          title: "Relevance over recall",
          body: "Optimized retrieval for contextual matching (symptom + treatment) rather than generic keyword search.",
        },
      ],
    },
    diagrams: [
      {
        title: "Retrieval Architecture (Query → Retrieve → Summarize)",
        caption:
          "A high-level RAG-style pipeline with trust guardrails and UI surfaces.",
        src: "/diagram-placeholder.svg",
      },
    ],
    technology: [
      "AI summarization workflows",
      "Retrieval systems",
      "Vector search concepts",
      "Conversational search architecture",
      "UX workflow design",
      "Product documentation",
      "Community content analysis",
      "Figma",
    ],
    outcomes: [
      "Created a scalable framework for AI-assisted community retrieval",
      "Reduced friction navigating large discussion archives",
      "Improved accessibility of peer experiences within a trusted environment",
      "Established a foundation for semantic search and storytelling products",
    ],
  },
  {
    slug: "treatment-navigator",
    title: "Treatment Options Side-by-Side Navigator",
    subtitle:
      "A structured comparison experience that improves comprehension and appointment readiness with sourcing transparency and governance.",
    context: "Breastcancer.org",
    tags: [
      "Governed summarization",
      "Structured UX",
      "Healthcare trust",
      "Product specification",
    ],
    overview:
      "Newly diagnosed patients struggled to compare treatment options across fragmented content. I designed a side-by-side comparison experience with AI-assisted retrieval/summarization constrained to medically reviewed sources, with explicit sourcing and escalation.",
    problemCards: [
      {
        title: "Fragmented education",
        body: "Content existed but was spread across multiple articles, making comparisons difficult.",
      },
      {
        title: "Cognitive load under stress",
        body: "Users needed quick, understandable comparisons to prepare for appointments.",
      },
      {
        title: "Medical trust requirements",
        body: "AI summaries must not generate new claims; every summary should trace back to reviewed sources.",
      },
    ],
    role: {
      headline:
        "Led product strategy, UX architecture, governance planning, and specification development.",
      responsibilities: [
        "Product strategy",
        "UX architecture",
        "AI retrieval framework planning",
        "Guardrail development",
        "Content governance planning",
        "Product specification development",
        "Success metric definition",
        "Stakeholder alignment",
      ],
    },
    approach: {
      headline: "Designed a comparison system optimized for trust + comprehension.",
      steps: [
        {
          title: "Comparison model",
          body: "Defined core dimensions (mechanism, administration, side effects, schedules, typical contexts) and a table interaction model.",
        },
        {
          title: "Constrained retrieval + summarization",
          body: "Planned summaries grounded strictly in reviewed content, with no novel medical claims and explicit linking back to sources.",
        },
        {
          title: "Governance + escalation",
          body: "Created review pathways, content versioning expectations, and fallback logic to avoid speculative outputs when content is incomplete.",
        },
        {
          title: "Decision support surfaces",
          body: "Added “Questions to Ask Your Doctor” support patterns to improve confidence without providing advice.",
        },
        {
          title: "Measurement plan",
          body: "Defined success metrics (exports, engagement depth, return usage, qualitative helpfulness) to validate value.",
        },
      ],
      strategicNotes: [
        {
          title: "Trust boundary",
          body: "The safest product is one that cites and compares reviewed information — not one that “reasons” about patient-specific recommendations.",
        },
      ],
    },
    diagrams: [
      {
        title: "Sourcing Transparency Model",
        caption:
          "How each summary ties back to medically reviewed sources, with review and escalation pathways.",
        src: "/diagram-placeholder.svg",
      },
      {
        title: "Comparison Table Interaction Flow",
        caption:
          "Select options → generate comparisons → export + doctor-question builder.",
        src: "/diagram-placeholder.svg",
      },
    ],
    technology: [
      "AI retrieval systems",
      "Structured summarization workflows",
      "UX architecture",
      "Content governance frameworks",
      "Figma",
      "PDF export workflows",
      "Analytics planning",
      "AI guardrail systems",
    ],
    outcomes: [
      "Created a structured AI-assisted educational navigation framework",
      "Established responsible AI governance models for healthcare education",
      "Reduced cognitive friction in treatment comparison workflows",
      "Improved conceptual readiness for medical appointments",
      "Built foundations for future AI-assisted educational products",
    ],
  },
  {
    slug: "vv-agent-delivery-system",
    title: "Vision Venture AI — Agent-Powered Agency Delivery System",
    subtitle:
      "A complete agentic operating system that takes a lead from discovery to delivery and retention via orchestrated AI workflows.",
    context: "Vision Venture",
    tags: [
      "Agent orchestration",
      "Delivery systems",
      "Ops automation",
      "Parallel subagents",
    ],
    overview:
      "AI services agencies often bottleneck on manual delivery and context switching. I built a full agent delivery infrastructure that orchestrates prospecting, onboarding, build specs, proposals, and retention reporting from a single lead input.",
    problemCards: [
      {
        title: "Inconsistent delivery quality",
        body: "Manual workflows create variance across clients, deliverables, and outcomes.",
      },
      {
        title: "High cognitive load",
        body: "Switching between audits, offers, copy, and builds creates operational drag and slows throughput.",
      },
      {
        title: "System vs prompts",
        body: "The goal was an orchestrated end-to-end system with structured outputs and chaining — not isolated prompts.",
      },
    ],
    role: {
      headline: "Designed, built, and iterated on the full agent delivery infrastructure.",
      responsibilities: [
        "AI agent architecture",
        "Skill design + prompt engineering",
        "Workflow orchestration planning",
        "Client delivery system design",
        "Agentic pipeline sequencing",
        "Evaluation framework design",
        "Iterative skill optimization + testing",
      ],
    },
    approach: {
      headline: "Built orchestration-first infrastructure with structured outputs.",
      steps: [
        {
          title: "End-to-end skill suite",
          body: "Designed a skill library covering prospecting → closing → delivery → retention so delivery scales without proportional headcount.",
        },
        {
          title: "Master orchestrator pattern",
          body: "Engineered an orchestration skill that sequences parallel subagents (audits, offer recs, outreach assets, call framing) from one lead input.",
        },
        {
          title: "Domain-specific audit engines",
          body: "Built website and GBP audit skills producing scored reports and prioritized action plans with consistent structure.",
        },
        {
          title: "Delivery engine",
          body: "Created components for system architecture mapping, agent configuration, and GoHighLevel build specs translation.",
        },
        {
          title: "Retention + reporting",
          body: "Added monthly reporting, missed-opportunity summaries, and check-ins designed to surface upsell moments without hard selling.",
        },
      ],
      strategicNotes: [
        {
          title: "Sequencing + dependency mapping",
          body: "Designed structured output formats so each skill can be used as input to the next, preserving human-readable deliverables at every step.",
        },
        {
          title: "Evaluation system",
          body: "Built variance testing and iteration loops so outputs remain reliable over time — not “demo-quality once.”",
        },
      ],
    },
    diagrams: [
      {
        title: "Lead → Audit → Offer → Outreach Pipeline",
        caption: "Parallel subagents produce auditable, structured deliverables.",
        src: "/diagram-placeholder.svg",
      },
      {
        title: "Client Delivery Chain (Specs → Build → QA → Reporting)",
        caption:
          "A repeatable ops model showing sequencing, approvals, and artifacts.",
        src: "/diagram-placeholder.svg",
      },
    ],
    technology: [
      "Claude (Anthropic)",
      "Claude Cowork",
      "Prompt engineering + structured outputs",
      "Parallel subagent orchestration",
      "GoHighLevel (GHL)",
      "AI voice agent frameworks",
      "Markdown deliverable systems",
      "Skill evaluation + variance testing",
      "Report/PDF pipeline (vv-brand-pdf)",
    ],
    outcomes: [
      "Reduced delivery time per client from hours to minutes of orchestrated output",
      "Created a repeatable end-to-end sales + delivery pipeline from a single lead input",
      "Built a skill library covering prospecting, closing, delivery, and retention",
      "Established scalable infrastructure for delivery without proportional headcount growth",
      "Demonstrated practical production use of parallel agentic orchestration",
    ],
  },
  {
    slug: "geo-audit-platform",
    title: "GEO Audit Intelligence Platform",
    subtitle:
      "A parallel-agent system that audits AI search visibility (citability, schema, crawlers, E‑E‑A‑T) and generates client-ready reports and proposals.",
    context: "Vision Venture",
    tags: [
      "Parallel agents",
      "Scoring systems",
      "AI search visibility",
      "Report generation",
    ],
    overview:
      "AI search is displacing traditional SEO, but most tools don’t measure AI citability or generative visibility. I built a GEO audit platform with five parallel specialized agents, a composite score, and a reporting/proposal pipeline.",
    problemCards: [
      {
        title: "No GEO measurement standard",
        body: "Businesses lacked a framework to measure and improve visibility in AI-generated answers.",
      },
      {
        title: "SEO tools miss AI-specific factors",
        body: "Traditional tooling doesn’t evaluate AI citability, LLM-focused structure, or crawler access for generative systems.",
      },
      {
        title: "Client-ready intelligence gap",
        body: "Audits needed to produce actionable, branded deliverables (reports, PDFs, proposals) without manual formatting.",
      },
    ],
    role: {
      headline: "Designed and built the platform architecture + orchestration system.",
      responsibilities: [
        "Platform architecture",
        "Agent specialization design",
        "Orchestration logic",
        "Scoring framework development",
        "Report generation pipeline design",
        "Client delivery workflow design",
        "Skill sequencing + dependency mapping",
      ],
    },
    approach: {
      headline: "Orchestrated parallel specialization + composite synthesis.",
      steps: [
        {
          title: "Master orchestrator (parallel agents)",
          body: "Designed a master agent that launches five specialized agents simultaneously to compress audit time and improve depth.",
        },
        {
          title: "Specialized dimensions",
          body: "Built agents for AI citability, content/E‑E‑A‑T, technical infra, schema/JSON‑LD, and AI crawler access.",
        },
        {
          title: "Composite GEO Score",
          body: "Engineered a 0–100 weighted score synthesizing results across categories, enabling prioritization and progress tracking.",
        },
        {
          title: "Report + PDF pipeline",
          body: "Built markdown-to-PDF reporting with score gauges, charts, and color-coded tables for client delivery.",
        },
        {
          title: "Business system integration",
          body: "Added proposal generation and pipeline tracking for audit → proposal → monthly delta reporting workflows.",
        },
      ],
      strategicNotes: [
        {
          title: "Parallelization as product advantage",
          body: "Parallel specialization improves both speed and quality by allowing deeper analysis without sequential bottlenecks.",
        },
        {
          title: "Governance of scoring",
          body: "Weighted scoring makes prioritization explicit and auditable — critical for stakeholder alignment.",
        },
      ],
    },
    diagrams: [
      {
        title: "Parallel Agent Orchestration Map",
        caption:
          "Orchestrator launches five agents → aggregates results → outputs composite score and action plan.",
        src: "/diagram-placeholder.svg",
      },
      {
        title: "Audit → Report → Proposal → Delta Tracking Loop",
        caption:
          "A closed-loop delivery system for ongoing retainers and measurable progress.",
        src: "/diagram-placeholder.svg",
      },
    ],
    technology: [
      "Claude (Anthropic)",
      "Claude Cowork",
      "Structured JSON outputs",
      "Parallel agent orchestration",
      "Python (data processing, report generation)",
      "ReportLab (PDF + visualizations)",
      "Schema.org / JSON-LD",
      "robots.txt and HTTP header analysis",
      "Web crawling and content analysis",
      "GEO scoring framework design",
    ],
    outcomes: [
      "Built a GEO audit platform measuring dimensions traditional SEO tools ignore",
      "Enabled multi-dimension audits via single parallel execution",
      "Created an agency-ready system: audit → score → report → proposal → CRM → monthly deltas",
      "Demonstrated orchestration of specialized agents with composite synthesis",
      "Produced client-ready deliverables directly from raw audit outputs",
    ],
  },
  {
    slug: "bco-content-ops",
    title: "BCO AI Content Operations System",
    subtitle:
      "AI-assisted research-to-publication pipelines that preserve medical trust guardrails across drafts, newsletters, and specs.",
    context: "Breastcancer.org",
    tags: [
      "Content operations",
      "Guardrails",
      "Workflow automation",
      "Healthcare trust",
    ],
    overview:
      "BCO content production required translating clinical research into patient-facing outputs with strict trust standards. I built a suite of skills that draft articles, generate branded newsletters, and produce product specs — with guardrails embedded at the prompt architecture level.",
    problemCards: [
      {
        title: "Manual, slow publishing chain",
        body: "Writers had to interpret clinical language, apply voice, format across channels, and preserve review pathways — creating bottlenecks.",
      },
      {
        title: "Consistency + accuracy risk",
        body: "High volume plus strict requirements increases the risk of inconsistency without systematized enforcement.",
      },
      {
        title: "Guardrails needed as first-class design",
        body: "In healthcare, trust boundaries can’t be an afterthought — they must be encoded into workflows and outputs.",
      },
    ],
    role: {
      headline: "Designed and built the skill architecture + guardrail system.",
      responsibilities: [
        "Content workflow analysis",
        "Skill architecture design",
        "Prompt engineering with brand + medical guardrails",
        "Multi-format output pipeline design",
        "Product ideation system design",
        "Feature specification workflow automation",
      ],
    },
    approach: {
      headline: "Encoded trust constraints into production pipelines.",
      steps: [
        {
          title: "Drafting pipeline (research → article)",
          body: "Built a drafting skill converting clinical sources into structured patient-facing articles with voice and boundary enforcement.",
        },
        {
          title: "Newsletter conversion (article → HTML)",
          body: "Created a transformation skill producing send-ready HTML emails aligned with brand layout and CTA patterns.",
        },
        {
          title: "Product ideation grounding",
          body: "Designed ideation workflows constrained by user segments, strategic pillars, and organizational guardrails to prevent drift.",
        },
        {
          title: "Specification automation",
          body: "Built PRD generation that includes guardrail notes, review pathways, sourcing expectations, and success metrics.",
        },
      ],
      strategicNotes: [
        {
          title: "Guardrails as architecture",
          body: "Hard boundaries, sourcing transparency, and escalation documentation were enforced in the output structure — not left to memory.",
        },
        {
          title: "Downstream handoff design",
          body: "Outputs were formatted specifically for CMS upload, ESP import, and engineering review to reduce “last mile” manual work.",
        },
      ],
    },
    diagrams: [
      {
        title: "Research-to-Publication Workflow Map",
        caption:
          "Source intake → draft generation → review pathways → publish → newsletter distribution.",
        src: "/diagram-placeholder.svg",
      },
      {
        title: "Guardrail Enforcement Layers",
        caption:
          "Where constraints live: prompt boundaries, output schemas, sourcing links, escalation triggers.",
        src: "/diagram-placeholder.svg",
      },
    ],
    technology: [
      "Claude (Anthropic)",
      "Claude Cowork",
      "Prompt engineering with hard constraints",
      "HTML email generation",
      "Structured output design",
      "Product specification frameworks",
      "Healthcare trust standard encoding",
    ],
    outcomes: [
      "Reduced research-to-draft time from hours to minutes",
      "Eliminated manual reformatting between article and email workflows",
      "Created a replicable AI content pipeline preserving trust standards",
      "Demonstrated domain-specific acceleration without compromising governance",
      "Improved alignment of AI ideation with organizational constraints",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

