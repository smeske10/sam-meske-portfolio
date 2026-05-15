export const metadata = {
  title: "Thanks",
  description: "Thanks — your request was received.",
  alternates: { canonical: "/thanks" },
};

export default function ThanksPage() {
  return (
    <main className="vv-container flex flex-1 items-center justify-center py-20">
      <div className="vv-card w-full max-w-xl rounded-3xl p-10 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Request received</h1>
        <p className="vv-muted mt-4 text-sm leading-7">
          Thanks — I’ll review your notes and follow up by email shortly.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            className="vv-focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90"
            href="/"
          >
            Back to home
          </a>
          <a
            className="vv-focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-white/5 px-5 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
            href="/#audit"
          >
            Get an AI Ops audit
          </a>
        </div>
      </div>
    </main>
  );
}

