export const SKILLS: {
  title: string;
  description: string;
  demonstratedIn: string[];
}[] = [
    {
      title: "AI Agent Engineering & Orchestration",
      description:
        "Design and build multi-agent systems where specialized agents run in parallel, synthesize results, and produce structured composite outputs. Experienced in orchestrator patterns, result aggregation, and dependency mapping across agent networks.",
      demonstratedIn: [
        "GEO Audit Platform (parallel agents)",
        "Vision Venture AI outbound pipeline (sequential + parallel orchestration)",
        "BCO content operations system",
      ],
    },
    {
      title: "Claude Skill Architecture",
      description:
        "End-to-end design and engineering of production Claude skills: capability definition, prompt architecture, structured output formatting, downstream chaining, and evaluation/iteration.",
      demonstratedIn: [
        "Vision Venture AI delivery system (25+ skills)",
        "BCO content pipelines",
        "GEO audit/reporting platform",
      ],
    },
    {
      title: "Prompt Engineering & Guardrail Systems",
      description:
        "Systematic production prompt design including output schema enforcement, hard constraints, fallback logic, and trust boundary specification — especially in healthcare contexts.",
      demonstratedIn: [
        "BCO content skills (medical trust guardrails)",
        "Treatment Navigator (sourcing transparency requirements)",
        "AI Innovation Program (risk mitigation + governance)",
      ],
    },
    {
      title: "MCP Server Development",
      description:
        "Build custom MCP servers that connect agents to external APIs and systems (CRMs, CMSes, databases, analytics) so workflows operate on real data and execute real changes safely.",
      demonstratedIn: [
        "GHL integration patterns",
        "Vision Venture delivery infrastructure",
        "Content operations workflows",
      ],
    },
    {
      title: "AI Product Strategy & Governance",
      description:
        "Translate AI opportunities into structured product frameworks with governance guardrails, validation criteria, stakeholder alignment, and phased roadmaps — built for trust-sensitive environments.",
      demonstratedIn: [
        "BCO AI Innovation Program",
        "Treatment Navigator",
        "Daily Log + Side Effects Story Finder",
      ],
    },
    {
      title: "Agentic Workflow Design",
      description:
        "Map multi-step processes into agentic execution sequences: human review points, full automation candidates, fallback logic, and structured handoffs between agents.",
      demonstratedIn: [
        "Outbound lead pipeline",
        "GEO audit orchestration",
        "BCO research-to-publication chain",
      ],
    },
    {
      title: "AI-Assisted Content Systems",
      description:
        "Design content pipelines operating within strict brand, tone, and accuracy requirements — including multi-format outputs (article → HTML email, markdown → PDF) and governance-aware handoffs.",
      demonstratedIn: [
        "BCO Research News system",
        "GEO client report generation",
        "Branded PDF pipeline patterns",
      ],
    },
  ];

export const TECH_STACK: {
  group: string;
  items: { label: string; value: string }[];
}[] = [
    {
      group: "AI Runtime",
      items: [{ label: "Models", value: "Claude (Anthropic), OpenAI APIs" }],
    },
    {
      group: "Agent Environment",
      items: [{ label: "Ops", value: "Claude Cowork, Claude Agent SDK, OpenAI Agents SDK, OpenClaw" }],
    },
    {
      group: "Orchestration",
      items: [
        {
          label: "Patterns",
          value: "Parallel subagents, orchestrators, MCP protocol",
        },
      ],
    },
    {
      group: "Databases",
      items: [{ label: "Data", value: "DynamoDB, AWS Redshift, Supabase, SQL, Vector search / RAG" }],
    },
    {
      group: "Frontend",
      items: [{ label: "UI", value: "Next.js, React, Figma, Vercel, TypeScript, shadcn/ui, TailwindCSS" }],
    },
    {
      group: "Automation",
      items: [{ label: "Platforms", value: " CRMs (GoHighLevel, ActiveCampaign), Zapier, Make, n8n, workflow automation" }],
    },
    {
      group: "Document Generation",
      items: [{ label: "Reports", value: "ReportLab (PDF), HTML email pipelines" }],
    },
  {
    group: "Analytics",
    items: [{ label: "Measurement", value: "Google Analytics, Custom Analytics Frameworks" }],
  },
  {
    group: "Comms",
    items: [{ label: "Integrations", value: "Slack, Outlook, Teams" }],
  },
];
