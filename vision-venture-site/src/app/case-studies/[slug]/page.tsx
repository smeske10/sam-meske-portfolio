import { CASE_STUDIES, getCaseStudy } from "@/content/caseStudies";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BuiltForOpsSection } from "@/components/BuiltForOpsSection";
import type { Metadata } from "next";
export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const cs = getCaseStudy(resolvedParams.slug);
  if (!cs) return {};
  const canonical = `/case-studies/${cs.slug}`;
  return {
    title: cs.title,
    description: cs.subtitle,
    alternates: { canonical },
    openGraph: {
      title: cs.title,
      description: cs.subtitle,
      url: canonical,
      type: "article",
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
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
      {children}
    </span>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="vv-muted mt-3 max-w-3xl text-sm leading-7">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const cs = getCaseStudy(resolvedParams.slug);
  if (!cs) notFound();

  return (
    <div className="flex flex-col min-h-full">
      <SiteHeader />

      <main className="vv-container flex-1 py-12 md:py-16">
        <a className="vv-link text-sm" href="/case-studies">
          ← Back to case studies
        </a>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold tracking-wide text-cyan-200/90">
              {cs.context ?? "Case Study"}
            </span>
            <span className="text-xs text-white/40">•</span>
            <span className="text-xs text-white/70">
              Systems-oriented AI product strategy
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {cs.title}
          </h1>
          <p className="vv-muted mt-5 max-w-3xl text-base leading-8">
            {cs.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </header>

        <section className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader title="Overview" />
          </div>
          <div className="md:col-span-7">
            <div className="vv-card rounded-3xl p-6">
              <p className="vv-muted text-sm leading-7">{cs.overview}</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              title="Problem / Opportunity"
              subtitle="What was broken (or missing), and why it mattered."
            />
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4">
              {cs.problemCards.map((c) => (
                <div key={c.title} className="vv-card rounded-3xl p-6">
                  <div className="text-sm font-semibold">{c.title}</div>
                  <p className="vv-muted mt-2 text-sm leading-7">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              title="My role"
              subtitle="Explicit ownership and responsibilities."
            />
          </div>
          <div className="md:col-span-7">
            <div className="vv-card rounded-3xl p-6">
              <div className="text-sm font-semibold">{cs.role.headline}</div>
              <ul className="vv-muted mt-3 grid list-disc gap-2 pl-5 text-sm leading-7 sm:grid-cols-2">
                {cs.role.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              title="Process / Approach"
              subtitle="Where the strategy, structure, governance, and tradeoffs live."
            />
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4">
              <div className="vv-card rounded-3xl p-6">
                <div className="text-sm font-semibold">{cs.approach.headline}</div>
                <ol className="mt-4 grid gap-3">
                  {cs.approach.steps.map((s, idx) => (
                    <li
                      key={s.title}
                      className="rounded-2xl bg-black/10 p-4 ring-1 ring-white/10"
                    >
                      <div className="text-sm font-semibold">
                        {idx + 1}) {s.title}
                      </div>
                      <p className="vv-muted mt-2 text-sm leading-7">{s.body}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="vv-card rounded-3xl p-6">
                <div className="text-sm font-semibold">Strategic insights</div>
                <div className="mt-4 grid gap-3">
                  {cs.approach.strategicNotes.map((n) => (
                    <div
                      key={n.title}
                      className="rounded-2xl bg-black/10 p-4 ring-1 ring-white/10"
                    >
                      <div className="text-sm font-semibold">{n.title}</div>
                      <p className="vv-muted mt-2 text-sm leading-7">{n.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              title="Visual systems diagrams"
              subtitle="Placeholders for architecture maps, flows, governance models, and lifecycle diagrams."
            />
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4">
              {cs.diagrams.map((d) => (
                <figure key={d.title} className="vv-card overflow-hidden rounded-3xl">
                  <img
                    alt={d.title}
                    src={d.src}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <figcaption className="p-6">
                    <div className="text-sm font-semibold">{d.title}</div>
                    <p className="vv-muted mt-2 text-sm leading-7">{d.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader title="Technology" subtitle="Tools and systems involved." />
          </div>
          <div className="md:col-span-7">
            <div className="vv-card rounded-3xl p-6">
              <ul className="vv-muted grid list-disc gap-2 pl-5 text-sm leading-7 sm:grid-cols-2">
                {cs.technology.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              title="Outcome / Impact"
              subtitle="The organizational and product-level effect."
            />
          </div>
          <div className="md:col-span-7">
            <div className="vv-card rounded-3xl p-6">
              <ul className="vv-muted grid list-disc gap-2 pl-5 text-sm leading-7">
                {cs.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="vv-card rounded-3xl p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="text-xl font-semibold tracking-tight">
                  Want the same systems thinking applied to your ops?
                </div>
                <p className="vv-muted mt-3 text-sm leading-7">
                  Start with an AI Ops audit to identify high-ROI workflows,
                  governance needs, and a pragmatic 30/60/90-day plan.
                </p>
              </div>
              <div className="md:col-span-5 md:flex md:justify-end">
                <a
                  className="vv-focus-ring inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90 md:w-auto"
                  href="/#audit"
                >
                  Get an AI Ops audit
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}







