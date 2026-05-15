import type { Metadata } from "next";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TiltCard } from "@/components/ui/tilt-card";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sammeske.com";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Skills, expertise, and technical stack: production AI agents, orchestration patterns, guardrails, MCP integrations, and tooling.",
  alternates: { canonical: "/expertise" },
  openGraph: {
    title: "Sam Meske | Expertise",
    description:
      "Skills, expertise, and technical stack: production AI agents, orchestration patterns, guardrails, MCP integrations, and tooling.",
    url: `${siteUrl}/expertise`,
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/i6kon7cps/image%20(1).png",
        width: 1200,
        height: 1200,
        alt: "Sam Meske headshot",
      },
    ],
  },
};

export default function ExpertisePage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="vv-container py-14 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Skills &amp; technical stack
            </h1>
            <p className="vv-muted mt-4 text-sm leading-7 md:text-base md:leading-8">
              Production-grade agentic systems, governance-aware product
              strategy, and operational workflows that ship — plus the tools and
              platforms I build with day to day.
            </p>
          </div>
        </section>

        <section id="positioning" className="vv-container pb-12 md:pb-16">
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
                    className={`vv-card w-full rounded-3xl p-6 ${
                      idx >= 3 ? "md:col-span-3" : "md:col-span-2"
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

        <section className="vv-container pb-12 md:pb-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Skills &amp; expertise
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                The patterns I use to turn AI into reliable systems: parallel
                orchestration, structured outputs, guardrails, and integration
                into real workflows.
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

        <section className="vv-container pb-14 md:pb-20">
          <div className="flex flex-col gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Technical stack
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                A color-coded view of the tools I use to build, ship, and
                measure real systems.
              </p>
            </div>

            <div className="vv-card w-full rounded-3xl p-6 md:mx-auto md:max-w-[766px]">
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
                    pillClass:
                      "bg-amber-500/10 text-amber-100 ring-amber-300/20",
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
      </main>

      <SiteFooter />
    </div>
  );
}
