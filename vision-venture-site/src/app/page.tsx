import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBanner } from "@/components/ui/trust-banner";

export default function Home() {
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
                    href="/audit"
                  >
                    Get an AI Ops audit
                  </a>
                  <a
                    className="vv-focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-white/5 px-5 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
                    href="/case-studies"
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
                        alt="Sam Meske Headshot"
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

        <TrustBanner />

        <section className="vv-container py-8 md:py-10">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">Resume</h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                Prefer the one-page view? Download my resume for a quick scan of
                background, roles, and impact.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="vv-card rounded-3xl p-6 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold">
                      Download resume (PDF)
                    </div>
                  </div>
                  <a
                    className="vv-focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-white/5 px-4 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
                    href="/resume_sam_meske.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vv-container py-8 md:py-10">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Case studies
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                Deep, structured writeups showing my thinking, governance,
                tradeoffs, and outcomes across healthcare AI and operational
                systems.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="vv-card rounded-3xl p-6 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold">
                      Selected product &amp; innovation work
                    </div>
                  </div>
                  <a
                    className="vv-focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-white/5 px-4 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
                    href="/case-studies"
                  >
                    View case studies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vv-container py-8 md:py-10">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Skills &amp; technical stack
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                A focused view of how I build: agentic system patterns,
                guardrails, MCP integrations, and the tools I ship with.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="vv-card rounded-3xl p-6 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold">
                      Skills, expertise, and stack details
                    </div>
                  </div>
                  <a
                    className="vv-focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-white/5 px-4 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
                    href="/expertise"
                  >
                    View expertise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}






