import { BuiltForOpsProfileCard } from "@/components/home/built-for-ops-profile-card";

export function BuiltForOpsSection() {
  return (
    <section className="vv-container py-10 md:py-12">
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-semibold tracking-tight">
            Built for real-world ops
          </h2>
          <p className="vv-muted mt-3 text-sm leading-7">
            I bring research rigor and operator instincts to AI delivery —
            focused on practical systems that ship and stick.
          </p>
          <p className="vv-muted mt-4 text-sm leading-7">
            Most AI product leaders come from design, engineering, or business.
            My path ran through clinical research, population health analytics,
            and hands-on systems engineering. That shapes everything about how I
            approach AI products.
          </p>
        </div>
        <div className="md:col-span-7">
          <BuiltForOpsProfileCard />
        </div>
      </div>
    </section>
  );
}

