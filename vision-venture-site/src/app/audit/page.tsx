import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AiOpsAuditForm } from "@/components/home/AiOpsAuditForm";
import { BuiltForOpsSection } from "@/components/BuiltForOpsSection";
export const metadata = {
  title: "AI Ops Audit — Sam Meske",
  description:
    "Understand where your AI product / operations are today and what it takes to get to production-grade delivery.",
  alternates: {
    canonical: "/audit",
  },
};

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--tint-1)] px-3 py-1 text-xs ring-1 ring-[color:var(--line)]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="vv-muted mt-5 max-w-4xl text-base leading-8 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-full">
      <SiteHeader />

      <main className="flex-1 py-14 md:py-20">

        <section className=" px-6 md:px-8">

          <div className="vv-card rounded-3xl max-w-4xl mx-auto">
            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                      AI Ops Audit
                    </h1>
                    <p className="vv-muted mt-4 max-w-3xl text-sm leading-7">
                      Understand where your AI product and operations are today and what it takes to get to production-grade delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid py-5">
                <AiOpsAuditForm />
              </div>
            </div>

          </div>
        </section>
      </main>
      <BuiltForOpsSection />
      <SiteFooter />
    </div>
  );
}











