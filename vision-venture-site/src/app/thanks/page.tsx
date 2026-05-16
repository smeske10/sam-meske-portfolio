import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Thanks",
  description: "Thanks — your request was received.",
  alternates: { canonical: "/thanks" },
};

export default function ThanksPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="vv-container py-14 md:py-20">
          <div className="vv-card w-full max-w-xl rounded-3xl p-10 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Request received
            </h1>
            <p className="vv-muted mt-4 text-sm leading-7">
              Thanks — I&apos;ll review your notes and follow up by email
              shortly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                className="vv-focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black ring-1 ring-[color:var(--line)] shadow-md shadow-black/15 hover:bg-white/90 dark:ring-white/10 dark:shadow-none"
                href="/"
              >
                Back to home
              </a>
              <a
                className="vv-focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-[color:var(--tint-1)] px-5 text-sm font-semibold ring-1 ring-[color:var(--line)] shadow-md shadow-black/15 hover:bg-[color:var(--tint-2)] dark:bg-white/5 dark:ring-white/10 dark:shadow-none dark:hover:bg-white/10"
                href="/#audit"
              >
                Get an AI Ops audit
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
