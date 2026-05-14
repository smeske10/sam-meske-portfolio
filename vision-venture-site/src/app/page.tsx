import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TiltCard } from "@/components/ui/tilt-card";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { BuiltForOpsProfileCard } from "@/components/home/built-for-ops-profile-card";
import { AiOpsAuditForm } from "@/components/home/AiOpsAuditForm";
import { TrustBadge } from "@/components/ui/trust-badge";
import {
  Activity,
  Compass,
  FileText,
  Globe,
  MessagesSquare,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const caseStudyItems: BentoItem[] = [
    {
      title: "AI Innovation Program & Product Incubator",
      description:
        "A scalable framework for evaluating and governing AI-enabled healthcare products.",
      icon: <Compass className="h-4 w-4 text-blue-500" />,
      status: "Breastcancer.org",
      tags: ["Governance", "Strategy", "Healthcare"],
      cta: "View",
      href: "/case-studies/ai-innovation-incubator",
      colSpan: 2,
    },
    {
      title: "Breast Cancer Experience Daily Log",
      description:
        "Conversational logging that becomes longitudinal insight (without medical advice).",
      icon: <Activity className="h-4 w-4 text-emerald-500" />,
      status: "Breastcancer.org",
      tags: ["Conversational", "Longitudinal", "Trust"],
      cta: "View",
      href: "/case-studies/daily-log",
    },
    {
      title: "Side Effects Story Finder",
      description:
        "AI-assisted retrieval that surfaces relatable peer experiences quickly and safely.",
      icon: <MessagesSquare className="h-4 w-4 text-purple-500" />,
      status: "Breastcancer.org",
      tags: ["Retrieval", "Summarization", "IA"],
      cta: "View",
      href: "/case-studies/side-effects-story-finder",
    },
    {
      title: "Treatment Options Comparison Tool",
      description:
        "Trust-first comparison UX with sourcing transparency and governance.",
      icon: <FileText className="h-4 w-4 text-sky-500" />,
      status: "Breastcancer.org",
      tags: ["UX", "Governance", "Education"],
      cta: "View",
      href: "/case-studies/treatment-navigator",
      colSpan: 2,
    },
    {
      title: "Agent-Powered Agency Delivery System",
      description:
        "End-to-end agentic ops: lead â†’ audit â†’ offer â†’ delivery â†’ retention.",
      icon: <Sparkles className="h-4 w-4 text-violet-500" />,
      status: "Vision Venture",
      tags: ["Agents", "Orchestration", "Ops"],
      cta: "View",
      href: "/case-studies/vv-agent-delivery-system",
    },
    {
      title: "GEO Audit Intelligence Platform",
      description:
        "Parallel-agent platform for AI search visibility with scoring + reports + proposals.",
      icon: <Globe className="h-4 w-4 text-sky-500" />,
      status: "Vision Venture",
      tags: ["GEO", "Scoring", "Reporting"],
      cta: "View â†’",
      href: "/case-studies/geo-audit-platform",
    },
  ];
  return (
    <div className="flex flex-col min-h-full">
      <SiteHeader />

      <main id="top" className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-200px] h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.38),transparent_60%)] blur-2xl" />
            <div className="absolute right-[-220px] top-[140px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_60%)] blur-2xl" />
          </div>

          <div className="vv-container relative py-16 md:py-24">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  Systems-oriented AI product strategist
                </p>
                <h1 className="sr-only">Sam Meske</h1>
                <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                  AI Product Strategy, Innovation Systems, Research &amp; Business Consulting
                </div>

                <p className="vv-muted mt-5 max-w-2xl text-lg leading-8">
                  I design and deploy AI-enabled systems that reduce operational
                  drag, improve decision-making, and ship safely in trust- and
                  brand-sensitive environments.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="vv-focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 text-sm font-semibold text-black hover:opacity-95"
                    href="#audit"
                  >
                    Get an AI Ops audit
                  </a>
                  <a
                    className="vv-focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-white/5 px-5 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
                    href="#case-studies"
                  >
                    See what I build
                  </a>
                </div>

              </div>

              <div className="md:col-span-5">
                <div className="vv-card rounded-3xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">

                      <img
                        alt="Headshot placeholder"
                        src="https://ik.imagekit.io/i6kon7cps/image.png?updatedAt=1778689112603"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Sam Meske</div>
                      <div className="vv-muted text-sm">
                        AI developer • operator • researcher
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-sm font-semibold">
                        What you get
                      </div>
                      <ul className="vv-muted mt-2 list-disc space-y-1 pl-5 text-sm">
                        <li>Clear problem framing + constraints</li>
                        <li>Structured MVP + governance plan</li>
                        <li>Systems diagrams, workflows, and tradeoffs</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-sm font-semibold">Best fit</div>
                      <p className="vv-muted mt-2 text-sm">
                        SMB owner/operators and VP/Director-level ops leaders
                        who want AI initiatives grounded in operational reality.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      className="vv-focus-ring inline-flex h-12 w-full items-center justify-center rounded-xl bg-white text-sm font-semibold text-black hover:bg-white/90"
                      href="/about"
                    >
                      More About Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y vv-line bg-black/10 dark:bg-black/20">
          <div className="vv-container py-3 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-3 sm:gap-y-2 sm:text-sm">
              {[
                "25+ production AI agents",
                "8+ years in AI & research",
                "MS, MBA",
                "Published Researcher",
                "Next.js + React",
                "SQL + Python + AWS",
              ].map((item, idx) => (
                <TrustBadge key={item} text={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="positioning" className="vv-container py-12 md:py-16">
          <div className="flex flex-col gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                High-level positioning
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                I'm not a pure UX designer, pure engineer, or pure researcher —
                I'm a systems-oriented AI product strategist.
              </p>
            </div>
            <div className="-mx-6 px-6 md:mx-0 md:px-0">
              <div className="grid gap-4 md:grid-cols-6">
                {[
                  {
                    t: "AI Product Strategy",
                    d: "Opportunity framing, prioritization, and decision systems.",
                  },
                  {
                    t: "AI Systems & Workflow Design",
                    d: "Agentic workflows, governance models, and lifecycle design.",
                  },
                  {
                    t: "Product Discovery & MVP Development",
                    d: "Discovery, MVP structure, validation criteria, and pilots.",
                  },
                  {
                    t: "Automation & Analytics",
                    d: "Operational automation paired with measurement and iteration.",
                  },
                  {
                    t: "Healthcare Innovation",
                    d: "Trust-first AI product development in regulated contexts.",
                  },
                ].map((x, idx) => (
                  <TiltCard
                    key={x.t}
                    className={`vv-card w-full rounded-3xl p-6 ${idx >= 3 ? "md:col-span-3" : "md:col-span-2"
                      }`}
                    tiltLimit={10}
                    scale={1}
                    effect="gravitate"
                    spotlight
                  >
                    <div className="text-sm font-semibold">{x.t}</div>
                    <p className="vv-muted mt-2 text-sm leading-7">{x.d}</p>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="vv-container py-12 md:py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Selected product &amp; innovation case studies
              </h2>
              <p className="vv-muted mt-3 max-w-3xl text-sm leading-7">
                Clean, modern, structured pages — focused on thinking, systems,
                governance, tradeoffs, and outcomes.
              </p>
            </div>
            <a
              className="hidden rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10 md:inline-flex"
              href="/case-studies"
            >
              View all
            </a>
          </div>

          <div className="mt-8 -mx-4">
            <BentoGrid items={caseStudyItems} />
          </div>

          <div className="mt-8 md:hidden">
            <a
              className="vv-focus-ring inline-flex h-12 w-full items-center justify-center rounded-xl bg-white/5 px-5 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
              href="/case-studies"
            >
              View all case studies
            </a>
          </div>
        </section>

        <section id="expertise" className="vv-container py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 className="text-2xl font-semibold tracking-tight">
                Skills &amp; expertise
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                Production-grade agentic systems, governance-aware product
                strategy, and operational workflows that ship.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    n: "01",
                    t: "AI agent engineering & orchestration",
                    d: "Parallel subagents, orchestrators, result synthesis",
                  },
                  {
                    n: "02",
                    t: "Claude skill architecture",
                    d: "Capability definition, prompt architecture, chaining",
                  },
                  {
                    n: "03",
                    t: "Prompt engineering & guardrails",
                    d: "Hard constraints, fallback logic, trust boundaries",
                  },
                  {
                    n: "04",
                    t: "MCP server development",
                    d: "Connect agents to CRMs, CMSes, databases",
                  },
                  {
                    n: "05",
                    t: "AI product strategy & governance",
                    d: "Evaluation frameworks, phased roadmaps",
                  },
                  {
                    n: "06",
                    t: "Research design & analytics",
                    d: "Survey validation, SQL/Python, AWS pipelines",
                  },
                ].map((x) => (
                  <TiltCard
                    key={x.n}
                    className="vv-card w-full rounded-3xl p-6"
                    tiltLimit={10}
                    scale={1}
                    effect="gravitate"
                    spotlight
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-sm font-semibold">{x.t}</div>
                      <div className="rounded-full vv-panel px-2.5 py-1 text-xs font-semibold">
                        {x.n}
                      </div>
                    </div>
                    <p className="vv-muted mt-3 text-sm leading-7">{x.d}</p>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tech" className="vv-container py-12 md:py-16">
          <div className="flex flex-col gap-6">


            <div className="vv-card w-full rounded-3xl p-6 md:mx-auto md:max-w-[766px]">
              <h2 className="text-2xl font-semibold tracking-tight" >
                Technical stack <br /> <br />

              </h2>
              <div className="grid gap-5">
                {[
                  {
                    group: "AI models & LLMs",
                    tags: [
                      "Claude (Anthropic)",
                      "ChatGPT/OpenAI",
                      "Gemini/NotebookLM",
                      "Perplexity",
                      "DeepSeek/Open-Source LLMs",
                    ],
                    labelClass: "text-violet-200/90",
                    pillClass:
                      "bg-violet-500/10 text-violet-100 ring-violet-300/20",
                  },
                  {
                    group: "Agentic Infra",
                    tags: [
                      "Claude Cowork",
                      "Claude Agent SDK",
                      "OpenAI Agents",
                      "MCP protocols",
                    ],
                    labelClass: "text-emerald-200/90",
                    pillClass:
                      "bg-emerald-500/10 text-emerald-100 ring-emerald-300/20",
                  },
                  {
                    group: "Automation",
                    tags: ["Make", "Zapier", "n8n"],
                    labelClass: "text-amber-200/90",
                    pillClass: "bg-amber-500/10 text-amber-100 ring-amber-300/20",
                  },
                  {
                    group: "Data & Engineering",
                    tags: [
                      "SQL",
                      "Python",
                      "AWS Redshift",
                      "DynamoDB",
                      "Google BigQuery",
                      "Vector search/RAG",
                    ],
                    labelClass: "text-sky-200/90",
                    pillClass: "bg-sky-500/10 text-sky-100 ring-sky-300/20",
                  },
                  {
                    group: "Analytics & Research",
                    tags: [
                      "Google Analytics",
                      "Tableau/Power BI",
                      "Looker/Data Studio",
                      "Amplitude",
                      "surveyJS",
                    ],
                    labelClass: "text-lime-200/90",
                    pillClass: "bg-lime-500/10 text-lime-100 ring-lime-300/20",
                  },
                  {
                    group: "Frontend & Design",
                    tags: ["Next.js", "React", "Figma", "Canva"],
                    labelClass: "text-fuchsia-200/90",
                    pillClass:
                      "bg-fuchsia-500/10 text-fuchsia-100 ring-fuchsia-300/20",
                  },
                  {
                    group: "CRM & Marketing",
                    tags: [
                      "Hubspot",
                      "Salesforce",
                      "GoHighLevel",
                      "ActiveCampaign",
                    ],
                    labelClass: "text-orange-200/90",
                    pillClass:
                      "bg-orange-500/10 text-orange-100 ring-orange-300/20",
                  },
                  {
                    group: "Infra & Delivery",
                    tags: [
                      "Netlify",
                      "Vercel",
                      "Notion",
                      "Airtable",
                      "Asana",
                      "Slack/Teams",
                    ],
                    labelClass: "text-zinc-200/80",
                    pillClass: "bg-white/5 text-zinc-100 ring-white/10",
                  },
                ].map((cluster) => (
                  <div key={cluster.group}>
                    <div
                      className={`text-xs font-semibold tracking-wide ${cluster.labelClass}`}
                    >
                      {cluster.group}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cluster.tags.map((t) => (
                        <span
                          key={t}
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${cluster.pillClass}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="vv-container py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Built for real-world ops
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                I bring research rigor and operator instincts to AI delivery —
                focused on practical systems that ship and stick. <br />
              </p>
              <p> <br /> Most AI product leaders come from design, engineering, or business. My path ran through clinical research, population health analytics, and hands-on systems engineering. That shapes everything about how I approach AI products.</p>
            </div>
            <div className="md:col-span-7">
              <BuiltForOpsProfileCard />
            </div>
          </div>
        </section>

        <section id="audit" className="vv-container py-12 md:py-16">
          <div className="vv-card rounded-3xl p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Get an AI Ops audit
                </h2>
                <p className="vv-muted mt-3 text-sm leading-7">
                  A short intake to understand your workflows and identify the
                  highest ROI automation opportunities.
                </p>
                <ul className="vv-muted mt-5 list-disc space-y-1 pl-5 text-sm">
                  <li>Prioritized automation map</li>
                  <li>ROI estimates + quick wins</li>
                  <li>30/60/90-day implementation plan</li>
                </ul>
              </div>

              <div className="md:col-span-7">
                <AiOpsAuditForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}






