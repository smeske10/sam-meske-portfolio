import { CASE_STUDIES } from "@/content/caseStudies";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BuiltForOpsSection } from "@/components/BuiltForOpsSection";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
  Activity,
  Compass,
  FileText,
  Globe,
  MessagesSquare,
  Sparkles,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "Case Studies",
  description:
    "Selected product and innovation case studies focused on systems, governance, decision-making, and outcomes.",
  alternates: {
    canonical: "/case-studies",
  },
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
      {children}
    </span>
  );
}

export default function CaseStudiesIndexPage() {
  const items: BentoItem[] = CASE_STUDIES.slice(0, 6).map((cs, idx) => {
    const icon =
      cs.slug === "ai-innovation-incubator" ? (
        <Compass className="h-4 w-4 text-blue-500" />
      ) : cs.slug === "daily-log" ? (
        <Activity className="h-4 w-4 text-emerald-500" />
      ) : cs.slug === "side-effects-story-finder" ? (
        <MessagesSquare className="h-4 w-4 text-purple-500" />
      ) : cs.slug === "treatment-navigator" ? (
        <FileText className="h-4 w-4 text-sky-500" />
      ) : cs.slug === "geo-audit-platform" ? (
        <Globe className="h-4 w-4 text-sky-500" />
      ) : cs.slug === "bco-content-ops" ? (
        <Workflow className="h-4 w-4 text-amber-500" />
      ) : (
        <Sparkles className="h-4 w-4 text-violet-500" />
      );

    return {
      title: cs.title,
      description: cs.subtitle,
      icon,
      status: cs.context ?? "Case study",
      tags: cs.tags.slice(0, 3),
      cta: "View â†’",
      href: `/case-studies/${cs.slug}`,
      colSpan: idx === 0 || idx === 4 ? 2 : 1,
    };
  });

  return (
    <div className="flex flex-col min-h-full">
      <SiteHeader />

      <main className="vv-container flex-1 py-14 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Selected product &amp; innovation case studies
            </h1>
            <p className="vv-muted mt-4 max-w-3xl text-sm leading-7">
              Systems-oriented AI product strategy work â€” focused on structure,
              decision-making, governance, tradeoffs, and outcomes (not just
              visuals).
            </p>
          </div>
          <a
            className="vv-focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-white/5 px-4 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
            href="/#audit"
          >
            Get an AI Ops audit
          </a>
        </div>

        <div className="mt-10 -mx-4">
          <BentoGrid items={items} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}









